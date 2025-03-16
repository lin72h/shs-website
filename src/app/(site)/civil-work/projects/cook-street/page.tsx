'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';

// Cook Street images configuration
const cookStreetImages = [
  { src: '/images/portfolio/Project-5/xx_1301741642206_.pic.jpg', alt: 'Cook Street Development Aerial View' },
  { src: '/images/portfolio/Project-5/x_1411741642221_.pic.jpg', alt: 'Cook Street Urban Development' },
  { src: '/images/portfolio/Project-5/x_1441741642226_.pic.jpg', alt: 'Cook Street Construction Progress' },
  { src: '/images/portfolio/Project-5/x_1391741642218_.pic.jpg', alt: 'Cook Street Mixed-Use Complex' },
  { src: '/images/portfolio/Project-5/x_1351741642213_.pic.jpg', alt: 'Cook Street Infrastructure Work' },
];

export default function CookStreetPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <PageTitle
        pageTitle="88 Cook Street Development"
        pageDescription="Urban revitalization and mixed-use development in Auckland CBD"
        breadcrumbTitle="Civil Engineering / Cook Street"
      />

      {/* Project Content */}
      <section className="pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="88 Cook Street"
            paragraph="Urban revitalization and mixed-use development in Auckland CBD"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Urban Development Excellence</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 88 Cook Street in Auckland CBD, this ambitious mixed-use development project 
                showcases our expertise in urban civil engineering. The project involved transforming an 
                underutilized inner-city site into a vibrant mixed-use space, requiring significant 
                infrastructure modifications, stormwater solutions, and careful integration with the 
                surrounding urban environment.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Specifications</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Location: 88 Cook Street, Auckland CBD</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Development Type: Mixed-use urban</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Scale: Multi-story urban complex</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Urban Engineering Solutions</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Integrated urban stormwater management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Complex utility coordination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Pedestrian-focused urban design</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 font-semibold text-dark">Urban Revitalization Impact</h4>
                <p className="text-base leading-relaxed text-body-color">
                  This development has contributed significantly to the revitalization of Auckland's urban core, 
                  creating a vibrant mixed-use environment that enhances the city's livability and economic 
                  vitality. Our engineering solutions seamlessly integrated modern infrastructure with urban 
                  design principles to create a sustainable, functional space that serves multiple purposes.
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
                  src={cookStreetImages[0].src}
                  alt={cookStreetImages[0].alt}
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
                    src={cookStreetImages[1].src}
                    alt={cookStreetImages[1].alt}
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
                    src={cookStreetImages[2].src}
                    alt={cookStreetImages[2].alt}
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
                <h3 className="mb-6 text-2xl font-bold text-dark">Urban Engineering Challenges</h3>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  The 88 Cook Street development presented unique urban engineering challenges that required 
                  innovative solutions. Working in a dense urban environment necessitated careful coordination 
                  with existing infrastructure, utilities, and neighboring properties while maintaining minimal 
                  disruption to the surrounding community.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Our team implemented sophisticated urban stormwater management systems that address Auckland's 
                  specific climate considerations and regulatory requirements. The project incorporated sustainable 
                  design principles, including water-sensitive urban design features that enhance both functionality 
                  and aesthetic appeal within the urban context.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl font-semibold text-dark">Urban Design Elements</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>1</span>
                      </div>
                      <h5 className="font-semibold text-dark">Mixed-Use Integration</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Seamless combination of residential, commercial, and public spaces
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>2</span>
                      </div>
                      <h5 className="font-semibold text-dark">Urban Water Management</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Innovative solutions for urban runoff and water quality
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>3</span>
                      </div>
                      <h5 className="font-semibold text-dark">Pedestrian Connectivity</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Enhanced walkability and urban accessibility
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <span>4</span>
                      </div>
                      <h5 className="font-semibold text-dark">Sustainable Urban Systems</h5>
                    </div>
                    <p className="pl-11 text-sm text-body-color">
                      Resource-efficient infrastructure and energy considerations
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
          images={cookStreetImages}
          onClose={() => setIsGalleryOpen(false)}
          isOpen={isGalleryOpen}
          initialImageIndex={currentImageIndex}
        />
      )}
    </>
  );
} 