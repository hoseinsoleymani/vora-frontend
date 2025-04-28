import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface HotelGalleryProps {
  images: string[];
  name: string;
  onGalleryOpen: () => void;
  loading?: boolean;
}

export const HotelGallery: React.FC<HotelGalleryProps> = ({ 
  images = [], // Default to empty array
  name, 
  onGalleryOpen,
  loading = false 
}) => {
  if (loading) {
    // Skeleton logic remains the same
    return (
      <div className="flex gap-2 mb-8">
        <div className="flex-[2.5] h-[400px]">
          <Skeleton className="w-full h-full rounded-lg bg-gray-200" />
        </div>
        <div className="flex-[0.8] flex flex-col gap-2">
          {[1, 2].map((_, index) => (
            <div key={index} className="h-[130px]">
              <Skeleton className="w-full h-full rounded-lg bg-gray-200" />
            </div>
          ))}
          <div className="h-[130px] relative">
            <Skeleton className="w-full h-full rounded-lg bg-gray-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton className="h-6 w-32 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle cases with few or no images
  const mainImage = images[0] || "https://placehold.co/600x400?text=No+Image";
  const smallImages = images.slice(1, 3); // Get up to 2 small images
  const showAllImage = images.length > 3 ? images[3] : (smallImages.length > 0 ? smallImages[smallImages.length - 1] : mainImage);
  const canShowAll = images.length > 1; // Enable "Show all" if more than 1 image

  return (
    <div className="flex gap-2 mb-8">
      {/* Main Image */} 
      <div className="flex-[2.5] h-[400px]">
        <img
          src={mainImage}
          alt={`${name} - Main Image`}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Error"; }}
        />
      </div>
      {/* Small Images & Show All Button */} 
      <div className="flex-[0.8] flex flex-col gap-2">
        {smallImages.map((image, index) => (
          <div key={index} className="h-[130px]">
            <img
              src={image}
              alt={`${name} - Image ${index + 2}`}
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x130?text=Error"; }}
            />
          </div>
        ))}
        {/* Fill remaining space if less than 2 small images */} 
        {Array.from({ length: Math.max(0, 2 - smallImages.length) }).map((_, index) => (
            <div key={`placeholder-${index}`} className="h-[130px]">
                <Skeleton className="w-full h-full rounded-lg bg-gray-100" />
            </div>
        ))}
        {/* Show All Button/Image */} 
        <div 
          className={`h-[130px] relative group ${canShowAll ? 'cursor-pointer' : ''}`}
          onClick={canShowAll ? onGalleryOpen : undefined}
        >
          <img
            src={showAllImage}
            alt={`${name} - More Images`}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x130?text=Error"; }}
          />
          {canShowAll && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 rounded-lg transition-opacity duration-200">
              <span className={cn("i-fluent:camera-24-regular", "w-4 h-4 text-white")} />
              <span className="text-sm font-medium text-white">Show all photos</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 