"use client";

import React from 'react';
import { HotelMainContent } from "./HotelMainContent";
import { HotelBookingSidebar } from "./HotelBookingSidebar";

interface HotelLocation { address: string; city: string; country: string; }
interface HotelAmenity { name: string; icon: string; }
interface HotelData { id: string; name: string; description: string; images: string[]; rating: number; price: string; currency: string; amenities: HotelAmenity[]; location: HotelLocation; }
interface HotelRoom { id: string; name: string; price: { currency: string; total: string; }; capacity: { adults: number; children: number; }; amenities: string[]; cancellationPolicy: string; breakfastIncluded: boolean; freeCancellation: boolean; }
interface SearchParams { nights: number; adults: number; children: number; rooms: number; }

interface HotelDetailContentProps {
  hotelData: HotelData;
  rooms: HotelRoom[];
  onGalleryOpen: () => void;
}

export const HotelDetailContent: React.FC<HotelDetailContentProps> = ({ 
  hotelData, 
  rooms, 
  onGalleryOpen 
}) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <HotelMainContent
        hotelData={hotelData}
        rooms={rooms}
        onGalleryOpen={onGalleryOpen}
        loading={false}
      />
      <div className="col-span-4">
        <HotelBookingSidebar
          hotelData={hotelData}
          rooms={rooms}
          loading={false}
        />
      </div>
    </div>
  );
}; 