"use client";

import { useState, useEffect } from "react";
import { HotelCard, HotelCardSkeleton } from "./HotelCard";
import { HotelListHeader } from './HotelListHeader';
import { HotelsPagination } from './HotelsPagination';
import { HotelOffer } from "@/app/hotels/actions";

// Helper function for default dates (can be removed if not used elsewhere in this component)
function getDefaultDate(offsetDays: number = 0): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

interface HotelListProps {
  searchParams: {
    city?: string;
    check_in_date?: string;
    check_out_date?: string;
    page?: string;
    limit?: string;
    adults?: string;
    children?: string;
    rooms?: string;
    [key: string]: string | undefined;
  };
  initialHotels: HotelOffer[];
  totalCount: number;
  totalPages: number;
}

const HotelList = ({ 
  searchParams,
  initialHotels,
  totalCount: initialTotalCount,
  totalPages: initialTotalPages,
}: HotelListProps) => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [hotels, setHotels] = useState<HotelOffer[]>(initialHotels);
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages);
  const [currentPage, setCurrentPage] = useState<number>(parseInt(searchParams.page || "1"));
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (initialHotels?.length) {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [initialHotels]);

  const displayTotalCount = initialTotalCount;
  const page = currentPage;

  const createPageUrl = (pageNum: number): string | undefined => {
    if (pageNum < 1 || pageNum > totalPages) return undefined;

    const params = new URLSearchParams(searchParams as Record<string, string>);
    params.set('page', pageNum.toString());
    return `/hotels?${params.toString()}`;
  };

  const calculateNights = () => {
    if (!searchParams.check_in_date || !searchParams.check_out_date) return 0;
    const checkIn = new Date(searchParams.check_in_date);
    const checkOut = new Date(searchParams.check_out_date);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const adults = parseInt(searchParams.adults || "1");
  const children = parseInt(searchParams.children || "0");
  const rooms = parseInt(searchParams.rooms || "1");

  if (isLoading) {
    return (
      <div>
        <HotelListHeader
          totalCount={displayTotalCount}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <div className={viewMode === "list" ? "space-y-4 mt-5" : "grid grid-cols-3 gap-4 mt-5"}>
          {Array.from({ length: parseInt(searchParams.limit || "10") }).map((_, index) => (
            <HotelCardSkeleton key={index} viewMode={viewMode} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-5 p-8 bg-white rounded-xl shadow-md text-center">
        <h3 className="text-xl font-semibold text-red-600">Error loading hotels</h3>
        <p className="text-gray-500 mt-2">{error}</p>
      </div>
    );
  }

  if (!hotels.length) {
    return (
      <div className="mt-5 p-8 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-center">No hotels found</h3>
        <p className="text-gray-500 text-center mt-2">Please refine your search or check back later.</p>
      </div>
    );
  }

  return (
    <div>
      <HotelListHeader
        totalCount={displayTotalCount}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <div className={viewMode === "list" ? "space-y-4 mt-5" : "grid grid-cols-3 gap-4 mt-5"}>
        {hotels.map((hotelOffer) => (
          <HotelCard 
            key={hotelOffer.hotel.hotelId} 
            viewMode={viewMode} 
            id={hotelOffer.hotel.hotelId}
            name={hotelOffer.hotel.name}
            price={{
              currency: hotelOffer.offers[0]?.price?.currency || "USD",
              total: hotelOffer.offers[0]?.price?.total || "N/A"
            }}
            rating={hotelOffer.hotel.rating}
            latitude={hotelOffer.hotel.latitude}
            longitude={hotelOffer.hotel.longitude}
            searchDetails={{
              nights,
              adults,
              children,
              rooms
            }}
          />
        ))}
      </div>

      <HotelsPagination
        page={page}
        totalPages={totalPages}
        createPageUrl={createPageUrl}
      />
    </div>
  );
};

export { HotelList }; 