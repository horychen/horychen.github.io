import images from "../../public/generatefun.json";
import GallerySection from "./GallerySection";

export default function GalleryFun() {
  return (
    <GallerySection
      title="Gallery (Fun)"
      images={images}
      imagePath="/media/albums/galleryfun"
      thumbnailPath="/media/albums/galleryfun-thumbnails"
    />
  );
}
