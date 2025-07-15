'use client';

import React from 'react'

interface Home4CardProps {
  icon: React.ReactNode; 
  color: string; 
  title: string;
  description: string;
}


const Home4Card : React.FC<Home4CardProps>  = ({ icon, color, title, description }) => {
  return (
    <div>
      <div className="p-6 rounded-xl shadow-xl border border-gray-200  flex flex-col min-h-[100%] gap-4   ">
        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${color}`}>
            {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500 text-lg min-w-[100%] text-justify  ">{description}</p>
            <div className={`h-1 rounded-full w-6 ${color}`} />
        </div>
    </div>
  )
}

export default Home4Card
