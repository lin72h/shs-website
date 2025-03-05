import PageTitle from "@/components/Common/PageTitle";
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

      <section className="pb-[120px] pt-[110px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Main Content */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold text-dark">Our Charter Engineering Services</h2>
              <p className="text-base text-body-color">
                We specialize in providing comprehensive charter engineering services
                that combine technical expertise with innovative solutions. Our team
                of experienced engineers works closely with clients to deliver
                exceptional results across various industries.
              </p>
              
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-dark">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">Technical Excellence</h4>
                      <p className="text-body-color">
                        Industry-leading expertise in engineering design and analysis
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">Custom Solutions</h4>
                      <p className="text-body-color">
                        Tailored engineering services to meet specific project requirements
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
                        Rigorous quality control and project management processes
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="/images/charter-engineering.jpg"
                alt="Charter Engineering Services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-dark">
              Our Engineering Expertise
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Structural Engineering
                </h3>
                <p className="text-body-color">
                  Comprehensive structural analysis and design services for
                  buildings, bridges, and infrastructure projects.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Mechanical Systems
                </h3>
                <p className="text-body-color">
                  Design and optimization of mechanical systems for industrial
                  and commercial applications.
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Process Engineering
                </h3>
                <p className="text-body-color">
                  Optimization of industrial processes and manufacturing
                  systems for maximum efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 