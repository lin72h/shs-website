'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';

// Upper Harbour Drive images configuration
const upperHarbourImages = [
  // Prioritized images (x_ prefix)
  { src: '/images/portfolio/Project-3/xx_1261741642199_.pic.jpg', alt: 'Upper Harbour Drive Development Aerial View' },
  { src: '/images/portfolio/Project-3/x_951741642154_.pic.jpg', alt: 'Upper Harbour Drive Construction Progress' },
  { src: '/images/portfolio/Project-3/x_921741642150_.pic.jpg', alt: 'Upper Harbour Drive Site Development' },
  { src: '/images/portfolio/Project-3/x_941741642152_.pic.jpg', alt: 'Upper Harbour Drive Infrastructure Work' },
  { src: '/images/portfolio/Project-3/x_961741642155_.pic.jpg', alt: 'Upper Harbour Drive Development View' },
  { src: '/images/portfolio/Project-3/x_911741642149_.pic.jpg', alt: 'Upper Harbour Drive Construction' },
  { src: '/images/portfolio/Project-3/x_841741642135_.pic.jpg', alt: 'Upper Harbour Drive Engineering Work' },
  { src: '/images/portfolio/Project-3/x_871741642143_.pic.jpg', alt: 'Upper Harbour Drive Project Progress' },
  { src: '/images/portfolio/Project-3/x_891741642146_.pic.jpg', alt: 'Upper Harbour Drive Site View' },
  { src: '/images/portfolio/Project-3/x_1251741642198_.pic.jpg', alt: 'Upper Harbour Drive Development Stage' },
  { src: '/images/portfolio/Project-3/x_1241741642197_.pic.jpg', alt: 'Upper Harbour Drive Construction Site' },
  { src: '/images/portfolio/Project-3/x_1211741642192_.pic.jpg', alt: 'Upper Harbour Drive Project View' },
  { src: '/images/portfolio/Project-3/x_1171741642186_.pic.jpg', alt: 'Upper Harbour Drive Development Progress' },
  { src: '/images/portfolio/Project-3/x_1201741642191_.pic.jpg', alt: 'Upper Harbour Drive Aerial Perspective' },
  { src: '/images/portfolio/Project-3/x_1141741642182_.pic.jpg', alt: 'Upper Harbour Drive Construction Work' },
  { src: '/images/portfolio/Project-3/x_1091741642176_.pic.jpg', alt: 'Upper Harbour Drive Project Development' },
  { src: '/images/portfolio/Project-3/x_1131741642181_.pic.jpg', alt: 'Upper Harbour Drive Site Development' },
  { src: '/images/portfolio/Project-3/x_1001741642161_.pic.jpg', alt: 'Upper Harbour Drive Engineering Progress' },
  { src: '/images/portfolio/Project-3/x_1051741642169_.pic.jpg', alt: 'Upper Harbour Drive Construction Phase' },
  { src: '/images/portfolio/Project-3/991741642159_.pic.jpg', alt: 'Upper Harbour Drive Development Project' },
  { src: '/images/portfolio/Project-3/971741642157_.pic.jpg', alt: 'Upper Harbour Drive Progress View' },
  { src: '/images/portfolio/Project-3/981741642158_.pic.jpg', alt: 'Upper Harbour Drive Site Works' },
  { src: '/images/portfolio/Project-3/881741642145_.pic.jpg', alt: 'Upper Harbour Drive Construction Detail' },
  { src: '/images/portfolio/Project-3/931741642151_.pic.jpg', alt: 'Upper Harbour Drive Development Section' },
  { src: '/images/portfolio/Project-3/851741642141_.pic.jpg', alt: 'Upper Harbour Drive Infrastructure Detail' }
];

export default function UpperHarbourDrivePage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <PageTitle
        pageTitle="Upper Harbour Drive Development"
        pageDescription="Strategic infrastructure development at Upper Harbour Drive"
        breadcrumbTitle="Civil Engineering / Upper Harbour Drive"
      />

      {/* Project Content */}
      <section className="pb-20 pt-0 lg:pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
            {/* Project Overview - Second on mobile, First on desktop */}
            <div className="order-2 lg:order-1 flex flex-col space-y-6 pt-4 lg:pt-0">
              <h3 className="text-2xl font-bold text-dark">Project Overview</h3>
              <p className="text-base leading-relaxed text-body-color">
                The Upper Harbour Drive development is a significant infrastructure project located in Auckland&apos;s 
                growing North Shore area. This comprehensive civil engineering project involved extensive site 
                preparation, earthworks, and infrastructure development to create a foundation for future commercial 
                and residential growth in this strategic location.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Location: Upper Harbour Drive, Auckland</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Development Type: Mixed-use infrastructure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Scale: Large-scale regional development</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Key Project Elements</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advanced stormwater management systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Major earthworks and terrain modification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Integrated transportation infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Project Achievements</h4>
                <p className="text-base leading-relaxed text-body-color">
                  The Upper Harbour Drive commercial development provides essential services to Auckland&apos;s 
                  northern suburbs while demonstrating our ability to deliver complex civil engineering projects 
                  on schedule and within budget. Our engineering solutions have created a foundation for 
                  sustainable commercial growth in the area.
                </p>
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
                  src={upperHarbourImages[0].src}
                  alt={upperHarbourImages[0].alt}
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
                    src={upperHarbourImages[1].src}
                    alt={upperHarbourImages[1].alt}
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
                  onClick={() => openGallery(2)}
                >
                  <Image
                    src={upperHarbourImages[2].src}
                    alt={upperHarbourImages[2].alt}
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
                  onClick={() => openGallery(3)}
                >
                  <Image
                    src={upperHarbourImages[3].src}
                    alt={upperHarbourImages[3].alt}
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
                  onClick={() => openGallery(4)}
                >
                  <Image
                    src={upperHarbourImages[4].src}
                    alt={upperHarbourImages[4].alt}
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
                <h3 className="mb-6 text-2xl font-bold text-dark">Engineering Approach & Innovations</h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  The Upper Harbour Drive commercial development presented several unique challenges due to the site&apos;s 
                  topography and proximity to sensitive environmental areas. Our engineering team developed innovative 
                  solutions that balanced commercial requirements with environmental considerations, ensuring 
                  a sustainable outcome that meets the needs of all stakeholders.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Careful management of earthworks and site preparation was essential to create a stable platform for the 
                  development while minimizing environmental impact. Our engineering approach incorporated advanced 
                  stormwater management techniques to protect the nearby harbour&apos;s water quality, demonstrating our 
                  commitment to environmentally responsible development practices.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-semibold text-dark">Technical Highlights</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>1</span>
                      </div>
                      <h5 className="font-semibold text-dark">Integrated Water Management</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Comprehensive stormwater treatment and detention systems
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>2</span>
                      </div>
                      <h5 className="font-semibold text-dark">Sustainable Engineering</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Environmentally conscious design principles throughout
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>3</span>
                      </div>
                      <h5 className="font-semibold text-dark">Future-Focused Infrastructure</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Designed for resilience and long-term regional growth
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>4</span>
                      </div>
                      <h5 className="font-semibold text-dark">Digital Engineering</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Advanced modeling and simulation for optimal outcomes
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
      {isGalleryOpen && (
        <ImageGallery 
          images={upperHarbourImages}
          onClose={() => setIsGalleryOpen(false)}
          isOpen={isGalleryOpen}
          initialImageIndex={currentImageIndex}
        />
      )}
    </>
  );
} 