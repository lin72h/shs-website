'use client';

import React from 'react';
import GoogleMapComponent from './GoogleMap';

interface MapSelectorProps {
  googleMapApiKey: string;
  initialLocation: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  googleMapMarkers?: Array<{
    position: {
      lat: number;
      lng: number;
    };
    title?: string;
  }>;
}

const MapSelector: React.FC<MapSelectorProps> = ({
  googleMapApiKey,
  initialLocation,
  zoom = 14,
  googleMapMarkers = []
}) => {
  return (
    <div className="w-full">
      <div className="h-[400px] w-full rounded border border-gray-300">
        <GoogleMapComponent
          center={initialLocation}
          apiKey={googleMapApiKey}
          markers={googleMapMarkers}
          zoom={zoom}
        />
      </div>
    </div>
  );
};

export default MapSelector; 