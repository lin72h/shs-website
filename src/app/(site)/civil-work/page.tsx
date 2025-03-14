'use client';

import PageTitle from "@/components/Common/PageTitle";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';

// Project-2 images configuration
const upperHarbourImages = [
  // Prioritized images (x_ prefix)
  { src: '/images/portfolio/Project-2/x_571741642098_.pic.jpg', alt: 'Upper Harbour Drive Development Aerial View' },
  { src: '/images/portfolio/Project-2/x_521741642091_.pic.jpg', alt: 'Upper Harbour Drive Construction Progress' },
  { src: '/images/portfolio/Project-2/x_501741642088_.pic.jpg', alt: 'Upper Harbour Drive Site Development' },
  { src: '/images/portfolio/Project-2/x_461741642083_.pic.jpg', alt: 'Upper Harbour Drive Infrastructure Work' },
  { src: '/images/portfolio/Project-2/x_421741642079_.pic.jpg', alt: 'Upper Harbour Drive Earthworks' },
  { src: '/images/portfolio/Project-2/x_411741642077_.pic.jpg', alt: 'Upper Harbour Drive Development View' },
  { src: '/images/portfolio/Project-2/x_361741641712_.pic.jpg', alt: 'Upper Harbour Drive Progress' },
  { src: '/images/portfolio/Project-2/x_381741642067_.pic.jpg', alt: 'Upper Harbour Drive Construction' },
  // Additional images
  { src: '/images/portfolio/Project-2/581741642099_.pic.jpg', alt: 'Upper Harbour Drive Additional View 1' },
  { src: '/images/portfolio/Project-2/541741642094_.pic.jpg', alt: 'Upper Harbour Drive Additional View 2' },
  { src: '/images/portfolio/Project-2/561741642097_.pic.jpg', alt: 'Upper Harbour Drive Additional View 3' },
  { src: '/images/portfolio/Project-2/531741642092_.pic.jpg', alt: 'Upper Harbour Drive Additional View 4' },
  { src: '/images/portfolio/Project-2/491741642087_.pic.jpg', alt: 'Upper Harbour Drive Additional View 5' },
  { src: '/images/portfolio/Project-2/511741642090_.pic.jpg', alt: 'Upper Harbour Drive Additional View 6' },
  { src: '/images/portfolio/Project-2/471741642084_.pic.jpg', alt: 'Upper Harbour Drive Additional View 7' },
  { src: '/images/portfolio/Project-2/451741642081_.pic.jpg', alt: 'Upper Harbour Drive Additional View 8' },
  { src: '/images/portfolio/Project-2/431741642080_.pic.jpg', alt: 'Upper Harbour Drive Additional View 9' },
  { src: '/images/portfolio/Project-2/401741642076_.pic.jpg', alt: 'Upper Harbour Drive Additional View 10' },
  { src: '/images/portfolio/Project-2/371741641882_.pic.jpg', alt: 'Upper Harbour Drive Additional View 11' },
  { src: '/images/portfolio/Project-2/391741642074_.pic.jpg', alt: 'Upper Harbour Drive Additional View 12' },
];

// Project-1 images configuration (Don Buck)
const donBuckImages = [
  { src: '/images/portfolio/Project-1/don_buck_1.JPG', alt: 'Don Buck Aerial View' },
  { src: '/images/portfolio/Project-1/don_buck_2.JPG', alt: 'Earthworks Progress' },
  { src: '/images/portfolio/Project-1/don_buck_3.JPG', alt: 'Construction Progress' },
  { src: '/images/portfolio/Project-1/don_buck_4.JPG', alt: 'Don Buck Development View' },
  { src: '/images/portfolio/Project-1/don_buck_5.JPG', alt: 'Don Buck Site Development' },
  { src: '/images/portfolio/Project-1/don_buck_6.JPG', alt: 'Don Buck Infrastructure Work' },
];

// Project-3 images configuration (Weranui Road)
const weranuiImages = [
  // Prioritized images (x_ prefix)
  { src: '/images/portfolio/Project-3/xx_1261741642199_.pic.jpg', alt: 'Weranui Road Development Overview' },
  { src: '/images/portfolio/Project-3/x_951741642154_.pic.jpg', alt: 'Weranui Road Construction Progress' },
  { src: '/images/portfolio/Project-3/x_921741642150_.pic.jpg', alt: 'Weranui Road Site Development' },
  { src: '/images/portfolio/Project-3/x_941741642152_.pic.jpg', alt: 'Weranui Road Infrastructure Work' },
  { src: '/images/portfolio/Project-3/x_901741642147_.pic.jpg', alt: 'Weranui Road Earthworks' },
  { src: '/images/portfolio/Project-3/x_961741642155_.pic.jpg', alt: 'Weranui Road Development View' },
  { src: '/images/portfolio/Project-3/x_911741642149_.pic.jpg', alt: 'Weranui Road Construction' },
  { src: '/images/portfolio/Project-3/x_841741642135_.pic.jpg', alt: 'Weranui Road Site Planning' },
  { src: '/images/portfolio/Project-3/x_871741642143_.pic.jpg', alt: 'Weranui Road Engineering Work' },
  { src: '/images/portfolio/Project-3/x_891741642146_.pic.jpg', alt: 'Weranui Road Development Progress' },
  { src: '/images/portfolio/Project-3/x_1251741642198_.pic.jpg', alt: 'Weranui Road Additional View 1' },
  { src: '/images/portfolio/Project-3/x_1261741642199_.pic.jpg', alt: 'Weranui Road Additional View 2' },
  { src: '/images/portfolio/Project-3/x_1241741642197_.pic.jpg', alt: 'Weranui Road Additional View 3' },
  { src: '/images/portfolio/Project-3/x_1211741642192_.pic.jpg', alt: 'Weranui Road Additional View 4' },
  { src: '/images/portfolio/Project-3/x_1171741642186_.pic.jpg', alt: 'Weranui Road Additional View 5' },
  { src: '/images/portfolio/Project-3/x_1201741642191_.pic.jpg', alt: 'Weranui Road Additional View 6' },
  { src: '/images/portfolio/Project-3/x_1141741642182_.pic.jpg', alt: 'Weranui Road Additional View 7' },
  { src: '/images/portfolio/Project-3/x_1091741642176_.pic.jpg', alt: 'Weranui Road Additional View 8' },
  { src: '/images/portfolio/Project-3/x_1131741642181_.pic.jpg', alt: 'Weranui Road Additional View 9' },
  { src: '/images/portfolio/Project-3/x_1001741642161_.pic.jpg', alt: 'Weranui Road Additional View 10' },
  { src: '/images/portfolio/Project-3/x_1051741642169_.pic.jpg', alt: 'Weranui Road Additional View 11' },
  // Regular images (without x_ prefix)
  { src: '/images/portfolio/Project-3/991741642159_.pic.jpg', alt: 'Weranui Road Gallery Image 1' },
  { src: '/images/portfolio/Project-3/971741642157_.pic.jpg', alt: 'Weranui Road Gallery Image 2' },
  { src: '/images/portfolio/Project-3/981741642158_.pic.jpg', alt: 'Weranui Road Gallery Image 3' },
  { src: '/images/portfolio/Project-3/881741642145_.pic.jpg', alt: 'Weranui Road Gallery Image 4' },
  { src: '/images/portfolio/Project-3/931741642151_.pic.jpg', alt: 'Weranui Road Gallery Image 5' },
  { src: '/images/portfolio/Project-3/851741642141_.pic.jpg', alt: 'Weranui Road Gallery Image 6' },
  { src: '/images/portfolio/Project-3/861741642142_.pic.jpg', alt: 'Weranui Road Gallery Image 7' },
  { src: '/images/portfolio/Project-3/1221741642194_.pic.jpg', alt: 'Weranui Road Gallery Image 8' },
  { src: '/images/portfolio/Project-3/1231741642195_.pic.jpg', alt: 'Weranui Road Gallery Image 9' },
  { src: '/images/portfolio/Project-3/1191741642189_.pic.jpg', alt: 'Weranui Road Gallery Image 10' },
  { src: '/images/portfolio/Project-3/1161741642185_.pic.jpg', alt: 'Weranui Road Gallery Image 11' },
  { src: '/images/portfolio/Project-3/1181741642188_.pic.jpg', alt: 'Weranui Road Gallery Image 12' },
  { src: '/images/portfolio/Project-3/1151741642184_.pic.jpg', alt: 'Weranui Road Gallery Image 13' },
  { src: '/images/portfolio/Project-3/1111741642178_.pic.jpg', alt: 'Weranui Road Gallery Image 14' },
  { src: '/images/portfolio/Project-3/1121741642180_.pic.jpg', alt: 'Weranui Road Gallery Image 15' },
  { src: '/images/portfolio/Project-3/1101741642177_.pic.jpg', alt: 'Weranui Road Gallery Image 16' },
  { src: '/images/portfolio/Project-3/1081741642173_.pic.jpg', alt: 'Weranui Road Gallery Image 17' },
  { src: '/images/portfolio/Project-3/1061741642171_.pic.jpg', alt: 'Weranui Road Gallery Image 18' },
  { src: '/images/portfolio/Project-3/1071741642172_.pic.jpg', alt: 'Weranui Road Gallery Image 19' },
  { src: '/images/portfolio/Project-3/1041741642168_.pic.jpg', alt: 'Weranui Road Gallery Image 20' },
  { src: '/images/portfolio/Project-3/1031741642166_.pic.jpg', alt: 'Weranui Road Gallery Image 21' },
  { src: '/images/portfolio/Project-3/1021741642164_.pic.jpg', alt: 'Weranui Road Gallery Image 22' },
  { src: '/images/portfolio/Project-3/1011741642162_.pic.jpg', alt: 'Weranui Road Gallery Image 23' },
];

// Project-4 images configuration (791 State Highway 16)
const stateHighwayImages = [
  // Prioritized images (x_ prefix)
  { src: '/images/portfolio/Project-4/x_591741642101_.pic.jpg', alt: 'State Highway 16 Development Overview' },
  { src: '/images/portfolio/Project-4/x_821741642132_.pic.jpg', alt: 'State Highway 16 Construction Progress' },
  { src: '/images/portfolio/Project-4/x_741741642121_.pic.jpg', alt: 'State Highway 16 Site Development' },
  { src: '/images/portfolio/Project-4/x_751741642122_.pic.jpg', alt: 'State Highway 16 Infrastructure Work' },
  { src: '/images/portfolio/Project-4/x_721741642118_.pic.jpg', alt: 'State Highway 16 Earthworks' },
  { src: '/images/portfolio/Project-4/x_731741642119_.pic.jpg', alt: 'State Highway 16 Development View' },
  { src: '/images/portfolio/Project-4/x_621741642105_.pic.jpg', alt: 'State Highway 16 Construction' },
  { src: '/images/portfolio/Project-4/x_641741642108_.pic.jpg', alt: 'State Highway 16 Site Planning' },
  { src: '/images/portfolio/Project-4/x_681741642113_.pic.jpg', alt: 'State Highway 16 Engineering Work' },
  { src: '/images/portfolio/Project-4/x_591741642101_.pic.jpg', alt: 'State Highway 16 Development Progress' },
  { src: '/images/portfolio/Project-4/x_601741642102_.pic.jpg', alt: 'State Highway 16 Additional View 1' },
  // Regular images (without x_ prefix)
  { src: '/images/portfolio/Project-4/811741642131_.pic.jpg', alt: 'State Highway 16 Gallery Image 1' },
  { src: '/images/portfolio/Project-4/831741642133_.pic.jpg', alt: 'State Highway 16 Gallery Image 2' },
  { src: '/images/portfolio/Project-4/801741642129_.pic.jpg', alt: 'State Highway 16 Gallery Image 3' },
  { src: '/images/portfolio/Project-4/771741642125_.pic.jpg', alt: 'State Highway 16 Gallery Image 4' },
  { src: '/images/portfolio/Project-4/791741642127_.pic.jpg', alt: 'State Highway 16 Gallery Image 5' },
  { src: '/images/portfolio/Project-4/711741642117_.pic.jpg', alt: 'State Highway 16 Gallery Image 6' },
  { src: '/images/portfolio/Project-4/761741642123_.pic.jpg', alt: 'State Highway 16 Gallery Image 7' },
  { src: '/images/portfolio/Project-4/691741642114_.pic.jpg', alt: 'State Highway 16 Gallery Image 8' },
  { src: '/images/portfolio/Project-4/701741642115_.pic.jpg', alt: 'State Highway 16 Gallery Image 9' },
  { src: '/images/portfolio/Project-4/661741642110_.pic.jpg', alt: 'State Highway 16 Gallery Image 10' },
  { src: '/images/portfolio/Project-4/671741642111_.pic.jpg', alt: 'State Highway 16 Gallery Image 11' },
  { src: '/images/portfolio/Project-4/651741642109_.pic.jpg', alt: 'State Highway 16 Gallery Image 12' },
  { src: '/images/portfolio/Project-4/611741642103_.pic.jpg', alt: 'State Highway 16 Gallery Image 13' },
  { src: '/images/portfolio/Project-4/631741642106_.pic.jpg', alt: 'State Highway 16 Gallery Image 14' },
];

// Project-5 images configuration (88 Cook Street)
const cookStreetImages = [
  // Prioritized images (xx_ and x_ prefix)
  { src: '/images/portfolio/Project-5/xx_1301741642206_.pic.jpg', alt: 'Cook Street Development Overview' },
  { src: '/images/portfolio/Project-5/x_1451741642229_.pic.jpg', alt: 'Cook Street Construction Progress' },
  { src: '/images/portfolio/Project-5/x_1411741642221_.pic.jpg', alt: 'Cook Street Site Development' },
  { src: '/images/portfolio/Project-5/x_1441741642226_.pic.jpg', alt: 'Cook Street Infrastructure Work' },
  { src: '/images/portfolio/Project-5/x_1391741642218_.pic.jpg', alt: 'Cook Street Earthworks' },
  { src: '/images/portfolio/Project-5/x_1351741642213_.pic.jpg', alt: 'Cook Street Development View' },
  { src: '/images/portfolio/Project-5/x_1371741642216_.pic.jpg', alt: 'Cook Street Construction' },
  { src: '/images/portfolio/Project-5/x_1331741642210_.pic.jpg', alt: 'Cook Street Site Planning' },
  { src: '/images/portfolio/Project-5/x_1341741642211_.pic.jpg', alt: 'Cook Street Engineering Work' },
  { src: '/images/portfolio/Project-5/x_1321741642209_.pic.jpg', alt: 'Cook Street Development Progress' },
  { src: '/images/portfolio/Project-5/x_1271741642201_.pic.jpg', alt: 'Cook Street Additional View 1' },
  { src: '/images/portfolio/Project-5/x_1281741642202_.pic.jpg', alt: 'Cook Street Additional View 2' },
  // Regular images (without x_ prefix)
  { src: '/images/portfolio/Project-5/1431741642225_.pic.jpg', alt: 'Cook Street Gallery Image 1' },
  { src: '/images/portfolio/Project-5/1421741642223_.pic.jpg', alt: 'Cook Street Gallery Image 2' },
  { src: '/images/portfolio/Project-5/1401741642220_.pic.jpg', alt: 'Cook Street Gallery Image 3' },
  { src: '/images/portfolio/Project-5/1381741642217_.pic.jpg', alt: 'Cook Street Gallery Image 4' },
  { src: '/images/portfolio/Project-5/1361741642214_.pic.jpg', alt: 'Cook Street Gallery Image 5' },
  { src: '/images/portfolio/Project-5/1311741642207_.pic.jpg', alt: 'Cook Street Gallery Image 6' },
  { src: '/images/portfolio/Project-5/1291741642204_.pic.jpg', alt: 'Cook Street Gallery Image 7' },
];

export default function CivilWorkPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [isDonBuckGalleryOpen, setIsDonBuckGalleryOpen] = useState(false);
  const [donBuckInitialImageIndex, setDonBuckInitialImageIndex] = useState(0);
  const [isWeranuiGalleryOpen, setIsWeranuiGalleryOpen] = useState(false);
  const [weranuiInitialImageIndex, setWeranuiInitialImageIndex] = useState(0);
  const [isStateHighwayGalleryOpen, setIsStateHighwayGalleryOpen] = useState(false);
  const [stateHighwayInitialImageIndex, setStateHighwayInitialImageIndex] = useState(0);
  const [isCookStreetGalleryOpen, setIsCookStreetGalleryOpen] = useState(false);
  const [cookStreetInitialImageIndex, setCookStreetInitialImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setInitialImageIndex(index);
    setIsGalleryOpen(true);
  };

  const openDonBuckGallery = (index: number) => {
    setDonBuckInitialImageIndex(index);
    setIsDonBuckGalleryOpen(true);
  };

  const openWeranuiGallery = (index: number) => {
    setWeranuiInitialImageIndex(index);
    setIsWeranuiGalleryOpen(true);
  };

  const openStateHighwayGallery = (index: number) => {
    setStateHighwayInitialImageIndex(index);
    setIsStateHighwayGalleryOpen(true);
  };

  const openCookStreetGallery = (index: number) => {
    setCookStreetInitialImageIndex(index);
    setIsCookStreetGalleryOpen(true);
  };

  return (
    <>
      <PageTitle
        pageTitle="Civil Engineering"
        pageDescription="Comprehensive civil engineering solutions for development feasibility, design, consents, contract management, and construction, delivered by our experienced team of qualified engineers."
        breadcrumbTitle="Civil Engineering"
      />

      {/* Featured Projects */}
      <section id="don-buck-development" className="pb-20 pt-16">
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
                    <span className="text-sm text-body-color">On-Engineer Material</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don Buck Image Gallery */}
      <ImageGallery
        images={donBuckImages}
        isOpen={isDonBuckGalleryOpen}
        onClose={() => setIsDonBuckGalleryOpen(false)}
        initialImageIndex={donBuckInitialImageIndex}
      />

      {/* Upper Harbour Drive Project Section */}
      <section id="upper-harbour-development" className="bg-gray-50 pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="Upper Harbour Drive Development"
            paragraph="Complex 16-lot subdivision on challenging terrain in Greenhithe, Auckland"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Images */}
            <div className="grid gap-4">
              {/* Main Featured Image */}
              <div 
                className="relative h-[400px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
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
              {/* Grid of 4 smaller images */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                    onClick={() => openGallery(index)}
                  >
                    <Image
                      src={upperHarbourImages[index].src}
                      alt={upperHarbourImages[index].alt}
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
                ))}
              </div>
            </div>

            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Project Rescue and Completion</h3>
              <p className="text-base leading-relaxed text-body-color">
                This challenging 16-lot subdivision at 236 Upper Harbour Drive in Greenhithe presented 
                significant technical challenges with its steep topography, complex site conditions, and historical 
                geotechnical stability issues. Our engineering team was brought in at a critical moment when the project 
                was at risk of failure, with contractors threatening to abandon the site and client&apos;s pre-sales in jeopardy.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-4">
                  <h4 className="mb-2 font-semibold text-dark">Project Challenges</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Steep, complex terrain</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Historical geotechnical stability issues</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Previous poor project management</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <h4 className="mb-2 font-semibold text-dark">Our Comprehensive Services</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Water & wastewater design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stormwater detention tank design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Construction project & contract management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Earthworks construction</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>224c process management & certification</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-primary/10 p-5">
                <h4 className="mb-3 font-semibold text-dark">Project Rescue Success Story</h4>
                <p className="text-body-color leading-relaxed">
                  When we took over this project, it was in a critical state. The previous project manager had 
                  created a situation where contractors were prepared to abandon the site, which would have caused 
                  the client&apos;s pre-sales to fall through. The project lacked crucial design elements and was facing 
                  multiple compliance issues.
                </p>
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Our Solution</h5>
                    <p className="text-sm text-body-color">
                      Through our technical expertise, we completed the missing designs, implemented proper project 
                      management protocols, and worked closely with contractors to rebuild confidence in the project. 
                      Our team managed the complex certification process and successfully obtained the 224c certificate 
                      and titles in time for the client&apos;s pre-sales to proceed as planned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <ImageGallery
        images={upperHarbourImages}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialImageIndex={initialImageIndex}
      />

      {/* Weranui Road Project Section */}
      <section id="weranui-road" className="pb-20 pt-16">
        <div className="container">
          <SectionTitle
            mainTitle="FEATURED PROJECT"
            title="Weranui Road"
            paragraph="Development project at 18 Weranui Road, Waiwera completed in October 2017"
            center={true}
            marginBottom="60px"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-dark">Technical Excellence in Complex Terrain</h3>
              <p className="text-base leading-relaxed text-body-color">
                Located at 18 Weranui Road in Waiwera (Lot 3 DP 428671), this development project was completed
                in October 2017. The project required sophisticated engineering solutions to address the site&apos;s
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
                      <span>Completion: October 2017</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Engineering Services</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive civil engineering design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full utility infrastructure design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Earthworks & finished surface design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Project & construction management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-primary/10 p-5">
                <h4 className="mb-3 font-semibold text-dark">Technical Achievement</h4>
                <div className="mt-2 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Geotechnical Expertise</h5>
                    <p className="text-body-color leading-relaxed">
                      The project featured complex geotechnical infrastructure that required specialized oversight 
                      during construction. Our team managed the construction process to ensure all works were 
                      executed precisely according to design specifications. We facilitated close collaboration 
                      between contractors and certifying engineers, resulting in full approval from both the 
                      Geotechnical Engineer and Civil Engineer. Our careful management of the 224c certification 
                      process ensured all technical requirements were met for final approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid gap-4">
              {/* Main Featured Image */}
              <div 
                className="relative h-[300px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openWeranuiGallery(0)}
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
                  onClick={() => openWeranuiGallery(1)}
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
                  onClick={() => openWeranuiGallery(2)}
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
        </div>
      </section>

      {/* Weranui Road Image Gallery */}
      <ImageGallery
        images={weranuiImages}
        isOpen={isWeranuiGalleryOpen}
        onClose={() => setIsWeranuiGalleryOpen(false)}
        initialImageIndex={weranuiInitialImageIndex}
      />

      {/* 791 State Highway 16 Project Section */}
      <section id="state-highway-16" className="bg-gray-50 pb-20 pt-16">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Location: 791 State Highway 16, Kumeu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Commercial development project</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Infrastructure integration with SH16</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Services Provided</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive site assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Civil engineering design & planning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Traffic management solutions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-lg font-semibold text-dark">Project Challenges & Solutions</h4>
                
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Key Challenges</h5>
                    <p className="text-sm text-body-color">
                      The project presented several challenges including highway access requirements, complex 
                      stormwater management needs, and integration with existing infrastructure. 
                      Additionally, coordination with NZTA was required for aspects relating to State Highway 16.
                    </p>
                  </div>
                </div>
              
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Our Solution</h5>
                    <p className="text-sm text-body-color">
                      Our team developed a comprehensive civil engineering plan that addressed all regulatory 
                      requirements while optimizing the site&apos;s commercial potential. We implemented innovative 
                      stormwater solutions, designed efficient traffic flow patterns, and worked closely with 
                      authorities to ensure all highway access requirements were met to the highest standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="flex flex-col space-y-6">
              {/* Main Image */}
              <div 
                className="relative h-[300px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openStateHighwayGallery(0)}
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
              
              {/* Additional Images */}
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openStateHighwayGallery(1)}
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
                  onClick={() => openStateHighwayGallery(2)}
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
        </div>
      </section>

      {/* State Highway 16 Image Gallery */}
      <ImageGallery
        images={stateHighwayImages}
        isOpen={isStateHighwayGalleryOpen}
        onClose={() => setIsStateHighwayGalleryOpen(false)}
        initialImageIndex={stateHighwayInitialImageIndex}
      />

      {/* 88 Cook Street Project Section */}
      <section id="cook-street" className="pb-20 pt-16">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Location: 88 Cook Street, Auckland CBD</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Mixed-use urban development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Sustainable urban design principles</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-dark">Services Provided</h4>
                  <ul className="space-y-2 text-sm text-body-color">
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Urban infrastructure assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stormwater management solutions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Civil engineering design & implementation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-lg font-semibold text-dark">Urban Redevelopment Challenges</h4>
                
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Complex Urban Context</h5>
                    <p className="text-sm text-body-color">
                      The project presented significant challenges due to its central urban location, including 
                      existing underground infrastructure, confined working spaces, and the need to minimize 
                      disruption to neighboring properties and businesses. The site also required extensive 
                      coordination with Auckland Council and utility providers.
                    </p>
                  </div>
                </div>
              
                <div className="mt-4 flex items-start space-x-3">
                  <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-sm font-semibold text-dark">Innovative Solutions</h5>
                    <p className="text-sm text-body-color">
                      Our team developed innovative solutions that addressed the unique urban challenges, including 
                      advanced stormwater management systems integrated with the building design, carefully 
                      sequenced construction to minimize disruption, and close collaboration with all stakeholders. 
                      We implemented sustainable design principles that enhanced the project&apos;s environmental performance 
                      while meeting all regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="flex flex-col space-y-6">
              {/* Main Image */}
              <div 
                className="relative h-[300px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openCookStreetGallery(0)}
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
              
              {/* Additional Images */}
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="relative h-[200px] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openCookStreetGallery(1)}
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
                  onClick={() => openCookStreetGallery(2)}
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
        </div>
      </section>

      {/* Cook Street Image Gallery */}
      <ImageGallery
        images={cookStreetImages}
        isOpen={isCookStreetGalleryOpen}
        onClose={() => setIsCookStreetGalleryOpen(false)}
        initialImageIndex={cookStreetInitialImageIndex}
      />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary pb-14 pt-14">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-2/3">
              <div className="mb-8 lg:mb-0">
                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                  Ready to Start Your Civil Engineering Project?
                </h3>
                <p className="text-lg font-medium text-white opacity-80">
                  Our team of expert civil engineers is ready to bring your development vision to life.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="flex flex-wrap justify-center lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-center text-base font-semibold text-primary transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 