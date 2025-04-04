"use client";

import {
  ArrowSort24Regular,
  Sparkle24Regular,
  Clover24Regular,
  Timeline24Regular,
  ReceiptMoney24Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";

interface SortByComponentProps {
  searchParams: {
    origin?: string;
    destination?: string;
    departure_date?: string;
    adults?: string;
    selected_date?: string;
    sort_by?: string;
  };
}

const SortByComponent = ({ searchParams }: SortByComponentProps) => {
  const origin = searchParams.origin || "LON";
  const destination = searchParams.destination || "CHI";
  const departureDate = searchParams.departure_date || "2025-04-10";
  const selectedDate = searchParams.selected_date || departureDate;
  const adults = searchParams.adults || "1";
  const activeButton = searchParams.sort_by || "The most popular";

  const buttons = [
    { label: "The best value", icon: <Sparkle24Regular /> },
    { label: "The most popular", icon: <Clover24Regular /> },
    { label: "The fastest", icon: <Timeline24Regular /> },
    { label: "Price", icon: <ReceiptMoney24Regular /> },
  ];

  return (
    <div className="p-5 bg-white rounded-2xl mt-4">
      <div className="flex items-center">
        <ArrowSort24Regular />
        <span className="text-lg font-semibold ml-2">Sorted By</span>
      </div>

      <div className="flex space-x-4 mt-4">
        {buttons.map((button, index) => (
          <form 
            key={index}
            action="/ticket" 
            method="GET"
            className="flex-grow"
          >
            <input type="hidden" name="origin" value={origin} />
            <input type="hidden" name="destination" value={destination} />
            <input type="hidden" name="departure_date" value={departureDate} />
            <input type="hidden" name="adults" value={adults} />
            <input type="hidden" name="selected_date" value={selectedDate} />
            <input type="hidden" name="sort_by" value={button.label} />
            
            <Button
              type="submit"
              variant={activeButton === button.label ? "secondary" : "outline"}
              size="default"
              className="flex items-center justify-center w-full"
            >
              {button.icon}
              <span className="ml-2">{button.label}</span>
            </Button>
          </form>
        ))}
      </div>
    </div>
  );
};

export { SortByComponent };