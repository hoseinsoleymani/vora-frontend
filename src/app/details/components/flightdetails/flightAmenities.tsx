"use client";

import {
  Airplane16Regular,
  Wifi1Regular,
  Food16Regular,
  UsbPlugRegular,
  VideoClip16Regular,
} from "@fluentui/react-icons";

interface FlightAmenitiesProps {
  aircraftType: string;
}

function FlightAmenities({ aircraftType }: FlightAmenitiesProps) {
  return (
    <div className="flex items-start justify-between w-full pr-30">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Airplane16Regular />
          <p className="text-xs font-medium">{aircraftType}</p>
        </div>
        <div className="flex items-center gap-2">
          <Wifi1Regular />
          <p className="text-xs font-medium">Wifi</p>
        </div>
        <div className="flex items-center gap-2">
          <Food16Regular />
          <p className="text-xs font-medium">Meal or snack</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <UsbPlugRegular />
          <p className="text-xs font-medium">In-seat power and USB</p>
        </div>
        <div className="flex items-center gap-2">
          <VideoClip16Regular />
          <p className="text-xs font-medium">In-flight entertainment</p>
        </div>
      </div>
    </div>
  );
}

export { FlightAmenities };
