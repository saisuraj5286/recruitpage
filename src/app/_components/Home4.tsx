'use client';

import React from 'react'
import { CheckCircle, GraduationCap, Brain, Zap } from "lucide-react";

import Home4Card from './Home4Card';

const cards = [
  {
    icon: <CheckCircle className="text-white" size={20} />,
    color: "bg-blue-600",
    title: "Job-First, Not Course-First",
    description:
      "Everything we build — from mock interviews to certifications — is reverse-engineered from real job descriptions.",
  },
  {
    icon: <GraduationCap className="text-white" size={20} />,
    color: "bg-green-500",
    title: "Live, Shareable Proof of Work",
    description:
      "Every learner graduates with a live digital portfolio and recruiter-facing profile.",
  },
  {
    icon: <Brain className="text-white" size={20} />,
    color: "bg-purple-600",
    title: "Mentorship That's Measurable",
    description:
      "No fluff. Just tactical sessions on visibility, cold emails, shortlisting, and hiring psychology.",
  },
  {
    icon: <Zap className="text-white" size={20} />,
    color: "bg-orange-500",
    title: "Human Support Meets AI Edge",
    description:
      "We blend mentorship with AI mock interviews and resume optimization so every learner gets personal, scalable career coaching.",
  },
];

const Home4 = () => {
  return (
    <div className='min-h-screen '>
      <h1 className='items-center text-center text-5xl font-bold p-6 mt-6'>What Makes Us <span className='text-blue-500'>Different</span> </h1>
      <div className='grid md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-1  gap-8 md:max-w-[80%] sm:max-w-[70%] mx-auto p-6'>
        {cards.map((card, index) => (
          <Home4Card
            key={index}
            icon={card.icon}
            color={card.color}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className='bg-blue-100 p-10 text-center m-10 md:max-w-[60%] sm:max-w-[70%] mx-auto rounded-xl shadow-lg'>
        <p className='text-xl'> Ready to experience career development that&apos;s <span className='text-blue-500 font-bold'>evidence-driven, mentor-supported, and recruiter-ready</span> ? </p>
      </div>
    </div>
  )
}

export default Home4
