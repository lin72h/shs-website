import PageTitle from "@/components/Common/PageTitle";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Civil Work Services | ${siteName}`,
  description: "Professional civil work and construction services for your infrastructure projects",
};

export default function CivilWorkPage() {
  return (
    <>
      <PageTitle
        pageTitle="Civil Work"
        pageDescription="Comprehensive civil work solutions for construction and infrastructure projects. We deliver excellence in structural engineering, construction management, and infrastructure development."
      />

      <section className="pb-[120px] pt-[110px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Main Content */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold text-dark">Our Civil Work Services</h2>
              <p className="text-base text-body-color">
                We provide comprehensive civil work solutions for various construction and infrastructure projects. 
                Our team of experienced engineers and project managers ensures the successful delivery of projects
                while maintaining the highest standards of quality and safety.
              </p>
              
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-dark">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">Expert Project Management</h4>
                      <p className="text-body-color">
                        Professional oversight and coordination of civil work projects
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">Quality Assurance</h4>
                      <p className="text-body-color">
                        Strict adherence to industry standards and quality control measures
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">Sustainable Practices</h4>
                      <p className="text-body-color">
                        Environmentally conscious approaches to civil engineering
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="/images/civil-work.jpg"
                alt="Civil Work Services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-dark">
              Our Civil Work Expertise
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Infrastructure Development
                </h3>
                <p className="text-body-color">
                  Planning and execution of infrastructure projects including roads,
                  bridges, and utilities networks.
                </p>
              </div>

              {/* Service 2 */}
              <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Construction Management
                </h3>
                <p className="text-body-color">
                  Expert oversight and management of construction projects from
                  planning to completion.
                </p>
              </div>

              {/* Service 3 */}
              <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Structural Engineering
                </h3>
                <p className="text-body-color">
                  Detailed structural analysis and design for various civil
                  engineering projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 