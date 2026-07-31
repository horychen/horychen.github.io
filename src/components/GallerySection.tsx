"use client";

import { Dialog, Typography } from "@mui/material";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { withBasePath } from "../lib/utils";

const BATCH_SIZE = 9;

const toWebpName = (filename: string) =>
  `${filename.slice(0, filename.lastIndexOf("."))}.webp`;

interface GallerySectionProps {
  title: string;
  images: string[];
  imagePath: string;
  thumbnailPath: string;
  id?: string;
}

export default function GallerySection({
  title,
  images,
  imagePath,
  thumbnailPath,
  id,
}: GallerySectionProps) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openPreview = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closePreview = () => {
    setOpen(false);
    setCurrentIndex(null);
  };

  const movePreview = (offset: number) => {
    setCurrentIndex((index) => {
      if (index === null || images.length === 0) return index;
      return (index + offset + images.length) % images.length;
    });
  };

  const previewName =
    currentIndex === null ? null : images[currentIndex] ?? null;

  return (
    <section className="flex w-full flex-col items-center py-10 pt-20" id={id}>
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3.75rem" },
          fontWeight: 700,
          marginBottom: 3,
        }}
      >
        {title}
      </Typography>

      <div className="grid w-full max-w-[1260px] grid-cols-1 gap-4 p-4 sm:p-8 md:grid-cols-2 lg:grid-cols-3">
        {images.slice(0, visibleCount).map((name, index) => (
          <button
            type="button"
            key={name}
            className="aspect-square overflow-hidden rounded shadow"
            onClick={() => openPreview(index)}
            aria-label={`Open ${title} image ${index + 1}`}
          >
            <img
              src={withBasePath(
                `${thumbnailPath}/${toWebpName(name)}`,
              )}
              alt=""
              width={960}
              height={960}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {visibleCount < images.length && (
        <button
          type="button"
          className="flex min-h-11 items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-2 font-medium text-gray-900 shadow-sm transition hover:bg-gray-100"
          onClick={() => setVisibleCount((count) => count + BATCH_SIZE)}
        >
          Show more
          <ChevronDown size={18} aria-hidden="true" />
        </button>
      )}

      <Dialog open={open} onClose={closePreview} maxWidth="xl">
        <div className="relative flex min-h-[60vh] min-w-[min(90vw,900px)] items-center justify-center bg-black">
          {previewName && (
            <>
              <button
                type="button"
                onClick={closePreview}
                className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-black shadow transition hover:bg-white"
                aria-label="Close preview"
              >
                <X size={24} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => movePreview(-1)}
                className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow transition hover:bg-white md:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} aria-hidden="true" />
              </button>
              <img
                src={withBasePath(`${imagePath}/${previewName}`)}
                alt={`${title} preview ${currentIndex! + 1}`}
                decoding="async"
                className="max-h-[90vh] max-w-[90vw] bg-black object-contain"
              />
              <button
                type="button"
                onClick={() => movePreview(1)}
                className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow transition hover:bg-white md:right-8"
                aria-label="Next image"
              >
                <ChevronRight size={32} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </Dialog>
    </section>
  );
}
