"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPriceCalendarData } from "../../actions";
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
    [key: string]: string | undefined;
  };
}

const PriceCalendar = ({ searchParams }: PriceCalendarProps) => {
  const origin = searchParams?.origin || "LON";
  const destination = searchParams?.destination || "PAR";
  const departureDate = searchParams?.departure_date || "2025/04/10";
  const selectedItemIndexProp = parseInt(searchParams?.selectedItemIndex || "0");
  const initialCurrentIndex = parseInt(searchParams?.currentIndex || "0");
  
  const [priceData, setPriceData] = useState<{ date: string; price: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(initialCurrentIndex);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadPriceData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchPriceCalendarData(origin, destination, departureDate);
        setPriceData(data);
        
        if (data.length === 0) {
          setError("No price data available for the selected route and date");
        }
      } catch (error) {
        console.error("Error loading price data:", error);
        setError("Failed to load price data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    loadPriceData();
  }, [origin, destination, departureDate]);
  
  useEffect(() => {
    if (priceData.length > 0) {
      const newSelectedIndex = priceData.findIndex(item => item.date === departureDate);
      if (newSelectedIndex !== -1) {
        const targetPageStartIndex = Math.floor(newSelectedIndex / 6) * 6;
        const finalIndex = Math.min(targetPageStartIndex, Math.max(0, priceData.length - 6));
        setCurrentIndex(finalIndex);
      } else {
        setCurrentIndex(initialCurrentIndex);
      }
    } else {
      setCurrentIndex(initialCurrentIndex);
    }
  }, [priceData, departureDate, initialCurrentIndex]);
  
  const formatDate = (date: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString("en-US", options);
    } catch (error) {
      console.error("Error formatting date:", date, error);
      return date; // Return the original string if formatting fails
    }
  };

  if (loading) {
    // Display skeleton for the price calendar during loading
    return (
      <div className="p-5 bg-white rounded-2xl mt-5">
        <Skeleton className="h-6 w-48 mb-4" />
        <div className="relative w-full flex items-center justify-center my-4">
          <Skeleton className="h-10 w-10 mr-2" />
          <div className="flex overflow-x-hidden">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="flex flex-col items-center text-center px-3 py-2 mx-1 rounded-lg w-24">
                <Skeleton className="h-4 w-16 mb-1" />
                <Skeleton className="h-5 w-12" />
              </div>
            ))}
          </div>
          <Skeleton className="h-10 w-10 ml-2" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-5 bg-white rounded-2xl mt-5">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  if (priceData.length === 0) {
    return (
      <div className="p-5 bg-white rounded-2xl mt-5">
        <div className="text-center">No price data available for the selected route and date</div>
      </div>
    );
  }

  const commonFormData: Record<string, string> = {
    origin,
    destination,
    departure_date: departureDate,
    adults: searchParams?.adults || "1",
    selectedItemIndex: selectedItemIndexProp.toString(),
    currentIndex: currentIndex.toString(),
  };

  const dayFormData: Record<string, string> = {
    origin,
    destination,
    departure_date: departureDate,
    adults: searchParams?.adults || "1",
  };

  const visibleItemsCount = 6;
  const endIndex = Math.min(currentIndex + visibleItemsCount, priceData.length);
  const visiblePriceData = priceData.slice(currentIndex, endIndex);
  const selectedIndexInFullData = priceData.findIndex(item => item.date === departureDate);
  let adjustedSelectedItemIndex = -1;
  if (selectedIndexInFullData >= currentIndex && selectedIndexInFullData < endIndex) {
    adjustedSelectedItemIndex = selectedIndexInFullData - currentIndex;
  }

  return (
    <div className="p-5 bg-white rounded-2xl mt-5">
      <CalendarHeader />

      <div className="relative w-full flex items-center justify-center my-4">
        <NavigationButton
          direction="left"
          disabled={currentIndex === 0}
          formData={{
            ...commonFormData,
            currentIndex: Math.max(0, currentIndex - visibleItemsCount).toString(),
          }}
        />

        <CalendarContent
          priceData={priceData}
          currentIndex={currentIndex}
          visibleItems={visibleItemsCount}
          selectedItemIndex={adjustedSelectedItemIndex}
          formData={dayFormData}
          formatDate={formatDate}
        />

        <NavigationButton
          direction="right"
          disabled={currentIndex + visibleItemsCount >= priceData.length}
          formData={{
            ...commonFormData,
            currentIndex: Math.min(currentIndex + visibleItemsCount, priceData.length - 1).toString(),
          }}
        />
      </div>
    </div>
  );
};

export { PriceCalendar };