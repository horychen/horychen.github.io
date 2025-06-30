import React from "react";
import { Typography, Paper, Box, Link } from "@mui/material";
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
          <Typography variant="h2" className="font-bold">Contact</Typography>
        </div>
        {/* 右侧内容卡片 */}
        <div className="w-full lg:w-2/3 p-4 sm:p-8">
          <Paper elevation={1} className="p-4 sm:p-8 w-full flex flex-col gap-8">
            {/* info 区块 */}
            <Box className="border border-blue-400 bg-blue-50 rounded-md p-4 flex flex-row gap-3 items-start mb-2">
              <InfoIcon color="primary" className="mt-1" />
              <div className="text-blue-900 text-lg leading-relaxed">
                <div className="mb-2">[Graduate] We have one vacancy for year 2025 academic master student candidate. Please fill out the questionnaire (<Link href="https://www.wjx.top/vm/PRrcaUS.aspx#" target="_blank" rel="noopener" color="primary" underline="hover" className="break-all">https://www.wjx.top/vm/PRrcaUS.aspx#</Link>) and send me an email if you are interested.</div>
                <div>[Undergraduate] If you are a student on campus please feel free to shoot me an email if interested in m&m lab.</div>
              </div>
            </Box>
            {/* 联系方式 */}
            <Box className="flex flex-col gap-4 text-xl">
              <Box className="flex items-center gap-3">
                <EmailIcon fontSize="large" />
                <Link href="mailto:chenjh2@shanghaitech.edu.cn" color="primary" underline="hover">chenjh2@shanghaitech.edu.cn</Link>
              </Box>
              <Box className="flex items-center gap-3">
                <PhoneIcon fontSize="large" />
                <Link href="tel:02120685662" color="primary" underline="hover">(021)20685662</Link>
              </Box>
              <Box className="flex items-center gap-3">
                <LocationOnIcon fontSize="large" />
                <span>SIST 1#D206, 393 Middle Huaxia Road, Shanghai 201210</span>
              </Box>
              <Box className="flex items-center gap-3">
                <LocationOnIcon fontSize="large" />
                <span>Enter SIST Building 1, find Area D and take the lift to 1D-206 on Floor 2.</span>
              </Box>
            </Box>
          </Paper>
        </div>
      </div>
    </section>
  );
} 