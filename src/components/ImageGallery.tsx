import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number;
}

export default function ImageGallery({ images, isOpen, onClose, initialImageIndex = 0 }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setCurrentImageIndex(initialImageIndex);
  }, [initialImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  // Handle click to close gallery
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if click is on the backdrop (not on image container, thumbnails, or close button)
    if (
      imageContainerRef.current && !imageContainerRef.current.contains(e.target as Node) &&
      thumbnailsRef.current && !thumbnailsRef.current.contains(e.target as Node) &&
      closeButtonRef.current && !closeButtonRef.current.contains(e.target as Node) &&
      !(e.target as HTMLElement).closest('button') // Exclude any buttons (like navigation)
    ) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 cursor-zoom-out"
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/30 text-sm">Click outside image to close</span>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        }}
        className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow-lg hover:bg-white cursor-pointer"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        }}
        className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow-lg hover:bg-white cursor-pointer"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main image */}
      <div 
        ref={imageContainerRef}
        className="relative h-[80vh] w-[80vw] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          fill
          className="object-contain"
          quality={100}
        />
      </div>

      {/* Image counter */}
      <div className="absolute left-1/2 top-4 z-50 -translate-x-1/2 rounded-full bg-black/75 px-4 py-2 text-sm text-white">
        {currentImageIndex + 1} / {images.length}
      </div>

      {/* Close button - circular cross */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute bottom-24 left-1/2 z-50 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-all hover:bg-white cursor-pointer"
        aria-label="Close gallery"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Thumbnail strip */}
      <div 
        ref={thumbnailsRef}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/75 p-2 w-[90vw] md:w-[80vw] max-w-[1200px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black/30"
      >
        <div className="flex space-x-2 min-w-max">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${
                index === currentImageIndex ? 'border-primary' : 'border-transparent'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 