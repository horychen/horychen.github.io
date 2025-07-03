import fs from 'fs';
import path from 'path';

const galleryFunDir = path.join(process.cwd(), 'public/media/albums/galleryfun');
const outputFile = path.join(process.cwd(), 'public/generatefun.json');

const files = fs.readdirSync(galleryFunDir).filter(file =>
  /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file)
);

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2), 'utf-8');

console.log(`Generated generatefun.json with ${files.length} images.`); 