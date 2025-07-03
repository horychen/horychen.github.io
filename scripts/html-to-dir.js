const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../public');
const files = fs.readdirSync(distDir);

files.forEach(file => {
    if (file.endsWith('.html') && file !== 'index.html') {
        const name = file.replace('.html', '');
        const dir = path.join(distDir, name);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        fs.copyFileSync(
            path.join(distDir, file),
            path.join(dir, 'index.html')
        );
    }
}); 