import { HeaderFlightDetails, FlightSegment } from "@/app/details/components";

function FlightDetails() {
  return (
    <div className=" w-full">
      <HeaderFlightDetails />
      <FlightSegment />
    </div>
  );
}

export { FlightDetails };
