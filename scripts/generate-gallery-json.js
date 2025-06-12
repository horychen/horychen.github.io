import fs from 'fs';
import path from 'path';

const galleryDir = path.join(process.cwd(), 'public/media/albums/gallery');
const outputFile = path.join(process.cwd(), 'public/gallery.json');

const files = fs.readdirSync(galleryDir).filter(file =>
  /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file)
);

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2), 'utf-8');

console.log(`Generated gallery.json with ${files.length} images.`); 