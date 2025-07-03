import React, { useEffect, useState } from "react";
import { Typography, Dialog } from "@mui/material";
import { withBasePath } from '../lib/utils';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(withBasePath("/gallery.json"))
      .then(res => res.json())
      .then(setImages);
  }, []);

  const handleOpen = (src: string, idx: number) => {
    setPreview(src);
    setOpen(true);
    setCurrentIndex(idx);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(null);
  };
  const handlePrev = () => {
    if (currentIndex !== null && images.length > 0) {
      const prevIdx = (currentIndex - 1 + images.length) % images.length;
      setCurrentIndex(prevIdx);
      setPreview(withBasePath(`/media/albums/gallery/${images[prevIdx]}`));
    }
  };
  const handleNext = () => {
    if (currentIndex !== null && images.length > 0) {
      const nextIdx = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIdx);
      setPreview(withBasePath(`/media/albums/gallery/${images[nextIdx]}`));
    }
  };

  return (
    <section className={"w-full py-10 flex flex-col items-center pt-20"} id="gallery">
      <Typography variant="h2" className="mb-6 font-bold">Gallery (Research)</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-8" style={{ maxWidth: 1260 }}>
        {images.map((name, idx) => (
          <div key={idx} className="aspect-square overflow-hidden rounded shadow cursor-pointer" onClick={() => handleOpen(withBasePath(`/media/albums/gallery/${name}`), idx)}>
            <img src={withBasePath(`/media/albums/gallery/${name}`)} alt={`gallery-${idx}`} className="object-cover w-full h-full transition-transform duration-200 hover:scale-105" />
          </div>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <div className="relative flex items-center justify-center bg-black min-w-[60vw] min-h-[60vh]">
          {preview && (
            <>
              <button
                onClick={handlePrev}
                className="fixed left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur bg-white/30 hover:bg-white/50 border border-white/40 shadow-lg transition"
                aria-label="Previous"
                style={{outline: 'none', border: 'none'}}
              >
                <span className="text-3xl text-black/70 select-none">◀</span>
              </button>
              <img src={preview} alt="preview" className="max-w-[90vw] max-h-[90vh] object-contain bg-black" />
              <button
                onClick={handleNext}
                className="fixed right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur bg-white/30 hover:bg-white/50 border border-white/40 shadow-lg transition"
                aria-label="Next"
                style={{outline: 'none', border: 'none'}}
              >
                <span className="text-3xl text-black/70 select-none">▶</span>
              </button>
            </>
          )}
        </div>
      </Dialog>
    </section>
  );
} 