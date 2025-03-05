import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Charter Engineering Services | ${siteName}`,
  description: "Professional charter engineering services for your projects",
};

export default function CharterEngineering() {
  return (
    <>
      <PageTitle
        pageTitle="Charter Engineering"
        pageDescription="Expert engineering solutions tailored to your needs. We provide comprehensive charter engineering services with a focus on innovation and excellence."
      />

      {/* Main Engineering Services Section */}
      <section className="pb-24 pt-[110px]">
        <div className="container">
          <div className="mb-16">
            <SectionTitle
              mainTitle="OUR EXPERTISE"
              title="Engineering Excellence in Every Project"
              paragraph="Our team delivers innovative engineering solutions across multiple disciplines, with specialized focus in two key areas."
              center={true}
            />
          </div>

          {/* Two-Column Services Cards */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Civil Infrastructure Card */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-01.jpg"
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
                
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center text-base font-semibold text-primary transition-all hover:text-dark"
                >
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0583 0.208332L19.5833 4.73333L15.0583 9.25833L13.8083 8.00833L16.0667 5.75L0.416656 5.75L0.416656 3.71667L16.0667 3.71667L13.8083 1.45833L15.0583 0.208332Z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Land Development Card */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src="/images/services/service-02.jpg"
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
                
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center text-base font-semibold text-primary transition-all hover:text-dark"
                >
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0583 0.208332L19.5833 4.73333L15.0583 9.25833L13.8083 8.00833L16.0667 5.75L0.416656 5.75L0.416656 3.71667L16.0667 3.71667L13.8083 1.45833L15.0583 0.208332Z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
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
                  Contact Our Engineers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 