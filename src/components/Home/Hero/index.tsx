"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-b from-slate-50 to-white min-h-screen flex flex-col justify-center px-4 pb-8 pt-[120px] sm:pt-[140px] md:pt-[160px]"
    >
      {/* Subtle background pattern */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 max-w-[900px] mx-auto mt-8">
          {/* Charter Engineering Section */}
          <Link 
            href="/charter-engineering"
            className="group relative h-64 sm:h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Using local project images */}
            <div className="absolute inset-0">
              <Image 
                src="/images/portfolio/portfolio-01.jpg" 
                alt="Charter Engineering" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="font-bold text-xl md:text-2xl mb-2">Charter Engineering</h3>
              <p className="text-sm text-white/90 mb-4">Expert engineering design consultancy for comprehensive infrastructure projects</p>
              <div className="flex items-center">
                <span className="text-sm font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Project Management Section */}
          <Link 
            href="/project-management"
            className="group relative h-64 sm:h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Using local project images */}
            <div className="absolute inset-0">
              <Image 
                src="/images/portfolio/portfolio-02.jpg" 
                alt="Project Management" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="font-bold text-xl md:text-2xl mb-2">Project Management</h3>
              <p className="text-sm text-white/90 mb-4">Complete oversight of complex engineering and development projects</p>
              <div className="flex items-center">
                <span className="text-sm font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Civil Work Section */}
          <Link 
            href="/civil-work"
            className="group relative h-64 sm:h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Using local project images */}
            <div className="absolute inset-0">
              <Image 
                src="/images/portfolio/portfolio-03.jpg" 
                alt="Civil Work" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="font-bold text-xl md:text-2xl mb-2">Civil Work</h3>
              <p className="text-sm text-white/90 mb-4">Specialized infrastructure development and land engineering solutions</p>
              <div className="flex items-center">
                <span className="text-sm font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Building Construction Section */}
          <Link 
            href="/building-construction"
            className="group relative h-64 sm:h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Using local project images */}
            <div className="absolute inset-0">
              <Image 
                src="/images/portfolio/portfolio-01.jpg" 
                alt="Building Construction" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-800/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="font-bold text-xl md:text-2xl mb-2">Building Construction</h3>
              <p className="text-sm text-white/90 mb-4">Comprehensive construction services for residential, commercial and industrial projects</p>
              <div className="flex items-center">
                <span className="text-sm font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
        </div>
        
        <div className="flex justify-center mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-center font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-primary/90"
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
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
}