import React from "react";
import { Traveller, TravellerPrice } from "./travellerPrice";

function PriceSummaryCard({ travellers }: { travellers: Traveller[] }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl">Price summary</h3>
      {travellers.map((traveller, index) => (
        <TravellerPrice key={index} traveller={traveller} index={index} />
      ))}
    </div>
  );
}

export { PriceSummaryCard };
