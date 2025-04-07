"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Star24Regular,
  Star24Filled,
  Eye24Regular,
  Location16Regular,
  Location24Regular,
  Bed24Regular,
  Calendar24Regular,
  Person24Regular
} from "@fluentui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";
import type { Hotel } from './HotelList';

interface HotelCardProps {
  viewMode?: "list" | "grid";
  hotel?: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ viewMode = "list", hotel }) => {
  if (!hotel) {
    return (
      <div className="w-full mx-auto my-6 bg-white shadow-md rounded-2xl overflow-hidden flex">
        <div className="w-1/6 p-3 flex items-center justify-center">
          <Skeleton className="w-full h-40 rounded-xl" />
        </div>

        <div className="flex-1 m-5 border-r">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-32" />
          </div>

          <div className="flex flex-col space-y-3 mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between p-5">
          <div className="mt-4 flex flex-col justify-between items-center">
            <Skeleton className="h-6 w-20 mb-2" />
            <Skeleton className="h-4 w-40 mb-4" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    );
  }

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating / 2)) {
        stars.push(
          <Star24Filled key={i} className="w-4 h-4 text-yellow-500" />
        );
      } else {
        stars.push(<Star24Regular key={i} className="w-4 h-4" />);
      }
    }
    return stars;
  };

  // List mode - horizontal display
  if (viewMode === "list") {
    return (
      <div className="w-full mx-auto my-6 bg-white shadow-md rounded-2xl overflow-hidden flex">
        <div className="w-1/6 p-3 flex items-center justify-center">
          <img
            src={"product-image.png"}
            alt={hotel.name}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 m-5 border-r">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-normal">{hotel.name}</h2>   
            </div>
            <div className="flex items-center">{renderRating(hotel.geoCode.latitude)}</div>
            <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs h-auto mr-3">
              <Location24Regular className="w-3 h-3" />
              Show location on map
            </Button>
          </div>

          <div className="flex flex-col space-y-3 mt-4">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <Bed24Regular className="text-gray-500 w-4 h-4" />
              {Math.floor(hotel.geoCode.longitude % 5) + 1} beds available
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <Calendar24Regular className="text-gray-500 w-4 h-4" />
              {Math.floor(hotel.geoCode.latitude % 7) + 1} nights reserved
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <Person24Regular className="text-gray-500 w-4 h-4" />
              {Math.floor(hotel.geoCode.longitude % 3) + 1} adults allowed
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between p-5">
          <div className="mt-4 flex flex-col justify-between items-center">
            <div className="text-lg font-bold text-right">${(Math.floor(hotel.geoCode.latitude + hotel.geoCode.longitude) % 300) + 50}</div>
            <div className="text-sm mb-4 text-gray-500">
              Includes taxes and charges
            </div>
            <Button variant="default" size="sm">
              <Eye24Regular />
              View & Reserve
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Grid mode - vertical layout
  return (
    <div className="w-full mx-auto my-4 bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
      <div className="w-full p-3 flex items-center justify-center">
        <img
          src={"product-image.png"}
          alt={hotel.name}
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>

      <div className="p-4 flex flex-col">
        <h2 className="text-base font-medium mb-2">{hotel.name}</h2>

        <div className="flex items-center mb-3">
          {renderRating(hotel.geoCode.latitude)}
        </div>

        <div className="flex flex-col space-y-2 mb-3">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Bed24Regular className="text-gray-500 w-4 h-4" />
            {Math.floor(hotel.geoCode.longitude % 5) + 1} beds available
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Calendar24Regular className="text-gray-500 w-4 h-4" />
            {Math.floor(hotel.geoCode.latitude % 7) + 1} nights reserved
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Person24Regular className="text-gray-500 w-4 h-4" />
            {Math.floor(hotel.geoCode.longitude % 3) + 1} adults allowed
          </p>
        </div>

        <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs mb-3 w-full">
          <Location24Regular className="w-3 h-3" />
          Show location on map
        </Button>

        <div className="border-t border-gray-200 my-3"></div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <div className="text-lg font-bold">${(Math.floor(hotel.geoCode.latitude + hotel.geoCode.longitude) % 300) + 50}</div>
            <div className="text-xs text-gray-500">Includes taxes and charges</div>
          </div>
          <Button variant="default" size="sm">
            <Eye24Regular className="mr-1" />
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export { HotelCard }; 