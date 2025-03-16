'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';

// State Highway 16 images configuration
const stateHighwayImages = [
  { src: '/images/portfolio/Project-4/x_781741642126_.pic.jpg', alt: 'State Highway 16 Development Aerial View' },
  { src: '/images/portfolio/Project-4/x_821741642132_.pic.jpg', alt: 'State Highway 16 Commercial Development' },
  { src: '/images/portfolio/Project-4/x_741741642121_.pic.jpg', alt: 'State Highway 16 Construction Progress' },
  { src: '/images/portfolio/Project-4/x_751741642122_.pic.jpg', alt: 'State Highway 16 Infrastructure Development' },
  { src: '/images/portfolio/Project-4/x_721741642118_.pic.jpg', alt: 'State Highway 16 Engineering Works' },
  { src: '/images/portfolio/Project-4/x_731741642119_.pic.jpg', alt: 'State Highway 16 Development' },
  { src: '/images/portfolio/Project-4/x_621741642105_.pic.jpg', alt: 'State Highway 16 Progress' },
  { src: '/images/portfolio/Project-4/x_641741642108_.pic.jpg', alt: 'State Highway 16 Construction' },
  { src: '/images/portfolio/Project-4/x_681741642113_.pic.jpg', alt: 'State Highway 16 Site View' },
  { src: '/images/portfolio/Project-4/x_591741642101_.pic.jpg', alt: 'State Highway 16 Development Stage' },
  { src: '/images/portfolio/Project-4/x_601741642102_.pic.jpg', alt: 'State Highway 16 Construction Site' },
  { src: '/images/portfolio/Project-4/811741642131_.pic.jpg', alt: 'State Highway 16 Project View' },
  { src: '/images/portfolio/Project-4/831741642133_.pic.jpg', alt: 'State Highway 16 Development Progress' },
  { src: '/images/portfolio/Project-4/801741642129_.pic.jpg', alt: 'State Highway 16 Aerial Perspective' },
  { src: '/images/portfolio/Project-4/771741642125_.pic.jpg', alt: 'State Highway 16 Construction Work' },
  { src: '/images/portfolio/Project-4/791741642127_.pic.jpg', alt: 'State Highway 16 Project Development' },
  { src: '/images/portfolio/Project-4/711741642117_.pic.jpg', alt: 'State Highway 16 Site Development' },
  { src: '/images/portfolio/Project-4/761741642123_.pic.jpg', alt: 'State Highway 16 Engineering Progress' },
  { src: '/images/portfolio/Project-4/691741642114_.pic.jpg', alt: 'State Highway 16 Construction Phase' },
  { src: '/images/portfolio/Project-4/701741642115_.pic.jpg', alt: 'State Highway 16 Development Project' }
];

export default function StateHighwayPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <PageTitle
        pageTitle="791 State Highway 16 Development"
        pageDescription="Strategic commercial development with comprehensive infrastructure solutions in Kumeu, Auckland"
        breadcrumbTitle="Civil Engineering / State Highway 16"
      />

      {/* Project Content */}
      <section className="pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="791 State Highway 16"
            paragraph="Strategic commercial development with comprehensive infrastructure solutions in Kumeu, Auckland"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Strategic Commercial Development</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 791 State Highway 16 in Kumeu, this significant commercial development project 
                required comprehensive civil engineering solutions to create functional commercial spaces 
                while addressing the site&apos;s specific challenges. Our team delivered innovative solutions for 
                stormwater management, earthworks, and infrastructure development to meet both regulatory 
                requirements and client objectives.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Location: 791 State Highway 16, Kumeu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Development Type: Commercial</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Scale: Medium-large commercial complex</span>
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
                      <span>Custom stormwater management system</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Optimized earthworks operations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Strategic transportation integration</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Key Achievements</h4>
                <p className="text-base leading-relaxed text-body-color">
                  This commercial development strategically located along State Highway 16 provides essential 
                  services for the growing Kumeu community. Our engineering solutions ensured that the 
                  development meets not only current needs but is also positioned for sustainable future
                  growth as the area continues to expand.
                </p>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid gap-4">
              {/* Main Featured Image */}
              <div 
                className="relative h-[300px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openGallery(0)}
              >
                <Image
                  src={stateHighwayImages[0].src}
                  alt={stateHighwayImages[0].alt}
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
                    src={stateHighwayImages[1].src}
                    alt={stateHighwayImages[1].alt}
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
                    src={stateHighwayImages[2].src}
                    alt={stateHighwayImages[2].alt}
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
                <h3 className="mb-6 text-2xl font-bold text-dark">Technical Challenges & Solutions</h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  The 791 State Highway 16 development presented unique challenges due to its proximity to a major 
                  transportation route and the need to integrate commercial functions with efficient traffic flow. 
                  Our engineering team developed specialized solutions for site access and circulation that 
                  minimize impact on highway traffic while optimizing customer convenience.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Stormwater management was another critical aspect of this project, requiring innovative approaches 
                  to address both water quality and quantity concerns. We designed an integrated stormwater system 
                  that not only meets regulatory requirements but also enhances the overall site functionality and 
                  aesthetic appeal.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-semibold text-dark">Project Highlights</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>1</span>
                      </div>
                      <h5 className="font-semibold text-dark">Highway Integration</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Seamless traffic flow between highway and development
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>2</span>
                      </div>
                      <h5 className="font-semibold text-dark">Commercial Functionality</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Optimized site layout for business operations
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>3</span>
                      </div>
                      <h5 className="font-semibold text-dark">Environmental Consideration</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Sustainable design practices and materials
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>4</span>
                      </div>
                      <h5 className="font-semibold text-dark">Future Growth Planning</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Infrastructure designed for scalability
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
          images={stateHighwayImages}
          onClose={() => setIsGalleryOpen(false)}
          isOpen={isGalleryOpen}
          initialImageIndex={currentImageIndex}
        />
      )}
    </>
  );
} 