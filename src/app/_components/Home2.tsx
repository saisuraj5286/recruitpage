'use client';

import React from "react";
import { TrendingUp,Target } from "lucide-react";
import { User} from 'lucide-react';
import { motion } from "framer-motion";
const Home2 = () => {
  return (
    <div className="flex lg:flex-row flex-col min-h-screen justify-center items-center gap-10 p-6 m-10 ">
      {/* left box  */}
      <div className=" flex max-h-[70%] xl:max-w-[45%] sm:max-w-[75%] lg:min-w-[40%] sm:min-w-[75%] flex-col rounded-xl bg-blue-100 relative p-2">
        <div className="absolute -top-5 -right-5 ">
        <motion.div
            animate={{ y: [-1, -18, -1] }}
            transition={{ duration: 2, repeat: Infinity }}>
            <User size={55} className='rounded-[50%] p-2 bg-green-300 ' />
          </motion.div>
        </div>
        <Target size={45} className="bg-violet-500 rounded-full absolute -bottom-4 -left-3 p-2" />
        
        <div className="flex items-center justify-start gap-3 px-6 pt-6">
          <TrendingUp
            className="rounded-[50%] bg-blue-400 p-2 text-white"
            size={45}
          />
          <div>
            <p className="font-bold ">Platform Evolution</p>
            <p>2020-2025</p>
          </div>
        </div>
        <div className="flex flex-col min-w-full  gap-10 p-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gray-300 "></div>
            <p className=" rounded-xl w-full bg-gray-300 p-2">
              Resume Service
            </p>
            
          </div>

          <div className="flex items-center gap-2">
            
            <div className="h-3 w-3 rounded-full bg-blue-300"></div>
            <p className="w-full rounded-xl bg-blue-300 p-2">
              Portfolio Platform
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <p className="w-full rounded-xl bg-blue-500 p-2">
              Full Career Launch Platform
            </p>
          </div>
        </div>
      </div>
      <div className=" flex max-h-[70%] lg:max-w-[45%] sm:max-w-[75%] flex-col  gap-3 rounded-xl bg-white ">
        {/* right box */}
        <h1 className="font-semibold xl:text-5xl sm:text-4xl ">Getting hired shouldn&apos;t feel like a <span className="text-blue-400">mystery</span></h1>
        <p className="text-xl text-justify">We started this platform with one goal: to make global careers <span className="text-blue-400">accessible, intentional, and evidence-driven </span> for ambitious learners
        in data, analytics, business, and tech.</p>
        <p className="text-xl text-justify">What began as a resume service had grown into a <span className="text-blue-400"> full stack career launch platform </span>— with live Portfolios, AI powered mock interviews, 
          recruiter-led mentorship, and domain-specific certifications.</p>
        <div className="flex  justify-around  p-6">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-blue-500">2020</h2>
            <p>Founded</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-blue-500">10K+</h2>
            <p>Learners</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-blue-500">500+</h2>
            <p>Recruiters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
