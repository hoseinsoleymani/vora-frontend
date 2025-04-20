"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FlightCardProps } from "./FlightCard";

interface FlightPriceProps {
  price: string;
  offerId: string;
  searchParams: FlightCardProps["searchParams"];
}

const FlightPrice: React.FC<FlightPriceProps> = ({
  price,
  offerId,
  searchParams,
}) => {
  const router = useRouter();

  const handleSelectFlight = () => {
    const params = new URLSearchParams(
      Object.entries(searchParams).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value;
        return acc;
      }, {} as Record<string, string>)
    );
  
    params.set("offerId", offerId);
    router.push(`/details?${params.toString()}`);
  };
  

  return (
    <div className="flex items-center justify-center space-x-5">
      <div className="text-xl font-semibold text-gray-900">{price}</div>
      <Button onClick={handleSelectFlight} variant="default" size="sm">
        Select Flight
      </Button>
    </div>
  );
};

export { FlightPrice };
