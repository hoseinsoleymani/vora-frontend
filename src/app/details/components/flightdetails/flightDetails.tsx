"use client";
import {
  HeaderFlightDetails,
  FlightSegment,
  LayoverInfo,
  FareDetails,
  BagsInfo,
} from "@/app/details/components";
import {
  ArrowUpRight24Regular,
  ArrowReset24Regular,
} from "@fluentui/react-icons";
import { FlightSegment as IFlightSegment } from "../../page";
import { formatDuration } from "@/utils";

interface flightDeparture {
  destination: string;
  from: string;
  model: "Outbound" | "Inbound";
}

interface flightArrival {
  destination: string;
  from: string;
  model: "Outbound" | "Inbound";
}

interface FlightDetailsProps {
  flightDeparture: flightDeparture;
  flightArrival?: flightArrival;
  flightItinerary: IFlightSegment[];
}

function FlightDetails({
  flightDeparture,
  flightItinerary,
}: FlightDetailsProps) {
  return (
    <div className="w-full">
      <HeaderFlightDetails
        destination={flightDeparture.destination}
        from={flightDeparture.from}
        model={"Outbound"}
        icon={<ArrowUpRight24Regular />}
      />
      {flightItinerary.map((segment) => {
        const departureDate = new Date(segment.departure.at);
        const arrivalDate = new Date(segment.arrival.at);

        return (
          <FlightSegment
            key={segment.id}
            departure={{
              time: departureDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              city: segment.departure.iataCode,
              terminal: segment.departure.terminal || "",
              date: departureDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }),
              isConfirmed: true
            }}
            arrival={{
              time: arrivalDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              city: segment.arrival.iataCode,
              terminal: "",
              date: arrivalDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            }}
            flightNumber={segment.flightNumber}
            flightClass="Economy"
            operatedBy={segment.operating.carrierCode}
            aircraftType={segment.aircraft.code}
            duration={formatDuration(segment.duration)}
          />
        );
      })}

      <FareDetails />
      <BagsInfo />
    </div>
  );
}

export { FlightDetails };
