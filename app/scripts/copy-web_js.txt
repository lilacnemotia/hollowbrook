// Copies the village (../mockup) into ./web so it gets packed inside the app.
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', '..', 'mockup'), dst = path.join(__dirname, '..', 'web');
fs.rmSync(dst, { recursive: true, force: true });
fs.cpSync(src, dst, { recursive: true });
console.log('copied', src, '->', dst);
