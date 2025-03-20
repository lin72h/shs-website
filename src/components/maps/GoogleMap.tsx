'use client';

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

interface GoogleMapComponentProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  apiKey: string;
  markers?: Array<{
    position: {
      lat: number;
      lng: number;
    };
    title?: string;
  }>;
  streetView?: boolean;
  heading?: number;
  pitch?: number;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  center,
  zoom = 14,
  apiKey,
  markers = [],
  streetView = false,
  heading = 0,
  pitch = 0
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const mapOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    disableDefaultUI: true,
    disableDoubleClickZoom: false
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      {!streetView && 
        markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
          />
        ))
      }
      {streetView && (
        <StreetViewPanorama
          options={{
            position: {
              lat: center.lat,
              lng: center.lng
            },
            visible: true,
            enableCloseButton: false,
            addressControl: false,
            fullscreenControl: false,
            panControl: false,
            zoomControl: false,
            motionTracking: false,
            motionTrackingControl: false,
            linksControl: false,
            clickToGo: true,
            scrollwheel: false,
            disableDefaultUI: true,
            pov: {
              heading: heading,
              pitch: pitch
            }
          }}
        />
      )}
    </GoogleMap>
  ) : <div>Loading...</div>;
};

export default GoogleMapComponent; 