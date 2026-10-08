// Hollowbrook desktop shell (Windows). Loads the bundled village from inside the app
// over a private app:// scheme and refuses every network request except Ollama on this same PC
// (http://127.0.0.1:11434), so it never reaches the internet.
const { app, BrowserWindow, protocol, net, session, shell, ipcMain, Menu } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

const WEB = path.join(__dirname, 'web');
const WEB_URL = pathToFileURL(WEB).toString() + '/';
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true } }]);

if (!app.requestSingleInstanceLock()) { app.quit(); }
let win = null;
app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });

function createWindow() {
  win = new BrowserWindow({
    width: 1440, height: 900, minWidth: 1024, minHeight: 640,
    frame: false, backgroundColor: '#F4EEE2', show: false, title: 'Hollowbrook',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true, spellcheck: false, devTools: !app.isPackaged }
  });
  win.once('ready-to-show', () => win.show());
  win.on('maximize', () => win.webContents.send('win-state', true));
  win.on('unmaximize', () => win.webContents.send('win-state', false));
  // never navigate away or open other windows
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('app://')) e.preventDefault(); });
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.loadURL('app://hollowbrook/index.html');
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  // serve files from inside the app package only
  protocol.handle('app', (req) => {
    const u = new URL(req.url);
    const rel = decodeURIComponent(u.pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.normalize(path.join(WEB, rel));
    if (!file.startsWith(WEB)) return new Response('Not found', { status: 404 });
    return net.fetch(pathToFileURL(file).toString());
  });
  // offline lock: anything that isn't app:// (or an inline data/blob URL) is cancelled
  session.defaultSession.webRequest.onBeforeRequest((d, cb) => {
    // the only non-app address allowed is Ollama on this same PC (loopback), for villager conversations
    const ok = /^(app|data|blob|devtools):/.test(d.url) || d.url.startsWith(WEB_URL) || /^http:\/\/(127\.0\.0\.1|localhost):11434\//.test(d.url);
    cb({ cancel: !ok });
  });
  session.defaultSession.setPermissionRequestHandler((wc, perm, cb) => cb(false));
  ipcMain.on('win', (e, a) => {
    if (!win) return;
    if (a === 'min') win.minimize();
    else if (a === 'max') win.isMaximized() ? win.unmaximize() : win.maximize();
    else if (a === 'close') win.close();
  });
  createWindow();
});
app.on('window-all-closed', () => app.quit());
