import { Button } from "@/components/ui";
import React from "react";
import { FlightSegment } from "@/app/details/page";
import Image from "next/image";
import AirplaneIcon from "../../../../../public/img/Frame 1000002244.svg";
import { formatDuration } from "@/utils";
import { ProgressLine } from "./progressLine";
import { FareDetails } from "./fareDetails";
import { FlightInfo } from "./flightInfo";
import { FlightAmenities } from "./flightAmenities";
import { BagsInfo } from "./bagsInfo";

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

interface FlightDetailProps {
  flightDeparture: flightDeparture;
  flightItinerary: FlightSegment[];
  duration: string;
  airlineNameFa: string;
}

function FlightDetail({
  flightDeparture,
  flightItinerary,
  duration,
  airlineNameFa,
}: FlightDetailProps) {
  console.log(flightItinerary);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="i-fluent:arrow-up-right-24-regular h-6 w-6"></span>
          <p className="text-lg font-bold">
            Flight from {flightDeparture.from} to {flightDeparture.destination}{" "}
            ({flightDeparture.model})
          </p>
        </div>
        <Button className="flex items-center gap-2" variant={"outline"}>
          <span className="i-fluent:edit-24-regular"></span>
          Change Flight
        </Button>
      </div>
      <div className="flex items-center mt-5 w-full">
        {flightItinerary.map((segment, index) => (
          <div key={index} className="w-full">
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-2">
                <Image src={AirplaneIcon} alt="Airplane" />
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium">
                    {new Date(segment.departure.at).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      }
                    )}
                  </p>
                  <div className="flex items-center gap-2">
                    <p>{segment.departure.iataCode}</p>
                    <p>({segment.departure.terminal || ""})</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(segment.departure.at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      }
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 flex-1">
                <p className="text-sm font-medium text-gray-500">
                  {formatDuration(duration)}
                </p>
                <ProgressLine />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium">
                    {new Date(segment.arrival.at).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </p>
                  <div className="flex items-center gap-2">
                    <p>{segment.arrival.iataCode}</p>
                    <p>({segment.arrival.terminal || ""})</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(segment.arrival.at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-around w-full  h-[70px] mt-4">
              <FlightInfo
                flightNumber={segment.flightNumber}
                flightClass="Economy"
                operatedBy={airlineNameFa}
              />
            <hr className="h-full w-[1px] border border-gray-200" />
            <FlightAmenities aircraftType={"Aircraft Type"} />
            </div>
          </div>
        ))}
      </div>
      <FareDetails />
      <BagsInfo />
    </div>
  );
}

export { FlightDetail };
