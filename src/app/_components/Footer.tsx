"use client";

import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#0a2039] text-white">
      <div className="flex  max-w-[90%] mx-auto justify-between py-6 border-b border-blue-600">
        <div className="flex flex-col gap-2 max-w-1/3">
          <h2 className="text-2xl font-semibold text-blue-300">CareerLaunch</h2>
          <div>
            <p>Building careers with skill, peoof, visibility.</p>
            <p>Empowering learners to become globally employable </p>
          </div>
        </div>
        <div className="max-w-1/3 space-y-2">
          <h3 className="text-xl ">Quick links</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>
              <a href="/about" className=" hover:text-white">About</a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-white">Contact</a>
            </li>
            <li>
              <a href="/Blog" className="hover:text-white">Blog</a>
            </li>
            <li>
              <a href="/Careers" className="hover:text-white">Careers</a>
            </li>
          </ul>
        </div>
        <div className="max-w-1/3 flex flex-col gap-2">
          <h3 className="text-xl">Connect with Us</h3>
          <div className="flex gap-4 mt-2 ">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={44}
                className="text-white transition-colors hover:text-blue-600 bg-blue-300 p-1   rounded-full"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                size={44}
                className="text-white transition-colors hover:text-blue-600 bg-blue-300 p-1  rounded-full"
              />
            </a>
            <a href="mailto:someone@example.com">
              <Mail
                size={44}
                className="text-white transition-colors hover:text-blue-600 bg-blue-300 p-1  rounded-full"
              />
            </a>
          </div>
          <p>
            Join our community of learners, mentors, and industry professionals.
          </p>
        </div>
      </div>
      <div className="flex justify-between max-w-[90%] mx-auto py-6">
        <p className="text-center text-sm text-blue-100  max-w-[60%]">
          &copy; {new Date().getFullYear()} CareerLaunch. All rights reserved.
        </p>
        <div className="flex justify-center gap-3 max-w-[40%]">
            <a href="/privacy" className=" hover:text-white">Privacy policy</a>
            <a href="/terms" className=" hover:text-white">Terms of service</a>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
