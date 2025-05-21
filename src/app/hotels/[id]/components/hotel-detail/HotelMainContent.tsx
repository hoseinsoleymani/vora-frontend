"use client";

import React from "react";
import { HotelHeader } from "./HotelHeader";
import { HotelQuickAmenities } from "./HotelQuickAmenities";
import { HotelGallery } from "./HotelGallery";
import { HotelInformation } from "../hotel-information";
import { Skeleton } from "@/components/ui/skeleton";

interface HotelLocation {
  address: string;
  city: string;
  country: string;
}

interface HotelAmenity {
  name: string;
  icon: string;
}

interface HotelData {
  id: string;
  name: string;
  description: string;
  images: string[];
  rating: number;
  price: string; 
  currency: string;
  amenities: HotelAmenity[]; 
  location: HotelLocation;
}

interface HotelRoom {
  id: string;
  name: string;
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
}

interface HotelMainContentProps {
  hotelData: HotelData;
  rooms: HotelRoom[];
  onGalleryOpen: () => void;
  loading?: boolean;
}

export const HotelMainContent: React.FC<HotelMainContentProps> = ({
  hotelData,
  rooms,
  onGalleryOpen,
  loading = false
}) => {
  if (loading) {
    return (
      <div className="col-span-8 space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <Skeleton className="h-8 w-1/3 mb-4" />
          <div className="flex gap-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <Skeleton className="h-64 w-full mb-4" />
          <div className="grid grid-cols-4 gap-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <Skeleton className="h-8 w-1/3 mb-4" />
          <Skeleton className="h-40 w-full mb-4" />
          <Skeleton className="h-40 w-full mb-4" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-8">
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <HotelHeader name={hotelData.name} rating={hotelData.rating} />
        <HotelQuickAmenities amenities={hotelData.amenities} />
      </div>

      <HotelGallery 
        images={hotelData.images}
        name={hotelData.name}
        onGalleryOpen={onGalleryOpen}
      />
      
      <HotelInformation
        description={hotelData.description}
        location={hotelData.location}
        rooms={rooms}
        loading={loading}
      />
    </div>
  );
}; 