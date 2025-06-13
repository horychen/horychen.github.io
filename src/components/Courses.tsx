import React from "react";
import { Paper, Typography } from "@mui/material";
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
    // 单页模式：新卡片样式微调
    return (
      <section className={"w-full py-10 flex flex-col items-center pt-20"} id="courses">
        <div className="w-full max-w-4xl flex flex-col gap-8 items-start">
          <Typography variant="h2" className="font-bold mb-2">Courses Taught by PI</Typography>
          <Typography variant="subtitle1" className="mb-6">I am teaching graduate course EE275 in spring and undergraduate course EE160 in fall.</Typography>
          {COURSES.map((course) => (
            <div className="w-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]" key={course.code}>
              <Link href={course.href} className="no-underline w-full">
                <Paper
                  elevation={2}
                >
                  {/* 日期 */}
                  <div className="pt-4 px-6 pb-2 text-xs text-gray-400">{course.date}</div>
                  {/* 图片（可选） */}
                  {course.img && (
                    <div className="overflow-hidden p-4">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-84 object-cover object-center rounded-t-md transition-transform duration-300 hover:scale-110"
                        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                      />
                    </div>
                  )}
                  {/* 主体内容 */}
                  <div className="px-6 py-4">
                    <Typography
                      variant="h5"
                      sx={{ fontSize: "2rem", fontWeight: "bold" }}
                      className="font-bold mb-2 flex items-center leading-tight"
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body2" className="mb-1 text-gray-700 p-2">
                      {course.desc}
                    </Typography>
                  </div>
                </Paper>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }
  // 非单页模式：保持原有左右分布、无图片、无日期
  return (
    <section className={"w-full py-10 flex flex-col items-center"} id="courses">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/3 flex-shrink-0 flex items-start justify-center lg:justify-start mb-6 lg:mb-0">
          <Typography variant="h2" className="font-bold">Courses</Typography>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-1 gap-8 p-8">
          {COURSES.map((course) => (
            <div key={course.code} className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]">
              <Link href={course.href} className="no-underline">
                <Paper elevation={3} className="p-8 w-full cursor-pointer h-full flex flex-col justify-between">
                  <Typography variant="h5" className="font-bold mb-1 text-gray-700">{course.code} {course.title}</Typography>
                  <Typography variant="subtitle1" className="mb-2 text-gray-500">{course.type} · {course.time}</Typography>
                  <Typography variant="body1" className="text-black">{course.desc}</Typography>
                </Paper>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 