import Link from "next/link";
import { navbarData } from "@/static-data/navbar";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-b from-white to-slate-50 min-h-screen flex flex-col justify-center px-4 pb-8 pt-[80px] sm:pt-[90px]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="mb-2 inline-block text-lg font-semibold tracking-wider text-primary">
            SHS Engineering Solutions
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              NZ Civil Engineering Experts
            </span>
          </h1>
          <p className="mt-3 mx-auto max-w-[700px] text-slate-600">
            We're a NZ owned civil engineering design consultancy based in Auckland, specialising in comprehensive land development and infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-[1000px] mx-auto mt-6">
          {/* Charter Engineering Section */}
          <Link 
            href="/charter-engineering"
            className="aspect-square flex flex-col items-center justify-center p-4 bg-white hover:bg-slate-50 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark text-center">Charter Engineering</h3>
            <p className="text-xs text-slate-500 text-center mt-1 hidden sm:block">Expert engineering design services</p>
          </Link>
          
          {/* Project Management Section */}
          <Link 
            href="/project-management"
            className="aspect-square flex flex-col items-center justify-center p-4 bg-white hover:bg-slate-50 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark text-center">Project Management</h3>
            <p className="text-xs text-slate-500 text-center mt-1 hidden sm:block">Complete project oversight</p>
          </Link>
          
          {/* Civil Work Section */}
          <Link 
            href="/civil-work"
            className="aspect-square flex flex-col items-center justify-center p-4 bg-white hover:bg-slate-50 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark text-center">Civil Work</h3>
            <p className="text-xs text-slate-500 text-center mt-1 hidden sm:block">Infrastructure development</p>
          </Link>
          
          {/* Portfolio Section */}
          <Link 
            href="/portfolio"
            className="aspect-square flex flex-col items-center justify-center p-4 bg-white hover:bg-slate-50 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark text-center">Portfolio</h3>
            <p className="text-xs text-slate-500 text-center mt-1 hidden sm:block">View our completed projects</p>
          </Link>
        </div>
        
        <div className="flex justify-center mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
            <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}