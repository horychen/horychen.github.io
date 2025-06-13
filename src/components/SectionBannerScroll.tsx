import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function SectionBannerScroll() {
  return (
    <ParallaxProvider>
      <section className={"relative w-full z-20 overflow-hidden"} style={{ height: '200px' }}>
        <Parallax speed={-100}>
          <img
            src="/media/slice-motor-24slots-prototype.jpg"
            alt="banner bottom"
            className="w-full object-cover"
            style={{ minHeight: "200px", height: "auto" }}
          />
        </Parallax>
      </section>
    </ParallaxProvider>
  );
} 