'use client';

import PageTitle from "@/components/Common/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';
import StaticMapThumbnail from '@/components/maps/StaticMapThumbnail';
import MapModal from '@/components/maps/MapModal';

// Westgate Dr exterior images configuration
const westgateExteriorImages = [
  { src: '/images/constructions/construction-3/Unknown.jpeg', alt: '30 Westgate Drive Exterior View' },
  { src: '/images/constructions/construction-3/Unknown-1.jpeg', alt: '30 Westgate Drive Front Entrance' },
  { src: '/images/constructions/construction-3/DJI_0320.JPG', alt: '30 Westgate Drive Aerial View' },
  { src: '/images/constructions/construction-3/Image_20230413110551.jpg', alt: '30 Westgate Drive Site Works' },
];

// Interior design images
const interiorDesignImages = [
  { src: '/images/constructions/construction-3/Image_20230413111027.jpg', alt: '30 Westgate Drive Interior Design' },
  { src: '/images/constructions/construction-3/Image_20231018115857.jpg', alt: '30 Westgate Drive Interior Spaces' },
  { src: '/images/constructions/construction-3/Image_20231018115432.jpg', alt: '30 Westgate Drive Interior Detail' },
];

export default function WestgateDrPage() {
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

  // Exact coordinates for 30 Westgate Drive, Westgate, Auckland 0614
  const westgateLocation = {
    lat: -36.8129276,
    lng: 174.6080894
  };
  
  // Street view specific coordinates
  const streetViewLocation = {
    lat: -36.8129276,
    lng: 174.6080894
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const projectTitle = "30 Westgate Dr Commercial Complex";

  return (
    <>
      <PageTitle
        pageTitle="30 Westgate Dr Commercial Complex"
        pageDescription="Modern commercial development with sustainable design features in Westgate, Auckland"
        breadcrumbTitle="Building Construction / Westgate Dr"
      />

      {/* Project Content */}
      <section className="pb-20 pt-0 lg:pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
            {/* Project Overview - Second on mobile, First on desktop */}
            <div className="order-2 lg:order-1 flex flex-col space-y-6 pt-4 lg:pt-0">
              <h3 className="text-2xl font-bold text-dark">Commercial Development Excellence</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 30 Westgate Drive in Westgate, Auckland, this commercial development project 
                demonstrates our expertise in modern commercial construction. The project features cutting-edge 
                design, energy-efficient solutions, and versatile commercial spaces designed to meet the needs 
                of businesses in Auckland&apos;s rapidly growing Westgate area.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Location: 30 Westgate Drive, Westgate</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Project Type: Commercial mixed-use complex</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Size: 3,200 square meters, multi-story</span>
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
                      <span>Modular commercial units</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advanced climate control system</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Integrated smart building technology</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Commercial Construction Innovation</h4>
                <p className="text-base leading-relaxed text-body-color">
                  The Westgate Dr project showcases our ability to deliver sophisticated 
                  commercial spaces that align with modern business requirements. We incorporated sustainable 
                  building practices, future-proof technology infrastructure, and premium architectural features 
                  to create a versatile business environment that enhances productivity while minimizing 
                  environmental impact through energy-efficient systems and sustainable materials.
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
                  src={westgateExteriorImages[0].src}
                  alt={westgateExteriorImages[0].alt}
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
                    src={westgateExteriorImages[1].src}
                    alt={westgateExteriorImages[1].alt}
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
                    src={westgateExteriorImages[2].src}
                    alt={westgateExteriorImages[2].alt}
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
                    center={westgateLocation}
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
                <h3 className="mb-6 text-2xl font-bold text-dark">Commercial Construction Strategy</h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  The 30 Westgate Drive project presented unique challenges in a rapidly developing commercial area. 
                  Working closely with stakeholders, we developed a comprehensive construction plan that 
                  maximized space efficiency while creating a versatile commercial environment designed to 
                  attract diverse businesses to the Westgate community.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Our technical approach incorporated the latest in commercial building technologies, 
                  including advanced structural systems, high-performance building envelope, and 
                  integrated building management systems. These elements work together to create 
                  a development that stands out visually while offering exceptional efficiency, 
                  reduced operational costs, and minimal environmental impact.
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
                      <h5 className="font-semibold text-dark">Modular Design</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Adaptable commercial spaces that can be configured to meet various business requirements.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>2</span>
                      </div>
                      <h5 className="font-semibold text-dark">Sustainable Construction</h5>
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
                      <h5 className="font-semibold text-dark">Smart Building Integration</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Integrated digital systems for security, energy management, and occupant comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interior Design Gallery */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-dark">Interior Design Gallery</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10">
                    <div className="absolute bottom-3 right-3 rounded-full bg-white p-1.5">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="mb-4 text-xl font-semibold text-dark">Interested in Our Building Services?</h3>
              <p className="mb-6 text-base text-body-color">
                Contact our team to discuss your construction project requirements and how we can help bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Galleries */}
      {isGalleryOpen && (
        <ImageGallery
          images={westgateExteriorImages}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialImageIndex={currentImageIndex}
        />
      )}

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
        center={westgateLocation}
        projectTitle={projectTitle}
        apiKey={apiKey}
        isStreetView={false}
        markers={[
          {
            position: westgateLocation,
            title: "30 Westgate Drive, Westgate, Auckland 0614"
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