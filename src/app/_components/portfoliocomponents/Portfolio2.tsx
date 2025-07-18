import React from "react";
import { Target, Sparkles, Globe } from "lucide-react";

const Portfolio2 = () => {
  return (
    <div className="mx-auto my-20 flex lg:flex-row sm:flex-col max-w-[90%] flex-row items-center justify-center gap-12">
      <div className="flex lg:max-w-[40%] sm:max-w-[70%] flex-col items-start justify-center gap-5 rounded-2xl bg-white">
        {/* right box */}
        <h1 className="text-start text-5xl font-bold">
          More Than A Resume. <span className="text-blue-600"> This Is Your Career Microsite.</span>
        </h1>
        <p className="text-justify text-lg">
          PDFs get lost.LinkedIn gets crowded. Stand out with a fully
          customizable digital portfolio that lets you highlight your work, host
          certifications, and showcase your credibility - all in one beautiful
          page.
        </p>
        <div className="flex w-full items-center justify-center gap-1 rounded-2xl bg-blue-50 p-2 px-4">
          <Target size={30} color="blue" className="rounded-full" />
          <p className=" text-blue-600 font-bold">
            share it with recruiters, grad schools, or clients in single click.
          </p>
        </div>
      </div>
      <div className="w-full lg:max-w-[40%] sm:max-w-[70%] rounded-2xl bg-violet-50 p-10 shadow-lg rotate-5 hover:rotate-0">
        {/* left box */}
        <div className="flex w-full flex-col items-start justify-center gap-5 rounded-2xl bg-white p-5">
          <div className="flex flex-row items-center justify-center gap-2">
            <Sparkles
              size={35}
              color="white"
              className="rounded-full bg-blue-400 p-2"
            />
            <div>
              <h1 className="font-bold">Your Digital Showcase</h1>
              <p className="w-full">
                Professional . Modern . Impressive
              </p>
            </div>
          </div>
          <div className="h-3 w-full rounded-xl bg-blue-200"></div>
          <div className="h-3 w-[90%] rounded-xl bg-violet-200"></div>
          <div className="h-3 w-[80%] rounded-xl bg-purple-200"></div>
          <div className="flex w-full flex-row justify-between gap-2">
            <div className="flex flex-row  items-end gap-2">
              <Globe
                size={30}
                color="white"
                className="rounded-full bg-blue-400 p-2"
              />
              <p>Live Portfolio</p>
            </div>
            <p className="rounded-2xl bg-green-100 px-2 py-1">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
