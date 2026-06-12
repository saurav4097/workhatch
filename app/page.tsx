"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image'
export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">

      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 border-b bg-white/80 backdrop-blur sticky top-0 z-50">

        <div className="flex items-center gap-2 text-xl font-bold">
          <img
  src="/workhatchS.png"
  alt="Logo"
  className="w-8 h-8 rounded-full object-cover"
/>
          <span>
            Work<span className="text-green-600">Hatch</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button
          onClick={() => router.push("/contact")}
           className="text-gray-600 hover:text-black font-medium">
            About Us
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-12">

        {/* BIG BRAND */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Work<span className="text-green-600">Hatch</span>
        </h1>

        <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
          Hatch Your Career with <span className="text-green-600">Real Work</span>
        </h2>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Work on real company projects, build proof of skills, and get hired —
          without rejections or referrals.
        </p>

      </section>

    {/* HIRED BY STARTUPS PANEL */}
      <section className="px-6 md:px-12 pb-20 grow flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <p className="text-xs uppercase font-bold tracking-widest text-gray-400 text-center mb-4">
            Active Hiring Track
          </p>
          
          <div
            onClick={() => router.push("/roles/role1")}
            className="group relative cursor-pointer border-2 border-gray-200 hover:border-green-500 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:scale-[1.01] transition-all bg-white flex flex-col justify-between"
          >
            {/* Top Row: Startup Information & Logo */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border shrink-0">
                  <img
                    src="/role1_logo.jpeg"
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                    Hiring Partner: <span className="text-gray-900 font-extrabold">Happy folks club</span>
                  </h4>
                  <h3 className="text-2xl font-extrabold text-gray-900 mt-0.5 tracking-tight group-hover:text-green-600 transition-colors">
                    Human Resources (HR) 
                  </h3>
                </div>
              </div>
              
              <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-bold tracking-wide border border-green-200 shrink-0 hidden sm:inline-block">
                Bangalore (On-site)
              </span>
            </div>

           

            {/* Bottom Row: Metadata Tags & Action Trigger */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] bg-gray-100 font-semibold text-gray-600 px-2.5 py-1 rounded-lg">
                  Immediate Hiring
                </span>
                
              </div>

              <span className="text-sm text-green-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-2 sm:mt-0">
                Begin Assessment Work &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gray-900 text-white py-10 px-6 text-center">

        <h3 className="text-lg font-semibold mb-4">
          Work<span className="text-green-500">Hatch</span>
        </h3>

        <p className="mb-6 text-sm text-gray-400">
          Building real skills through real work.
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-6 text-xl">

          <a href="https://www.linkedin.com/company/workhatch/" className="hover:text-green-400"><FaLinkedin /></a>
          <a href="https://www.instagram.com/theworkhatch/" className="hover:text-green-400"><FaInstagram /></a>
          <a href="#" className="hover:text-green-400"><FaXTwitter /></a>
          <a href="#" className="hover:text-green-400"><FaYoutube /></a>

        </div>

        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} WorkHatch. All rights reserved.
        </p>

      </footer>

    </main>
  );
}