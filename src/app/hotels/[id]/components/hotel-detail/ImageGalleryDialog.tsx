import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft24Regular, ChevronRight24Regular, DismissRegular } from '@fluentui/react-icons';

interface ImageGalleryDialogProps {
  images: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImageGalleryDialog({ images, open, onOpenChange }: ImageGalleryDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const categories = ['Kitchen', 'Dining area', 'Bedroom', 'Bathroom', 'Balcony', 'Exterior', 'Additional photos'];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[100vw] max-h-[100vh] h-screen w-screen p-0 gap-0 border-none bg-white">
        <DialogTitle className="sr-only">Image Gallery</DialogTitle>
        
        {/* Close button */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:bg-gray-50"
          >
            <DismissRegular className="w-4 h-4" />
            <span className="text-sm font-medium">Close Gallery</span>
          </button>
        </div>

        {/* Categories */}
        <div className="absolute top-24 left-0 right-0 flex justify-center z-50">
          <div className="flex items-center gap-2 px-4 overflow-x-auto max-w-full">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${index === 0 ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="relative w-full h-full bg-white pt-40">
          {/* Main image container */}
          <div className="relative w-full h-[calc(100vh-250px)]">
            <img
              src={images[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain pb-25"
            />
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="flex justify-center gap-2 px-4 overflow-x-auto pb-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-[180px] h-[120px] rounded-lg overflow-hidden 
                    ${index === currentImageIndex ? 'ring-2 ring-black' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
            aria-label="Previous image"
          >
            <ChevronLeft24Regular className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
            aria-label="Next image"
          >
            <ChevronRight24Regular className="w-6 h-6" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 