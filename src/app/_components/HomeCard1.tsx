'use client';

import React from 'react';

interface CardProps {
  color: string;
  title: string;
  description: string;
}

const HomeCard1: React.FC<CardProps> = ({ color, title, description }) => {
  return (
    <div className=" bg-blue-300 rounded-xl shadow-md flex flex-col items-center p-4 gap-5">
      <div className={`w-24 h-20 rounded-md`} style={{ backgroundColor: color }} />
      <div className="text-white w-full space-y-1">
        <p className="bg-white rounded h-4 w-3/4 mx-auto text-center text-black font-semibold">{title}</p>
        <p className="bg-white rounded h-3 w-1/2 mx-auto text-center text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard1;
