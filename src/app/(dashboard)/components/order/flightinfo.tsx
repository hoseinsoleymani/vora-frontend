import React from 'react';

interface FlightInfoProps {
  cabin: string;
  number: string;
  baggage: string;
}

function FlightInfo({ cabin, number, baggage }: FlightInfoProps) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium">Flight Class</h4>
        <p className="text-sm text-gray-5 ml-4">{cabin}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium">Flight Number</h4>
        <p className="text-sm text-gray-5 ml-4">{number}</p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">Total Baggage</h4>
        <p className="text-sm text-gray-5 ml-4">{baggage}</p>
      </div>
    </div>
  );
}

export { FlightInfo };
