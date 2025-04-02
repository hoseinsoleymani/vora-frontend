"use client";
import { PriceSummaryCard } from "./priceSummaryCard";
import { TravelDetailsCard } from "./travelDetailsCard";

function PriceSummary() {
  const handleEditClick = () => {
    console.log("Edit clicked");
  };

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
      <hr className="w-full border-[#E0E0E0]"/>
      <PriceSummaryCard />
    </div>
  );
}

export { PriceSummary };
