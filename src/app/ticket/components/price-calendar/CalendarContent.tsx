"use client";

import { PriceDay } from './PriceDay';

interface CalendarContentProps {
  priceData: { date: string; price: string }[];
  currentIndex: number;
  visibleItems: number;
  selectedItemIndex: number;
  formData: {
    origin: string;
    destination: string;
    departureDate: string;
    adults: string;
    currentIndex: string;
  };
  formatDate: (date: string) => string;
}

const CalendarContent = ({ 
  priceData, 
  currentIndex, 
  visibleItems, 
  selectedItemIndex, 
  formData, 
  formatDate 
}: CalendarContentProps) => (
  <div className="flex space-x-4 max-w-4xl mx-14">
    {priceData.slice(currentIndex, visibleItems).map((day, index) => (
      <PriceDay 
        key={index}
        day={day} 
        index={index} 
        isSelected={index === selectedItemIndex} 
        formData={formData} 
        formatDate={formatDate} 
      />
    ))}
  </div>
);

export { CalendarContent }; 