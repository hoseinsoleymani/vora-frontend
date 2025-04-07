import React from "react";

export type Traveller = {
  type: "adult" | "child";
  totalPrice: string;
  flightPrice: string;
  taxesPrice: string;
};


function TravellerPrice({ traveller , index  }: { traveller: Traveller , index: number }) {
  return (
    <div className="flex flex-col gap-2 w-full mt-4">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">
          Traveller {index + 1} : {traveller.type}
        </p>
        <p className="text-lg font-medium">$ {traveller.totalPrice}</p>
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
