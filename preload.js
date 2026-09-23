const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // App version
  getVersion:  () => ipcRenderer.invoke('get-version'),

  // Save encrypted blob to disk (primary storage, no size limit)
  // Also writes a plaintext backup file alongside it automatically.
  // Call this from save() instead of — or in addition to — localStorage.
  saveData: (encryptedBlob, backupJson) =>
    ipcRenderer.invoke('save-data', encryptedBlob, backupJson),

  // Load the encrypted blob from disk on startup
  loadData: () => ipcRenderer.invoke('load-data'),

  // Read the plaintext backup (used for silent auto-restore on launch)
  readBackup: () => ipcRenderer.invoke('read-backup'),

  // Get file paths (so Settings can show the user where their data lives)
  getPaths: () => ipcRenderer.invoke('get-paths'),
  
  // Listen for lock signal from main process (sent when window is restored from tray)
  onLockApp: (callback) => ipcRenderer.on('lock-app', () => callback()),

  // Hard relaunch the app (used after New Account reset so JS state is fully wiped)
  relaunch: () => ipcRenderer.invoke('relaunch'),

  // Delete disk data files (used during reset and setup conflict resolution)
  deleteData: () => ipcRenderer.invoke('delete-data'),
});
