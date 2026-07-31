import images from "../../public/gallery.json";
import GallerySection from "./GallerySection";

export default function Gallery() {
  return (
    <GallerySection
      title="Gallery (Research)"
      images={images}
      imagePath="/media/albums/gallery"
      thumbnailPath="/media/albums/gallery-thumbnails"
      id="gallery"
    />
  );
}
