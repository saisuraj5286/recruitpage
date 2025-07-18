'use client';

import React from 'react'

interface Portfolio3CardProps {
    icons: React.ReactNode;
    title: string;
    description: string;
}


const Portfolio3Card: React.FC<Portfolio3CardProps> = ({icons,title,description}) => {
  return (
    <div>
        <div className="p-6 rounded-xl shadow-xl border border-gray-200 flex flex-col gap-4  h-full bg-white ">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-blue-500">
            {icons}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500 text-lg min-w-[100%] text-justify">{description}</p>
        </div>
    </div>
  )
}

export default Portfolio3Card
