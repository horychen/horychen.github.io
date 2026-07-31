import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const imagePattern = /\.(avif|gif|jpe?g|png|tiff?|webp)$/i;

const toWebpName = (filename) =>
  `${path.basename(filename, path.extname(filename))}.webp`;

const isCurrent = (source, destination) => {
  if (!fs.existsSync(destination)) return false;
  return fs.statSync(destination).mtimeMs >= fs.statSync(source).mtimeMs;
};

async function optimizeImage(source, destination, options) {
  if (isCurrent(source, destination)) return false;

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  await sharp(source)
    .rotate()
    .resize(options.resize)
    .webp({ quality: options.quality, effort: 4 })
    .toFile(destination);
  return true;
}

async function optimizeDirectory({
  sourceDirectory,
  outputDirectory,
  filenames,
  resize,
  quality,
}) {
  const names =
    filenames ??
    fs.readdirSync(sourceDirectory).filter((name) => imagePattern.test(name));
  let generated = 0;

  for (const name of names) {
    const source = path.join(sourceDirectory, name);
    if (!fs.existsSync(source) || !imagePattern.test(name)) continue;

    const destination = path.join(outputDirectory, toWebpName(name));
    if (
      await optimizeImage(source, destination, {
        resize,
        quality,
      })
    ) {
      generated += 1;
    }
  }

  console.log(
    `${path.basename(outputDirectory)}: ${generated} generated, ${names.length - generated} current.`,
  );
}

const galleryDirectory = path.join(root, "public/media/albums/gallery");
const galleryFunDirectory = path.join(root, "public/media/albums/galleryfun");
const headImages = JSON.parse(
  fs.readFileSync(path.join(root, "public/head.json"), "utf8"),
);

await optimizeDirectory({
  sourceDirectory: galleryDirectory,
  outputDirectory: path.join(
    root,
    "public/media/albums/gallery-thumbnails",
  ),
  resize: { width: 960, height: 960, fit: "cover" },
  quality: 74,
});

await optimizeDirectory({
  sourceDirectory: galleryFunDirectory,
  outputDirectory: path.join(
    root,
    "public/media/albums/galleryfun-thumbnails",
  ),
  resize: { width: 960, height: 960, fit: "cover" },
  quality: 74,
});

await optimizeDirectory({
  sourceDirectory: galleryDirectory,
  outputDirectory: path.join(root, "public/media/albums/head-optimized"),
  filenames: headImages,
  resize: { width: 1600, withoutEnlargement: true },
  quality: 76,
});
