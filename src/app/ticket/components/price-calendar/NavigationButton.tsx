"use client";

import { IosArrowRtl24Filled, IosArrow24Filled } from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";

interface NavigationButtonProps {
  direction: 'left' | 'right';
  disabled: boolean;
  formData: {
    origin: string;
    destination: string;
    departureDate: string;
    adults: string;
    selectedDate: string;
    selectedItemIndex: string;
    currentIndex: string;
  };
}

const NavigationButton = ({ direction, disabled, formData }: NavigationButtonProps) => {
  const isLeft = direction === 'left';
  const Icon = isLeft ? IosArrow24Filled : IosArrowRtl24Filled;
  
  return (
    <form action="/ticket" method="GET" className={`absolute ${isLeft ? 'left-0' : 'right-0'} mt-3 z-10`}>
      <input type="hidden" name="origin" value={formData.origin} />
      <input type="hidden" name="destination" value={formData.destination} />
      <input type="hidden" name="departure_date" value={formData.departureDate} />
      <input type="hidden" name="adults" value={formData.adults} />
      <input type="hidden" name="selected_date" value={formData.selectedDate} />
      <input type="hidden" name="selectedItemIndex" value={formData.selectedItemIndex} />
      <input type="hidden" name="currentIndex" value={formData.currentIndex} />
      
      <Button 
        type="submit"
        disabled={disabled}
        className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-100 ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <Icon className="text-gray-500" />
      </Button>
    </form>
  );
};

export { NavigationButton }; 