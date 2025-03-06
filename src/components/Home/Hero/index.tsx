"use client";

import Link from "next/link";
import Image from "next/image";
import { navbarData } from "@/static-data/navbar";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-b from-slate-50 to-white min-h-screen flex flex-col justify-center px-4 pb-8 pt-[80px] sm:pt-[90px]"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="mb-2 inline-block text-lg font-semibold tracking-wider text-primary px-4 py-1 bg-primary/5 rounded-full">
            SHS Engineering Solutions
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-2">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              NZ Civil Engineering Experts
            </span>
          </h1>
          <p className="mt-4 mx-auto max-w-[700px] text-slate-600 text-lg">
            We're a NZ owned civil engineering design consultancy based in Auckland, specialising in comprehensive land development and infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7 max-w-[1000px] mx-auto mt-8">
          {/* Charter Engineering Section */}
          <Link 
            href="/charter-engineering"
            className="group relative overflow-hidden aspect-square flex flex-col items-center justify-center p-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-tr-full"></div>
            
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white mb-4 group-hover:scale-105 transition-all duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-center text-xl">Charter Engineering</h3>
            <p className="text-sm text-white/80 text-center mt-2 max-w-[80%]">Expert engineering design services</p>
            
            <div className="absolute bottom-4 right-4">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Project Management Section */}
          <Link 
            href="/project-management"
            className="group relative overflow-hidden aspect-square flex flex-col items-center justify-center p-5 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-tr-full"></div>
            
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white mb-4 group-hover:scale-105 transition-all duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-center text-xl">Project Management</h3>
            <p className="text-sm text-white/80 text-center mt-2 max-w-[80%]">Complete project oversight</p>
            
            <div className="absolute bottom-4 right-4">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Civil Work Section */}
          <Link 
            href="/civil-work"
            className="group relative overflow-hidden aspect-square flex flex-col items-center justify-center p-5 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-tr-full"></div>
            
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white mb-4 group-hover:scale-105 transition-all duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-center text-xl">Civil Work</h3>
            <p className="text-sm text-white/80 text-center mt-2 max-w-[80%]">Infrastructure development</p>
            
            <div className="absolute bottom-4 right-4">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Portfolio Section */}
          <Link 
            href="/portfolio"
            className="group relative overflow-hidden aspect-square flex flex-col items-center justify-center p-5 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-tr-full"></div>
            
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white mb-4 group-hover:scale-105 transition-all duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-center text-xl">Portfolio</h3>
            <p className="text-sm text-white/80 text-center mt-2 max-w-[80%]">View our completed projects</p>
            
            <div className="absolute bottom-4 right-4">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex justify-center mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-center font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:from-primary/90 hover:to-blue-700"
          >
            Get in Touch
            <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Add subtle background grid pattern */}
      <style jsx global>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.8)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
}