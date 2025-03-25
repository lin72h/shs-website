import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Chartered Civil Engineering Services | ${siteName}`,
  description: "Expert chartered civil engineering services delivering innovative solutions for civil infrastructure and land development projects with technical precision and quality assurance.",
};

export default function CharterEngineering() {
  return (
    <>
      <PageTitle
        pageTitle="Chartered Civil Engineering"
        pageDescription="Expert civil engineering solutions delivered by qualified professionals with expertise in civil infrastructure, technical design, and project implementation to stringent industry standards."
        breadcrumbTitle="Engineering"
      />

      {/* Expert Civil Engineering Solutions Section */}
      <section className="pb-12 pt-12">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-4xl font-bold text-dark lg:text-5xl">Expert Civil Engineering Solutions</h2>
              <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-primary"></div>
              <p className="mx-auto max-w-3xl text-lg text-body-color">
                Delivering comprehensive civil engineering solutions with over 13 years of expertise in land development 
                and infrastructure projects across New Zealand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-dark">Design & Development Expertise</h3>
                </div>
                <p className="mb-4 text-body-color">
                  As a Chartered Civil Engineer, we specialize in comprehensive civil engineering design and construction 
                  monitoring, from initial concept through to project completion. Our expertise spans both consultancy 
                  and contracting roles, ensuring practical and efficient solutions.
                </p>
                <ul className="space-y-2 text-sm text-body-color">
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Full subdivision and infrastructure design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Construction monitoring and quality assurance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Innovative and sustainable solutions</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-dark">Project Recovery & Management</h3>
                </div>
                <p className="mb-4 text-body-color">
                  Our distinctive strength lies in rehabilitating challenging projects and providing expert project 
                  management. Through strategic intervention and collaborative approaches, we transform complex 
                  situations into successful outcomes.
                </p>
                <ul className="space-y-2 text-sm text-body-color">
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Project turnaround and risk management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Stakeholder coordination and communication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Efficient project delivery and oversight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Engineering Projects */}
      <section className="pb-20">
        <div className="container">
          <SectionTitle
            mainTitle="OUR PROJECTS"
            title="Featured Engineering Projects"
            paragraph="Explore our successful chartered civil engineering projects"
            center={true}
            marginBottom="60px"
          />
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Maderia Lane Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-0 overflow-hidden rounded-lg">
                <Link href="/charter-engineering/projects/maderia-lane">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/images/news/news-1.jpg"
                      alt="Maderia Lane Development"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                        <div>
                          <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">Maderia Lane</h3>
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
                <div className="flex justify-between items-center">
                  <p className="text-base text-body-color">
                    Land subdivision expertise in a residential property, transforming one lot into two.
                  </p>
                  <div className="ml-2 flex-shrink-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">1→2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lewis St, Blockhouse Bay Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-0 overflow-hidden rounded-lg">
                <Link href="/charter-engineering/projects/lewis-st-blockhouse-bay">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/images/news/news-2.jpg"
                      alt="Lewis Street Development"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                        <div>
                          <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">Lewis St., Blockhouse Bay</h3>
                          <p className="text-xs sm:text-sm text-white opacity-90">Blockhouse Bay, Auckland</p>
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
                <div className="flex justify-between items-center">
                  <p className="text-base text-body-color">
                    Complex subdivision project creating four residential lots from a single property.
                  </p>
                  <div className="ml-2 flex-shrink-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">1→4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cook Street, Howick Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-0 overflow-hidden rounded-lg">
                <Link href="/charter-engineering/projects/cook-street-howick">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/images/news/news-3.jpg"
                      alt="Cook Street Development"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="backdrop-blur-sm bg-black/30 backdrop-fallback p-4 sm:p-5 flex justify-between items-center">
                        <div>
                          <h3 className="mb-0.5 sm:mb-1 text-lg sm:text-xl font-bold text-white">Cook St., Howick</h3>
                          <p className="text-xs sm:text-sm text-white opacity-90">Howick, Auckland</p>
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
                <div className="flex justify-between items-center">
                  <p className="text-base text-body-color">
                    Coastal subdivision with heritage considerations, transforming one lot into four.
                  </p>
                  <div className="ml-2 flex-shrink-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">1→4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects CTA */}
          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-body-color">
              Interested in exploring how our chartered civil engineering expertise can benefit your project?
            </p>
            <Link
              href="/contact"
              className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-primary/90"
            >
              Contact Us About Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Civil Engineering Services Section */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

            {/* Service Card 7 - Consent Management (From Civil Work page) */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Consent Management</h3>
              <p className="mb-6 text-body-color">
                Expert navigation of regulatory requirements and consent processes, ensuring compliance and project approval.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Resource consent applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Regulatory compliance strategies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Consent condition management</span>
                </li>
              </ul>
            </div>

            {/* Service Card 8 - Contract Management (From Civil Work page) */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Contract Management</h3>
              <p className="mb-6 text-body-color">
                Comprehensive oversight of construction contracts, ensuring quality, compliance, and efficient project delivery.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Tender preparation and evaluation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Construction monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Quality assurance procedures</span>
                </li>
              </ul>
            </div>

            {/* Service Card 9 - Engineering Design (From Civil Work page) */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">Engineering Design</h3>
              <p className="mb-6 text-body-color">
                Innovative and practical design solutions for earthworks, stormwater management, and site infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-body-color">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Infrastructure and services design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Technical drawing preparation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Design optimization for efficiency</span>
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
            {/* Column 1 */}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Engineering Design & Documentation</h3>
                    <p className="text-body-color">Creating detailed engineering plans, specifications, and reports for all aspects of civil engineering projects to ensure quality and compliance.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Risk Assessment & Management</h3>
                    <p className="text-body-color">Comprehensive evaluation of project risks and development of mitigation strategies to ensure successful project delivery.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-dark">Technical Design Services</h3>
                    <p className="text-body-color">Detailed engineering design services including 3D modeling, construction drawings, specifications, and comprehensive project documentation to ensure successful implementation.</p>
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
                    <p className="text-body-color">Comprehensive post-construction support including maintenance planning, performance monitoring, and ongoing technical assistance to ensure long-term project success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Engineering Services Section */}
      <section className="pb-16 pt-16">
        <div className="container">
          <div className="mb-16">
            <SectionTitle
              title="Engineering Excellence in Every Project"
              paragraph="Our team delivers innovative engineering solutions across multiple disciplines, with specialized focus in two key areas."
              center={true}
            />
          </div>

          {/* Two-Column Services Cards */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Land Development Card */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/news/news-5.jpg"
                  alt="Land Development"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-white">Land Development</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="mb-6 text-base text-body-color">
                  Our land development engineering expertise helps transform raw land into vibrant 
                  communities and commercial centers with efficient infrastructure and sustainable design.
                </p>
                
                <div className="mb-8 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark">Residential Development</h4>
                      <p className="text-body-color">Single-family neighborhoods, apartments, and planned communities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark">Commercial Projects</h4>
                      <p className="text-body-color">Retail centers, office parks, and mixed-use developments.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark">Site Planning</h4>
                      <p className="text-body-color">Grading, drainage, utilities, and site layout optimization.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Civil Infrastructure Card */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/news/news-2.jpg"
                  alt="Civil Infrastructure"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-white">Civil Infrastructure</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="mb-6 text-base text-body-color">
                  Our civil infrastructure engineering services provide comprehensive solutions for 
                  public and private infrastructure development, focusing on sustainability and long-term value.
                </p>
                
                <div className="mb-8 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark">Transportation Systems</h4>
                      <p className="text-body-color">Roads, highways, bridges, and traffic management systems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark">Water Management</h4>
                      <p className="text-body-color">Water supply, stormwater, and wastewater systems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark">Public Facilities</h4>
                      <p className="text-body-color">Schools, hospitals, and government buildings.</p>
                    </div>
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
                  Ready to Start Your Next Engineering Project?
                </h3>
                <p className="text-lg font-medium text-white opacity-80">
                  Our team is ready to bring your vision to life with expert engineering solutions.
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