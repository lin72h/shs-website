'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';

// Project-1 images configuration (Don Buck)
const donBuckImages = [
  { src: '/images/portfolio/Project-1/don_buck_1.JPG', alt: 'Don Buck Aerial View' },
  { src: '/images/portfolio/Project-1/don_buck_2.JPG', alt: 'Earthworks Progress' },
  { src: '/images/portfolio/Project-1/don_buck_3.JPG', alt: 'Construction Progress' },
  { src: '/images/portfolio/Project-1/don_buck_4.JPG', alt: 'Don Buck Development View' },
  { src: '/images/portfolio/Project-1/don_buck_5.JPG', alt: 'Don Buck Site Development' },
  { src: '/images/portfolio/Project-1/don_buck_6.JPG', alt: 'Don Buck Infrastructure Work' },
];

export default function DonBuckPage() {
  const [isDonBuckGalleryOpen, setIsDonBuckGalleryOpen] = useState(false);
  const [donBuckInitialImageIndex, setDonBuckInitialImageIndex] = useState(0);

  const openDonBuckGallery = (index: number) => {
    setDonBuckInitialImageIndex(index);
    setIsDonBuckGalleryOpen(true);
  };

  return (
    <>
      <PageTitle
        pageTitle="Don Buck Development"
        pageDescription="Major earthworks and civil engineering project in Massey, Auckland"
        breadcrumbTitle="Civil Engineering / Don Buck Development"
      />

      {/* Project Content */}
      <section className="pb-20 pt-16">
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
                    <span className="block text-lg font-bold text-primary">6,842 m³</span>
                    <span className="text-sm text-body-color">Cut Volume</span>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <span className="block text-lg font-bold text-primary">5,420 m³</span>
                    <span className="text-sm text-body-color">Fill Volume</span>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <span className="block text-lg font-bold text-primary">5,630 m³</span>
                    <span className="text-sm text-body-color">Non-Engineer Material</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid gap-4">
              {/* Main Featured Image */}
              <div 
                className="relative h-[300px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openDonBuckGallery(0)}
              >
                <Image
                  src={donBuckImages[0].src}
                  alt={donBuckImages[0].alt}
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
                  onClick={() => openDonBuckGallery(1)}
                >
                  <Image
                    src={donBuckImages[1].src}
                    alt={donBuckImages[1].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10">
                    <div className="absolute bottom-2 right-2 rounded-full bg-white p-1.5">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openDonBuckGallery(2)}
                >
                  <Image
                    src={donBuckImages[2].src}
                    alt={donBuckImages[2].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10">
                    <div className="absolute bottom-2 right-2 rounded-full bg-white p-1.5">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openDonBuckGallery(3)}
                >
                  <Image
                    src={donBuckImages[3].src}
                    alt={donBuckImages[3].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10">
                    <div className="absolute bottom-2 right-2 rounded-full bg-white p-1.5">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openDonBuckGallery(4)}
                >
                  <Image
                    src={donBuckImages[4].src}
                    alt={donBuckImages[4].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10">
                    <div className="absolute bottom-2 right-2 rounded-full bg-white p-1.5">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Project Details */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="col-span-2">
                <h3 className="mb-6 text-2xl font-bold text-dark">Engineering Approach & Challenges</h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Our engineering approach for the Don Buck Road development required careful planning and execution 
                  to navigate several site-specific challenges. The project demanded significant earthworks with precise 
                  volume calculations to optimize site preparation while maintaining strict compliance with Auckland 
                  Council regulations.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  We implemented sophisticated stormwater management systems designed to handle the demands of a multi-lot 
                  subdivision while addressing environmental considerations. Our engineering team conducted comprehensive 
                  geotechnical assessments to ensure stability throughout the development process.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-semibold text-dark">Project Timeline</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>1</span>
                      </div>
                      <h5 className="font-semibold text-dark">Initial Assessment</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Site evaluation and feasibility studies for development potential
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>2</span>
                      </div>
                      <h5 className="font-semibold text-dark">Engineering Design</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Comprehensive civil and geotechnical engineering plans
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>3</span>
                      </div>
                      <h5 className="font-semibold text-dark">Major Earthworks</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Carefully managed cut and fill operations with environmental controls
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>4</span>
                      </div>
                      <h5 className="font-semibold text-dark">Infrastructure Development</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Installation of essential services and site preparation for construction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Civil Engineering Projects */}
      <section className="pb-20">
        <div className="container">
          <div className="flex justify-center">
            <Link
              href="/civil-work"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Civil Engineering Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {isDonBuckGalleryOpen && (
        <ImageGallery 
          images={donBuckImages}
          onClose={() => setIsDonBuckGalleryOpen(false)}
          initialImageIndex={donBuckInitialImageIndex}
          isOpen={isDonBuckGalleryOpen}
        />
      )}
    </>
  );
} 