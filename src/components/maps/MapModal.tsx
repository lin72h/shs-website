'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import GoogleMapComponent from './GoogleMap';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  center: {
    lat: number;
    lng: number;
  };
  projectTitle: string;
  apiKey: string;
  isStreetView?: boolean;
  heading?: number;
  pitch?: number;
  markers?: Array<{
    position: {
      lat: number;
      lng: number;
    };
    title?: string;
  }>;
}

const MapModal: React.FC<MapModalProps> = ({
  isOpen,
  onClose,
  center,
  projectTitle,
  apiKey,
  isStreetView = false,
  heading = 0,
  pitch = 0,
  markers = [],
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = 'auto'; };
    }
  }, [isOpen]);

  // Focus trap inside modal for accessibility
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Store the active element before opening modal
      const activeElement = document.activeElement;
      
      // Focus the modal
      modalRef.current.focus();
      
      return () => {
        // Return focus back to the element that was focused before modal opened
        if (activeElement instanceof HTMLElement) {
          activeElement.focus();
        }
      };
    }
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      {/* Backdrop */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal container with responsive sizing */}
      <div 
        ref={modalRef}
        className="relative bg-white rounded-lg w-[95vw] h-[80vh] md:w-[80vw] md:h-[80vh] max-w-5xl max-h-[800px] z-10 overflow-hidden shadow-xl"
        style={{ animation: 'fadeIn 0.2s ease-out forwards' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="map-modal-title"
        tabIndex={-1}
      >
        {/* Close button */}
        <button 
          className="absolute right-3 top-3 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          onClick={onClose}
          aria-label="Close map"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
        
        {/* Title */}
        <div className="p-4 bg-white border-b">
          <h3 id="map-modal-title" className="font-medium text-lg">
            {isStreetView ? `${projectTitle} Street View` : `${projectTitle} Location`}
          </h3>
        </div>
        
        {/* Interactive Map */}
        <div className="w-full h-[calc(100%-4rem)]">
          <GoogleMapComponent 
            center={center}
            apiKey={apiKey}
            zoom={15}
            markers={isStreetView ? [] : markers.length > 0 ? markers : [{ position: center, title: projectTitle }]}
            streetView={isStreetView}
            heading={heading}
            pitch={pitch}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

// Simple close icon component
const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default MapModal; 