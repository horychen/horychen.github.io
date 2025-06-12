import React, { useEffect, useState } from "react";
import { Typography, Dialog } from "@mui/material";

export default function Gallery({ className = "" }: { className?: string }) {
  const [images, setImages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(setImages);
  }, []);

  const handleOpen = (src: string) => {
    setPreview(src);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <section className={"w-full py-10 flex flex-col items-center pt-20 " + className} id="gallery">
      <Typography variant="h2" className="mb-6 font-bold">Gallery</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-8" style={{ maxWidth: 1260 }}>
        {images.map((name, idx) => (
          <div key={idx} className="aspect-square overflow-hidden rounded shadow cursor-pointer" onClick={() => handleOpen(`/media/albums/gallery/${name}`)}>
            <img src={`/media/albums/gallery/${name}`} alt={`gallery-${idx}`} className="object-cover w-full h-full transition-transform duration-200 hover:scale-105" />
          </div>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        {preview && (
          <img src={preview} alt="preview" className="max-w-[90vw] max-h-[90vh] object-contain bg-black" />
        )}
      </Dialog>
    </section>
  );
} 