import React from "react";

type Traveller = {
  type: "adult" | "child";
  flightPrice: number;
  taxesPrice: number;
  price: number;
};


function TravellerPrice({ traveller , index  }: { traveller: Traveller , index: number }) {
  const price = traveller.flightPrice + traveller.taxesPrice;
  return (
    <div className="flex flex-col gap-2 w-full mt-4">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">
          Traveller {index + 1} : {traveller.type}
        </p>
        <p className="text-lg font-medium">$ {price}</p>
      </div>
      <div className="flex flex-col gap-1 border-l border-gray-300 pl-2">
        <div className="flex justify-between items-center">
          <p className="text-lg">Flight</p>
          <p className="text-lg">$ {(traveller.flightPrice)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg">Taxes, fees and charges</p>
          <p className="text-lg">$ {(traveller.taxesPrice)}</p>
        </div>
      </div>
    </div>
  );
}

export { TravellerPrice };
