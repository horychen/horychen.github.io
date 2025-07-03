import React from "react";
import ReactMarkdown from "react-markdown";
import { Avatar, Link, Typography, Box } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { withBasePath } from '../lib/utils';


const COPI_BIO = `
He Zeqiang was born in Hangzhou City, Zhejiang Province, China in 1997. He received the B.S. degree in Electrical engineering from Zhejiang University, China, in 2020 and the M.S. degree in mechanical engineering from Tokyo Institute of Technology, Japan, in 2022. He is currently pursuing the Ph.D. degree in mechanical engineering at Tokyo Institute of Technology, Japan. His research interests include the bearingless motor, machine control and robotics.
`;

const INTERESTS = [
    "Blood pump and artificial heart",
    "Maglev and bearingless motor",
    "Manipulation",
    "Filtering and control",
];
const EDUCATION = [
    { degree: "Ph.D. in Mechanical Engineering, 2025", school: "Tokyo Institute of Technology, Japan" },
    { degree: "M.Sc. in Mechanical Engineering, 2022", school: "Tokyo Institute of Technology, Japan" },
    { degree: "B.Sc. in Electrical Engineering, 2020", school: "Zhejiang University, China" },
];

export default function CoPI() {
    return (
        <section className={"w-full py-30 flex flex-col items-center"} id="pi">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 items-center lg:items-start">
                {/* 左侧：头像+基本信息+社交 */}
                <div className="flex flex-col items-center w-full lg:w-1/3">
                    <Avatar src={withBasePath('/alumni/hzq.png')} alt="Co-PI" sx={{ width: 270, height: 270 }} />
                    <div className="text-4xl font-normal mt-6">He, Zeqiang 何 泽强</div>
                    <div className="text-2xl font-normal mt-4 text-gray-500">Post-doc Research Fellow</div>
                    <div className="mt-4 text-xl font-medium">
                        <Link href="https://sist.shanghaitech.edu.cn/" target="_blank" rel="noopener" underline="hover" color="primary">ShanghaiTech University</Link>
                    </div>
                    <Box className="flex gap-4 mt-4">
                        {/* google scholar */}
                        <Link href="https://scholar.google.com/citations?hl=en&user=OKeAMUEAAAAJ" target="_blank" rel="noopener" title="Google Scholar"><SchoolIcon fontSize="large" color="primary" /></Link>
                        {/* github */}
                        <Link href="https://github.com/hezeqiang" target="_blank" rel="noopener" title="GitHub"><GitHubIcon fontSize="large" color="primary" /></Link>
                        {/* email */}
                        <Link href="mailto:shuishuidehentiexin@gmail.com" title="Email"><EmailIcon fontSize="large" color="primary" /></Link>
                    </Box>
                </div>
                {/* 右侧：Biography/Interests/Education */}
                <div className="flex-1 w-full flex flex-col gap-6 lg:p-4 p-16">
                    <div className="text-5xl font-normal mb-2 flex items-center">Biography of the Co-PI</div>
                    <div className="prose max-w-none text-justify leading-8 text-lg">
                        <ReactMarkdown>{COPI_BIO}</ReactMarkdown>
                    </div>
                    {/*  downloadicon Download his Curriculum Vitae . */}
                    <div className="flex flex-row gap-2 items-center">
                        <DownloadIcon fontSize="medium" color="primary" />
                        <Link href={withBasePath('/HeZeqiangCV.pdf')} target="_blank" rel="noopener" title="Download CV" className="text-xl font-medium">Download his Curriculum Vitae</Link>
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
