'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export default function BuildingConstructionPage() {
  return (
    <>
      <PageTitle
        pageTitle="Building Construction"
        pageDescription="Professional building construction solutions with technical precision in structural engineering, materials science, and construction methodologies, delivered by a team of highly qualified engineers and construction specialists."
        breadcrumbTitle="Building Construction"
      />

      {/* Building Construction Overview */}
      <section className="pb-20 pt-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
              Our Building Construction Projects
            </h2>
            <p className="text-lg leading-relaxed text-body-color">
              At SHS Engineering, we deliver exceptional building construction solutions across Auckland.
              Our experienced team provides comprehensive services from design and planning to construction
              and project management. With a focus on quality craftsmanship and attention to detail, we ensure
              every project meets the highest standards. Browse our featured projects below to see our expertise in action.
            </p>
            <div className="mt-6">
              <Link
                href="/project-management" 
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Explore our Project Management Services
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Building Projects */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
            
            {/* 347 Pinecrest Dr Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-0 overflow-hidden rounded-lg">
                <Link href="/building-construction/projects/347-pinecrest-dr">
                  <div className="relative h-[300px] w-full">
                <Image
                      src="/images/constructions/construction-1/1461742336373_.pic.jpg"
                      alt="347 Pinecrest Dr"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                        <div>
                          <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">347 Pinecrest Dr</h3>
                          <p className="text-xs sm:text-sm text-white opacity-90">Auckland</p>
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
                  Modern residential construction with advanced architectural design and premium finishes in Auckland.
                </p>
              </div>
            </div>

            {/* 1 Parkway Drive, Rosedale Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-0 overflow-hidden rounded-lg">
                <Link href="/building-construction/projects/parkway-drive-rosedale">
                  <div className="relative h-[300px] w-full">
                <Image
                      src="/images/constructions/construction-2/Unknown.jpeg"
                      alt="1 Parkway Drive, Rosedale"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                        <div>
                          <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">1 Parkway Drive</h3>
                          <p className="text-xs sm:text-sm text-white opacity-90">Rosedale, Auckland</p>
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
                  Commercial office development with contemporary design and sustainable building practices in Rosedale.
                </p>
              </div>
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
                  Ready to Start Your Building Project?
                </h3>
                <p className="text-lg font-medium text-white opacity-80">
                  Our team of expert construction professionals is ready to bring your vision to life.
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