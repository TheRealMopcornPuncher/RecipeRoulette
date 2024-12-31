const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Enable nodeIntegration
      contextIsolation: false // Disable contextIsolation
    },
    icon: path.join(__dirname, 'build', 'rr.ico')
  });

  mainWindow.loadFile(path.join(__dirname, 'routes', 'index.html'));
  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});