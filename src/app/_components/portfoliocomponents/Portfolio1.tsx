import { CheckCircle , Rocket } from "lucide-react";
import React from "react";

const Portfolio1 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-violet-50">
      <div className="flex max-w-[70%] flex-col items-center justify-center gap-5 rounded-2xl bg-white p-15 shadow-lg">
        <h1 className=" flex flex-col text-center lg:text-6xl text-4xl font-bold">
          <span>Build a portfolio</span>
          <span className="text-blue-600"> Recruiters Can't Ignore</span>
        </h1>
        <p className="text-center lg:text-2xl text-xl">
          Transform your projects, certifications, and technical skills into a
          world-class digital showcase — custom-build to land global job offers
          and grad school admits.
        </p>
        <div className="group flex flex-row items-center justify-center gap-2 rounded-2xl bg-blue-500 p-3 px-10 
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:shadow-xl">
          <Rocket
            size={30}
            color="white"
            className="group-hover:animate-[bounceUpDown_0.6s_ease-in-out_infinite]"
          />
          <a href="/#" className="text-xl text-white">
            Create my showcase profile
          </a>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-lg">
          <CheckCircle  size={20} color="green" />
          <p>Join elite learners. No design skills required</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio1;
