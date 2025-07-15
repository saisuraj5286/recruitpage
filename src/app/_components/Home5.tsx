import React from 'react'
import { User,Briefcase, UserCheck,Globe, Star, ArrowRight  } from 'lucide-react';

const Home5 = () => {
  return (
    <div className='min-h-screen bg-blue-800 p-10'>
      <div className='flex items-center justify-center gap-10 flex-wrap'>
        <div className='flex flex-col items-center gap-1'>
            <User color='white' size={50} className='rounded-[50%] p-2 bg-blue-300 ' />
            <h2 className='text-xl text-white'>Learner</h2>
            <p className='text-md text-white'>Start your journey</p>
        </div>
         <div className='flex flex-col items-center gap-1'>
            <Briefcase color='white' size={50} className='rounded-[50%] p-2 bg-blue-300 ' />
            <h2 className='text-xl text-white'>Recruiter</h2>
            <p className='text-md text-white'>Find talent</p>
        </div>
         <div className='flex flex-col items-center gap-1'>
            <UserCheck color='white' size={50} className='rounded-[50%] p-2 bg-blue-300 ' />
            <h2 className='text-xl text-white'>Mentor</h2>
            <p className='text-md text-white'>Share expertise</p>
        </div>
         <div className='flex flex-col items-center gap-1'>
            <Globe color='white' size={50} className='rounded-[50%] p-2 bg-blue-300 ' />
            <h2 className='text-xl text-white'>partner</h2>
            <p className='text-md text-white'>Build together</p>
        </div>
      </div>
      <div className='max-w-[90%] mx-auto mt-10 text-center'>
        <h1 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-bold '>Whether you're a learner, recruiter, mentor, or ecosystem partner — we'd love to build with you.</h1>
      </div>
      <div className='p-5 m-3'>
        <button className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-4 rounded-xl mx-auto shadow-xl hover:bg-blue-100 transition-all">
        <Star size={18} className="text-blue-600" />
        Explore Opportunities
        <ArrowRight size={18} className="text-blue-600" />
      </button>
      </div>
      <div className='m-4'>
        <p className='text-center text-white max-w-[80%] mx-auto text-lg'>
          Join a community that's reshaping how careers are built, one success story at a time.
        </p>
      </div>
      <div className='mt-14 max-w-[80%]  mx-auto'>
        <p className='text-center text-white  text-lg'>Trusted by industry leaders</p>
        <div className='flex items-center justify-center gap-10 mt-4 xl:max-w-[50%] lg:max-w-[60%] md:max-w-[70%] sm:max-w-[80%] mx-auto'>
          <div className=" w-full bg-blue-500 rounded-xl  p-4">
            <p className="bg-blue-400 rounded h-4 w-3/4 mx-auto text-center text-black font-semibold"></p>
          </div>
          <div className=" w-full bg-blue-500 rounded-xl  p-4">
            <p className="bg-blue-400 rounded h-4 w-3/4 mx-auto text-center text-black font-semibold"></p>          </div>
          <div className=" w-full bg-blue-500 rounded-xl  p-4">
            <p className="bg-blue-400 rounded h-4 w-3/4 mx-auto text-center text-black font-semibold"></p>          </div>
          <div className=" w-full bg-blue-500 rounded-xl  p-4">
            <p className="bg-blue-400 rounded h-4 w-3/4 mx-auto text-center text-black font-semibold"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home5
