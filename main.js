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
    // showAndLock so the password screen always appears on restore
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
    // Windows: hidden native title bar + native caption buttons (coloured by the theme, see 'set-titlebar-theme').
    // The page draws its own 32px title strip (#titlebar) which doubles as the drag area.
    ...(process.platform === 'darwin'
      ? { titleBarStyle: 'hiddenInset' }
      : process.platform === 'win32'
        ? { titleBarStyle: 'hidden', titleBarOverlay: { color: '#07090e', symbolColor: '#f0f2ff', height: 32 } }
        : {}),
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
  Menu.setApplicationMenu(null);

  // Show the window as soon as ANY of these happens. On some machines
  // (hybrid GPU laptops) 'ready-to-show' can fire very late or never,
  // which left the app running in the tray with no visible window.
  // backgroundColor above prevents a white flash when showing early.
  let shown = false;
  const showOnce = () => {
    if (shown || !mainWindow || mainWindow.isDestroyed()) return;
    shown = true;
    mainWindow.show();
  };
  mainWindow.once('ready-to-show', showOnce);
  mainWindow.webContents.once('did-finish-load', showOnce);
  setTimeout(showOnce, 3000); // last-resort fallback

  // Only plain web links may leave the app (never file:, javascript:, custom protocols...)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  // The window must never navigate away from the app's own page
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (url !== mainWindow.webContents.getURL()) event.preventDefault();
  });

  mainWindow.on('close', (e) => {
    if (!app.isQuiting) {
      e.preventDefault();
      mainWindow.hide();
    }
  });

  mainWindow.on('closed', () => { mainWindow = null; });

  // ── Crash recovery: if the renderer process dies while the window is
  //    hidden, reload it immediately so the next show() finds a live renderer. ──
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

  mainWindow.webContents.on('did-fail-load', (_e, code, desc, url) => {
    console.error('[load fail]', code, desc, url);
  });
}

// ── Show the existing window or recreate it if it was destroyed ──
// When the user clicks X the window hides to the tray (not destroyed).
// While hidden, Electron can kill the renderer process to reclaim memory.
// Check isCrashed() before showing — reload if needed, or rebuild
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
        if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('lock-app');
      });
    } else {
      mainWindow.webContents.send('lock-app');
    }
  }
}

// ── Tray ──
function createTray() {
  const iconPath = path.join(__dirname, 'build', 'icon.ico');
  const icon = fs.existsSync(iconPath)
    ? nativeImage.createFromPath(iconPath)
    : nativeImage.createEmpty();
  try {
    tray = new Tray(icon);
  } catch (e) {
    console.error('[tray] failed to create tray:', e.message);
    return;
  }
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
  if (!gotLock) return; // a second instance must not build a window
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
// crash-safe). Also writes a backup alongside it.
ipcMain.handle('save-data', async (event, encryptedBlob, backupJson) => {
  try {
    const dir = app.getPath('userData');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // Primary encrypted file
    atomicWrite(dataPath(), tmpPath(), encryptedBlob);

    // Backup (used for auto-restore and manual recovery)
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

// Read the backup (auto-restore when primary file is missing)
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

// Fully quit the app (used by the "Log out / Quit" button in Settings).
// Plain window.close() would just hide to tray (see the 'close' handler
// above), so isQuiting must be set first for app.quit() to actually exit,
// including removing the tray icon and ending the background process.
ipcMain.handle('quit-app', () => {
  app.isQuiting = true;
  app.quit();
});

// Recolour the native caption buttons / title strip to match the app theme (Windows only)
ipcMain.handle('set-titlebar-theme', (event, isLight) => {
  if (process.platform !== 'win32' || !mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.setTitleBarOverlay({
    color:       isLight ? '#d3d8e3' : '#07090e',   // = --bg-base in each theme
    symbolColor: isLight ? '#121520' : '#f0f2ff',
    height: 32,
  });
});

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
