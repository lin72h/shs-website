'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export default function CivilWorkPage() {
  return (
    <>
      <PageTitle
        pageTitle="Civil Engineering"
        pageDescription="Comprehensive civil engineering solutions for development feasibility, design, consents, contract management, and construction, delivered by our experienced team of qualified engineers."
        breadcrumbTitle="Civil Engineering"
      />

      {/* Civil Engineering Overview */}
      <section className="pb-20 pt-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
              Our Civil Engineering Projects
            </h2>
            <p className="text-lg leading-relaxed text-body-color">
              At SHS Engineering, we deliver exceptional civil engineering solutions across Auckland. 
              Our experienced team provides comprehensive services from development feasibility and 
              design to consents, contract management, and construction. Browse our featured projects 
              below to see our expertise in action.
            </p>
            <div className="mt-6">
              <Link 
                href="/charter-engineering" 
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Explore our detailed Civil Engineering Services
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Civil Projects */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Don Buck Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-0 overflow-hidden rounded-lg">
                <Link href="/civil-work/projects/don-buck">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/images/portfolio/Project-1/don_buck_1.JPG"
                      alt="Don Buck Development"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                        <div>
                          <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">Don Buck Road</h3>
                          <p className="text-xs sm:text-sm text-white opacity-90">Massey, Auckland</p>
                        </div>
                        <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white flex-shrink-0 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 pt-4">
                <p className="text-base text-body-color">
                  Major earthworks and civil engineering project for a multi-lot subdivision with mixed-use housing in Massey, Auckland.
                </p>
              </div>
            </div>

            {/* Weranui Road Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-0 overflow-hidden rounded-lg">
                <Link href="/civil-work/projects/weranui-road">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/images/portfolio/Project-2/x_571741642098_.pic.jpg"
                      alt="Weranui Road Development"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                        <div>
                          <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">Weranui Road</h3>
                          <p className="text-xs sm:text-sm text-white opacity-90">Waiwera</p>
                        </div>
                        <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white flex-shrink-0 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 pt-4">
                <p className="text-base text-body-color">
                  Technical excellence in complex terrain at 18 Weranui Road, Waiwera, completed in February 2023.
                </p>
              </div>
            </div>

            {/* Upper Harbour Drive Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-0 overflow-hidden rounded-lg">
                <Link href="/civil-work/projects/upper-harbour-drive">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/images/portfolio/Project-3/xx_1261741642199_.pic.jpg"
                      alt="Upper Harbour Drive Development"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                        <div>
                          <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">Upper Harbour Drive</h3>
                          <p className="text-xs sm:text-sm text-white opacity-90">Auckland North Shore</p>
                        </div>
                        <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white flex-shrink-0 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 pt-4">
                <p className="text-base text-body-color">
                  Strategic infrastructure development project located in Auckland&apos;s growing North Shore area.
                </p>
              </div>
            </div>

            {/* 791 State Highway 16 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="/civil-work/projects/state-highway-16">
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src="/images/portfolio/Project-4/x_781741642126_.pic.jpg"
                    alt="791 State Highway 16 Project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                      <div>
                        <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">791 State Highway 16</h3>
                        <p className="text-xs sm:text-sm text-white opacity-90">Kumeu, Auckland</p>
                      </div>
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white flex-shrink-0 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <p className="text-body-color">
                    Strategic commercial development with comprehensive infrastructure solutions in Kumeu, Auckland.
                  </p>
                </div>
              </Link>
            </div>

            {/* 88 Cook Street */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="/civil-work/projects/cook-street">
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src="/images/portfolio/Project-5/xx_1301741642206_.pic.jpg"
                    alt="88 Cook Street Project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                      <div>
                        <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">88 Cook Street</h3>
                        <p className="text-xs sm:text-sm text-white opacity-90">Auckland CBD</p>
                      </div>
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white flex-shrink-0 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <p className="text-body-color">
                    Urban revitalization and mixed-use development in Auckland&apos;s CBD with innovative engineering solutions.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary/90 to-primary pb-14 pt-14">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-2/3">
              <div className="mb-8 lg:mb-0">
                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                  Ready to Start Your Civil Engineering Project?
                </h3>
                <p className="text-lg font-medium text-white opacity-80">
                  Our team of expert civil engineers is ready to bring your development vision to life.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="flex flex-wrap justify-center lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-center text-base font-semibold text-primary transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @supports not (backdrop-filter: blur(8px)) {
          .backdrop-fallback {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }
        }
      `}</style>
    </>
  );
} 