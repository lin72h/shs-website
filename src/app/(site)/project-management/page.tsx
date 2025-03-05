import PageTitle from "@/components/Common/PageTitle";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Project Management Services | ${siteName}`,
  description: "Professional project management services for successful project delivery",
};

export default function ProjectManagement() {
  return (
    <>
      <PageTitle
        pageTitle="Project Management"
        pageDescription="Professional project management services that ensure successful project delivery through strategic planning, efficient execution, and careful monitoring."
      />

      <section className="pb-[120px] pt-[110px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Main Content */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold text-dark">Our Project Management Approach</h2>
              <p className="text-base text-body-color">
                We deliver comprehensive project management services that ensure project success
                through meticulous planning, strategic execution, and continuous monitoring.
                Our experienced team of project managers brings expertise across various industries
                to deliver projects on time and within budget.
              </p>
              
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-dark">Project Management Framework</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      1
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">Initiation & Planning</h4>
                      <p className="text-body-color">
                        Comprehensive project scoping, stakeholder analysis, and detailed planning
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      2
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">Execution & Control</h4>
                      <p className="text-body-color">
                        Efficient resource management, progress monitoring, and risk mitigation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      3
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">Closure & Review</h4>
                      <p className="text-body-color">
                        Thorough project evaluation, documentation, and lessons learned analysis
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="/images/project-management.jpg"
                alt="Project Management Services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-dark">
              Our Project Management Services
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Project Planning
                </h3>
                <p className="text-body-color">
                  Strategic project planning, resource allocation, and timeline development
                  to ensure project success from the start.
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Team Management
                </h3>
                <p className="text-body-color">
                  Expert team coordination, leadership, and communication
                  to maintain project momentum and team effectiveness.
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">
                  Performance Monitoring
                </h3>
                <p className="text-body-color">
                  Comprehensive tracking of project metrics, milestones,
                  and deliverables to ensure project success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 