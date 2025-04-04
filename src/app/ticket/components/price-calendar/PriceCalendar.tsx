"use client";

import { useState, useEffect } from "react";
import { LoadingSpinner } from "@/components/ui"; 
import { fetchPriceCalendarData } from "../../lib/actions";
import { CalendarHeader } from "./CalendarHeader";
import { NavigationButton } from "./NavigationButton";
import { CalendarContent } from "./CalendarContent";

interface PriceCalendarProps {
  searchParams: {
    origin?: string;
    destination?: string;
    departure_date?: string;
    adults?: string;
    selected_date?: string;
    selectedItemIndex?: string;
    currentIndex?: string;
  };
}

const PriceCalendar = ({ searchParams }: PriceCalendarProps) => {
  const origin = searchParams.origin || "LON";
  const destination = searchParams.destination || "CHI";
  const departureDate = searchParams.departure_date || "2025-04-10";
  const selectedDate = searchParams.selected_date || departureDate;
  const selectedItemIndex = parseInt(searchParams.selectedItemIndex || "0");
  const currentIndex = parseInt(searchParams.currentIndex || "0");
  
  const [priceData, setPriceData] = useState<{ date: string; price: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(Math.min(currentIndex + 6, priceData.length));
  
  useEffect(() => {
    const loadPriceData = async () => {
      setLoading(true);
      try {
        // Fetch price data via server action
        const data = await fetchPriceCalendarData(origin, destination, departureDate);
        setPriceData(data);
        setVisibleItems(Math.min(currentIndex + 6, data.length));
      } catch (error) {
        console.error("Error loading price data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadPriceData();
  }, [origin, destination, departureDate, currentIndex]);
  
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", options);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  // Common form data for components
  const commonFormData = {
    origin,
    destination,
    departureDate,
    adults: searchParams.adults || "1",
    selectedDate,
    selectedItemIndex: selectedItemIndex.toString(),
    currentIndex: currentIndex.toString(),
  };

  // Data for price day cards
  const dayFormData = {
    origin,
    destination,
    departureDate,
    adults: searchParams.adults || "1",
    currentIndex: currentIndex.toString(),
  };

  return (
    <div className="p-5 bg-white rounded-2xl mt-5">
      <CalendarHeader />

      <div className="relative w-full flex items-center justify-center my-4">
        <NavigationButton 
          direction="left" 
          disabled={currentIndex === 0} 
          formData={{
            ...commonFormData,
            currentIndex: Math.max(currentIndex - 6, 0).toString()
          }} 
        />

        <CalendarContent 
          priceData={priceData}
          currentIndex={currentIndex}
          visibleItems={visibleItems}
          selectedItemIndex={selectedItemIndex}
          formData={dayFormData}
          formatDate={formatDate}
        />

        <NavigationButton 
          direction="right" 
          disabled={currentIndex + 6 >= priceData.length} 
          formData={{
            ...commonFormData,
            currentIndex: Math.min(currentIndex + 6, priceData.length - 1).toString()
          }} 
        />
      </div>
    </div>
  );
};

export { PriceCalendar };