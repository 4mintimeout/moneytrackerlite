const { app, BrowserWindow, Menu, Tray, nativeImage, shell, ipcMain } = require('electron');
const path = require('path');
const fs   = require('fs');

let mainWindow;
let tray;

// ── Keep single instance ──
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    // FIX: use showAndLock so the password screen always appears on restore
    showAndLock();
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 820,
    minWidth: 900,
    minHeight: 600,
    title: 'MoneyTracker Lite',
    icon: path.join(__dirname, 'build', process.platform === 'win32' ? 'icon.ico' : process.platform === 'darwin' ? 'icon.icns' : 'icon.png'),
    backgroundColor: '#07090e',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    autoHideMenuBar: true,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  // Only show once the page is fully rendered — eliminates the white flash
  mainWindow.once('ready-to-show', () => mainWindow.show());
  Menu.setApplicationMenu(null);

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('close', (e) => {
    if (!app.isQuiting) {
      e.preventDefault();
      mainWindow.hide();
    }
  });

  mainWindow.on('closed', () => { mainWindow = null; });

  // ── Crash recovery: if the renderer process dies while the window is
  //    hidden (the root cause of the "white bar then vanish" bug), reload
  //    it immediately so the next show() finds a live renderer. ──
  mainWindow.webContents.on('render-process-gone', (_event, details) => {
    console.error('[renderer] process gone — reason:', details.reason);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.reload();
    }
  });

  mainWindow.webContents.on('unresponsive', () => {
    console.warn('[renderer] unresponsive — reloading');
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.reload();
    }
  });
}

// ── Show the existing window or recreate it if it was destroyed ──
// ROOT FIX for the "white bar then vanish" bug:
//
// When the user clicks X the window hides to the tray (not destroyed).
// While hidden, Electron can kill the renderer process to reclaim memory.
// mainWindow still exists as a JS object but its webContents are dead.
// Calling mainWindow.show() on that produces the 1-second white flash,
// then the window vanishes. The user had to reboot to reset this state.
//
// Fix: check isCrashed() before showing — reload if needed, or rebuild
// the whole window if the object itself is gone.
function showOrRecreate() {
  if (!mainWindow || mainWindow.isDestroyed()) {
    createWindow();
    return;
  }
  if (mainWindow.webContents.isCrashed()) {
    mainWindow.reload();
  }
  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.show();
  mainWindow.focus();
}

// ── Show window and send lock signal to renderer ──
function showAndLock() {
  showOrRecreate();
  if (mainWindow && !mainWindow.isDestroyed()) {
    // If the page is still loading (e.g. after a crash/reload), wait for it
    if (mainWindow.webContents.isLoading()) {
      mainWindow.webContents.once('did-finish-load', () => {
        mainWindow.webContents.send('lock-app');
      });
    } else {
      mainWindow.webContents.send('lock-app');
    }
  }
}

// ── Tray ──
function createTray() {
  const icon = nativeImage.createFromPath(path.join(__dirname, 'build', 'icon.ico'));
  tray = new Tray(icon);
  tray.setToolTip('MoneyTracker Lite');

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Ouvrir MoneyTracker',
      click: () => showAndLock(),
    },
    { type: 'separator' },
    { label: 'Quitter', click: () => { app.isQuiting = true; app.quit(); } }
  ]);

  tray.setContextMenu(contextMenu);
  tray.on('double-click', () => showAndLock());
}

// ── App lifecycle ──
app.whenReady().then(() => {
  createWindow();
  createTray();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (app.isQuiting && process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => { app.isQuiting = true; });

// ── Path helpers ──
function dataPath()   { return path.join(app.getPath('userData'), 'data.mtenc'); }
function tmpPath()    { return dataPath() + '.tmp'; }
function backupPath() { return path.join(app.getPath('userData'), 'auto-backup.mtbackup'); }
function backupTmp()  { return backupPath() + '.tmp'; }

// Write to a temp file then atomically rename over the real file.
// If the process crashes mid-write, the .tmp is incomplete but the
// previous good file is still fully intact.
function atomicWrite(filePath, tmpFilePath, content) {
  fs.writeFileSync(tmpFilePath, content, 'utf8');
  fs.renameSync(tmpFilePath, filePath);
}

// ── IPC handlers ──

// App version
ipcMain.handle('get-version', () => app.getVersion());

// Save: writes the encrypted blob as the primary data file (no 5MB limit,
// crash-safe). Also writes a plaintext JSON backup alongside it.
ipcMain.handle('save-data', async (event, encryptedBlob, backupJson) => {
  try {
    const dir = app.getPath('userData');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // Primary encrypted file
    atomicWrite(dataPath(), tmpPath(), encryptedBlob);

    // Plaintext backup (used for auto-restore and manual recovery)
    if (backupJson) atomicWrite(backupPath(), backupTmp(), backupJson);

    return { ok: true };
  } catch (e) {
    console.error('[save-data] failed:', e.message);
    return { ok: false, error: e.message };
  }
});

// Load: reads the encrypted blob from the primary data file
ipcMain.handle('load-data', async () => {
  try {
    const file = dataPath();
    if (!fs.existsSync(file)) return { ok: false, reason: 'no-file' };
    const data = fs.readFileSync(file, 'utf8');
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e.message };
  }
});

// Read the plaintext backup (auto-restore when primary file is missing)
ipcMain.handle('read-backup', async () => {
  try {
    const file = backupPath();
    if (!fs.existsSync(file)) return { ok: false, reason: 'no-backup' };
    const data = fs.readFileSync(file, 'utf8');
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e.message };
  }
});

// Return file paths so Settings can show the user where data lives
ipcMain.handle('get-paths', () => ({
  data:   dataPath(),
  backup: backupPath(),
}));

// Hard relaunch — fully restarts the Electron process so no stale JS
// state survives (used after New Account reset)
ipcMain.handle('relaunch', () => {
  app.relaunch();
  app.exit(0);
});

// Delete disk data files (called during New Account reset and setup conflict resolution)
ipcMain.handle('delete-data', async () => {
  try {
    if (fs.existsSync(dataPath()))   fs.unlinkSync(dataPath());
    if (fs.existsSync(backupPath())) fs.unlinkSync(backupPath());
    if (fs.existsSync(tmpPath()))    fs.unlinkSync(tmpPath());
    if (fs.existsSync(backupTmp()))  fs.unlinkSync(backupTmp());
    return { ok: true };
  } catch(e) {
    return { ok: false, error: e.message };
  }
});
