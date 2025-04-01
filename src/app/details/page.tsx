import React from "react";
import { FlightDetails, PriceSummary } from "./components";
function page() {
  return (
    <div className="container mx-auto px-4 py-6 gap-6 flex">
      <div className="w-2/3 bg-white px-12 py-8 shadow-lg rounded-lg">
        <FlightDetails />
      </div>
      <div className="w-1/3 bg-white px-12 py-8 shadow-lg rounded-lg">
        <PriceSummary />
      </div>
    </div>
  );
}

export default page;
