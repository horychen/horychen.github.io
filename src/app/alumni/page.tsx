import React from "react";
import { PICard, StudentCard, GraduateCard } from "./PersonCard";

const PI = {
  name: "Dr. Chen",
  avatar: "/alumni/chenjh.jpg",
  email: 'chenjh2@shanghaitech.edu.c',
  github: 'https://github.com/horychen',
  linkedin: 'https://www.linkedin.com/in/chenjh/',
  website: 'https://chenjh.github.io/',
  google_scholar: 'https://scholar.google.com/citations?user=1234567890&hl=en',
  orcid: 'https://orcid.org/0000-0000-0000-0000',
  description: "Dr. Chen is a professor at ShanghaiTech University. He is the principal investigator of the m&m lab.",
}

const students = [
  {
    name: "Student 1",
    avatar: "/media/icons/mmlab-logo.png",
    student: "PhD Student",
    student_year: "2022-2026",
    degree: "BSc",
    email: 'student1@shanghaitech.edu.cn',
    github: 'https://github.com/student1',
    linkedin: 'https://www.linkedin.com/in/student1/',
    website: 'https://student1.github.io/',
    google_scholar: 'https://scholar.google.com/citations?user=1234567890&hl=en',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
    description: "Student 1 is a PhD student at ShanghaiTech University. He is a student of Dr. Chen.",
  },
  {
    name: "Student 2",
    avatar: "/media/icons/mmlab-logo.png",
    student: "PhD Student",
    student_year: "2022-2026",
    degree: "BSc",
    email: 'student2@shanghaitech.edu.cn',
    github: 'https://github.com/student2',
    linkedin: 'https://www.linkedin.com/in/student2/',
    website: 'https://student2.github.io/',
    google_scholar: 'https://scholar.google.com/citations?user=1234567890&hl=en',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
    description: "Student 1 is a PhD student at ShanghaiTech University. He is a student of Dr. Chen.",
  },
  {
    name: "Student 3",
    avatar: "/media/icons/mmlab-logo.png",
    student: "PhD Student",
    student_year: "2022-2026",
    degree: "BSc",
  }
]

const graduates = [
  {
    name: "Graduate 1",
    avatar: "/media/icons/mmlab-logo.png",
    graduate_year: "2022",
    destination: "Google China",
    degree: "PhD",
    email: 'graduate1@shanghaitech.edu.cn',
    github: 'https://github.com/graduate1',
    linkedin: 'https://www.linkedin.com/in/graduate1/',
    website: 'https://graduate1.github.io/',
    google_scholar: 'https://scholar.google.com/citations?user=1234567890&hl=en',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
    description: "Graduate 1 is a PhD student at ShanghaiTech University. He is a student of Dr. Chen.",
  },
  {
    name: "Graduate 2",
    avatar: "/media/icons/mmlab-logo.png",
    graduate_year: "2022",
    destination: "Google China",
    degree: "PhD",
    email: 'graduate2@shanghaitech.edu.cn',
    github: 'https://github.com/graduate2',
    linkedin: 'https://www.linkedin.com/in/graduate2/',
    website: 'https://graduate2.github.io/',
    google_scholar: 'https://scholar.google.com/citations?user=1234567890&hl=en',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
    description: "Graduate 2 is a PhD student at ShanghaiTech University. He is a student of Dr. Chen.",
  },
  {
    name: "Graduate 3",
    avatar: "/media/icons/mmlab-logo.png",
    graduate_year: "2022",
    destination: "Google China",
    degree: "PhD",
  },
]

export default function Alumni() {
  return (
    <div className="min-h-scree py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-10">Alumni</h1>
      <div className="max-w-5xl mx-auto space-y-12">
        {/* PI */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Principal Investigator</h2>
          <div className="flex justify-center">
            <PICard person={PI} />
          </div>
        </section>
        {/* Students */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Current Students</h2>
          <div className="grid grid-cols-1 gap-8">
            {students.map((stu, idx) => <StudentCard key={idx} person={stu} />)}
          </div>
        </section>
        {/* Graduates */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Graduates</h2>
          <div className="grid grid-cols-1 gap-8">
            {graduates.map((grad, idx) => <GraduateCard key={idx} person={grad} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
