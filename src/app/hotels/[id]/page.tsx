"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/ui";
import { ImageGalleryDialog } from "./components/hotel-detail/ImageGalleryDialog";
import { getHotelById, getHotelRooms } from "./hotel.actions";
import { HotelDetailContent } from "./components/hotel-detail/HotelDetailContent";
import { HotelDetailSkeleton } from "./components/hotel-detail/HotelDetailSkeleton";
import { HotelDetailError } from "./components/hotel-detail/HotelDetailError";
import { HotelSearch } from "@/components/share/searchBar/hotel/hotelSearch";

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

interface SearchParams {
  nights: number;
  adults: number;
  children: number;
  rooms: number;
  city?: string;
  check_in_date?: string;
  check_out_date?: string;
}

// Helper function to format date to YYYY-MM-DD
const formatDateToString = (date: Date | undefined): string | undefined => {
  if (!date) return undefined;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Main page component
export default function HotelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // State
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [hotelData, setHotelData] = useState<HotelData | null>(null);
  const [rooms, setRooms] = useState<HotelRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const currentSearchParams = useSearchParams(); // Renamed for clarity
  const resolvedParams = React.use(params);


  // Modified getSearchParams to include city, check_in_date, check_out_date
  const getSearchParams = useCallback((): SearchParams => {
    const checkInStr = currentSearchParams.get('check_in_date');
    const checkOutStr = currentSearchParams.get('check_out_date');
    let nights = 1;
    if (checkInStr && checkOutStr) {
        const date1 = new Date(checkInStr);
        const date2 = new Date(checkOutStr);
        if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
            const diffTime = Math.abs(date2.getTime() - date1.getTime());
            nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
        }
    }
    return {
        nights: Number(currentSearchParams.get('nights')) || nights,
        adults: Number(currentSearchParams.get('adults')) || 1,
        children: Number(currentSearchParams.get('children')) || 0,
        rooms: Number(currentSearchParams.get('rooms')) || 1,
        city: currentSearchParams.get('city') || undefined,
        check_in_date: checkInStr || undefined,
        check_out_date: checkOutStr || undefined,
    }
  }, [currentSearchParams]);


  const fetchHotelData = useCallback(async () => {
    let isMounted = true;
    try {
      setLoading(true);
      setError(null);

      const searchParamsData = getSearchParams();
      const [hotel, hotelRooms] = await Promise.all([
        getHotelById(resolvedParams.id),
        // Pass necessary params to getHotelRooms if needed, based on its definition
        getHotelRooms(resolvedParams.id, { 
            adults: searchParamsData.adults, 
            children: searchParamsData.children, 
            rooms: searchParamsData.rooms, 
            // Pass dates if getHotelRooms requires them
        })
      ]);

      if (isMounted) {
        setHotelData(hotel);
        setRooms(hotelRooms);
      }
    } catch (err) {
      console.error('Error in fetchHotelData:', err);
      if (isMounted) {
        setError('Failed to load hotel data. Please try again later.');
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
    return () => { isMounted = false; };
  }, [resolvedParams.id, getSearchParams]);


  useEffect(() => {
    const cleanup = fetchHotelData();
    // Return the cleanup function if fetchHotelData returns one
    // The current implementation doesn't return a cleanup function explicitly
  }, [fetchHotelData]);

  const handleRetry = () => {
    fetchHotelData();
  };

  const currentSearchValues = getSearchParams(); // Get current values once

  const renderPageContent = () => {
    if (loading) {
      // Pass initial search values to skeleton as well
      return <HotelDetailSkeleton searchParams={currentSearchValues} />;
    }
    if (error || !hotelData) {
      return <HotelDetailError error={error || 'Hotel data not found.'} onRetry={handleRetry} />;
    }
    return (
      <HotelDetailContent
        hotelData={hotelData}
        rooms={rooms}
        searchParams={currentSearchValues} // Pass current values
        onGalleryOpen={() => setIsGalleryOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gray-3 shadow-md h-40 rounded-b-xl">
        <Navbar />
      </div>
      {/* Add HotelSearch below Navbar, above the main content container */}
       <div className="mx-auto max-w-6xl -mt-11">
        <HotelSearch />
      </div>
      <div className="container mx-auto px-4 py-8 mt-12"> {/* Add margin top */} 
        {renderPageContent()}
      </div>

      {!loading && hotelData && (
        <ImageGalleryDialog
          images={hotelData.images}
          open={isGalleryOpen}
          onOpenChange={setIsGalleryOpen}
        />
      )}
    </div>
  );
} 