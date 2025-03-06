import { Portfolio } from "@/types/portfolio";

const donBuckCivilDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      The Don Buck Civil project involved comprehensive civil engineering work for a major residential development in the Don Buck area of Auckland. Our team was responsible for designing and overseeing the construction of essential infrastructure to support a new residential subdivision.
    </p>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      The project scope included stormwater management systems, road construction, utility installations, and environmental compliance to ensure sustainable development practices were followed throughout the construction process.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> Project Highlights
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Design and construction of 3.2km of new roadways with integrated stormwater systems
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Implementation of sustainable urban drainage solutions using retention ponds and swales
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Installation of water, power, and telecommunications infrastructure for 85 new residential lots
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Coordination with local utilities and councils to ensure compliance with all regulatory requirements
        </span>
      </li>
    </ul>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      The project was completed on schedule and within budget, providing a high-quality residential development that meets the needs of the growing Auckland community while minimizing environmental impact.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">02.</span> Technical Approach
    </h4>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Our approach included detailed geotechnical investigations, comprehensive hydraulic modeling for stormwater management, and close collaboration with environmental consultants to ensure minimal disruption to local ecosystems. We utilized advanced GPS-guided machinery for precise earthworks and implemented quality control measures at each stage of construction.
    </p>
  </div>
);

const upperHarbourDriveDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      The Upper Harbour Drive project was a major infrastructure upgrade involving the redesign and reconstruction of a 2.5km section of Upper Harbour Drive in Auckland's North Shore. This critical transportation artery required significant improvements to accommodate increased traffic volume and enhance safety.
    </p>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Our team was engaged to provide end-to-end engineering services, from initial planning and design through to construction supervision and project completion certification. The project presented unique challenges due to its coastal proximity and the need to maintain traffic flow during construction.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> Key Deliverables
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Road widening to accommodate additional lanes and dedicated cycle paths
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Design and construction of two new bridges over existing waterways
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Implementation of modern traffic management systems including smart traffic lights
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Upgrading of all underground utilities including water, sewer, and stormwater infrastructure
        </span>
      </li>
    </ul>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      The project was delivered with minimal disruption to road users through careful staging and comprehensive traffic management planning. The completed upgrade has significantly improved traffic flow and enhanced safety for all road users.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">02.</span> Environmental Considerations
    </h4>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Special attention was paid to environmental protection throughout this project. We implemented comprehensive erosion and sediment control measures to protect the adjacent marine environment. Stormwater treatment systems were integrated into the design to improve water quality discharge, and landscaping with native species was incorporated to enhance the ecological value of the roadside environment.
    </p>
  </div>
);

export const portfolioData: Portfolio[] = [
  {
    id: "1",
    title: "Don Buck Civil",
    slug: "don-buck-civil",
    sortDescription:
      "Comprehensive civil engineering work for a major residential development in Auckland, including infrastructure design, stormwater management, and road construction.",
    image: "/images/portfolio/portfolio-01.jpg",
    tags: ["civil engineering", "residential", "infrastructure"],
    categories: ["residential development", "civil works"],
    details: donBuckCivilDetails,
    completedDate: "June 2023",
    location: "Don Buck Road, Auckland, New Zealand",
  },
  {
    id: "2",
    title: "Upper Harbour Drive",
    slug: "upper-harbour-drive",
    sortDescription:
      "Major infrastructure upgrade of a 2.5km section of Upper Harbour Drive, including road widening, bridge construction, and modernized traffic management systems.",
    image: "/images/portfolio/portfolio-02.jpg",
    tags: ["infrastructure", "traffic", "bridges"],
    categories: ["road works", "infrastructure"],
    details: upperHarbourDriveDetails,
    completedDate: "November 2022",
    location: "Upper Harbour Drive, Auckland, New Zealand",
  },
  {
    id: "3",
    title: "Albany Commercial Development",
    slug: "albany-commercial-development",
    sortDescription:
      "Engineering and project management for a new commercial development in Albany, including site preparation, drainage systems, and structural engineering support.",
    image: "/images/portfolio/portfolio-03.jpg",
    tags: ["commercial", "project management"],
    categories: ["commercial development"],
    details: donBuckCivilDetails,
    completedDate: "March 2023",
    location: "Albany, Auckland, New Zealand",
  },
  {
    id: "4",
    title: "Westgate Stormwater Project",
    slug: "westgate-stormwater-project",
    sortDescription:
      "Design and implementation of a comprehensive stormwater management system for the expanding Westgate commercial and residential area.",
    image: "/images/portfolio/portfolio-04.jpg",
    tags: ["stormwater", "environmental"],
    categories: ["environmental engineering"],
    details: upperHarbourDriveDetails,
    completedDate: "August 2022",
    location: "Westgate, Auckland, New Zealand",
  },
];