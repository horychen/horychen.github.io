const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');
const dirs = fs.readdirSync(outDir, { withFileTypes: true });

dirs.forEach(dirent => {
  if (dirent.isDirectory()) {
    const indexPath = path.join(outDir, dirent.name, 'index.html');
    const htmlPath = path.join(outDir, `${dirent.name}.html`);
    if (fs.existsSync(indexPath) && !fs.existsSync(htmlPath)) {
      fs.copyFileSync(indexPath, htmlPath);
    }
  }
}); 