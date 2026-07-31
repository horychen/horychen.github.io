"use client";

import { useEffect, useState } from "react";
import headImageNames from "../../public/head.json";
import { withBasePath } from "../lib/utils";

const INTERVAL = 6000;
const FADE_DURATION = 800;

const toWebpName = (filename: string) =>
  `${filename.slice(0, filename.lastIndexOf("."))}.webp`;

const images = headImageNames.map((name) =>
  withBasePath(`/media/albums/head-optimized/${toWebpName(name)}`),
);

export default function SectionBannerScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 767px), (prefers-reduced-motion: reduce)",
    );
    const updateAnimation = () => setShouldAnimate(!mediaQuery.matches);

    updateAnimation();
    mediaQuery.addEventListener("change", updateAnimation);
    return () => mediaQuery.removeEventListener("change", updateAnimation);
  }, []);

  useEffect(() => {
    if (!shouldAnimate || images.length < 2) return;

    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;
    const timer = setInterval(() => {
      setFade(false);
      fadeTimeout = setTimeout(() => {
        setCurrentIndex((index) => (index + 1) % images.length);
        setFade(true);
      }, FADE_DURATION);
    }, INTERVAL);

    return () => {
      clearInterval(timer);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, [images.length, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate || images.length < 2) return;
    const nextImage = new Image();
    nextImage.src = images[(currentIndex + 1) % images.length];
  }, [currentIndex, images, shouldAnimate]);

  const image = images[currentIndex] ?? "";

  return (
    <section className="relative flex h-[calc(100svh-64px)] min-h-[520px] w-full items-center justify-center overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-0 z-0 h-full w-full bg-scroll bg-cover bg-center transition-opacity duration-700 motion-reduce:transition-none md:bg-fixed ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundColor: "#111827",
          backgroundImage: image ? `url('${image}')` : undefined,
        }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
        <div className="relative flex items-center justify-center">
          <span className="absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/25 shadow md:backdrop-blur-md" />
          <h1 className="relative z-10 select-none px-6 py-4 text-center text-4xl font-extrabold tracking-normal text-white drop-shadow-lg md:px-8 md:text-6xl">
            motor and motion-control lab
          </h1>
        </div>
      </div>
    </section>
  );
}
