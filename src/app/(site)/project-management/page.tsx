import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Project Management Services | ${siteName}`,
  description: "Professional land development project management services",
};

export default function ProjectManagement() {
  return (
    <>
      <PageTitle
        pageTitle="Project Management"
        pageDescription="Comprehensive land development project management services that ensure successful project delivery through strategic planning, efficient execution, and careful monitoring."
        breadcrumbTitle="Project Management"
      />

      {/* Hero Section with Overview */}
      <section className="pb-16 pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Content Column */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold text-dark">Land Development Project Management</h2>
              <p className="text-base leading-relaxed text-body-color">
                Our comprehensive project management services ensure your land development projects are delivered 
                on time, within budget, and to the highest quality standards. We handle all aspects of the 
                project lifecycle, from initial planning and resource consent to final completion.
              </p>
              
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Development Teams Management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Design Management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Resource Consent Process</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Tendering & Contracting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Engineer to the Project</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Project Completion</span>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image 
                src="/images/services/service-01.jpg"
                alt="Land Development Project Management"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-gray-50 pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="OUR SERVICES"
            title="Land Development Project Management"
            paragraph="Comprehensive project management services for all aspects of land development"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Development Teams</h3>
              <p className="mb-6 text-body-color">
                We arrange and manage comprehensive development teams, bringing together specialists in 
                engineering, architecture, planning, and construction to ensure your project&apos;s success.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Team coordination and communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Specialist consultant management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Performance monitoring</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Resource Consent Process</h3>
              <p className="mb-6 text-body-color">
                Our team has extensive experience managing the resource consent process, 
                ensuring compliance with regulations and minimizing delays.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Application preparation and submission</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Agency coordination and negotiation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Due diligence and compliance checks</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Design Management</h3>
              <p className="mb-6 text-body-color">
                We oversee the development design process, ensuring that all aspects of the project 
                are well-coordinated and align with your vision and requirements.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Design concept development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Technical specification oversight</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Quality assurance and compliance</span>
                </li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Tendering & Contracting</h3>
              <p className="mb-6 text-body-color">
                Our expertise in tendering and contracting ensures that you receive competitive bids 
                and form strong contractual relationships with reliable contractors.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Tender document preparation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Bid evaluation and contractor selection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Contract negotiation and administration</span>
                </li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Engineer to the Project</h3>
              <p className="mb-6 text-body-color">
                As Engineer to the Project, we provide technical oversight throughout the construction phase, 
                ensuring that all work is completed to specification and the highest standards.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Quality control and site inspections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Technical issue resolution</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Construction progress monitoring</span>
                </li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Project Completion</h3>
              <p className="mb-6 text-body-color">
                We manage the crucial final stages of your project, from handover and commissioning 
                to final documentation and compliance certification.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Final inspections and compliance checks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Documentation and certification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Client handover and training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Types Section */}
      <section className="pb-16 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="PROJECT TYPES"
            title="Specialized Development Expertise"
            paragraph="We provide land development project management services across various development types"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Development Type 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-02.jpg"
                  alt="Urban Subdivision"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">Urban Subdivision</h3>
                  <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">Comprehensive project management for urban subdivision developments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Type 2 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-03.jpg"
                  alt="Rural Subdivision"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">Rural Subdivision</h3>
                  <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">Expert management of rural land subdivision projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Type 3 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-01.jpg"
                  alt="Housing Developments"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">Housing Developments</h3>
                  <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">Full project management for residential housing developments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Type 4 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-03.jpg"
                  alt="Business Developments"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">Business Developments</h3>
                  <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">Specialized management for commercial and business developments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Type 5 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-02.jpg"
                  alt="New/Changed Land Uses"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">New/Changed Land Uses</h3>
                  <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">Management of land use changes and repurposing projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Type 6 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-01.jpg"
                  alt="Existing Use Rights"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">Existing Use Rights</h3>
                  <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">Expert navigation of existing use rights applications and processes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Type 7 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-03.jpg"
                  alt="Private Plan Changes"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">Private Plan Changes</h3>
                  <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">Management of private plan change processes and applications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Type 8 - Due Diligence */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-02.jpg"
                  alt="Due Diligence"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">Due Diligence</h3>
                  <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">Comprehensive due diligence services for land development projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary pb-14 pt-14">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-2/3">
              <div className="mb-8 lg:mb-0">
                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                  Ready to Start Your Next Development Project?
                </h3>
                <p className="text-lg font-medium text-white opacity-80">
                  Our team of expert project managers is ready to bring your land development vision to life.
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