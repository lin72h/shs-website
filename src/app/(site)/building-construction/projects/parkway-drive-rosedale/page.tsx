'use client';

import PageTitle from "@/components/Common/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';
import StaticMapThumbnail from '@/components/maps/StaticMapThumbnail'; 
import MapModal from '@/components/maps/MapModal';

// 1 Parkway Drive, Rosedale images configuration
const parkwayDriveImages = [
  { src: '/images/constructions/construction-2/Unknown.jpeg', alt: '1 Parkway Drive Exterior View' },
  { src: '/images/constructions/construction-2/Unknown-1.jpeg', alt: '1 Parkway Drive Front Entrance' },
  { src: '/images/constructions/construction-2/xx_Image_20230413114707.jpg', alt: '1 Parkway Drive Site Works' },
];

// Interior design images with "_i" suffix
const interiorDesignImages = [
  { src: '/images/constructions/construction-2/Image_20230413115025_i.jpg', alt: '1 Parkway Drive Interior Design' },
  { src: '/images/constructions/construction-2/Image_20230413114949_i.jpg', alt: '1 Parkway Drive Interior Spaces' },
];

export default function ParkwayDrivePage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInteriorGalleryOpen, setIsInteriorGalleryOpen] = useState(false);
  const [currentInteriorImageIndex, setCurrentInteriorImageIndex] = useState(0);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isStreetViewModalOpen, setIsStreetViewModalOpen] = useState(false);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const openInteriorGallery = (index: number) => {
    setCurrentInteriorImageIndex(index);
    setIsInteriorGalleryOpen(true);
  };

  // Coordinates for 1 Parkway Dr, Auckland
  const parkwayDriveLocation = {
    lat: -36.746212,
    lng: 174.737122
  };
  
  // Street view specific coordinates (slightly adjusted for better view)
  const streetViewLocation = {
    lat: -36.746212,
    lng: 174.737122
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const projectTitle = "1 Parkway Dr Office Building";

  return (
    <>
      <PageTitle
        pageTitle="1 Parkway Dr Office Building"
        pageDescription="Commercial office development with contemporary design in Auckland"
        breadcrumbTitle="Building Construction / 1 Parkway Dr"
      />

      {/* Project Content */}
      <section className="pb-20 pt-0 lg:pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
            {/* Project Overview - Second on mobile, First on desktop */}
            <div className="order-2 lg:order-1 flex flex-col space-y-6 pt-4 lg:pt-0">
              <h3 className="text-2xl font-bold text-dark">Commercial Building Excellence</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 1 Parkway Dr in Auckland, this commercial office building project 
                demonstrates our expertise in modern commercial construction. The project featured state-of-the-art 
                design, energy-efficient solutions, and flexible office spaces to meet the growing demands 
                of businesses in Auckland&apos;s North Shore.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Location: 1 Parkway Dr, Auckland</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Project Type: Commercial office building</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Size: 2,500 square meters, 3-story</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Building Features</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexible office layouts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>High-efficiency HVAC system</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Smart building technology</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Commercial Construction Excellence</h4>
                <p className="text-base leading-relaxed text-body-color">
                  This commercial building project showcases our ability to deliver sophisticated 
                  office spaces that meet modern business needs. We incorporated sustainable 
                  building practices, advanced technology infrastructure, and premium finishes 
                  to create an office environment that enhances productivity while reducing 
                  operational costs through energy-efficient systems.
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
                  src={parkwayDriveImages[0].src}
                  alt={parkwayDriveImages[0].alt}
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
                    src={parkwayDriveImages[1].src}
                    alt={parkwayDriveImages[1].alt}
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
                    src={parkwayDriveImages[2].src}
                    alt={parkwayDriveImages[2].alt}
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
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <StaticMapThumbnail
                    center={parkwayDriveLocation}
                    projectTitle={projectTitle}
                    onClick={() => setIsMapModalOpen(true)}
                    apiKey={apiKey}
                    isStreetView={false}
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <StaticMapThumbnail
                    center={streetViewLocation}
                    projectTitle={projectTitle}
                    onClick={() => setIsStreetViewModalOpen(true)}
                    apiKey={apiKey}
                    isStreetView={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* More Project Details */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="col-span-2">
                <h3 className="mb-6 text-2xl font-bold text-dark">Commercial Construction Approach</h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  The 1 Parkway Drive project presented unique challenges that required innovative solutions. 
                  Working closely with the client, we developed a comprehensive construction plan that 
                  maximized space efficiency while creating a modern, collaborative work environment that 
                  would attract high-quality tenants.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Our technical approach incorporated the latest in commercial building technologies, 
                  including advanced structural systems, high-performance building envelope, and 
                  integrated building management systems. These elements work together to create 
                  a building that not only looks impressive but functions efficiently with reduced 
                  operational costs and environmental impact.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-semibold text-dark">Key Building Elements</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>1</span>
                      </div>
                      <h5 className="font-semibold text-dark">Flexible Office Spaces</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Adaptable floor plans that can be configured to meet various business needs.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>2</span>
                      </div>
                      <h5 className="font-semibold text-dark">Sustainable Design</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Energy-efficient systems and eco-friendly materials to reduce environmental impact.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>3</span>
                      </div>
                      <h5 className="font-semibold text-dark">Technology Integration</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Smart building systems for security, energy management, and occupant comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interior Design Gallery */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-dark">Interior Design Gallery</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {interiorDesignImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative h-[250px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openInteriorGallery(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
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

          {/* CTA */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-dark">Looking for Commercial Construction Services?</h3>
            <p className="mb-6 mx-auto max-w-2xl text-body-color">
              Whether you&apos;re planning a new office building, retail space, or industrial facility, our team has the expertise 
              to deliver exceptional results. Let&apos;s discuss how we can bring your commercial construction project to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
            >
              Contact Us to Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Component */}
      {isGalleryOpen && (
        <ImageGallery
          images={parkwayDriveImages}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialImageIndex={currentImageIndex}
        />
      )}

      {/* Interior Design Gallery Component */}
      {isInteriorGalleryOpen && (
        <ImageGallery
          images={interiorDesignImages}
          isOpen={isInteriorGalleryOpen}
          onClose={() => setIsInteriorGalleryOpen(false)}
          initialImageIndex={currentInteriorImageIndex}
        />
      )}

      {/* Map Modal */}
      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        center={parkwayDriveLocation}
        projectTitle={projectTitle}
        apiKey={apiKey}
        isStreetView={false}
        markers={[
          {
            position: parkwayDriveLocation,
            title: "1 Parkway Dr, Auckland"
          }
        ]}
      />

      {/* Street View Modal */}
      <MapModal
        isOpen={isStreetViewModalOpen}
        onClose={() => setIsStreetViewModalOpen(false)}
        center={streetViewLocation}
        projectTitle={projectTitle}
        apiKey={apiKey}
        isStreetView={true}
        heading={310}
        pitch={0}
      />
    </>
  );
} 