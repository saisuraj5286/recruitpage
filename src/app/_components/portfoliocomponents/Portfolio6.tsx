import { ArrowRight, Zap } from 'lucide-react'
import React from 'react'

const Portfolio6 = () => {
  return (
    <div className='flex flex-col items-center justify-center  gap-10 p-10 py-15 bg-blue-500  shadow-lg'>
      <h1 className='text-5xl font-bold text-center text-white lg:max-w-[50%] sm:max-w-[70%]'>
        Ready to Stand out in a Crowded Job Market?
      </h1>
      <p className='text-xl text-center text-white max-w-[60%]'>
        Build your digital showcase in under 30 minutes — and watch opportunities find you.
      </p>
      <div className='group flex flex-row items-center justify-center gap-2 rounded-2xl bg-white p-3 px-10 
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-500 hover:shadow-xl'>
        <Zap size={28} color='blue' className="group-hover:animate-[bounceUpDown_0.6s_ease-in-out_infinite]" />
        <a href="#" className='font-semibold text-2xl text-blue-600'>Start Building now </a>
        <ArrowRight size={25} color='blue'  />
      </div>
      <p className='text-center text-white '>Join thousands of professionals who&apos;ve already transformed their careers </p>
    </div>
  )
}

export default Portfolio6
