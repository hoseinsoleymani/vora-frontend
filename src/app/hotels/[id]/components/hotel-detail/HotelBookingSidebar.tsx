"use client";

import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";

// --- Types (Re-added from dynamic version) ---
interface HotelLocation { address: string; city: string; country: string; }
interface HotelAmenity { name: string; icon: string; }
interface HotelData { id: string; name: string; description: string; images: string[]; rating: number; price: string; currency: string; amenities: HotelAmenity[]; location: HotelLocation; }
interface HotelRoom {
  id: string;
  name: string;
  price: { currency: string; total: string; };
  capacity: { adults: number; children: number; };
  amenities: string[];
  cancellationPolicy: string;
  breakfastIncluded: boolean;
  freeCancellation: boolean;
}
interface SearchParams { nights: number; adults: number; children: number; rooms: number; }

// --- Props Interface (Re-added) ---
interface HotelBookingSidebarProps {
  hotelData: HotelData;
  rooms: HotelRoom[];
  searchParams: SearchParams;
  loading?: boolean;
}

// --- Extra Features Data (Static as before) ---
const extraFeatures = [
  { value: "pet", label: "Allow to bring pet", price: 15 },
  { value: "lunch", label: "Lunch a day per person", price: 15 },
  { value: "parking", label: "Parking a day", price: 15 },
  { value: "pillow", label: "Extra pillow", price: 15 }
];

// --- Component (Combined Static UI + Dynamic Data) ---
export const HotelBookingSidebar: React.FC<HotelBookingSidebarProps> = ({
  hotelData,
  rooms = [],
  searchParams,
  loading = false
}) => {

  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(rooms.length > 0 ? rooms[0].id : undefined);
  const [selectedExtraFeatureValue, setSelectedExtraFeatureValue] = useState<string | undefined>(undefined);

  // Find the selected room object
  const selectedRoom = useMemo(() => rooms.find(room => room.id === selectedRoomId), [rooms, selectedRoomId]);

  // Find the selected extra feature object
  const selectedExtraFeature = useMemo(() => extraFeatures.find(feature => feature.value === selectedExtraFeatureValue), [selectedExtraFeatureValue]);

  // --- Price Calculation Logic ---
  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0; // Cannot calculate without a selected room

    const roomPricePerNight = parseFloat(selectedRoom.price.total.replace(/[^\d.-]/g, '')); // Extract number from price string
    const nights = searchParams.nights || 1; // Default to 1 night if not specified
    const roomTotal = roomPricePerNight * nights;

    const extraFeaturePrice = selectedExtraFeature ? selectedExtraFeature.price : 0;

    const serviceFee = 103; // Static value from UI
    const discount = -125; // Static value from UI

    return roomTotal + extraFeaturePrice + serviceFee + discount;
  };

  const totalPrice = useMemo(calculateTotalPrice, [selectedRoom, selectedExtraFeature, searchParams.nights]);

  // --- Render Loading State (Re-added) ---
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-3xl shadow-sm sticky top-4">
        {/* Skeleton for Summary */}
        <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
        </div>
        {/* Skeleton for Rooms */}
        <div className="mb-8">
          <Skeleton className="h-5 w-1/4 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        </div>
        <Skeleton className="w-full h-px bg-gray-200 mb-8" />
        {/* Skeleton for Extras */}
         <div className="mb-8">
          <Skeleton className="h-5 w-1/4 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        </div>
         <Skeleton className="w-full h-px bg-gray-200 mb-8" />
         {/* Skeleton for Price Summary */}
         <div className="mb-8">
            <Skeleton className="h-5 w-1/3 mb-4" />
            <div className="space-y-4">
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-full mt-4 pt-4 border-t" />
            </div>
         </div>
        {/* Skeleton for Button */}
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    );
  }

  // --- Render Main Content (Combined) ---
  const roomOptions = rooms.map(room => ({
    value: room.id,
    label: room.name,
    price: `${room.price.total} ${room.price.currency} / Night` // Combine price and currency
  }));

  const extraFeatureOptions = extraFeatures.map(feature => ({
     value: feature.value,
     label: feature.label,
     price: `$${feature.price}`
  }));


  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm sticky top-4">
      {/* Dynamic Summary Info */}
      <div className="flex items-center justify-between mb-6">
        {/* Show base price of first room if available, otherwise a placeholder */}
        <h2 className="text-lg font-medium">
          {selectedRoom ? `Rooms From ${selectedRoom.price.total} ${selectedRoom.price.currency}` : 'Select a Room'}
        </h2>
        {/* Dynamic Search Params */}
        <span className="text-gray-500 text-sm">
            {searchParams.nights} night{searchParams.nights !== 1 ? 's' : ''}, {searchParams.adults} adult{searchParams.adults !== 1 ? 's' : ''}
            {searchParams.children > 0 && `, ${searchParams.children} child${searchParams.children !== 1 ? 'ren' : ''}`}
        </span>
      </div>

      {/* Dynamic Rooms RadioGroup */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Rooms</h3>
        {roomOptions.length > 0 ? (
            <RadioGroup
              // Assuming RadioGroup accepts value, onValueChange and options
              value={selectedRoomId}
              onValueChange={(value: string) => setSelectedRoomId(value)}
              options={roomOptions}
            />
        ) : (
             <p className="text-sm text-gray-500">No rooms matching your criteria found.</p>
        )}
      </div>

      <div className="w-full h-px bg-gray-200 mb-8"></div>

      {/* Static Extra Features RadioGroup */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Extra feature</h3>
        <RadioGroup
          // Assuming RadioGroup accepts value, onValueChange and options
          value={selectedExtraFeatureValue}
          onValueChange={(value: string) => setSelectedExtraFeatureValue(value)}
          options={extraFeatureOptions}
        />
      </div>

      <div className="w-full h-px bg-gray-200 mb-8"></div>

      {/* Dynamic Price Summary */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Price Summary</h3>
        {selectedRoom ? (
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between gap-8">
              <span>{selectedRoom.price.total} {selectedRoom.price.currency} x {searchParams.nights} Night{searchParams.nights !== 1 ? 's' : ''}</span>
              <span className="ml-auto">{`${selectedRoom.price.currency} ${(parseFloat(selectedRoom.price.total.replace(/[^\d.-]/g, '')) * searchParams.nights).toFixed(2)}`}</span>
            </div>
            {selectedExtraFeature && (
                 <div className="flex items-center justify-between gap-8">
                    <span>{selectedExtraFeature.label}</span>
                    {/* Assuming currency is same as room for simplicity */}
                    <span className="ml-auto">{`${selectedRoom.price.currency} ${selectedExtraFeature.price.toFixed(2)}`}</span>
                 </div>
            )}
            <div className="flex items-center justify-between gap-8">
              <span>Service fee</span>
              {/* Assuming currency is same as room */}
              <span className="ml-auto">{`${selectedRoom.price.currency} 103.00`}</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span>Discount</span>
              <span className="ml-auto text-red-500">{`- ${selectedRoom.price.currency} 125.00`}</span>
            </div>
            <div className="flex items-center justify-between gap-8 pt-4 border-t border-gray-200">
              <span className="font-medium">Total price</span>
              <span className="ml-auto font-medium">{`${selectedRoom.price.currency} ${totalPrice.toFixed(2)}`}</span>
            </div>
          </div>
        ) : (
            <p className="text-sm text-gray-500">Select a room to see the price summary.</p>
        )}
      </div>

      <Button
        className="w-full py-6 text-lg bg-black text-white hover:bg-black/90"
        disabled={!selectedRoom || loading} // Disable if loading or no room selected
        onClick={() => {
            // TODO: Implement actual booking logic
            console.log("Booking:", {
                hotelId: hotelData.id,
                selectedRoomId,
                selectedExtraFeatureValue,
                totalPrice,
                searchParams
            });
        }}
      >
        Reserve
      </Button>
    </div>
  );
}; 