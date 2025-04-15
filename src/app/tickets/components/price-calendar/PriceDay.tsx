"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

interface PriceDayProps {
  day: { date: string; price: string };
  index: number;
  isSelected: boolean;
  formData: Record<string, string>;
  formatDate: (date: string) => string;
}

const PriceDay = ({ day, index, isSelected, formData, formatDate }: PriceDayProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'departure_date') { 
         params.set(key, value);
      }
    });

    params.set('departure_date', day.date); 

    params.delete('selected_date'); 
    params.delete('currentIndex');

    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  return (
    <Button 
      key={index} 
      onClick={handleClick}
      type="button"
      variant="ghost"
      className={`flex-shrink-0 w-32 h-18 mt-3 bg-white rounded-lg border border-gray-200 shadow-md flex flex-col items-center justify-center ${
        isSelected ? "border-2 border-gray-700" : ""
      } cursor-pointer`}
      disabled={!day.price}
    >
      <div>{formatDate(day.date)}</div>
      <div
        className={`text-sm mt-2 ${
          isSelected ? "text-green-500" : "text-gray-700"
        }`}
      >
        {day.price ? `€ ${day.price}` : "N/A"}
      </div>
    </Button>
  );
};

export { PriceDay }; 