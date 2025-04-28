"use client";

import React from 'react';
import { HotelMainContent } from "./HotelMainContent";
import { HotelBookingSidebar } from "./HotelBookingSidebar";

// Types (Duplicated from page.tsx - Consider a shared types location)
interface HotelLocation { address: string; city: string; country: string; }
interface HotelAmenity { name: string; icon: string; }
interface HotelData { id: string; name: string; description: string; images: string[]; rating: number; price: string; currency: string; amenities: HotelAmenity[]; location: HotelLocation; }
interface SearchParams { nights: number; adults: number; children: number; rooms: number; }

interface HotelDetailSkeletonProps {
  searchParams: SearchParams;
}

export const HotelDetailSkeleton: React.FC<HotelDetailSkeletonProps> = ({ searchParams }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <HotelMainContent
        hotelData={{} as HotelData} // Pass empty data for skeleton
        rooms={[]} // Pass empty data for skeleton
        onGalleryOpen={() => {}} // Empty function
        loading={true} // Show skeleton
      />
      <div className="col-span-4">
        <HotelBookingSidebar
          hotelData={{} as HotelData} // Pass empty data for skeleton
          rooms={[]} // Pass empty data for skeleton
          searchParams={searchParams}
          loading={true} // Show skeleton
        />
      </div>
    </div>
  );
}; 