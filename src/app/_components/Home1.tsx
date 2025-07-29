'use client';

import React from 'react'
import { User, Sparkles, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import HomeCard1 from './HomeCard1';

const Home1 = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col min-h-screen bg-gradient-to-b from-[#356bde] via-[#3B82F6] to-[#93C5FD] text-white ">
        <div className='flex gap-4 p-6 mb-4'>
          <User size={50} className='rounded-[50%] p-2 bg-blue-300 ' />
          <motion.div
            animate={{ y: [-3, -15, -3] }}
            transition={{ duration: 1, repeat: Infinity }}>
            <Sparkles size={60} className='rounded-[50%] p-2  bg-blue-300 ' />
          </motion.div>
          <BadgeCheck size={50} className='rounded-[50%] p-2 bg-blue-300' />
        </div>
        <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl flex flex-col items-center text-center gap-2  mx-auto  font-bold 2xl:max-w-[75%] lg:max-w-[88%] md:max-w-[95%]">
          Build for Learners. Backed by Experts. Trusted by Recruiters.
        </h1>
        <p className="mt-4  items-center text-center font-light text-3xl lg:text-3xl md:text-2xl sm:text-2xl xl:max-w-[48%] lg:max-w-[58%] md:max-w-[65%]">
          We&apos;re reimagining how careers are launched — not with luck or guesswork, but with <span className='text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-bold'> skill, proof and visibility.</span>
        </p>
          <div className="flex justify-center items-center mt-10 gap-8">
            <div className='rotate-3'>
            <HomeCard1 color="#3B82F6" title="" description=""  />
            </div>
            <div className='-rotate-3'>
            <HomeCard1 color="#22C55E" title="" description="" />
            </div>
            <div className='rotate-3'>
            <HomeCard1 color="#A855F7" title="" description="" />
            </div>
        </div>
        <div className='mt-10 flex  items-center gap-2'>
        <p className='flex gap-2 bg-blue-300 p-2 rounded-3xl px-4'><BadgeCheck/>Verified portfolios</p>
        <p className='flex gap-2 bg-blue-300 p-2 rounded-3xl px-4'> <Sparkles/>AI-Powered</p>
        </div>
      </div>

    </div>
  )
}

export default Home1;
