"use client";

import { useState, useEffect } from 'react';
import { fetchFlightData, type Flight, type StopInfo } from '../../actions';
import { FlightInfo } from './FlightInfo';
import { FlightTimes } from './FlightTimes';
import { FlightPrice } from './FlightPrice';
import { FlightCardSkeleton } from './FlightCardSkeleton';
import { FlightPagination } from './FlightPagination';

interface FlightCardProps {
  searchParams: {
    origin?: string;
    destination?: string;
    departure_date?: string;
    adults?: string;
    selected_date?: string;
    page?: string;
    [key: string]: string | undefined;
  }
}

const FlightCard = ({ searchParams }: FlightCardProps) => {
  const origin = searchParams?.origin || "LON";
  const destination = searchParams?.destination || "PAR";
  const departureDate = searchParams?.departure_date || "2025/04/10";
  const adults = parseInt(searchParams?.adults || "1");
  const page = parseInt(searchParams?.page || "1");
  const pageSize = 10;

  const [flights, setFlights] = useState<Flight[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFlightData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Call server action to fetch flight data
        const { results, totalPages: pages } = await fetchFlightData(
          origin, 
          destination, 
          departureDate,
          adults, 
          page, 
          pageSize
        );
        
        setFlights(results);
        setTotalPages(pages);
        
        if (results.length === 0) {
          setError("No flights found for the selected criteria.");
        }
      } catch (error) {
        console.error("Error loading flight data:", error);
        setError("Failed to load flight data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    loadFlightData();
  }, [origin, destination, departureDate, adults, page, pageSize]);

  if (loading) {
    // Use the dedicated skeleton component
    return <FlightCardSkeleton count={3} />;
  }

  if (error) {
    return (
      <div className="mt-5 p-8 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-center text-red-500">{error}</h3>
        <p className="text-gray-500 text-center mt-2">Try changing your search criteria or try again later.</p>
        <div className="mt-4 p-4 bg-gray-50 rounded border border-gray-200">
          <p className="text-sm text-gray-600">Debug info:</p>
          <pre className="text-xs mt-2 overflow-auto max-h-32">
            {JSON.stringify({ origin, destination, departureDate, adults, page }, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  if (flights.length === 0) {
    return (
      <div className="mt-5 p-8 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-center">No flights found</h3>
        <p className="text-gray-500 text-center mt-2">Please change your search criteria.</p>
      </div>
    );
  }

  const createPageUrl = (pageNum: number): string | undefined => {
    // Ensure pageNum is valid before creating URL
    if (pageNum < 1 || pageNum > totalPages) {
      return undefined;
    }
    
    const params = new URLSearchParams();
    
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined && key !== 'page' && key !== 'selected_date') {
        params.set(key, value);
      }
    });
    
    params.set('page', pageNum.toString());
    
    // Ensure departure_date is set correctly if not already present
    if (!params.has('departure_date') && departureDate) {
        params.set('departure_date', departureDate);
    }
    
    return `/tickets?${params.toString()}`;
  };

  return (
    <div className="space-y-4 mt-5">
      {flights.map((flight, index) => (
        <div key={index} className="flex bg-white shadow-md rounded-xl p-4 justify-between items-center space-x-8">
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

      {/* Use the dedicated pagination component */}
      <FlightPagination 
        currentPage={page}
        totalPages={totalPages}
        createPageUrl={createPageUrl}
      />
    </div>
  );
};

export { FlightCard };
