import React from "react";
import { TravellerPrice } from "./travellerPrice";
function PriceSummaryCard() {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl">Price summary</h3>
      <TravellerPrice traveller={{ type: "adult", flightPrice: 2910, taxesPrice: 787.8 , price: 3697.8 }} index={0} />
      <TravellerPrice traveller={{ type: "adult", flightPrice: 2910, taxesPrice: 787.8 , price: 3697.8 }} index={1} />
      <TravellerPrice traveller={{ type: "child", flightPrice: 2910, taxesPrice: 787.8 , price: 3697.8 }} index={2} />
    </div>
  );
}

export { PriceSummaryCard };
