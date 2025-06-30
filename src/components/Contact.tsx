import React from "react";
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <section className={"w-full py-10 flex flex-col items-center pt-2"} id="contact">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
        {/* 左侧标题 */}
        <div className="w-full lg:w-1/3 flex-shrink-0 flex items-start justify-center lg:justify-start mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold dark:text-white">Contact</h2>
        </div>
        {/* 右侧内容卡片 */}
        <div className="w-full lg:w-2/3 p-4 sm:p-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-8 w-full flex flex-col gap-8">
            {/* info 区块 */}
            <div className="border border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-md p-4 flex flex-row gap-3 items-start mb-2">
              <InfoIcon className="mt-1 text-blue-600 dark:text-blue-400" />
              <div className="text-blue-900 dark:text-blue-100 text-lg leading-relaxed">
                <div className="mb-2">[Graduate] We have one vacancy for year 2025 academic master student candidate. Please fill out the questionnaire (<a href="https://www.wjx.top/vm/PRrcaUS.aspx#" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline break-all">https://www.wjx.top/vm/PRrcaUS.aspx#</a>) and send me an email if you are interested.</div>
                <div>[Undergraduate] If you are a student on campus please feel free to shoot me an email if interested in m&m lab.</div>
              </div>
            </div>
            {/* 联系方式 */}
            <div className="flex flex-col gap-4 text-xl">
              <div className="flex items-center gap-3">
                <EmailIcon className="text-gray-600 dark:text-gray-400" />
                <a href="mailto:chenjh2@shanghaitech.edu.cn" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">chenjh2@shanghaitech.edu.cn</a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-gray-600 dark:text-gray-400" />
                <a href="tel:02120685662" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">(021)20685662</a>
              </div>
              <div className="flex items-center gap-3">
                <LocationOnIcon className="text-gray-600 dark:text-gray-400" />
                <span className="dark:text-gray-300">SIST 1#D206, 393 Middle Huaxia Road, Shanghai 201210</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationOnIcon className="text-gray-600 dark:text-gray-400" />
                <span className="dark:text-gray-300">Enter SIST Building 1, find Area D and take the lift to 1D-206 on Floor 2.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}