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
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="mb-2 text-xl font-bold text-white">Don Buck Road</h3>
                      <p className="text-sm text-white opacity-90">Massey, Auckland</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 pt-4">
                <p className="mb-4 text-base text-body-color">
                  Major earthworks and civil engineering project for a multi-lot subdivision with mixed-use housing in Massey, Auckland.
                </p>
                <Link
                  href="/civil-work/projects/don-buck"
                  className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80"
                >
                  View Project Details
                  <span className="ml-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
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
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="mb-2 text-xl font-bold text-white">Weranui Road</h3>
                      <p className="text-sm text-white opacity-90">Waiwera</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 pt-4">
                <p className="mb-4 text-base text-body-color">
                  Technical excellence in complex terrain at 18 Weranui Road, Waiwera, completed in February 2023.
                </p>
                <Link
                  href="/civil-work/projects/weranui-road"
                  className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80"
                >
                  View Project Details
                  <span className="ml-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
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
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="mb-2 text-xl font-bold text-white">Upper Harbour Drive</h3>
                      <p className="text-sm text-white opacity-90">Auckland North Shore</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-6 pt-4">
                <p className="mb-4 text-base text-body-color">
                  Strategic infrastructure development project located in Auckland&apos;s growing North Shore area.
                </p>
                <Link
                  href="/civil-work/projects/upper-harbour-drive"
                  className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80"
                >
                  View Project Details
                  <span className="ml-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
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
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">791 State Highway 16</h3>
                    <p className="text-sm text-white opacity-90">Kumeu, Auckland</p>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <p className="mb-4 text-body-color">
                    Strategic commercial development with comprehensive infrastructure solutions in Kumeu, Auckland.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View Project Details
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
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
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">88 Cook Street</h3>
                    <p className="text-sm text-white opacity-90">Auckland CBD</p>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <p className="mb-4 text-body-color">
                    Urban revitalization and mixed-use development in Auckland&apos;s CBD with innovative engineering solutions.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View Project Details
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 pb-20 pt-16">
        <div className="container">
          <SectionTitle
            title="Our Civil Engineering Services"
            paragraph="Comprehensive solutions for your engineering and development needs"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Feasibility Studies</h3>
              <p className="text-body-color">
                Comprehensive evaluation of development potential, constraints, and opportunities to ensure project viability.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Engineering Design</h3>
              <p className="text-body-color">
                Innovative and practical design solutions for earthworks, stormwater management, and site infrastructure.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Consent Management</h3>
              <p className="text-body-color">
                Expert navigation of regulatory requirements and consent processes, ensuring compliance and project approval.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Contract Management</h3>
              <p className="text-body-color">
                Comprehensive oversight of construction contracts, ensuring quality, compliance, and efficient project delivery.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Earthworks Management</h3>
              <p className="text-body-color">
                Precise calculation and effective management of cut and fill operations, optimizing site development.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Stormwater Solutions</h3>
              <p className="text-body-color">
                Advanced stormwater management systems designed for water quality, quantity control, and environmental protection.
              </p>
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
    </>
  );
} 