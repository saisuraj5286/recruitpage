import { Briefcase, CheckCircle, Star, User } from 'lucide-react'
import React from 'react'

const Portfolio5 = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 p-10 bg-[#151854] text-white'>
      <h1 className='text-5xl text-center font-bold xl:max-w-[50%] lg:max-w-[60%] sm:max-w-[70%]'><span>💥</span>Plug Into Opportunities <span className='text-blue-300'>Instantly</span> </h1>
      <p className='text-xl text-center max-w-[60%]'>Your showcase isn't just a portfolio — it's a gateway to internships, freelance gigs, and full-time roles.</p>

      <div className='flex lg:flex-row sm:flex-col items-center justify-center gap-10 lg:max-w-[80%] sm:max-w-[50%]'>
        <div className='flex flex-col items-center gap-5 max-w-[1/3] sm:w-full bg-[#252F57] p-6 rounded-lg shadow-lg min-h-full'>
            <User size={45} color='white' className='bg-blue-400 p-2 rounded-2xl' />
            <div className='flex items-center gap-2'>
                <CheckCircle size={30} color = 'green' />
                <p>shared with vetted recruiters and startup hiring partners </p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-5 max-w-[1/3] sm:w-full bg-[#252F57] p-6 rounded-lg shadow-lg min-h-full'>
            <Briefcase size={45} color='white'  className='bg-blue-400 p-2 rounded-2xl'  />
            <div className='flex items-center gap-2'>
                <CheckCircle size={30} color='green' />
                <p>Integrated into our careers page and job boards </p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-5 max-w-[1/3] sm:w-full bg-[#252F57] p-6 rounded-lg shadow-lg min-h-full'>
            <Star size={45} color='white'  className='bg-blue-400 p-2 rounded-2xl'  />
            <div className='flex items-center gap-2'>
                <CheckCircle size={30} color='green' />
                <p>Auto-featured in our internal talent pool</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio5
