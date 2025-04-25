"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/ui";
import { 
  Wifi2Regular,
  Food24Regular,
  Water24Regular,
  Cart24Regular,
  Tv24Regular,
  Drop24Regular
} from "@fluentui/react-icons";
import {
  HotelHeader,
  HotelQuickAmenities,
  HotelGallery,
  HotelBookingSidebar,
} from "./components/hotel-detail";
import { ImageGalleryDialog } from "./components/hotel-detail/ImageGalleryDialog";
import { HotelSearch } from "@/components/share/searchBar";
import { HotelInformation } from "./components";

// Interfaces
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

interface QuickAmenity {
  icon: React.ReactNode;
  label: string;
}

// Static data
const hotelData: HotelData = {
  id: "1",
  name: "Luxury Hotel Tehran",
  description: "Luxury Hotel Tehran, with its modern architecture and advanced facilities, is located in the heart of the capital. This hotel, with easy access to commercial and recreational centers, is a suitable choice for business and leisure travelers.",
  images: [
    "https://placehold.co/600x400/2563eb/ffffff?text=Hotel+1",
    "https://placehold.co/600x400/2563eb/ffffff?text=Hotel+2",
    "https://placehold.co/600x400/2563eb/ffffff?text=Hotel+3",
    "https://placehold.co/600x400/2563eb/ffffff?text=Hotel+4",
  ],
  rating: 4.5,
  price: "2,500,000",
  currency: "IRR",
  amenities: [
    { name: "Free WiFi", icon: "wifi" },
    { name: "Free Breakfast", icon: "food" },
    { name: "Indoor Pool", icon: "pool" },
    { name: "Fitness Center", icon: "gym" },
    { name: "Restaurant", icon: "restaurant" },
    { name: "Spa", icon: "spa" },
    { name: "Free Parking", icon: "parking" },
    { name: "Laundry Service", icon: "laundry" }
  ],
  location: {
    address: "123 Valiasr St, Tehran",
    city: "Tehran",
    country: "Iran"
  }
};

// Main page component
export default function HotelDetailPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const quickAmenities: QuickAmenity[] = [
    { icon: <Wifi2Regular className="w-7 h-7" />, label: "Free Wi-Fi" },
    { icon: <Food24Regular className="w-7 h-7" />, label: "Bar" },
    { icon: <Food24Regular className="w-7 h-7" />, label: "Restaurant" },
    { icon: <Cart24Regular className="w-7 h-7" />, label: "Private parking" },
    { icon: <Water24Regular className="w-7 h-7" />, label: "City view" },
    { icon: <Tv24Regular className="w-7 h-7" />, label: "Flat-screen TV" },
    { icon: <Food24Regular className="w-7 h-7" />, label: "Good breakfast" },
    { icon: <Drop24Regular className="w-7 h-7" />, label: "Shower" },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gray-3 shadow-md h-40 rounded-b-xl">
        <Navbar />
      </div>

      <div className="mx-auto max-w-6xl -mt-11">
        <HotelSearch />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <HotelHeader name={hotelData.name} rating={hotelData.rating} />
              <HotelQuickAmenities amenities={quickAmenities} />
            </div>

            <HotelGallery 
              images={hotelData.images}
              name={hotelData.name}
              onGalleryOpen={() => setIsGalleryOpen(true)}
            />
            
            <HotelInformation
              description={hotelData.description}
              location={hotelData.location}
            />
          </div>

          <div className="col-span-4">
            <HotelBookingSidebar />
          </div>
        </div>
      </div>

      <ImageGalleryDialog
        images={hotelData.images}
        open={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
      />
    </div>
  );
} 