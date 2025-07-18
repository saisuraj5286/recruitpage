import { CheckCircle, FolderOpen } from 'lucide-react'
import React from 'react'

const Portfolio4 = () => {
  return (
    <div className='flex flex-col items-center justify-center my-10 gap-20 p-10 '>
      <h1 className='text-5xl font-bold text-center lg:max-w-[50%] sm:max-w-[70%]'>
        Designed for Visibility. <span className='text-blue-500'>Build for Opportunity</span>
      </h1>
      <div className='grid lg:grid-cols-2 lg:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 gap-10' >
        <div className='flex items-center gap-2'>
            <CheckCircle size={30} color='green' />
            <p className='text-xl'>Your profile is tailored for recruiters scanning patterns</p>
        </div>
        <div className='flex items-center gap-2'>
            <CheckCircle size={30} color='green' />
            <p className='text-xl'>Embeds real world work: dashboards, code, visuals</p>
        </div>
        <div className='flex items-center gap-2'>
            <CheckCircle size={30} color='green' />
            <p className='text-xl'>Adds humanity: your voice, process, and story</p>
        </div>
        <div className='flex items-center gap-2'>
            <CheckCircle size={30} color='green' />
            <p className='text-xl'>eliminates friction: no PDFs, no back-and-forth</p>  
        </div>

      </div>
      <div className='group flex flex-row items-center justify-center gap-2 rounded-2xl bg-blue-500 p-3 px-10 
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:shadow-xl'>
        <FolderOpen size={30} color='white' className="group-hover:animate-[bounceUpDown_0.6s_ease-in-out_infinite]" />
        <a href="#" className='font-semibold text-2xl text-white'>Build My Profile Now </a>
      </div>
    </div>
  )
}

export default Portfolio4
