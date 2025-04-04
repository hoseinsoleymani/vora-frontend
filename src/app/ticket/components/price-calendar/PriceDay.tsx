"use client";

import { Button } from "@/components/ui/button";

interface PriceDayProps {
  day: { date: string; price: string };
  index: number;
  isSelected: boolean;
  formData: {
    origin: string;
    destination: string;
    departureDate: string;
    adults: string;
    currentIndex: string;
  };
  formatDate: (date: string) => string;
}

const PriceDay = ({ day, index, isSelected, formData, formatDate }: PriceDayProps) => (
  <form 
    key={index} 
    action="/ticket" 
    method="GET"
    className="inline-block"
  >
    <input type="hidden" name="origin" value={formData.origin} />
    <input type="hidden" name="destination" value={formData.destination} />
    <input type="hidden" name="departure_date" value={formData.departureDate} />
    <input type="hidden" name="adults" value={formData.adults} />
    <input type="hidden" name="selected_date" value={day.date} />
    <input type="hidden" name="selectedItemIndex" value={index.toString()} />
    <input type="hidden" name="currentIndex" value={formData.currentIndex} />
    
    <Button 
      type="submit"
      variant="ghost"
      className={`flex-shrink-0 w-32 h-18 mt-3 bg-white rounded-lg border border-gray-200 shadow-md flex flex-col items-center justify-center ${
        isSelected ? "border-2 border-gray-700" : ""
      } cursor-pointer`}
    >
      <div>{formatDate(day.date)}</div>
      <div
        className={`text-sm mt-2 ${
          isSelected ? "text-green-500" : "text-gray-700"
        }`}
      >
        {day.price}
      </div>
    </Button>
  </form>
);

export { PriceDay }; 