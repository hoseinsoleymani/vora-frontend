"use client";
import {
  FlightSegmentDisplay,
  ProgressLine,
  FlightInfo,
  FlightAmenities,
  FlightSegmentDisplayProps,
} from "@/app/details/components";

interface FlightSegmentProps {
  departure?: FlightSegmentDisplayProps;
  arrival?: FlightSegmentDisplayProps;
  flightNumber: string;
  flightClass: string;
  operatedBy: string;
  aircraftType: string;
  duration: string;
}

function FlightSegment({
  departure,
  arrival,
  flightNumber,
  flightClass,
  operatedBy,
  aircraftType,
  duration,
}: FlightSegmentProps) {
  return (
    <div className="mt-5 flex flex-col gap-4 justify-center">
      <div className="flex items-center justify-between gap-[51px]">
        <FlightSegmentDisplay
          time={departure?.time ?? ""}
          city={departure?.city ?? ""}
          terminal={departure?.terminal ?? ""}
          date={departure?.date ?? ""}
          isConfirmed={departure?.isConfirmed ?? false}
        />
        <div className="flex flex-col justify-center items-center gap-3 flex-1">
          <p className="text-sm font-medium text-gray-500">{duration}</p>
          <ProgressLine />
        </div>
        <FlightSegmentDisplay
          time={arrival?.time ?? ""}
          city={arrival?.city ?? ""}
          terminal={arrival?.terminal ?? ""}
          date={arrival?.date ?? ""}
          isConfirmed={arrival?.isConfirmed ?? false}
        />
      </div>
      <div className="flex items-center gap-4 justify-around w-full  h-[70px]">
        <FlightInfo
          flightNumber={flightNumber}
          flightClass={flightClass}
          operatedBy={operatedBy}
        />
        <hr className="h-full w-[1px] border border-gray-200" />
        <FlightAmenities aircraftType={aircraftType} />
      </div>
    </div>
  );
}

export { FlightSegment };
