'use client';

import PageTitle from "@/components/Common/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';
import GoogleMapComponent from '@/components/maps/GoogleMap';

// 347 Pinecrest Dr images configuration
const pinecrestImages = [
  { src: '/images/constructions/construction-1/1461742336373_.pic.jpg', alt: '347 Pinecrest Dr Front View' },
  { src: '/images/constructions/construction-1/1471742336374_.pic.jpg', alt: '347 Pinecrest Dr Exterior' },
  { src: '/images/constructions/construction-1/1481742336381_.pic.jpg', alt: '347 Pinecrest Dr Side View' },
  { src: '/images/constructions/construction-1/1491742336385_.pic.jpg', alt: '347 Pinecrest Dr Construction' },
  { src: '/images/constructions/construction-1/1501742336387_.pic.jpg', alt: '347 Pinecrest Dr Detail' },
  { src: '/images/constructions/construction-1/1511742336390_.pic.jpg', alt: '347 Pinecrest Dr Structure' },
  { src: '/images/constructions/construction-1/1521742336392_.pic.jpg', alt: '347 Pinecrest Dr Framework' },
  { src: '/images/constructions/construction-1/1531742336393_.pic.jpg', alt: '347 Pinecrest Dr Construction Phase' },
  { src: '/images/constructions/construction-1/1541742336396_.pic.jpg', alt: '347 Pinecrest Dr Interior' },
  { src: '/images/constructions/construction-1/1551742336398_.pic.jpg', alt: '347 Pinecrest Dr Design' },
  { src: '/images/constructions/construction-1/1561742336399_.pic.jpg', alt: '347 Pinecrest Dr Detail Work' },
  { src: '/images/constructions/construction-1/1571742336401_.pic.jpg', alt: '347 Pinecrest Dr Kitchen' },
  { src: '/images/constructions/construction-1/1581742336403_.pic.jpg', alt: '347 Pinecrest Dr Living Space' },
  { src: '/images/constructions/construction-1/1591742336404_.pic.jpg', alt: '347 Pinecrest Dr Bathroom' },
  { src: '/images/constructions/construction-1/1601742336406_.pic.jpg', alt: '347 Pinecrest Dr Bedroom' },
  { src: '/images/constructions/construction-1/1611742336409_.pic.jpg', alt: '347 Pinecrest Dr Finishing' }
];

export default function PinecrestDrPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  // Exact coordinates for 347 Pinecrest Drive, Gulf Harbour, Auckland 0930
  const pinecrestLocation = {
    lat: -36.624948614745264,
    lng: 174.8019092969757
  };
  
  // Street view specific coordinates - moved left about 10m for better view
  const streetViewLocation = {
    lat: -36.6249731,
    lng: 174.8017324
  };

  return (
    <>
      <PageTitle
        pageTitle="347 Pinecrest Dr Residence"
        pageDescription="Modern residential construction with advanced architectural design in Auckland"
        breadcrumbTitle="Building Construction / 347 Pinecrest Dr"
      />

      {/* Project Content */}
      <section className="pb-20 pt-0 lg:pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
            {/* Project Overview - Second on mobile, First on desktop */}
            <div className="order-2 lg:order-1 flex flex-col space-y-6 pt-4 lg:pt-0">
              <h3 className="text-2xl font-bold text-dark">Modern Residential Excellence</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 347 Pinecrest Dr in Auckland, this custom residential project showcases 
                our expertise in modern home construction. The project involved creating a contemporary 
                family residence with premium finishes, energy-efficient systems, and innovative 
                architectural design elements that maximize space utilization and natural light.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Location: 347 Pinecrest Dr, Auckland</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Project Type: Custom residential home</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Size: 280 square meters, 2-story</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Design Features</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Open concept living spaces</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Floor-to-ceiling windows</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Energy-efficient systems</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Construction Excellence</h4>
                <p className="text-base leading-relaxed text-body-color">
                  This residence exemplifies our commitment to quality construction and innovative design. 
                  We employed advanced building techniques and premium materials to create a home that not 
                  only looks stunning but also delivers exceptional energy efficiency and durability. The 
                  result is a beautiful, contemporary residence that perfectly balances aesthetics with 
                  functionality.
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
                  src={pinecrestImages[0].src}
                  alt={pinecrestImages[0].alt}
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
                    src={pinecrestImages[1].src}
                    alt={pinecrestImages[1].alt}
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
                    src={pinecrestImages[2].src}
                    alt={pinecrestImages[2].alt}
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
                  className="relative h-[200px] overflow-hidden rounded-lg"
                >
                  <GoogleMapComponent
                    center={pinecrestLocation}
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
                    zoom={15}
                    markers={[
                      {
                        position: pinecrestLocation,
                        title: "347 Pinecrest Drive, Gulf Harbour, Auckland 0930"
                      }
                    ]}
                  />
                </div>
                <div 
                  className="relative h-[200px] overflow-hidden rounded-lg"
                >
                  <GoogleMapComponent
                    center={streetViewLocation}
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
                    zoom={15}
                    streetView={true}
                    heading={310}
                    pitch={0}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* More Project Details */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="col-span-2">
                <h3 className="mb-6 text-2xl font-bold text-dark">Residential Construction Approach</h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  The 347 Pinecrest Dr project presented an opportunity to showcase our residential construction 
                  expertise. Working with the client&apos;s vision for a modern family home, we designed and built a 
                  residence that perfectly balances style, functionality, and energy efficiency.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Our approach included using premium construction materials and techniques to ensure both beauty 
                  and durability. The open-concept design maximizes natural light and creates fluid living spaces, 
                  while carefully selected finishes add warmth and character throughout the home. Energy-efficient 
                  systems were integrated to reduce environmental impact and minimize utility costs.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-semibold text-dark">Design Elements</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>1</span>
                      </div>
                      <h5 className="font-semibold text-dark">Open Living Concept</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Seamless flow between kitchen, dining and living areas for modern family living.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>2</span>
                      </div>
                      <h5 className="font-semibold text-dark">Natural Light Focus</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Strategic placement of large windows to maximize daylight throughout the home.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>3</span>
                      </div>
                      <h5 className="font-semibold text-dark">Premium Finishes</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      High-quality materials and detailed craftwork in every room of the home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-dark">Project Gallery</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {pinecrestImages.slice(5).map((image, index) => (
                <div 
                  key={index + 5}
                  className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openGallery(index + 5)}
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
            <h3 className="mb-3 text-xl font-bold text-dark">Interested in a Similar Project?</h3>
            <p className="mb-6 mx-auto max-w-2xl text-body-color">
              Our team can help bring your residential construction vision to life with the same attention to detail 
              and quality craftsmanship showcased in the 347 Pinecrest Dr project.
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
          images={pinecrestImages}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialImageIndex={currentImageIndex}
        />
      )}
    </>
  );
} 