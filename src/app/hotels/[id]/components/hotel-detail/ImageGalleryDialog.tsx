import React, { useState, useMemo, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft24Regular, ChevronRight24Regular, DismissRegular } from '@fluentui/react-icons';

interface ImageGalleryDialogProps {
  images: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = ['All', 'Kitchen', 'Dining area', 'Bedroom', 'Bathroom', 'Balcony', 'Exterior', 'Additional photos'];

const getImagesForCategory = (category: string, allImages: string[]) => {
  if (category === 'All' || !allImages || allImages.length === 0) {
    return allImages;
  }
  switch (category) {
    case 'Kitchen': return allImages.length > 0 ? [allImages[0]] : [];
    case 'Dining area': return allImages.length > 1 ? [allImages[1]] : [];
    case 'Bedroom': return allImages.length > 2 ? [allImages[2]] : [];
    case 'Bathroom': return allImages.length > 3 ? [allImages[3]] : [];
    case 'Balcony': return allImages.length > 4 ? [allImages[4]] : [];
    case 'Exterior': return allImages.length > 5 ? [allImages[5]] : [];
    case 'Additional photos': return [];
    default: return allImages;
  }
};

export function ImageGalleryDialog({ images, open, onOpenChange }: ImageGalleryDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredImages = useMemo(() => getImagesForCategory(selectedCategory, images), [selectedCategory, images]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedCategory, images]);

  const nextImage = () => {
    if (filteredImages.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const previousImage = () => {
    if (filteredImages.length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[100vw] max-h-[100vh] h-screen w-screen p-0 gap-0 border-none bg-white">
        <DialogTitle className="sr-only">Image Gallery</DialogTitle>
        
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:bg-gray-50"
          >
            <DismissRegular className="w-4 h-4" />
            <span className="text-sm font-medium">Close Gallery</span>
          </button>
        </div>

        <div className="absolute top-24 left-0 right-0 flex justify-center z-50">
          <div className="flex items-center gap-2 px-4 overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${selectedCategory === category ? 'bg-gray-900 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full h-full bg-white pt-40">
          <div className="relative w-full h-[calc(100vh-250px)]">
            {filteredImages && filteredImages.length > 0 ? (
                 <img
                   src={filteredImages[currentImageIndex]}
                   alt={`Gallery image ${selectedCategory} ${currentImageIndex + 1}`}
                   className="w-full h-full object-contain pb-25"
                 />
             ) : (
                 <p className="text-gray-500">No images in this category.</p>
             )}
          </div>

          <div className="absolute bottom-8 left-0 right-0">
             {filteredImages && filteredImages.length > 0 && (
                 <div className="flex justify-center gap-2 px-4 overflow-x-auto pb-4">
                   {filteredImages.map((image, index) => (
                     <button
                       key={`${selectedCategory}-${index}`}
                       onClick={() => setCurrentImageIndex(index)}
                       className={`relative flex-shrink-0 w-[180px] h-[120px] rounded-lg overflow-hidden
                         ${index === currentImageIndex ? 'ring-2 ring-black' : 'opacity-70 hover:opacity-100'}`}
                     >
                       <img
                         src={image}
                         alt={`Thumbnail ${selectedCategory} ${index + 1}`}
                         className="w-full h-full object-cover"
                       />
                     </button>
                   ))}
                 </div>
             )}
          </div>
          
          {filteredImages && filteredImages.length > 1 && (
            <>
                <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 disabled:opacity-50"
                    aria-label="Previous image"
                >
                    <ChevronLeft24Regular className="w-6 h-6" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 disabled:opacity-50"
                    aria-label="Next image"
                >
                    <ChevronRight24Regular className="w-6 h-6" />
                </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 