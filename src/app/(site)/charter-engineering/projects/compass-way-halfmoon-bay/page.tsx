'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';

// Compass Way images configuration
// Real project images from civil-projects/project-5 folder

// Engineering plans and technical drawings
const compassWayImages = [
  // Main high-priority image
  { 
    src: '/images/civil-projects/project-5/x_Screenshot 2025-04-01 at 18.48.49.png', 
    alt: 'Compass Way Development - Main Site Layout Plan' 
  },
  // Regular engineering images
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.09.png', 
    alt: 'Compass Way Subdivision - Lot Boundary Layout' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.17.png', 
    alt: 'Compass Way Development - Infrastructure Planning' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.21.png', 
    alt: 'Compass Way Project - Utility Services Design' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.24.png', 
    alt: 'Compass Way Subdivision - Access and Driveway Planning' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.26.png', 
    alt: 'Compass Way Development - Stormwater Management Plan' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.29.png', 
    alt: 'Compass Way Project - Coastal Considerations Design' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.32.png', 
    alt: 'Compass Way Development - Site Grading Plan' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.37.png', 
    alt: 'Compass Way Subdivision - Environmental Control Measures' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.40.png', 
    alt: 'Compass Way Project - Detailed Engineering Specifications' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.45.png', 
    alt: 'Compass Way Development - Construction Sequence Plan' 
  },
  { 
    src: '/images/civil-projects/project-5/Screenshot 2025-04-01 at 18.49.48.png', 
    alt: 'Compass Way Project - Final Site Layout' 
  }
];

// 3D rendering images showing visualization of the development
const compassWay3dImages = [
  { 
    src: '/images/civil-projects/project-5/3d_Screenshot 2025-04-01 at 18.48.55.png', 
    alt: 'Compass Way 3D Visualization - Aerial Perspective' 
  },
  { 
    src: '/images/civil-projects/project-5/3d_Screenshot 2025-04-01 at 18.49.00.png', 
    alt: 'Compass Way 3D Rendering - Development Overview' 
  },
  { 
    src: '/images/civil-projects/project-5/3d_Screenshot 2025-04-01 at 18.49.04.png', 
    alt: 'Compass Way 3D Model - Landscape Integration View' 
  }
];

export default function CompassWayPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isRenderingGalleryOpen, setIsRenderingGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentRenderingIndex, setCurrentRenderingIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };
  
  const openRenderingGallery = (index: number) => {
    setCurrentRenderingIndex(index);
    setIsRenderingGalleryOpen(true);
  };

  return (
    <>
      <PageTitle
        pageTitle="Compass Way"
        pageDescription="Land subdivision project in Halfmoon Bay, Auckland"
        breadcrumbTitle="Chartered Engineering / Compass Way"
      />

      {/* Project Content */}
      <section className="pb-20 pt-0 lg:pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
            {/* Project Overview - Second on mobile, First on desktop */}
            <div className="order-2 lg:order-1 flex flex-col space-y-6 pt-4 lg:pt-0">
              <h3 className="text-2xl font-bold text-dark">Civil Engineering Excellence</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at Compass Way in Halfmoon Bay, Auckland, this precision land subdivision project 
                showcases our expertise in chartered civil engineering. The project involved transforming 
                a single residential lot into two separate properties, requiring detailed surveying, 
                infrastructure modifications, and careful compliance with council regulations.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Location: Compass Way, Halfmoon Bay, Auckland</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Development Type: Residential subdivision</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Scale: 1 lot subdivided into 2 lots</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Engineering Solutions</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Precision surveying and land assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Coastal infrastructure adaptation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Regulatory compliance management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Engineering Challenges & Solutions</h4>
                <p className="text-base leading-relaxed text-body-color">
                  This project required careful consideration of the coastal environment in Halfmoon Bay, 
                  with particular attention to stormwater management and erosion control. Our team implemented 
                  specialized engineering solutions to address these challenges while ensuring each property 
                  met all council requirements for independent residential lots.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Technical Implementation</h4>
                <p className="text-base leading-relaxed text-body-color">
                  The subdivision process involved comprehensive site investigation, detailed engineering design, 
                  and efficient project management throughout the consent process. Our chartered engineering 
                  expertise ensured all technical aspects were addressed with precision, including:
                </p>
                <ul className="mt-3 space-y-2 text-base text-body-color">
                  <li className="flex items-start space-x-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Coastal boundary definition and survey coordination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Enhanced stormwater management for coastal properties</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Utility services extensions and connections</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Resource consent documentation for coastal development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Images - First on mobile, Second on desktop */}
            <div className="order-1 lg:order-2 grid gap-4">
              {/* Main Featured Image */}
              <div 
                className="relative h-[350px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openGallery(0)}
              >
                <Image
                  src={compassWayImages[0].src}
                  alt={compassWayImages[0].alt}
                  fill
                  className="object-contain bg-gray-100"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10">
                  <div className="absolute bottom-4 right-4 rounded-full bg-white p-2">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="relative h-[180px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openGallery(1)}
                >
                  <Image
                    src={compassWayImages[1].src}
                    alt={compassWayImages[1].alt}
                    fill
                    className="object-contain bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10"></div>
                </div>
                <div 
                  className="relative h-[180px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openGallery(2)}
                >
                  <Image
                    src={compassWayImages[2].src}
                    alt={compassWayImages[2].alt}
                    fill
                    className="object-contain bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Renderings Section */}
          <div className="mt-12">
            <h3 className="mb-8 text-center text-2xl font-bold text-dark">3D Visualization</h3>
            <p className="mb-8 text-center text-body-color mx-auto max-w-3xl">
              These 3D renderings illustrate the Compass Way development project upon completion, 
              showing how the engineering design translates into real-world implementation with 
              optimized lot configurations, infrastructure integration, and coastal environmental considerations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compassWay3dImages.map((image, index) => (
                <div 
                  key={`3d-${index}`}
                  className="relative h-[250px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openRenderingGallery(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-20">
                    <div className="absolute bottom-3 right-3 rounded-full bg-white/80 p-1.5">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Plans Gallery */}
          <div className="mt-12">
            <h3 className="mb-8 text-center text-2xl font-bold text-dark">Engineering Plans</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {compassWayImages.slice(3, 11).map((image, index) => (
                <div 
                  key={`plan-${index + 3}`}
                  className="relative h-[180px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openGallery(index + 3)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-20">
                    <div className="absolute bottom-2 right-2 rounded-full bg-white/80 p-1.5">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">Site Assessment</h3>
                <p className="text-body-color">
                  Comprehensive evaluation of the coastal site&apos;s topography, soil conditions, and existing infrastructure 
                  to determine optimal subdivision design and identify potential challenges.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">Design & Planning</h3>
                <p className="text-body-color">
                  Expert engineering design of lot boundaries, access points, and utility connections to ensure 
                  both properties meet council requirements while maximizing land utilization in the coastal setting.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">Consent Processing</h3>
                <p className="text-body-color">
                  Meticulous preparation and management of resource consent applications, ensuring all technical 
                  documentation met Auckland Council requirements for coastal development approval.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">Infrastructure Development</h3>
                <p className="text-body-color">
                  Implementation of necessary infrastructure modifications, including specialized stormwater management systems, 
                  utility connections, and access solutions for both coastal properties.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">Stakeholder Management</h3>
                <p className="text-body-color">
                  Effective coordination between property owners, coastal authorities, surveyors, and contractors 
                  to ensure smooth project progression and successful outcomes.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">Quality Assurance</h3>
                <p className="text-body-color">
                  Rigorous quality control throughout the project, ensuring all engineering aspects met 
                  the highest standards and complied with coastal development regulatory requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Client Testimonial Section */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <svg className="mx-auto mb-6 h-12 w-12 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 font-medium italic text-body-color">
                &quot;The Charter Engineering team delivered exceptional results for our Compass Way subdivision. Their understanding 
                of coastal engineering requirements and innovative approach to stormwater management has resulted in two beautifully 
                developed lots that perfectly complement the Halfmoon Bay environment.&quot;
              </p>
              <div>
                <h4 className="font-semibold text-dark">Property Owner</h4>
                <p className="text-sm text-body-color">Compass Way, Halfmoon Bay</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-primary/90"
            >
              Discuss Your Project With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Image Info Section - Provides context for the engineering visualizations */}
      <section className="pb-12 pt-6">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-3 text-lg font-semibold text-dark">About These Project Visualizations</h4>
              <p className="text-sm text-body-color">
                The engineering plans and 3D renderings above illustrate the Compass Way subdivision project in Halfmoon Bay, Auckland. 
                These technical visualizations show our comprehensive approach to transforming a single residential lot into two separate 
                properties in a coastal setting. The detailed engineering plans address specialized coastal considerations, environmental 
                protection measures, and infrastructure requirements, while the 3D renderings provide a realistic visualization of how the 
                completed development will integrate with the surrounding coastal landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {isGalleryOpen && (
        <ImageGallery
          images={compassWayImages}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialImageIndex={currentImageIndex}
        />
      )}

      {/* Rendering Gallery Modal */}
      {isRenderingGalleryOpen && (
        <ImageGallery
          images={compassWay3dImages}
          isOpen={isRenderingGalleryOpen}
          onClose={() => setIsRenderingGalleryOpen(false)}
          initialImageIndex={currentRenderingIndex}
        />
      )}
    </>
  );
} 