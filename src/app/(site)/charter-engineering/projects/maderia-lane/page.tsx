'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';

// Maderia Lane images configuration
// Replace these with actual images when available
const maderiaLaneImages = [
  { src: '/images/placeholder-image.jpg', alt: 'Maderia Lane Development Aerial View' },
  { src: '/images/placeholder-image.jpg', alt: 'Maderia Lane Subdivision Plan' },
  { src: '/images/placeholder-image.jpg', alt: 'Maderia Lane Engineering Work' },
  { src: '/images/placeholder-image.jpg', alt: 'Maderia Lane Infrastructure' },
  { src: '/images/placeholder-image.jpg', alt: 'Maderia Lane Construction Progress' },
  { src: '/images/placeholder-image.jpg', alt: 'Maderia Lane Final Development' },
];

export default function MaderiaLanePage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <PageTitle
        pageTitle="Maderia Lane Subdivision"
        pageDescription="Land subdivision project in Massey, transforming one lot into two"
        breadcrumbTitle="Chartered Engineering / Maderia Lane"
      />

      {/* Project Content */}
      <section className="pb-20 pt-0 lg:pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
            {/* Project Overview - Second on mobile, First on desktop */}
            <div className="order-2 lg:order-1 flex flex-col space-y-6 pt-4 lg:pt-0">
              <h3 className="text-2xl font-bold text-dark">Land Subdivision Excellence</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 6 Maderia Lane in Massey, Auckland, this precision land subdivision project 
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
                      <span>Location: 6 Maderia Lane, Massey, Auckland</span>
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
                      <span>Infrastructure optimization</span>
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
                  This project required careful attention to detail in managing stormwater solutions, 
                  utilities connections, and driveway access for both lots. Our team implemented innovative 
                  engineering solutions to maximize land utilization while ensuring each property met all 
                  council requirements for independent residential lots.
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
                    <span>Boundary definition and survey coordination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Stormwater management design</span>
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
                    <span>Resource consent documentation and management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Images - First on mobile, Second on desktop */}
            <div className="order-1 lg:order-2 grid gap-4">
              {/* Main Featured Image */}
              <div 
                className="relative h-[300px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openGallery(0)}
              >
                <Image
                  src={maderiaLaneImages[0].src}
                  alt={maderiaLaneImages[0].alt}
                  fill
                  className="object-cover"
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
                  className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openGallery(1)}
                >
                  <Image
                    src={maderiaLaneImages[1].src}
                    alt={maderiaLaneImages[1].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10"></div>
                </div>
                <div 
                  className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openGallery(2)}
                >
                  <Image
                    src={maderiaLaneImages[2].src}
                    alt={maderiaLaneImages[2].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="mt-16">
            <SectionTitle
              mainTitle="ENGINEERING DETAILS"
              title="Subdivision Process"
              paragraph="The technical aspects of transforming one lot into two"
              center={true}
              marginBottom="60px"
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-dark">Site Assessment</h3>
                <p className="text-body-color">
                  Comprehensive evaluation of the site's topography, soil conditions, and existing infrastructure 
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
                  both properties meet council requirements while maximizing land utilization.
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
                  documentation met Auckland Council requirements for efficient approval.
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
                  Implementation of necessary infrastructure modifications, including stormwater management systems, 
                  utility connections, and access solutions for both properties.
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
                  Effective coordination between property owners, council authorities, surveyors, and contractors 
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
                  the highest standards and complied with regulatory requirements.
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
              <p className="mb-6 text-lg italic text-gray-700">
                "The SHS Engineering team delivered exceptional results for our Maderia Lane subdivision project. 
                Their technical expertise and attention to detail ensured a smooth process from initial assessment 
                through to final approval. The project was completed efficiently and met all our requirements."
              </p>
              <div>
                <h4 className="font-semibold text-dark">Property Owner</h4>
                <p className="text-sm text-body-color">Maderia Lane, Massey</p>
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

      {/* Image Gallery Modal */}
      {isGalleryOpen && (
        <ImageGallery
          images={maderiaLaneImages}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialImageIndex={currentImageIndex}
        />
      )}
    </>
  );
} 