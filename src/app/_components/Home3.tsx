import React from 'react'
import { RefreshCw, Eye, GraduationCap, Globe } from 'lucide-react';

const Home3 = () => {
  return (
    <div className=" min-h-screen bg-blue-50  p-5 ">
      <div className='mx-auto py-10'>
        <h1 className='text-5xl font-semibold text-center max-w-[70%] mx-auto'>
            Talent is everywhere. But <span className='text-blue-500'>visibility, proof and mentorship </span>are not.
        </h1>
        <p className='text-xl text-center max-w-[50%] mx-auto mt-4'>
            we exist to close that gap — and help talent become <span className='text-blue-500'> dicoverable, coachable, and globally employable.</span>
        </p>
      </div>
      <div className='flex md:flex-row sm:flex-col justify-center items-center gap-10'>
        <div className='flex flex-col max-h-[70%] md:max-w-[40%] sm:max-w-[70%] rounded-xl bg-white shadow-xl px-10 py-5 gap-6 '>
            {/* left box */}
            <div className="flex items-center justify-start gap-3  pt-4">
                <GraduationCap className="rounded-[50%] bg-blue-400 p-2 text-white"
                size={55}/>
                <div>
                    <p className="font-bold text-2xl ">Fresh Graduate</p>
                    <p>Breaking into analytics</p>
                </div>
            </div>
            <p>A student looking to break into your first analytics role with real projects, mentorship, and recruiter visibility. </p>
            <div className='flex items-center gap-2'>
                <Eye color='blue' size={20}/> <h2 className='font-semibold text-blue-600'>Build visibility from day one</h2>
            </div>
            <div className= 'flex gap-1 '>
                <div className={`h-1 w-9/10 rounded-full  bg-blue-500`}></div> 
                <div className={`h-1 w-3/100 rounded-full  bg-gray-300`}></div> 
                <div className={`h-1 w-3/100 rounded-full  bg-gray-300`} ></div>
            </div>
        </div>
        <div className='flex flex-col max-h-[70%]  md:max-w-[40%] sm:max-w-[70%] rounded-xl bg-white shadow-xl px-10 py-5 gap-6 '>
            {/* right box */}
            <div className="flex items-center justify-start gap-3  pt-4">
                <RefreshCw className="rounded-[50%] bg-green-600 p-2 text-white"
                size={55}/>
                <div>
                    <p className="font-bold text-2xl ">Career Switcher</p>
                    <p>Building a data portfolio</p>
                </div>
            </div>
            <p>A career switcher building a data portfolio with proven experience and strategic positioning from your next role. </p>
            <div className='flex items-center gap-2'>
                <Globe color='green' size={20}/> <h2 className='font-semibold text-green-700'>Transform existing skills</h2>
            </div>
            <div className= 'flex gap-1 '>
                <div className={`h-1 w-3/100 rounded-full  bg-gray-300`}></div> 
                <div className={`h-1 w-9/10 rounded-full  bg-green-600`}></div> 
                <div className={`h-1 w-3/100 rounded-full  bg-gray-300`} ></div>
            </div>

        </div>
        
      </div>
      <div className='max-w-[60%] bg-white p-8 rounded-xl shadow-xl m-10 mx-auto '>
            <p className='text-2xl text-center italic'>&quot;We&apos;re here to give you tools that deliver <span className='text-blue-500 font-bold'>outcomes</span> — not just education&quot;</p>
        </div>
    </div>
  )
}

export default Home3
