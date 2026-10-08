// Wires the village's own title bar (drawn in the page) to the real window controls.
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('hbDesktop', { version: '0.7.0' });
window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('desktop-app');
  const st = document.createElement('style');
  st.textContent = '.titlebar{-webkit-app-region:drag}.titlebar .winctl,.titlebar button{-webkit-app-region:no-drag}' +
    '.titlebar .winctl{pointer-events:auto}.titlebar .winctl span{cursor:default}.titlebar .winctl span:hover{background:rgba(63,53,48,.08)}' +
    '.titlebar .winctl span:last-child:hover{background:#E81123;color:#fff}.titlebar .winctl span:last-child:hover svg{stroke:#fff}';
  document.head.appendChild(st);
  const ctl = document.querySelector('.titlebar .winctl');
  if (ctl) {
    ctl.removeAttribute('aria-hidden');
    const acts = ['min', 'max', 'close'], labels = ['Minimize', 'Maximize', 'Close'];
    [...ctl.children].forEach((s, i) => {
      s.setAttribute('role', 'button'); s.setAttribute('aria-label', labels[i]); s.title = labels[i];
      s.addEventListener('click', () => ipcRenderer.send('win', acts[i]));
    });
    const tb = document.querySelector('.titlebar');
    if (tb) tb.addEventListener('dblclick', (e) => { if (!e.target.closest('.winctl')) ipcRenderer.send('win', 'max'); });
  }
  const sub = document.querySelector('.titlebar .tb-sub');
  if (sub) sub.textContent = '· v0.7 mockup · sample data';
});
