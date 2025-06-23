import React, { useEffect, useState, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const FIRST_IMAGE = "/media/slice-motor-24slots-prototype.jpg";
const INTERVAL = 6000; // 6秒
const FADE_DURATION = 800; // ms

export default function SectionBannerScroll() {
  const [images, setImages] = useState<string[]>([]);
  const [imgSrc, setImgSrc] = useState<string>(FIRST_IMAGE);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch("/gallery.json")
      .then(res => res.json())
      .then(setImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    timerRef.current = setInterval(() => {
      setFade(false); // 先淡出
      fadeTimeoutRef.current = setTimeout(() => {
        // 切换图片
        let next = imgSrc;
        while (images.length > 1 && next === imgSrc) {
          next = `/media/albums/gallery/${images[Math.floor(Math.random() * images.length)]}`;
        }
        setImgSrc(next);
        setFade(true); // 再淡入
      }, FADE_DURATION);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [images, imgSrc]);

  return (
    <ParallaxProvider>
      <section className="relative w-full z-20 overflow-hidden flex items-center justify-center h-[calc(100vh-64px)]">
        {/* 单层背景图片，淡入淡出 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none z-0 ${fade ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${imgSrc}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        />
        {/* 标题+遮罩 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            {/* 遮罩紧贴标题后方，无背景，仅亚克力模糊和阴影 */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-lg backdrop-blur-md shadow z-0" style={{padding: '0 2rem'}} />
            <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center select-none tracking-wide px-8 py-4">
              motor and motion-control lab
            </h1>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
} 