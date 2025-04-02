"use client";
import React from "react";
import { Shapes24Regular, Checkmark16Regular } from "@fluentui/react-icons";

function FareDetails() {
  return (
    <div className="mt-8 border border-gray-300 p-8 rounded-2xl w-full">
      <div className="flex items-center gap-2">
        <Shapes24Regular />
        <h2 className="text-lg font-medium text-gray-700">Your Fare</h2>
      </div>
      <div className="flex items-center gap-10 mt-3">
        <p className="font-bold">Flagship Business Flexible</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Checkmark16Regular />
            <p className="text-sm">Hand baggage included</p>
          </div>
          <div className="flex items-center gap-2">
            <Checkmark16Regular />
            <p className="text-sm">2 checked bags included (32 kg each)</p>
          </div>
          <div className="flex items-center gap-2">
            <Checkmark16Regular />
            <p className="text-sm">Refundable</p>
          </div>
          <div className="flex items-center gap-2">
            <Checkmark16Regular />
            <p className="text-sm">No change fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FareDetails };
