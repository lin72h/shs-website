import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Building Construction Services | ${siteName}`,
  description: "Technical construction services specializing in structural engineering, commercial and industrial building systems, and quality-controlled implementation with adherence to technical standards.",
};

export default function BuildingConstructionPage() {
  return (
    <>
      <PageTitle
        pageTitle="Building Construction"
        pageDescription="Professional building construction solutions with technical precision in structural engineering, materials science, and construction methodologies, delivered by a team of highly qualified engineers and construction specialists."
        breadcrumbTitle="Building Construction"
      />

      {/* Hero Section with Overview */}
      <section className="pb-16 pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Content Column */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold text-dark">Expert Building Construction Solutions</h2>
              <p className="text-base leading-relaxed text-body-color">
                At SHS Engineering, our building construction division delivers exceptional quality across residential, commercial, 
                and industrial projects. With decades of combined experience, our team of skilled professionals ensures every project 
                is completed to the highest standards of craftsmanship and safety.
              </p>
              <p className="text-base leading-relaxed text-body-color">
                We understand that successful construction requires meticulous planning, quality materials, and expert execution. 
                Our integrated approach combines architectural vision with engineering precision, resulting in structures that are 
                not only aesthetically pleasing but also structurally sound and energy efficient. From concept to completion, 
                we work closely with clients to bring their vision to life while adhering to timelines and budgets.
              </p>
              
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Residential Construction</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Commercial Buildings</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Industrial Structures</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-color">Sustainable Building</span>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image 
                src="/images/news/news-1.jpg"
                alt="Building Construction Services"
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
            mainTitle="OUR EXPERTISE"
            title="Building Construction Services"
            paragraph="Comprehensive construction solutions with a focus on quality and sustainability"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Residential Construction</h3>
              <p className="mb-8 text-body-color">
                From custom homes to multi-family residential buildings, we deliver exceptional craftsmanship and attention to detail. 
                Our residential projects blend functionality, aesthetics, and energy efficiency to create comfortable living spaces.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-dark"
              >
                Learn More
                <span className="ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M9.3625 7.35001L6.5375 4.52501C6.44086 4.42808 6.38772 4.29887 6.38772 4.16501C6.38772 4.03115 6.44086 3.90195 6.5375 3.80501C6.63444 3.70808 6.76365 3.65493 6.8975 3.65493C7.03136 3.65493 7.16057 3.70808 7.2575 3.80501L10.6075 7.15501C10.7045 7.25195 10.7576 7.38108 10.7576 7.51501C10.7576 7.64894 10.7045 7.77807 10.6075 7.87501L7.2575 11.225C7.16057 11.322 7.03136 11.3751 6.8975 11.3751C6.76365 11.3751 6.63444 11.322 6.5375 11.225C6.44086 11.128 6.38772 10.9988 6.38772 10.865C6.38772 10.7311 6.44086 10.6019 6.5375 10.505L9.3625 7.67501V7.35001Z" fill="currentColor" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Commercial Construction</h3>
              <p className="mb-8 text-body-color">
                We create functional, attractive commercial spaces that enhance business operations. From office buildings to retail 
                centers, our team handles every aspect of construction with a focus on quality, timeline, and budget management.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-dark"
              >
                Learn More
                <span className="ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M9.3625 7.35001L6.5375 4.52501C6.44086 4.42808 6.38772 4.29887 6.38772 4.16501C6.38772 4.03115 6.44086 3.90195 6.5375 3.80501C6.63444 3.70808 6.76365 3.65493 6.8975 3.65493C7.03136 3.65493 7.16057 3.70808 7.2575 3.80501L10.6075 7.15501C10.7045 7.25195 10.7576 7.38108 10.7576 7.51501C10.7576 7.64894 10.7045 7.77807 10.6075 7.87501L7.2575 11.225C7.16057 11.322 7.03136 11.3751 6.8975 11.3751C6.76365 11.3751 6.63444 11.322 6.5375 11.225C6.44086 11.128 6.38772 10.9988 6.38772 10.865C6.38772 10.7311 6.44086 10.6019 6.5375 10.505L9.3625 7.67501V7.35001Z" fill="currentColor" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark">Industrial Construction</h3>
              <p className="mb-8 text-body-color">
                Our industrial construction services cover warehouses, manufacturing facilities, and distribution centers. We deliver 
                robust structures designed for operational efficiency, safety, and long-term performance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-dark"
              >
                Learn More
                <span className="ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M9.3625 7.35001L6.5375 4.52501C6.44086 4.42808 6.38772 4.29887 6.38772 4.16501C6.38772 4.03115 6.44086 3.90195 6.5375 3.80501C6.63444 3.70808 6.76365 3.65493 6.8975 3.65493C7.03136 3.65493 7.16057 3.70808 7.2575 3.80501L10.6075 7.15501C10.7045 7.25195 10.7576 7.38108 10.7576 7.51501C10.7576 7.64894 10.7045 7.77807 10.6075 7.87501L7.2575 11.225C7.16057 11.322 7.03136 11.3751 6.8975 11.3751C6.76365 11.3751 6.63444 11.322 6.5375 11.225C6.44086 11.128 6.38772 10.9988 6.38772 10.865C6.38772 10.7311 6.44086 10.6019 6.5375 10.505L9.3625 7.67501V7.35001Z" fill="currentColor" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="pb-16 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECTS"
            title="Our Construction Portfolio"
            paragraph="Discover some of our most impressive building construction projects"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/news/news-6.jpg" 
                  alt="Modern Residential Complex"
                  width={400}
                  height={280}
                  className="w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 transition group-hover:opacity-100"></div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-dark group-hover:text-primary">
                  Modern Residential Complex
                </h3>
                <p className="text-body-color">
                  A multi-family residential development featuring 24 units with contemporary design, energy-efficient systems, and communal facilities.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/news/news-7.jpg" 
                  alt="Corporate Office Building"
                  width={400}
                  height={280}
                  className="w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 transition group-hover:opacity-100"></div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-dark group-hover:text-primary">
                  Corporate Office Building
                </h3>
                <p className="text-body-color">
                  A 5-story office complex with LEED certification, featuring modern workspaces, conference facilities, and a rooftop garden.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/news/news-8.jpg" 
                  alt="Distribution Center"
                  width={400}
                  height={280}
                  className="w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 transition group-hover:opacity-100"></div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-dark group-hover:text-primary">
                  Distribution Center
                </h3>
                <p className="text-body-color">
                  A 50,000 sq ft warehouse and distribution facility with automated systems, energy-efficient design, and optimized logistics flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="OUR APPROACH"
            title="Construction Process"
            paragraph="How we bring your building projects to life"
            center={true}
            marginBottom="60px"
          />

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Process Step 1 */}
              <div className="relative rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">01</div>
                <div className="pt-6">
                  <h3 className="mb-4 text-xl font-bold text-dark">Project Planning</h3>
                  <p className="text-body-color">
                    We begin with thorough planning, site assessment, and requirement analysis. Our team works closely with clients to understand 
                    their vision, establish budgets, and create detailed project timelines.
                  </p>
                </div>
              </div>

              {/* Process Step 2 */}
              <div className="relative rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">02</div>
                <div className="pt-6">
                  <h3 className="mb-4 text-xl font-bold text-dark">Design & Engineering</h3>
                  <p className="text-body-color">
                    Our architectural and engineering teams collaborate to develop comprehensive design plans that meet all regulatory requirements 
                    while optimizing for functionality, aesthetics, and sustainability.
                  </p>
                </div>
              </div>

              {/* Process Step 3 */}
              <div className="relative rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">03</div>
                <div className="pt-6">
                  <h3 className="mb-4 text-xl font-bold text-dark">Construction Execution</h3>
                  <p className="text-body-color">
                    With plans approved, our construction teams begin building according to specifications. We maintain strict quality control, 
                    safety protocols, and regular progress updates throughout the construction phase.
                  </p>
                </div>
              </div>

              {/* Process Step 4 */}
              <div className="relative rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">04</div>
                <div className="pt-6">
                  <h3 className="mb-4 text-xl font-bold text-dark">Project Completion</h3>
                  <p className="text-body-color">
                    We conduct thorough inspections, address any final details, and handle all documentation for project handover. Our comprehensive 
                    warranty ensures your peace of mind long after project completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 pt-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg bg-primary">
            <div className="absolute right-0 top-0 -z-10 h-full w-full opacity-10">
              <Image 
                src="/images/portfolio/portfolio-details.jpg"
                alt="Background Pattern"
                width={1000}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-8 py-16 md:px-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-[45px]">
                  Ready to Start Your Construction Project?
                </h2>
                <p className="mb-10 text-lg text-white">
                  Our expert team is ready to help bring your building vision to reality. Contact us today for a consultation and project estimate.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary transition hover:bg-opacity-90 md:px-9"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/portfolio"
                    className="rounded-md border border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-primary md:px-9"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 