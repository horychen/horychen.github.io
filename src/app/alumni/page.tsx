import React from "react";
import { PICard, StudentCard, GraduateCard } from "./PersonCard";

// Example data structure for students and graduates
// {
//   name: "Student 2",
//   avatar: "/media/icons/mmlab-logo.png",
//   student: "PhD Student",
//   student_year: "2022-2026",
//   degree: "BSc",
//   email: 'student2@shanghaitech.edu.cn',
//   github: 'https://github.com/student2',
//   linkedin: 'https://www.linkedin.com/in/student2/',
//   website: 'https://student2.github.io/',
//   google_scholar: 'https://scholar.google.com/citations?user=1234567890&hl=en',
//   orcid: 'https://orcid.org/0000-0000-0000-0000',
//   description: "Student 1 is a PhD student at ShanghaiTech University. He is a student of Dr. Chen.",
// },
// {
//   name: "Graduate 1",
//   avatar: "/media/icons/mmlab-logo.png",
//   graduate_year: "2022",
//   destination: "Google China",
//   degree: "PhD",
//   email: 'graduate1@shanghaitech.edu.cn',
//   github: 'https://github.com/graduate1',
//   linkedin: 'https://www.linkedin.com/in/graduate1/',
//   website: 'https://graduate1.github.io/',
//   google_scholar: 'https://scholar.google.com/citations?user=1234567890&hl=en',
//   orcid: 'https://orcid.org/0000-0000-0000-0000',
//   description: "Graduate 1 is a PhD student at ShanghaiTech University. He is a student of Dr. Chen.",
// },

const students = [
  {
    name: "白岩松",
    avatar: "/alumni/bys.jpg",
    student: "Ph.D. Student (2022-)",
    description: "白岩松希望通过将多刚体机器人描述进行简化重构二次规划问题从而保证优化目标空间内的圆形云图以此来确保不满足不等式约束时投影的最优性，最终实现高效运动规划。",
  },
  {
    name: "王千",
    avatar: "/alumni/wq.jpg",
    student: "M.S. Student (2022-)",
    description: "实现涡流位移传感器的高精度设计和测量，从而实现对无轴承悬浮系统的高精度控制。",
  },
  {
    name: "严政章",
    avatar: "/alumni/yzz.jpg",
    student: "Ph.D. Student (2023-)",
    description: "“能喷血就能喷空气”。",
  },
  {
    name: "杨子恺",
    avatar: "/alumni/yzk.jpg",
    student: "Ph.D. Student (2023-)",
    description: "杨子恺希望通过解析或数值计算三维磁场电机的悬浮力特性来加速小型人工心脏用无轴承电机的优化设计。",
  },
  {
    name: "胡瑀",
    avatar: "/alumni/hy.jpg",
    student: "Ph.D. Student (2024-)",
    description: "胡瑀希望通过设计机械上的某种耦合设计来等效实现某个关节上的全带宽驱动，同时设计自由度匹配的下肢外骨骼采集数据并实现动态遥操。",
  },
  {
    name: "朱俊磊",
    avatar: "/alumni/zjl.jpg",
    student: "Ph.D. Student (2024-)",
    description: "朱俊磊希望通过引入更多的传感器将actor-critic强化学习框架下只有老师critic才能获得的特权信息（基座线速度和接触模态信息）提供给学生actor，并且试图同时验证这些特权信息的可重构性。",
  },
  {
    name: "彭经纬",
    avatar: "/alumni/pjw.png",
    student: "M.S. Student (2024-)",
    description: "彭经纬希望使用神经网络来实现对多刚体机器人在复杂环境下的运动规划，并且通过对神经网络的训练来提高其规划效率和精度。",
  }
]

const graduates = [
  {
    name: "管仲焘",
    avatar: "/alumni/gzt.JPG",
    graduate_year: "2025",
    destination: "MIT EECS Ph.D. Program",
    description: "线性执行器机构设计、非线性反馈控制律设计。",
  },
  {
    name: "陈艺铭",
    avatar: "/alumni/Chenym.jpg",
    graduate_year: "2025",
    destination: "中科院微小卫星研究所",
    description: "一拖四嵌入式、EtherCAT通讯架构、基于硅胶推压强计的接触传感器的人形机器人的鞋。",
  }
]

export default function Alumni() {
  return (
    <div className="min-h-scree py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-10">Alumni</h1>
      <div className="max-w-5xl mx-auto space-y-12">
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
