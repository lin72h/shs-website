import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Civil Engineering Services | ${siteName}`,
  description: "Expert civil engineering services for land development, infrastructure, and flood assessments with 40 years of experience",
};

export default function CivilWorkPage() {
  return (
    <>
      <PageTitle
        pageTitle="Civil Engineering"
        pageDescription="Comprehensive civil engineering solutions for development feasibility, design, consents, contract management, and construction, delivered by our experienced team of qualified engineers."
        breadcrumbTitle="Civil Engineering"
      />

      {/* Hero Section with Overview */}
      <section className="pb-16 pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Content Column */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold text-dark">Expert Civil Engineering Solutions</h2>
              <p className="text-base leading-relaxed text-body-color">
                We have a large team of qualified civil engineers, experienced in all aspects of land development. Our engineers 
                use the latest civil engineering technologies and techniques; we pride ourselves on coming up with innovative 
                approaches that lead to environmentally-friendly, cost-effective solutions – from relatively simple low impact 
                design stormwater solutions to more complex value engineering earthworks modelling, we have expertise in them all.
              </p>
              <p className="text-base leading-relaxed text-body-color">
                With 40 years of civil engineering experience, we understand the need to balance commercial and environmental concerns. 
                Our civil engineers work throughout Auckland and Northland, and are among the country&apos;s most adept industrial problem solvers. 
                That means, clients can be confident in our ability to assess, design and go beyond expectations to deliver creative and 
                inspired solutions. We are always looking for measurable ways to add value to projects.
              </p>
              
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Development Feasibility</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Subdivision & Land Development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Infrastructure Design</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Flood Assessments & Modelling</span>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image 
                src="/images/news/news-4.jpg"
                alt="Civil Engineering Services"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="OUR EXPERTISE"
            title="Civil Engineering Services"
            paragraph="Comprehensive civil engineering solutions for all aspects of land development"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Development Feasibility</h3>
              <p className="mb-6 text-body-color">
                Comprehensive analysis and assessment of development projects to determine viability, 
                constraints, and opportunities from both engineering and commercial perspectives.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Preliminary engineering assessments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Cost estimation and efficiency analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Regulatory compliance evaluation</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Subdivision & Land Development</h3>
              <p className="mb-6 text-body-color">
                Expert planning and engineering for land subdivision projects, ensuring optimal 
                land utilization and compliance with regulatory requirements.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Urban and rural subdivision engineering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Master planning and staged development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Subdivision completion certification</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Earthworks & Sediment Control</h3>
              <p className="mb-6 text-body-color">
                Specialized engineering for earthworks projects with a focus on efficient land 
                transformation while minimizing environmental impact through effective sediment control.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Earthworks design and optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Erosion and sediment control plans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Environmental compliance monitoring</span>
                </li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Roading & Infrastructure</h3>
              <p className="mb-6 text-body-color">
                Comprehensive design and engineering of road networks and essential infrastructure 
                including stormwater, wastewater, water, and utility services.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Road design and street networks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Utility infrastructure planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Integrated service coordination</span>
                </li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Stormwater Management</h3>
              <p className="mb-6 text-body-color">
                Innovative stormwater solutions including attenuation systems, treatment wetlands, 
                ponds, and specialized devices to manage water flow and minimize environmental impact.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Treatment wetland design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Low impact design solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Stormwater maintenance plans</span>
                </li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">
                <Link href="/flood-assessments" className="hover:text-primary">Flood Assessments & Modelling</Link>
              </h3>
              <p className="mb-6 text-body-color">
                Expert flood risk assessment and advanced hydraulic modelling to identify flood hazards, 
                develop mitigation strategies, and ensure development safety.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Hydraulic modelling and analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Flood hazard mapping</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>
                    <Link href="/flood-reports" className="hover:text-primary">Comprehensive flood hazard reports</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pb-16 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="OUR APPROACH"
            title="Comprehensive Civil Engineering Process"
            paragraph="From initial consultation to completion, our civil engineers work closely with planners, surveyors and other experts"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Process Step 1 */}
            <div className="relative rounded-lg bg-white p-8 shadow-lg">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                1
              </div>
              <h3 className="mb-4 mt-2 text-xl font-bold text-dark">Initial Consultation</h3>
              <p className="text-body-color">
                We begin with a comprehensive consultation to understand your project requirements, site constraints, 
                and development goals. This includes development and engineering infrastructure advice tailored to your project.
              </p>
            </div>

            {/* Process Step 2 */}
            <div className="relative rounded-lg bg-white p-8 shadow-lg">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                2
              </div>
              <h3 className="mb-4 mt-2 text-xl font-bold text-dark">Design & Planning</h3>
              <p className="text-body-color">
                Our engineering team develops concept, subdivision, and master plan designs, creating detailed 
                earthworks and infrastructure designs, complete with comprehensive engineering plans and reports.
              </p>
            </div>

            {/* Process Step 3 */}
            <div className="relative rounded-lg bg-white p-8 shadow-lg">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                3
              </div>
              <h3 className="mb-4 mt-2 text-xl font-bold text-dark">Consent & Approvals</h3>
              <p className="text-body-color">
                We manage project consultation with councils and key stakeholders, providing comprehensive inputs 
                for resource consent applications to ensure a smooth approval process.
              </p>
            </div>

            {/* Process Step 4 */}
            <div className="relative rounded-lg bg-white p-8 shadow-lg">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                4
              </div>
              <h3 className="mb-4 mt-2 text-xl font-bold text-dark">Construction & Completion</h3>
              <p className="text-body-color">
                Our team oversees civil earthworks and infrastructure construction, providing tender management, 
                construction supervision, certification of works, and final as-built documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gray-50 pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FULL SERVICE OFFERING"
            title="Additional Civil Engineering Services"
            paragraph="Our civil engineering team provides a comprehensive range of specialized services"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Collaborative Engineering Services</h3>
                    <p className="text-body-color">Providing specialized engineering expertise on projects being undertaken by others, ensuring integrated solutions and seamless collaboration.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Topographical & UAV Surveys</h3>
                    <p className="text-body-color">Utilizing advanced UAV (drone) technology for aerial surveys, providing precise data for engineering design and project planning.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Engineering Design & Documentation</h3>
                    <p className="text-body-color">Creating detailed engineering plans, specifications, and reports for all aspects of civil engineering projects to ensure quality and compliance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Tender & Construction Management</h3>
                    <p className="text-body-color">Comprehensive management of the tendering process and construction phases, ensuring projects are delivered on time, within budget, and to specification.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Certification & Documentation</h3>
                    <p className="text-body-color">Providing certification of civil construction works, engineering as-built plans, and preparing comprehensive stormwater management and maintenance plans.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Post-Construction Services</h3>
                    <p className="text-body-color">Managing subdivision completion certification (S224c), post-construction maintenance, and ongoing project management consultations to ensure long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="don-buck-development" className="pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="Don Buck"
            paragraph="Major earthworks and civil engineering project in Massey, Auckland"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Project Overview</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 44 Don Buck Road in Massey, Auckland, this comprehensive civil engineering project 
                involves significant earthworks operations, infrastructure development, and site preparation for 
                a mixed-use development. Undertaken for H.S.W HOLDINGS LTD, the project includes a multi-lot subdivision 
                designed for standalone homes, terraced housing, and duplex multi-unit dwellings, showcasing our ability 
                to manage complex residential development requirements.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Details</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 font-bold">Client:</span>
                      <span>H.S.W HOLDINGS LTD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold">Location:</span>
                      <span>44 DON BUCK ROAD, MASSEY</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold">Development:</span>
                      <span>Multi-lot subdivision with mixed-use housing</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Housing Types</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li>• Standalone residential units</li>
                    <li>• Terraced housing configurations</li>
                    <li>• Duplex multi-unit dwellings</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Key Earthwork Volumes</h4>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <span className="block text-lg font-bold text-primary">1,835 m³</span>
                    <span className="text-sm text-body-color">Largest Cut Volume</span>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <span className="block text-lg font-bold text-primary">1,605 m³</span>
                    <span className="text-sm text-body-color">Largest Fill Volume</span>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <span className="block text-lg font-bold text-primary">5,774 m³</span>
                    <span className="text-sm text-body-color">Total Earth Movement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid gap-4">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/images/portfolio/don_buck_1.JPG"
                  alt="Don Buck Aerial View"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/don_buck_2.JPG"
                    alt="Earthworks Progress"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/don_buck_3.JPG"
                    alt="Construction Progress"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upper Harbour Drive Project Section */}
      <section id="upper-harbour-development" className="bg-gray-50 pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="Upper Harbour Drive Development"
            paragraph="Complex 16-lot subdivision on challenging terrain in Greenhithe, Auckland"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Images */}
            <div className="grid gap-4">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/images/portfolio/don_buck_4.JPG"
                  alt="Upper Harbour Drive Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/don_buck_5.JPG"
                    alt="Upper Harbour Drive Earthworks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/don_buck_6.JPG"
                    alt="Upper Harbour Drive Construction"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Project Rescue and Completion</h3>
              <p className="text-base leading-relaxed text-body-color">
                This challenging 16-lot subdivision at 236 Upper Harbour Drive in Greenhithe presented 
                significant technical challenges with its steep topography, complex site conditions, and historical 
                geotechnical stability issues. Our engineering team was brought in at a critical moment when the project 
                was at risk of failure, with contractors threatening to abandon the site and client&apos;s pre-sales in jeopardy.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Challenges</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Steep, complex terrain</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Historical geotechnical stability issues</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Previous poor project management</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <h4 className="mb-2 font-semibold text-dark">Our Comprehensive Services</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Water & wastewater design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stormwater detention tank design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Construction project & contract management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Earthworks construction</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>224c process management & certification</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-primary/10 p-5">
                <h4 className="mb-3 font-semibold text-dark">Project Rescue Success Story</h4>
                <p className="text-body-color leading-relaxed">
                  When we took over this project, it was in a critical state. The previous project manager had 
                  created a situation where contractors were prepared to abandon the site, which would have caused 
                  the client&apos;s pre-sales to fall through. The project lacked crucial design elements and was facing 
                  multiple compliance issues.
                </p>
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Our Solution</h5>
                    <p className="text-sm text-body-color">
                      Through our technical expertise, we completed the missing designs, implemented proper project 
                      management protocols, and worked closely with contractors to rebuild confidence in the project. 
                      Our team managed the complex certification process and successfully obtained the 224c certificate 
                      and titles in time for the client&apos;s pre-sales to proceed as planned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weranui Road Project Section */}
      <section id="weranui-road" className="pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="Weranui Road"
            paragraph="Development project at 18 Weranui Road, Waiwera completed in October 2017"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Technical Excellence in Complex Terrain</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 18 Weranui Road in Waiwera (Lot 3 DP 428671), this development project was completed
                in October 2017. The project required sophisticated engineering solutions to address the site's
                specific requirements while maintaining the highest standards of quality.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Location: 18 Weranui Road, Waiwera</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Legal Description: Lot 3 DP 428671</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Completion: October 2017</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Engineering Services</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive civil engineering design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full utility infrastructure design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Earthworks & finished surface design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Project & construction management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-primary/10 p-5">
                <h4 className="mb-3 font-semibold text-dark">Technical Achievement</h4>
                <div className="mt-2 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Geotechnical Expertise</h5>
                    <p className="text-body-color leading-relaxed">
                      The project featured complex geotechnical infrastructure that required specialized oversight 
                      during construction. Our team managed the construction process to ensure all works were 
                      executed precisely according to design specifications. We facilitated close collaboration 
                      between contractors and certifying engineers, resulting in full approval from both the 
                      Geotechnical Engineer and Civil Engineer. Our careful management of the 224c certification 
                      process ensured all technical requirements were met for final approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid gap-4">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/images/portfolio/civil_work_new_1.jpg"
                  alt="Weranui Road Development Overview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/civil_work_new_2.jpeg"
                    alt="Weranui Road Earthworks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/civil_work_new_3.jpeg"
                    alt="Weranui Road Construction"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 791 State Highway 16 Project Section */}
      <section id="state-highway-16" className="bg-gray-50 pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="791 State Highway 16"
            paragraph="Strategic commercial development with comprehensive infrastructure solutions in Kumeu, Auckland"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Strategic Commercial Development</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 791 State Highway 16 in Kumeu, this significant commercial development project 
                required comprehensive civil engineering solutions to create functional commercial spaces 
                while addressing the site's specific challenges. Our team delivered innovative solutions for 
                stormwater management, earthworks, and infrastructure development to meet both regulatory 
                requirements and client objectives.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Location: 791 State Highway 16, Kumeu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Commercial development project</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Infrastructure integration with SH16</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Services Provided</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive site assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Civil engineering design & planning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Traffic management solutions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-lg font-semibold text-dark">Project Challenges & Solutions</h4>
                
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Key Challenges</h5>
                    <p className="text-sm text-body-color">
                      The project presented several challenges including highway access requirements, complex 
                      stormwater management needs, and integration with existing infrastructure. 
                      Additionally, coordination with NZTA was required for aspects relating to State Highway 16.
                    </p>
                  </div>
                </div>
              
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Our Solution</h5>
                    <p className="text-sm text-body-color">
                      Our team developed a comprehensive civil engineering plan that addressed all regulatory 
                      requirements while optimizing the site&apos;s commercial potential. We implemented innovative 
                      stormwater solutions, designed efficient traffic flow patterns, and worked closely with 
                      authorities to ensure all highway access requirements were met to the highest standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="flex flex-col space-y-6">
              {/* Main Image */}
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/images/portfolio/civil_work_1.jpg"
                  alt="791 State Highway 16 Development Overview"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Additional Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/civil_work_2.jpg"
                    alt="State Highway 16 Site Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/civil_work_3.jpg"
                    alt="State Highway 16 Infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 88 Cook Street Project Section */}
      <section id="cook-street" className="pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="88 Cook Street"
            paragraph="Urban revitalization and mixed-use development in Auckland CBD"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Urban Development Excellence</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 88 Cook Street in Auckland CBD, this ambitious mixed-use development project 
                showcases our expertise in urban civil engineering. The project involved transforming an 
                underutilized inner-city site into a vibrant mixed-use space, requiring significant 
                infrastructure modifications, stormwater solutions, and careful integration with the 
                surrounding urban environment.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Location: 88 Cook Street, Auckland CBD</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Mixed-use urban development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Sustainable urban design principles</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Services Provided</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Urban infrastructure assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stormwater management solutions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Civil engineering design & implementation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-lg font-semibold text-dark">Urban Redevelopment Challenges</h4>
                
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Complex Urban Context</h5>
                    <p className="text-sm text-body-color">
                      The project presented significant challenges due to its central urban location, including 
                      existing underground infrastructure, confined working spaces, and the need to minimize 
                      disruption to neighboring properties and businesses. The site also required extensive 
                      coordination with Auckland Council and utility providers.
                    </p>
                  </div>
                </div>
              
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Innovative Solutions</h5>
                    <p className="text-sm text-body-color">
                      Our team developed innovative solutions that addressed the unique urban challenges, including 
                      advanced stormwater management systems integrated with the building design, carefully 
                      sequenced construction to minimize disruption, and close collaboration with all stakeholders. 
                      We implemented sustainable design principles that enhanced the project&apos;s environmental performance 
                      while meeting all regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="flex flex-col space-y-6">
              {/* Main Image */}
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/images/portfolio/civil_work_4.jpg"
                  alt="88 Cook Street Development Overview"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Additional Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/civil_work_5.jpg"
                    alt="Cook Street Urban Infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/portfolio/civil_work_6.jpg"
                    alt="Cook Street Development Progress"
                    fill
                    className="object-cover"
                  />
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