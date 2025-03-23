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
  enableControls?: boolean;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  center,
  zoom = 14,
  apiKey,
  markers = [],
  streetView = false,
  heading = 0,
  pitch = 0,
  enableControls = false
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

  // Set map options based on whether controls are enabled
  const mapOptions = {
    mapTypeControl: enableControls,
    streetViewControl: enableControls,
    fullscreenControl: enableControls,
    zoomControl: enableControls,
    panControl: false,
    rotateControl: enableControls,
    scaleControl: enableControls,
    disableDefaultUI: !enableControls,
    disableDoubleClickZoom: false,
    gestureHandling: 'greedy',
    // Configure positions for controls when enabled
    ...(enableControls && {
      mapTypeControlOptions: {
        position: 3, // RIGHT_TOP
      },
      zoomControlOptions: {
        position: 9, // RIGHT_BOTTOM
      },
      fullscreenControlOptions: {
        position: 3, // RIGHT_TOP
      }
    })
  };

  // Street view options
  const streetViewOptions = {
    position: {
      lat: center.lat,
      lng: center.lng
    },
    visible: true,
    enableCloseButton: enableControls,
    addressControl: enableControls,
    fullscreenControl: enableControls,
    panControl: enableControls,
    zoomControl: enableControls,
    motionTracking: false,
    motionTrackingControl: enableControls,
    linksControl: enableControls,
    clickToGo: true,
    scrollwheel: true,
    disableDefaultUI: !enableControls,
    pov: {
      heading: heading,
      pitch: pitch
    }
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
          options={streetViewOptions}
        />
      )}
    </GoogleMap>
  ) : <div>Loading...</div>;
};

export default GoogleMapComponent; 