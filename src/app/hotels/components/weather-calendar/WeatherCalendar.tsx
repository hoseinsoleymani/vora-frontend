"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchWeatherData } from "../../lib/actions";
import { CalendarHeader } from "./CalendarHeader";
import { NavigationButton } from "./NavigationButton";
import { CalendarContent } from "./CalendarContent";

interface WeatherCalendarProps {
  searchParams: {
    category?: string;
    brand?: string;
    date_added?: string;
    quantity?: string;
    selected_product?: string;
    selectedItemIndex?: string;
    currentIndex?: string;
    page?: string;
    current_step?: string;
    sort_by?: string;
  };
}

const WeatherCalendar = ({ searchParams }: WeatherCalendarProps) => {
  const selectedItemIndex = parseInt(searchParams.selectedItemIndex || "0");
  const currentIndex = parseInt(searchParams.currentIndex || "0");
  
  const [weatherData, setWeatherData] = useState<{ date: string; temp: string; condition: string; icon: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(Math.min(currentIndex + 9, weatherData.length));
  
  useEffect(() => {
    const loadWeatherData = async () => {
      setLoading(true);
      try {
        // Assuming we have a server action to fetch weather data
        const data = await fetchWeatherData();
        setWeatherData(data);
        setVisibleItems(Math.min(currentIndex + 9, data.length));
      } catch (error) {
        console.error("Error loading weather data:", error);
        // Provide sample data for display
        const sampleData = generateSampleWeatherData();
        setWeatherData(sampleData);
        setVisibleItems(Math.min(currentIndex + 9, sampleData.length));
      } finally {
        setLoading(false);
      }
    };
    
    loadWeatherData();
  }, [currentIndex]);
  
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    
    // Weekday (Monday, Tuesday, etc.)
    const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    
    // Format date as YYYY/MM/DD
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const fullDate = `${year}/${month}/${day}`;
    
    return { weekday, fullDate };
  };

  // Get the date range for display in header
  const getDateRange = () => {
    if (weatherData.length === 0) return '';
    
    const startDate = new Date(weatherData[currentIndex].date);
    const endIndex = Math.min(currentIndex + 8, weatherData.length - 1);
    const endDate = new Date(weatherData[endIndex].date);
    
    // Format dates as YYYY/MM/DD
    const formatDateShort = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}/${month}/${day}`;
    };
    
    return `${formatDateShort(startDate)} - ${formatDateShort(endDate)}`;
  };

  if (loading) {
    return (
      <div className="p-5 bg-white rounded-2xl mt-5">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-6 w-32" />
        </div>

        {/* Calendar Content */}
        <div className="relative w-full flex items-center justify-center my-4">
          {/* Left Navigation Button */}
          <Skeleton className="h-8 w-8 rounded-full mr-2" />

          {/* Weekday Items */}
          <div className="flex-1 flex space-x-1 justify-between px-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <Skeleton className="w-16 h-5 mb-2" />
                <Skeleton className="w-20 h-20 rounded-lg mb-1" />
                <Skeleton className="w-12 h-4 mb-1" />
                <Skeleton className="w-10 h-4" />
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <Skeleton className="h-8 w-8 rounded-full ml-2" />
        </div>
      </div>
    );
  }

  // Common data for components
  const commonFormData = {
    selectedItemIndex: selectedItemIndex.toString(),
    currentIndex: currentIndex.toString(),
  };

  const dateRange = getDateRange();

  return (
    <div className="p-5 bg-white rounded-2xl mt-5">
      <CalendarHeader dateRange={dateRange} />

      <div className="relative w-full flex items-center justify-center my-4">
        <NavigationButton 
          direction="left" 
          disabled={currentIndex === 0} 
          formData={{
            ...commonFormData,
            currentIndex: Math.max(currentIndex - 9, 0).toString()
          }} 
        />

        <CalendarContent 
          weatherData={weatherData}
          currentIndex={currentIndex}
          visibleItems={visibleItems}
          selectedItemIndex={selectedItemIndex}
          formData={commonFormData}
          formatDate={formatDate}
        />

        <NavigationButton 
          direction="right" 
          disabled={currentIndex + 9 >= weatherData.length} 
          formData={{
            ...commonFormData,
            currentIndex: Math.min(currentIndex + 9, weatherData.length - 1).toString()
          }} 
        />
      </div>
    </div>
  );
};

// Helper function to generate sample weather data
function generateSampleWeatherData() {
  const weatherConditions = [
    { temp: '22°C', condition: 'Sunny', icon: '☀️' },
    { temp: '18°C', condition: 'Partly Cloudy', icon: '⛅' },
    { temp: '15°C', condition: 'Cloudy', icon: '☁️' },
    { temp: '12°C', condition: 'Rainy', icon: '🌧️' },
    { temp: '8°C', condition: 'Stormy', icon: '⛈️' },
    { temp: '25°C', condition: 'Hot', icon: '🔥' },
    { temp: '5°C', condition: 'Cold', icon: '❄️' }
  ];
  
  const result = [];
  const today = new Date();
  
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    const { temp, condition, icon } = weatherConditions[randomIndex];
    
    result.push({
      date: date.toISOString().split('T')[0],
      temp,
      condition,
      icon
    });
  }
  
  return result;
}

export { WeatherCalendar }; 