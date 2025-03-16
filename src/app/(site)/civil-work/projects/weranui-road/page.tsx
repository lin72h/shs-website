'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';

// Project-3 images configuration (Weranui Road)
const weranuiImages = [
  // Prioritized images (x_ prefix)
  { src: '/images/portfolio/Project-2/x_571741642098_.pic.jpg', alt: 'Weranui Road Development Overview' },
  { src: '/images/portfolio/Project-2/x_521741642091_.pic.jpg', alt: 'Weranui Road Construction Progress' },
  { src: '/images/portfolio/Project-2/x_501741642088_.pic.jpg', alt: 'Weranui Road Site Development' },
  { src: '/images/portfolio/Project-2/x_551741642096_.pic.jpg', alt: 'Weranui Road Infrastructure Work' },
  { src: '/images/portfolio/Project-2/x_541741642094_.pic.jpg', alt: 'Weranui Road Development View' },
  { src: '/images/portfolio/Project-2/x_561741642097_.pic.jpg', alt: 'Weranui Road Construction' },
];

export default function WeranuiRoadPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openGallery = (index: number) => {
    setInitialSlide(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <PageTitle
        pageTitle="Weranui Road Development"
        pageDescription="Development project at 18 Weranui Road, Waiwera completed in February 2023"
        breadcrumbTitle="Civil Engineering / Weranui Road Development"
      />

      {/* Project Content */}
      <section className="pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="Weranui Road"
            paragraph="Development project at 18 Weranui Road, Waiwera completed in February 2023"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Technical Excellence in Complex Terrain</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 18 Weranui Road in Waiwera (Lot 3 DP 428671), this development project was completed
                in February 2023. The project required sophisticated engineering solutions to address the site&apos;s
                specific requirements while maintaining the highest standards of quality.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Location: 18 Weranui Road, Waiwera</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Legal Description: Lot 3 DP 428671</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Completion: February 2023</span>
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
                      <span>Advanced slope stabilization techniques</span>
                    </li>
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
                      <span>Sensitive environmental impact assessment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Project Outcomes</h4>
                <p className="text-base leading-relaxed text-body-color">
                  The Weranui Road development was successfully completed on schedule, delivering a stable and sustainable
                  site ready for future construction phases. Our engineering solutions effectively addressed the complex
                  terrain challenges while minimizing environmental impact and ensuring long-term structural integrity.
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
                  src={weranuiImages[0].src}
                  alt={weranuiImages[0].alt}
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
                    src={weranuiImages[1].src}
                    alt={weranuiImages[1].alt}
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
                    src={weranuiImages[2].src}
                    alt={weranuiImages[2].alt}
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
                  The Weranui Road development presented several significant technical challenges that required 
                  innovative engineering solutions. The site's steep terrain and complex geotechnical conditions 
                  demanded a carefully considered approach to ensure long-term stability and safety.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Our team implemented a comprehensive site assessment and engineering design process, utilizing 
                  advanced modeling techniques to predict and mitigate potential issues. This proactive approach 
                  allowed us to develop customized solutions that addressed the unique characteristics of the site 
                  while maintaining cost-effectiveness and construction efficiency.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-semibold text-dark">Key Engineering Elements</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>1</span>
                      </div>
                      <h5 className="font-semibold text-dark">Slope Stabilization</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Engineered retaining structures and reinforced soil systems
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>2</span>
                      </div>
                      <h5 className="font-semibold text-dark">Stormwater Management</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Customized detention and treatment systems for site conditions
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>3</span>
                      </div>
                      <h5 className="font-semibold text-dark">Environmental Protection</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Comprehensive erosion and sediment control measures
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>4</span>
                      </div>
                      <h5 className="font-semibold text-dark">Infrastructure Integration</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Seamless connection to existing utility networks
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
          images={weranuiImages}
          onClose={() => setIsGalleryOpen(false)}
          initialImageIndex={initialSlide}
          isOpen={isGalleryOpen}
        />
      )}
    </>
  );
} 