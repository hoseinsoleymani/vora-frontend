"use client";

import { useState, useEffect } from "react";
import AirplaneSearch from "@/components/share/airplaneSearch/airplaineSearch";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchParams } from "../../types";

interface AirplaneSearchWrapperProps {
  searchParams?: SearchParams;
}

const AirplaneSearchWrapper = ({ searchParams }: AirplaneSearchWrapperProps) => {
  const router = useRouter();
  const urlSearchParams = useSearchParams();
  
  const [fromLocation, setFromLocation] = useState(searchParams?.origin || "");
  const [destinationLocation, setDestinationLocation] = useState(searchParams?.destination || "");
  
  const initialDate = searchParams?.departure_date 
    ? new Date(searchParams.departure_date) 
    : undefined;
  
  const [date, setDate] = useState<Date | undefined>(initialDate);
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  
  const [adultCount, setAdultCount] = useState(
    searchParams?.adults ? parseInt(searchParams.adults) : 1
  );
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const handleSearch = () => {
    const formattedDate = date ? 
      date.toISOString().split('T')[0] : 
      new Date().toISOString().split('T')[0];
    
    const params = new URLSearchParams(urlSearchParams.toString());
    
    params.set('origin', fromLocation || 'LON');
    params.set('destination', destinationLocation || 'CHI');
    params.set('departure_date', formattedDate);
    params.set('adults', adultCount.toString());
    
    params.delete('selected_date');
    params.delete('selectedItemIndex');
    params.delete('currentIndex');
    params.set('page', '1');
    
    router.push(`/ticket?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <AirplaneSearch
        fromLocation={fromLocation}
        setFromLocation={setFromLocation}
        destinationLocation={destinationLocation}
        setDestinationLocation={setDestinationLocation}
        date={date}
        setDate={setDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        adultCount={adultCount}
        setAdultCount={setAdultCount}
        childCount={childCount}
        setChildCount={setChildCount}
        infantCount={infantCount}
        setInfantCount={setInfantCount}
        onSearch={handleSearch}
      />
    </div>
  );
};

export { AirplaneSearchWrapper }; 