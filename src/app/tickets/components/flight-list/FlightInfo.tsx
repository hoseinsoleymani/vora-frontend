"use client";

import { Airplane24Regular } from "@fluentui/react-icons";

interface FlightInfoProps {
  airline: string;
  airlineImage: string;
}

const FlightInfo: React.FC<FlightInfoProps> = ({ airline, airlineImage }) => {
  return (
    <div className="flex flex-col w-1/6 justify-center space-y-3">
      {airlineImage ? (
        <img src={airlineImage} alt={airline} className="w-8 h-8 object-cover" />
      ) : (
        <Airplane24Regular className="text-gray-500" />
      )}
      <div className="text-sm font-light">{airline}</div>
    </div>
  );
};

export { FlightInfo };