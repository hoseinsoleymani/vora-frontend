"use client";

import { IosArrowRtl24Filled, IosArrow24Filled } from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";

interface NavigationButtonProps {
  direction: 'left' | 'right';
  disabled: boolean;
  formData: Record<string, string>;
}

const NavigationButton = ({ direction, disabled, formData }: NavigationButtonProps) => {
  const isLeft = direction === 'left';
  const Icon = isLeft ? IosArrow24Filled : IosArrowRtl24Filled;
  
  return (
    <form action="/ticket" method="GET" className={`absolute ${isLeft ? 'left-0' : 'right-0'} mt-3 z-10`}>
      {Object.entries(formData).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}
      
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