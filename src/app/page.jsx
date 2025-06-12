"use client";
import Banner from "../components/Banner";
import SectionBannerScroll from "../components/SectionBannerScroll";
import PIProfile from "../components/PIProfile";
import Courses from "../components/Courses";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import React, { useState } from "react";

export default function Home() {

  return (
      <div>
        <Banner />
        <SectionBannerScroll />
        <PIProfile className="bg-white" />
        <Courses className="bg-gray-50" />
        <Gallery className="bg-white" />
        <Contact className="bg-gray-50" />
      </div>
  );
}
