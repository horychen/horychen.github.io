import React from "react";
import { Button } from "@mui/material";
import { withBasePath } from '../lib/utils';

export default function Banner() {
  return (
    <section className={"relative flex flex-col items-center justify-center min-h-[650px] md:min-h-[700px] lg:min-h-[750px] xl:min-h-[800px] overflow-hidden"}>
      {/* 顶部渐变和内容 */}
      <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(90deg, #504ba0 0%, #1996d2 100%)' }} />
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full max-w-7xl mx-auto px-6 pt-20 pb-10 items-center justify-between">
        {/* 左侧内容 */}
        <div className="flex-1 flex flex-col justify-center items-start text-white max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-3xl">
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">motor and motion-<br />control lab</h1> */}
          <p className="text-2xl font-bold mb-4">At m&m lab, we are interested in electric machines, maglev drives and robotics.</p>
          <p className="mb-4 text-xl leading-relaxed">
            Lab members are encouraged to design and build things with the principal investigator (PI), covering electronic design, electromagnetic design, mechanical design, and observer/controller design.
          </p>
          <p className="mb-8 text-xl leading-relaxed">
            Our vision is that if we can build it, then others should be able to build it (check out <a href="https://github.com/horychen" className="underline text-white font-bold" target="_blank" rel="noopener">Github</a>).
          </p>
          <button 
            className="bg-white text-blue-900 font-bold shadow-md rounded-md px-8 py-2 normal-case text-2xl 
              hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg
              active:scale-95" 
            onClick={() => {
              window.location.href = withBasePath("/courses");
            }}
          >
            See Courses
          </button>
        </div>
        {/* 右侧图片 */}
        <div className="flex-1 flex justify-center items-center w-full h-full max-h-[340px] md:max-h-[400px] lg:max-h-[440px] xl:max-h-[480px]">
          <img src={withBasePath('/media/hero-academic.png')} alt="hero academic" className="object-contain w-full h-full max-w-[400px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px]" />
        </div>
      </div>
    </section>
  );
} 