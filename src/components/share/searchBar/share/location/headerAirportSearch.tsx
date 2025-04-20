import React from "react";
import { Region } from "./location";

interface HeaderAirportSearchProps {
  data: Region;
  setLocation: (location: Region) => void;
}

function HeaderAirportSearch({ data, setLocation }: HeaderAirportSearchProps) {
  return (
    <div
      className="flex flex-col gap-2 items-center justify-center mt-4 cursor-pointer"
      onClick={() => setLocation(data)}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="i-fluent:airplane-24-regular text-2xl"></span>
          <p>{data.address.cityName}</p>
        </div>
        <p className="font-light">({data.iataCode}-All Airports)</p>
      </div>
      <p className="font-light">
        {data.address.cityName}, {data.address.countryName}
      </p>
    </div>
  );
}

export default HeaderAirportSearch;
