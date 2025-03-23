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
      className="relative cursor-pointer rounded-lg overflow-hidden h-full w-full"
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
      
      {/* Visual affordance overlay */}
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <span className="bg-white/90 rounded-full p-2">
          <ExpandIcon className="w-6 h-6 text-primary" />
          <span className="sr-only">Expand map</span>
        </span>
      </div>
    </div>
  );
};

// Simple expand icon component
const ExpandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 3h6m0 0v6m0-6l-7 7m-3 4l-6 6m0 0H3m6 0V17m-6-6h6m0 0v6"
    />
  </svg>
);

export default StaticMapThumbnail; 