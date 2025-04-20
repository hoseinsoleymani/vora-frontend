
import React from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Hotel {
  id: string;
  name?: string;
  price?: string;
  currency?: string;
  rating?: number;
  latitude?: number;
  longitude?: number;
  // Add other expected properties based on usage below
}

interface HotelCardProps {
  viewMode?: "list" | "grid";
  id: string;
  name?: string;
  price?: {
    currency: string;
    total: string;
  };
  rating?: number;
  latitude?: number;
  longitude?: number;
  searchDetails?: {
    nights: number;
    adults: number;
    children: number;
    rooms: number;
  };
}

const HotelCard: React.FC<HotelCardProps> = ({
  viewMode = "list",
  id,
  name = "Hotel Name Placeholder",
  price = {
    currency: "USD",
    total: "N/A"
  },
  rating = 0,
  latitude = 0,
  longitude = 0,
  searchDetails = {
    nights: 1,
    adults: 1,
    children: 0,
    rooms: 1
  }
}) => {

  const renderRating = (ratingValue: number) => {
    const stars = [];
    const normalizedRating = Math.min(Math.max(ratingValue, 0), 5); // Ensure rating is 0-5
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(normalizedRating)) {
        stars.push(
          <span key={i} className="i-fluent:star-24-filled text-yellow-500"></span>
        );
      } else {
        stars.push(
          <span key={i} className="i-fluent:star-24-regular text-gray-400"></span>
        );
      }
    }
    return stars;
  };

  const formattedPrice = () => {
    const numericPrice = parseFloat(price.total);
    if (isNaN(numericPrice)) return "N/A";
    return `${numericPrice.toLocaleString()} ${price.currency}`;
  }

  const bedsAvailable = Math.floor(Math.abs(longitude) % 5) + 1;
  const nightsReserved = Math.floor(Math.abs(latitude) % 7) + 1;
  const adultsAllowed = Math.floor(Math.abs(longitude) % 3) + 1;

  if (viewMode === "list") {
    return (
      <div className="w-full mx-auto my-6 bg-white shadow-md rounded-2xl overflow-hidden flex">
        <div className="w-48 h-48 flex-shrink-0 p-2">
          <img
            src={"product-image.png"}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/600x400";
            }}
          />
        </div>

        <div className="flex-1 m-5 pr-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold truncate max-w-[200px]">
              {name}
            </h2>
            <div className="flex items-center gap-2">
              {renderRating(rating)}
              <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs h-auto">
                <span className="i-fluent:location-24-regular text-lg"></span>
                Show location on map
              </Button>
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-2">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="i-fluent:bed-24-regular text-lg text-gray-500"></span>
              {searchDetails.rooms} bedroom, 1 bathroom
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="i-fluent:calendar-24-regular text-lg text-gray-500"></span>
              {searchDetails.nights} nights
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="i-fluent:person-24-regular text-lg text-gray-500"></span>
              {searchDetails.adults} adults, {searchDetails.children} children
            </p>
          </div>
        </div>

        <div className="w-64 flex-shrink-0 p-5 flex flex-col justify-center border-l">
          <div className="flex flex-col items-center mb-4">
            <div className="text-2xl font-bold text-primary mb-2">
              {price.total} {price.currency === 'EUR' ? '€' : price.currency}
            </div>
            <div className="text-sm text-gray-500">Includes taxes and charges</div>
          </div>

          <Button variant="default" size="sm" className="w-full">
            <span className="i-fluent:eye-24-regular text-lg mr-1"></span>
            View & Reserve
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto my-4 bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
      <div className="w-full p-3 flex items-center justify-center">
        <img
          src={"product-image.png"} // Placeholder image
          alt={name}
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>

      <div className="p-4 flex flex-col">
        <h2 className="text-base font-medium mb-2">{name}</h2>

        <div className="flex items-center mb-3">
          {renderRating(rating)}
        </div>

        <div className="flex flex-col space-y-2 mb-3">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="i-fluent:bed-24-regular text-lg text-gray-500"></span>
            {bedsAvailable} beds available
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="i-fluent:calendar-24-regular text-lg text-gray-500"></span>
            {nightsReserved} nights reserved
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="i-fluent:person-24-regular text-lg text-gray-500"></span>
            {adultsAllowed} adults allowed
          </p>
        </div>

        <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs mb-3 w-full">
          <span className="i-fluent:location-24-regular text-lg"></span>
          Show location on map
        </Button>

        <div className="border-t border-gray-200 my-3"></div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <div className="text-xl font-bold text-primary mb-2">
              {price.total} {price.currency === 'EUR' ? '€' : price.currency}
            </div>
            <div className="text-xs text-gray-500">Includes taxes and charges</div>
          </div>
          <Button variant="default" size="sm">
            <span className="i-fluent:eye-24-regular text-lg mr-1"></span>
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

const HotelCardSkeleton: React.FC<{ viewMode?: "list" | "grid" }> = ({ viewMode = "list" }) => {
  if (viewMode === "list") {
    return (
      <div className="w-full mx-auto my-6 bg-white shadow-md rounded-2xl overflow-hidden flex">
        <div className="w-48 h-48 flex-shrink-0 p-2">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>

        <div className="flex-1 m-5 pr-5">
          <div className="flex items-center justify-between mb-3">
            <Skeleton className="h-6 w-48" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-32" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-36" />
          </div>
        </div>

        <div className="w-64 flex-shrink-0 p-5 flex flex-col justify-center border-l">
          <div className="flex flex-col items-center mb-4">
            <Skeleton className="h-8 w-32 mb-2" />
            <Skeleton className="h-4 w-40" />
          </div>

          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto my-4 bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
      <div className="w-full p-3">
        <Skeleton className="w-full h-40 rounded-xl" />
      </div>

      <div className="p-4 flex flex-col">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        
        <div className="flex flex-col space-y-2 mb-3">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-4 w-32" />
        </div>

        <Skeleton className="h-8 w-full mb-3" />
        <div className="border-t border-gray-200 my-3"></div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <Skeleton className="h-8 w-32 mb-2" />
            <Skeleton className="h-4 w-40" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </div>
  );
};

export { HotelCard, HotelCardSkeleton }; 
