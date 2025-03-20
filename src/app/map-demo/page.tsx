'use client';

import React from 'react';
import MapSelector from '@/components/maps/MapSelector';

const MapDemoPage = () => {
  // Replace with your actual Google Maps API key
  const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  // Example location (San Francisco)
  const initialLocation = {
    lat: 37.7749,
    lng: -122.4194
  };

  // Example markers for Google Maps
  const googleMapMarkers = [
    {
      position: {
        lat: 37.7749,
        lng: -122.4194
      },
      title: 'San Francisco'
    },
    {
      position: {
        lat: 37.7694,
        lng: -122.4862
      },
      title: 'Golden Gate Park'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-center text-2xl font-bold">Google Maps Demo</h1>
      
      <div className="mb-8">
        <MapSelector
          googleMapApiKey={googleMapApiKey}
          initialLocation={initialLocation}
          googleMapMarkers={googleMapMarkers}
          zoom={13}
        />
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Note: You need to set up the following environment variable:</p>
        <p className="font-mono mt-2">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</p>
        <p className="mt-4">
          <a 
            href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Get your Google Maps API key here
          </a>
        </p>
      </div>
    </div>
  );
};

export default MapDemoPage; 