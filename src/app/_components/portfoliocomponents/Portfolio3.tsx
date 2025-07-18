'use client';

import React from 'react'
import Portfolio3Card from './Portfolio3Card'
import { BadgeCheck , Code, Laptop, Link, Settings, FileText  } from 'lucide-react'

const carddata = [
    {
        icons:<Link color='white' size={30}  />,
        title: "Public Profile Link",
        description: "Perfect for resume, emails, and LinkedIn. Always up to date."
    },
    {
        icons:<BadgeCheck color='white' size={30}  />,
        title: "Certificates and Skill Badges",
        description: "Visually highlight your verified credentials."
    },
    {
        icons:<Laptop color='white' size={30}  />,
        title: "Project Showcases",
        description: "Upload dashboards, apps, notebooks, or walkthrough videos-- show dont just tell ."
    },
    {
        icons:<FileText color='white' size={30}  />,
        title: "Write-ups and Blogs",
        description: "Explain your procress, your thinking, and your insights. Great for recruiters and admissions teams."
    },
    {
        icons:<Code color='white' size={30}  />,
        title: "Github / HackerRank / LeetCode Integration",
        description: "Auto-link to your coding profile and repositories."
    },
    {
        icons:<Settings color='white' size={30}  />,
        title: "Private Dashboard",
        description: "Easily manage your profile, update anytime, no dev experience needed."
    },
];

const Portfolio3 = () => {
  return (
    <div className="min-h-screen  bg-blue-50">
      <h1 className='mx-auto text-5xl xl:max-w-[50%] sm:max-w-[70%]  text-center p-5 font-bold'>Everything You Need to Impress — <span className='text-blue-600'> Nothing you don't.</span></h1>
        <div className='grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 gap-4 p-10 max-w-[90%] mx-auto'>
            {carddata.map((card, index) => (
                <Portfolio3Card
                key={index}
                icons= {card.icons}
                title={card.title}
                description={card.description}
                />))}

        </div>
    </div>
  )
}

export default Portfolio3
