import React from "react";
import Link from "next/link";

const COURSES = [
  {
    code: "Drake",
    title: "Drake Demonstration",
    type: "Graduate",
    time: "Oct 25, 2023",
    date: "Oct 25, 2023",
    desc: "This document summarize the steps to run pydrake on a windows machine with similar experience on an Ubuntu machine.",
    img: "",
    href: "/docs/courses/DrakeDemo"
  },
  {
    code: "EE160",
    title: "💨Introduction to control (EE160)",
    type: "Undergraduate (SIST Curriculum)",
    time: "Oct 10, 2023",
    date: "Oct 10, 2023",
    desc: "The course lecture notes are now available.",
    img: "/courses/ee160/ee160.png",
    href: "/docs/courses/EE160"
  },
  {
    code: "EE160P",
    title: "🚸Introduction to control project (EE160P)",
    type: "Undergraduate Project",
    time: "Aug 27, 2023",
    date: "Aug 27, 2023",
    desc: "The course",
    img: "/courses/ee160p/ee160p.jpg",
    href: "/docs/courses/EE160P"
  },
  {
    code: "EE275",
    title: "🛴 Electric motor and motion control (EE275)",
    type: "Graduate/undergraduate (SIST Curriculum)",
    time: "Feb 28, 2023",
    date: "Feb 28, 2023",
    img: "/courses/ee275/ee275.jpg",
    desc: "The course is arranged in a manner of “from theory to engineering”. This is one essential core course to cover the four major courses, including electric machinery (steady state behaviors, winding design), ac machine transient analysis (mathematical modeling, numerical simulation), machine design (winding function, multi-phase machine theory, maxwell stress tensor), and motor control with an emphasis on engineering practices (controller tuning, inverter modeling). Lecture notes will be distributed online when ready.",
    href: "/docs/courses/EE275"
  }
];

export default function Courses({ singlePage = false }: { singlePage?: boolean }) {
  if (singlePage) {
    // 单页模式：简约发光悬浮效果
    return (
      <section className={"w-full py-10 flex flex-col items-center pt-20"} id="courses">
        <div className="w-full max-w-4xl flex flex-col gap-8 items-start">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Courses Taught by PI</h2>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">I am teaching graduate course EE275 in spring and undergraduate course EE160 in fall.</p>
          {COURSES.map((course) => (
            <div className="w-full group" key={course.code}>
              <Link href={course.href} className="no-underline w-full">
                <div className="rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] group-hover:border-blue-300/50 dark:group-hover:border-blue-400/50">
                  {/* 日期 */}
                  <div className="pt-4 px-6 pb-2 text-xs text-gray-500 dark:text-gray-400">{course.date}</div>
                  {/* 图片（可选） */}
                  {course.img && (
                    <div className="overflow-hidden px-4">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-84 object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  {/* 主体内容 */}
                  <div className="px-6 py-4">
                    <h3 className="text-2xl font-bold mb-2 flex items-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }
  // 非单页模式：简约发光悬浮效果
  return (
    <section className={"w-full py-10 flex flex-col items-center"} id="courses">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/3 flex-shrink-0 flex items-start justify-center lg:justify-start mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold dark:text-white">Courses</h2>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-1 gap-8 p-8">
          {COURSES.map((course) => (
            <div key={course.code} className="group">
              <Link href={course.href} className="no-underline">
                <div className="rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] group-hover:border-blue-300/50 dark:group-hover:border-blue-400/50 p-8 w-full cursor-pointer h-full flex flex-col justify-between">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 dark:text-white">{course.code} {course.title}</h3>
                  <p className="text-base mb-2 text-gray-600 dark:text-gray-300">{course.type} · {course.time}</p>
                  <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">{course.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 