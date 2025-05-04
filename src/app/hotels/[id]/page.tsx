"use client";

import React, { useState, useEffect, useCallback } from "react";
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


export default function HotelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [hotelData, setHotelData] = useState<HotelData | null>(null);
  const [rooms, setRooms] = useState<HotelRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const resolvedParams = React.use(params);

  const fetchHotelData = useCallback(async () => {
    let isMounted = true;
    try {
      setLoading(true);
      setError(null);

      const [hotel, hotelRooms] = await Promise.all([
        getHotelById(resolvedParams.id),
        getHotelRooms(resolvedParams.id)
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
  }, [resolvedParams.id]);

  useEffect(() => {
    const cleanup = fetchHotelData();
  }, [fetchHotelData]);

  const handleRetry = () => {
    fetchHotelData();
  };

  const renderPageContent = () => {
    if (loading) {
      return <HotelDetailSkeleton />;
    }
    if (error || !hotelData) {
      return <HotelDetailError error={error || 'Hotel data not found.'} onRetry={handleRetry} />;
    }
    return (
      <HotelDetailContent
        hotelData={hotelData}
        rooms={rooms}
        onGalleryOpen={() => setIsGalleryOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gray-3 shadow-md h-40 rounded-b-xl">
        <Navbar />
      </div>
      <div className="mx-auto max-w-6xl -mt-11">
        <HotelSearch />
      </div>
      <div className="container mx-auto px-4 py-8 mt-12">
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