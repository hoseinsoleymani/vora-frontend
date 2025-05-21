"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Bed24Regular,
  Calendar24Regular,
  Person24Regular,
  Wifi124Regular,
  Tv24Regular,
  Food24Regular,
  VehicleCarParking24Regular,
  Accessibility24Regular,
  Info24Regular,
  Eye24Regular,
  Checkmark24Regular
} from "@fluentui/react-icons";

interface RoomPriceCardProps {
  id: string;
  name: string;
  image?: string;
  price: {
    currency: string;
    total: string;
  };
  capacity: {
    adults: number;
    children: number;
  };
  amenities: string[];
  cancellationPolicy: string;
  breakfastIncluded: boolean;
  freeCancellation: boolean;
  searchDetails?: {
    nights: number;
    adults: number;
    children: number;
  };
}

const RoomPriceCard: React.FC<RoomPriceCardProps> = ({
  id,
  name,
  image = "https://placehold.co/600x400",
  price,
  capacity,
  amenities,
  cancellationPolicy,
  breakfastIncluded,
  freeCancellation,
  searchDetails = {
    nights: 1,
    adults: 1,
    children: 0
  }
}) => {
  const createRoomUrl = () => {
    const params = new URLSearchParams();
    if (searchDetails.nights) params.set('nights', searchDetails.nights.toString());
    if (searchDetails.adults) params.set('adults', searchDetails.adults.toString());
    if (searchDetails.children) params.set('children', searchDetails.children.toString());
    return `/hotels/rooms/${id}?${params.toString()}`;
  };

  return (
    <div className="w-full mx-auto my-4 bg-white shadow-md rounded-2xl overflow-hidden flex">
      {/* Image */}
      <div className="w-1/3 h-full flex-shrink-0 p-2">
        <Link href={createRoomUrl()} className="block h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover cursor-pointer rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/600x400";
            }}
          />
        </Link>
      </div>

      {/* Right Column - Content */}
      <div className="flex-1 m-4 pr-4">
        <div className="flex items-center justify-between mb-2">
          <Link href={createRoomUrl()} className="text-lg font-semibold truncate max-w-[200px] hover:text-primary transition-colors">
            {name}
          </Link>
          <Button variant="outline" size="sm" className="text-sm text-gray-600 hover:text-gray-900 border border-gray-200">
            <Eye24Regular className="w-4 h-4 mr-1" />
            See All Services
          </Button>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
          <div className="flex items-center gap-1">
            <Person24Regular className="text-gray-500 w-4 h-4" />
            <span>{capacity.adults} adults, {capacity.children} children</span>
          </div>
          {breakfastIncluded && (
            <div className="flex items-center gap-1">
              <Food24Regular className="text-gray-500 w-4 h-4" />
              <span>Breakfast included</span>
            </div>
          )}
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-2">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full">
              {amenity === 'WiFi' && <Wifi124Regular className="w-3 h-3" />}
              {amenity === 'TV' && <Tv24Regular className="w-3 h-3" />}
              {amenity === 'Parking' && <VehicleCarParking24Regular className="w-3 h-3" />}
              {amenity === 'Accessibility' && <Accessibility24Regular className="w-3 h-3" />}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        {/* Cancellation Policy */}
        <div className="flex items-center gap-2 mb-2 text-xs">
          <Info24Regular className="w-3 h-3 text-gray-500" />
          <span className="text-gray-600">
            {freeCancellation ? (
              <span className="text-green-600 font-medium">Free cancellation</span>
            ) : (
              <span>{cancellationPolicy}</span>
            )}
          </span>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-200 my-3" />

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-primary">
              {price.total} {price.currency}
            </div>
            <div className="text-xs text-gray-500">per night</div>
          </div>
          <Link href={createRoomUrl()}>
            <Button size="sm">
              <Checkmark24Regular className="w-4 h-4 mr-1" />
              Reserve Room
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomPriceCard; 