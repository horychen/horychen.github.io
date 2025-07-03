const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      const indexPath = path.join(fullPath, 'index.html');
      const rel = path.relative(outDir, fullPath);
      if (rel) {
        const htmlPath = path.join(outDir, `${rel}.html`);
        if (fs.existsSync(indexPath) && !fs.existsSync(htmlPath)) {
          fs.copyFileSync(indexPath, htmlPath);
        }
      }
      walk(fullPath); // 递归子目录
    }
  });
}

walk(outDir); 