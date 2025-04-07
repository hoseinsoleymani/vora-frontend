"use client";

import { useState, useEffect } from "react";
import { HotelCard } from "./HotelCard";
import { HotelListHeader } from './HotelListHeader';
import { HotelsPagination } from './HotelsPagination';
import { HotelListSkeleton } from './HotelListSkeleton';
import { getHotels } from '../../lib/actions';

// Keep Hotel type definition here or move to a shared types file
export interface Hotel {
  chainCode: string;
  iataCode: string;
  dupeId: number;
  name: string;
  hotelId: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
  address: {
    countryCode: string;
  };
  lastUpdate: string;
  retailing?: {
    sponsorship?: {
      isSponsored?: boolean;
    };
  };
}

interface HotelListProps {
  searchParams: {
    category?: string;
    brand?: string;
    sort_by?: string;
    page?: string;
    city?: string;
    date?: string;
  };
}

const HotelList = ({ searchParams }: HotelListProps) => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<Error | null>(null);
  
  const pageSize = 6; // Define page size here or import from config
  const page = parseInt(searchParams.page || "1");
  const city = searchParams.city || "PAR";
  const date = searchParams.date || "2025/04/20";

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getHotels(city, date, page, pageSize);
        setHotels(result.hotels);
        setTotalCount(result.totalCount);
        setTotalPages(result.totalPages);
      } catch (err) {
        console.error("Error fetching hotel data:", err);
        setError(err instanceof Error ? err : new Error('Failed to fetch hotel data'));
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [searchParams, page, city, date, pageSize]);

  // Helper function to create page URLs (kept here as it depends on searchParams)
  const createPageUrl = (pageNum: number): string | undefined => {
      if (pageNum < 1 || pageNum > totalPages) return undefined; // Basic validation

      const params = new URLSearchParams();
      // Preserve existing search params
      if (searchParams.category) params.set('category', searchParams.category);
      if (searchParams.brand) params.set('brand', searchParams.brand);
      if (searchParams.sort_by) params.set('sort_by', searchParams.sort_by);
      if (searchParams.city) params.set('city', searchParams.city);
      if (searchParams.date) params.set('date', searchParams.date);
      // Set the new page number
      params.set('page', pageNum.toString());

      return `/hotels?${params.toString()}`; // Adjust base path if needed
  };

  // Loading State
  if (loading) {
    // Pass pageSize to show appropriate number of skeletons
    return <HotelListSkeleton viewMode={viewMode} pageSize={pageSize} />;
  }

  // Error State
  if (error) {
    return (
      <div className="mt-5 p-8 bg-red-50 text-red-700 rounded-xl shadow-md text-center">
        <h3 className="text-xl font-semibold">Error loading hotels</h3>
        <p className="mt-2">{error.message}</p>
      </div>
    );
  }

  // Empty State
  if (totalCount === 0) { // Use totalCount from hook
    return (
      <div className="mt-5 p-8 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-center">No hotels found</h3>
        <p className="text-gray-500 text-center mt-2">Please change your search criteria.</p>
      </div>
    );
  }

  // Render Header, List/Grid, and Pagination
  return (
    <div>
      <HotelListHeader
        totalCount={totalCount}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <div className={viewMode === "list" ? "space-y-4 mt-5" : "grid grid-cols-3 gap-4 mt-5"}>
        {hotels.map((hotel) => (
          // Use hotelId for key and pass hotel data to HotelCard
          <HotelCard key={hotel.hotelId} viewMode={viewMode} hotel={hotel} />
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