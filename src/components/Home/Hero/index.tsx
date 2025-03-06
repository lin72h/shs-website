"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-b from-slate-50 to-white min-h-screen flex flex-col justify-center px-4 pb-16 pt-28 sm:pt-32 md:pt-36"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="mb-3 inline-block text-lg font-semibold tracking-wider text-primary px-5 py-2 bg-primary/5 rounded-full">
            What we do
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-5 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              NZ Civil Engineering Experts
            </span>
          </h1>
          <p className="mt-6 mx-auto max-w-[700px] text-slate-600 text-xl leading-relaxed">
            We&apos;re a NZ owned civil engineering design consultancy based in Auckland, specialising in comprehensive land development and infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-[940px] mx-auto mt-10">
          {/* Charter Engineering Section */}
          <Link 
            href="/charter-engineering"
            className="group relative h-72 sm:h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Using charter engineering specific image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/services/charter_engineering.jpg.webp" 
                alt="Charter Engineering" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl md:text-3xl mb-3">Charter Engineering</h3>
              <p className="text-base text-white/95 mb-5 leading-relaxed">Expert engineering design consultancy for comprehensive infrastructure projects</p>
              <div className="flex items-center">
                <span className="text-base font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Project Management Section */}
          <Link 
            href="/project-management"
            className="group relative h-72 sm:h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Using specific project management image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/services/project_management.jpeg" 
                alt="Project Management" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl md:text-3xl mb-3">Project Management</h3>
              <p className="text-base text-white/95 mb-5 leading-relaxed">Complete oversight of complex engineering and development projects</p>
              <div className="flex items-center">
                <span className="text-base font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Civil Work Section */}
          <Link 
            href="/civil-work"
            className="group relative h-72 sm:h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Using specific civil work image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/services/civil_work.jpg" 
                alt="Civil Work" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl md:text-3xl mb-3">Civil Work</h3>
              <p className="text-base text-white/95 mb-5 leading-relaxed">Specialized infrastructure development and land engineering solutions</p>
              <div className="flex items-center">
                <span className="text-base font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Building Construction Section */}
          <Link 
            href="/building-construction"
            className="group relative h-72 sm:h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Using specific building construction sunset image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/services/building-construction-sunset.jpg" 
                alt="Building Construction" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-800/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl md:text-3xl mb-3">Building Construction</h3>
              <p className="text-base text-white/95 mb-5 leading-relaxed">Comprehensive construction services for residential, commercial and industrial projects</p>
              <div className="flex items-center">
                <span className="text-base font-medium">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
        </div>
        
        <div className="flex justify-center mt-16">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-lg bg-primary px-10 py-5 text-center font-bold text-lg text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary/90"
          >
            Get in Touch
            <svg className="ml-2 h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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