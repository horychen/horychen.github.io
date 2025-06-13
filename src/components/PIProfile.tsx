import React from "react";
import ReactMarkdown from "react-markdown";
import { Avatar, Link, Typography, Box } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const PI_BIO = `
Since December 2022, Dr. Chen has been a tenure-track Assistant Professor with School of Information Science and Technology (SIST). He is the director of m&m lab and teaches undergraduate course **"Introduction to Control"** and graduate course **"Electric Motor and Motion Control"**. Before joining ShanghaiTech University, he has worked at University of Wisconsin-Madison, WI, USA during 2018–2019 and Nanyang Technological University, Singapore during 2020–2022. Dr. Chen has been sharing his codes for sensorless motor control simulation and bearingless motor optimization since 2019.
`;

const INTERESTS = [
    "Bipedal robot",
    "Maglev and bearingless motor",
    "Direct drive technology",
    "Nonlinear control system",
    "Lightweight robot arm",
];
const EDUCATION = [
    { degree: "Ph.D. in Electrical Engineering, 2019", school: "Zhejiang University, China" },
    { degree: "B.Sc. in Electrical Engineering, 2014", school: "Zhejiang University, China" },
];

export default function PIProfile() {
    return (
        <section className={"w-full py-30 flex flex-col items-center"} id="pi">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 items-center lg:items-start">
                {/* 左侧：头像+基本信息+社交 */}
                <div className="flex flex-col items-center w-full lg:w-1/3">
                    <Avatar src="/alumni/chenjh.jpg" alt="PI" sx={{ width: 270, height: 270 }} />
                    <div className="text-4xl font-normal mt-6">Chen, Jiahao 陈 嘉豪</div>
                    <div className="text-2xl font-normal mt-4 text-gray-500">Assistant Professor</div>
                    <div className="mt-4 text-xl font-medium">
                        <Link href="https://sist.shanghaitech.edu.cn/" target="_blank" rel="noopener" underline="hover" color="primary">ShanghaiTech University</Link>
                    </div>
                    <Box className="flex gap-4 mt-4">
                        {/* google scholar */}
                        <Link href="https://scholar.google.com/citations?hl=en&user=A13oCMQAAAAJ" target="_blank" rel="noopener" title="Google Scholar"><SchoolIcon fontSize="large" color="primary" /></Link>
                        {/* github */}
                        <Link href="https://github.com/horychen" target="_blank" rel="noopener" title="GitHub"><GitHubIcon fontSize="large" color="primary" /></Link>
                        {/* email */}
                        <Link href="mailto:chenjh2@shanghaitech.edu.cn" title="Email"><EmailIcon fontSize="large" color="primary" /></Link>
                        {/* youtu */}
                        <Link href="https://www.youtube.com/@horychen1304" target="_blank" rel="noopener" title="YouTube"><YouTubeIcon fontSize="large" color="primary" /></Link>
                    </Box>
                </div>
                {/* 右侧：Biography/Interests/Education */}
                <div className="flex-1 w-full flex flex-col gap-6 lg:p-4 p-16">
                    <div className="text-5xl font-normal mb-2 flex items-center">Biography of the PI</div>
                    <div className="prose max-w-none text-justify leading-8 text-lg">
                        <ReactMarkdown>{PI_BIO}</ReactMarkdown>
                    </div>
                    {/*  downloadicon Download his Curriculum Vitae . */}
                    <div className="flex flex-row gap-2 items-center">
                        <DownloadIcon fontSize="medium" color="primary" />
                        <Link href="/uploads/ChenJiahaoCV.pdf" target="_blank" rel="noopener" title="Download CV" className="text-xl font-medium">Download his Curriculum Vitae</Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mt-4">
                        <div className="flex-1">
                            <div className="text-3xl font-bold mb-2 flex items-center">Interests</div>
                            <ul className="list-none pl-2">
                                {INTERESTS.map((item) => (
                                    <li key={item} className="flex items-center mb-1"><MenuBookIcon fontSize="small" className="mr-2" />{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="text-3xl font-bold mb-2 flex items-center">Education</div>
                            <ul className="list-none pl-0">
                                {EDUCATION.map((edu) => (
                                    <li key={edu.degree} className="mb-1 flex flex-col">
                                        <span className="flex items-center font-medium"><SchoolIcon fontSize="small" className="mr-2" />{edu.degree}</span>
                                        <span className="text-sm text-gray-500 ml-7">{edu.school}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 