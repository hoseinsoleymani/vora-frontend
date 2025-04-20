"use client";
import { Button } from "@/components/ui";
import { TravelDetailsCard } from "./travelDetailsCard";

interface PriceSummaryProps {
  nextStep: () => void;
  from: string;
  destination: string;
  adults: number;
  totalPrice: number;
  travellers: {
    price: {
      total: number;
      base: number;
    };
  }[];
}

function PriceSummary({
  nextStep,
  from,
  destination,
  adults,
  totalPrice,
  travellers,
}: PriceSummaryProps) {
  const handleEditClick = () => {
    console.log("Edit clicked");
  };

  const calculateTaxes = (traveller: any) => {
    const taxes = traveller.price.total - traveller.price.base;
    return taxes.toFixed(2);
  };

  return (
    <div className="flex flex-col gap-8">
      <TravelDetailsCard
        departingFlight={{
          from: from,
          to: destination,
        }}
        travelers={{
          adults: adults,
        }}
        onEditClick={handleEditClick}
      />
      <hr className="w-full border-[#E0E0E0] my-6" />
      <div className="flex flex-col gap-4">
        {travellers &&
          travellers.map((traveller, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  Traveller {index + 1}:Adult
                </p>
                <p className="text-lg font-medium">${traveller.price.total}</p>
              </div>
              <div className="flex flex-col fap-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg">Flight</p>
                  <p>${traveller.price.base}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg">Taxes, fees and charges</p>
                  <p className="text-lg">${calculateTaxes(traveller)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <hr className="w-full border-[#E0E0E0] my-6" />
      <div className="flex justify-between items-center">
        <p className="text-lg">Total price</p>
        <p className="text-lg font-bold">$ {totalPrice}</p>
      </div>
      <Button className="rounded-lg mt-8" onClick={nextStep}>
        Check out and continue
      </Button>
    </div>
  );
}

export { PriceSummary };
