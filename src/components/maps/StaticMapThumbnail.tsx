'use client';

import React from 'react';
import Image from 'next/image';

interface StaticMapThumbnailProps {
  center: {
    lat: number;
    lng: number;
  };
  projectTitle: string;
  onClick: () => void;
  apiKey: string;
  isStreetView?: boolean;
}

const StaticMapThumbnail: React.FC<StaticMapThumbnailProps> = ({
  center,
  projectTitle,
  onClick,
  apiKey,
  isStreetView = false,
}) => {
  // Generate static map URL based on whether it's a map view or street view
  const staticMapUrl = isStreetView
    ? `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${center.lat},${center.lng}&fov=80&heading=310&pitch=0&key=${apiKey}`
    : `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=15&size=600x400&scale=2&markers=color:red%7C${center.lat},${center.lng}&key=${apiKey}`;

  return (
    <div 
      className="relative cursor-pointer rounded-lg overflow-hidden h-full w-full transition-transform hover:scale-[1.02]"
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      role="button"
      aria-label={isStreetView ? `Open ${projectTitle} street view` : `Open ${projectTitle} map view`}
    >
      {/* Static map image */}
      <div className="relative w-full h-full">
        <Image 
          src={staticMapUrl}
          alt={isStreetView ? `Street view for ${projectTitle}` : `Map location for ${projectTitle}`}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Visual affordance overlay with different icons for map vs street view */}
      <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10">
        <div className="absolute bottom-2 right-2 rounded-full bg-white p-1.5">
          {isStreetView ? (
            /* Street View icon - 360 view */
            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
            </svg>
          ) : (
            /* Map location icon */
            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaticMapThumbnail; 