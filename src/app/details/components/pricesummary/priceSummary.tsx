"use client";
import { Button } from "@/components/ui";
import { PriceSummaryCard } from "./priceSummaryCard";
import { TravelDetailsCard } from "./travelDetailsCard";
import { Traveller } from "./travellerPrice";

function PriceSummary({ nextStep }: { nextStep: () => void }) {
  const handleEditClick = () => {
    console.log("Edit clicked");
  };
  const travellers: Traveller[] = [
    {
      type: "adult",
      flightPrice: "2,910.00",
      taxesPrice: "787.80",
      totalPrice: "3,697.80",
    },
    {
      type: "adult",
      flightPrice: "2,910.00",
      taxesPrice: "787.80",
      totalPrice: "3,697.80",
    },
    {
      type: "child",
      flightPrice: "2,910.00",
      taxesPrice: "787.80",
      totalPrice: "3,697.80",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <TravelDetailsCard
        departingFlight={{
          airline: "American Airlines",
          from: "NYC (JFK)",
          to: "MIL (MXP)",
        }}
        returnFlight={{
          airline: "American Airlines",
          from: "MIL (MXP)",
          to: "NYC (JFK)",
        }}
        travelers={{
          adults: 2,
          children: 1,
        }}
        onEditClick={handleEditClick}
      />
      <hr className="w-full border-[#E0E0E0] my-6" />
      <div>
        <PriceSummaryCard travellers={travellers} />
      </div>
      <hr className="w-full border-[#E0E0E0] my-6" />
      <div className="flex justify-between items-center">
        <p className="text-lg">Total price</p>
        <p className="text-lg font-bold">$ 6,697.80</p>
      </div>
      <Button className="rounded-lg mt-8" onClick={nextStep}>
        Check out and continue
      </Button>
    </div>
  );
}

export { PriceSummary };
