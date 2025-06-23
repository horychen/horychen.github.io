"use client";
import Banner from "../components/Banner";
import SectionBannerScroll from "../components/SectionBannerScroll";
import PIProfile from "../components/PIProfile";
import Courses from "../components/Courses";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SectionBannerScroll />
      <Banner />
      <PIProfile />
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-8"></div>
      <Courses />
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-8"></div>
      <Gallery />
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-8"></div>
      <Contact />
    </div>
  );
}
