"use client";

import { useState, useEffect } from 'react';
import { fetchFlightData } from '../../lib/actions';
import { Flight, StopInfo } from '../../types';
import { FlightInfo } from './FlightInfo';
import { FlightTimes } from './FlightTimes';
import { FlightPrice } from './FlightPrice';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { LoadingSpinner } from "@/components/ui";

interface FlightCardProps {
  searchParams: {
    origin?: string;
    destination?: string;
    departure_date?: string;
    adults?: string;
    selected_date?: string;
    page?: string;
  }
}

const FlightCard = ({ searchParams }: FlightCardProps) => {
  const origin = searchParams.origin || "LON";
  const destination = searchParams.destination || "CHI";
  const selectedDate = searchParams.selected_date || "2025/04/10";
  const adults = parseInt(searchParams.adults || "1");
  const page = parseInt(searchParams.page || "1");
  const pageSize = 10;

  const [flights, setFlights] = useState<Flight[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFlightData = async () => {
      setLoading(true);
      try {
        // Call server action to fetch flight data
        const { results, totalPages: pages } = await fetchFlightData(
          origin, 
          destination, 
          selectedDate, 
          adults, 
          page, 
          pageSize
        );
        
        setFlights(results);
        setTotalPages(pages);
      } catch (error) {
        console.error("Error loading flight data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadFlightData();
  }, [origin, destination, selectedDate, adults, page, pageSize]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (flights.length === 0) {
    return (
      <div className="mt-5 p-8 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-center">No flights found</h3>
        <p className="text-gray-500 text-center mt-2">Please change your search criteria.</p>
      </div>
    );
  }

  // Create URL for each page
  const createPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    params.set('origin', origin);
    params.set('destination', destination);
    params.set('departure_date', searchParams.departure_date || "2025-04-10");
    params.set('adults', searchParams.adults || "1");
    params.set('selected_date', selectedDate);
    params.set('page', pageNum.toString());
    
    return `/ticket?${params.toString()}`;
  };

  // Calculate pagination range
  const getPaginationRange = () => {
    const range = [];
    const start = Math.max(page - 1, 1);
    const end = Math.min(start + 2, totalPages);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <div className="space-y-4 mt-5">
      {flights.map((flight, index) => (
        <div key={index} className="flex bg-white shadow-md rounded-xl p-4 justify-between space-x-10">
          <FlightInfo airline={flight.airline} airlineImage={flight.airlineImage} />
          <FlightTimes
            departureTime={flight.departureTime}
            departureCity={flight.departureCity}
            arrivalTime={flight.arrivalTime}
            arrivalCity={flight.arrivalCity}
            duration={flight.duration}
            stops={flight.stops}
            stopInfo={flight.stopInfo}
          />
          <FlightPrice price={flight.price} />
        </div>
      ))}

      <Pagination className="mt-5 rtl:space-x-reverse">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href={page > 1 ? createPageUrl(page - 1) : undefined}
              className={page === 1 ? "pointer-events-none opacity-50" : ""}
              size="default"
            />
          </PaginationItem>

          {getPaginationRange().map((pageNum) => (
            <PaginationItem key={pageNum}>
              <PaginationLink 
                href={createPageUrl(pageNum)}
                isActive={page === pageNum}
                size="icon"
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext 
              href={page < totalPages ? createPageUrl(page + 1) : undefined}
              className={page === totalPages ? "pointer-events-none opacity-50" : ""}
              size="default"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export { FlightCard };