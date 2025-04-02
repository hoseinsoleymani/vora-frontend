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

function FlightDetails() {
  return (
    <div className="w-full">
      <HeaderFlightDetails
        from="Berlin"
        model="Outbound"
        icon={<ArrowUpRight24Regular />}
      />
      <FlightSegment
        departure={{
          time: "10:15",
          city: "Berlin",
          terminal: "T1",
          date: "2024-01-01",
          isConfirmed: true,
        }}
        arrival={{
          time: "13:30",
          city: "Copenhagen",
          terminal: "T8",
          date: "2024-01-01",
          isConfirmed: false,
        }}
        duration="13h 40m"
        flightNumber="123456789"
        flightClass="Economy"
        operatedBy="British Airways"
        aircraftType="A320neo"
      />

      <LayoverInfo duration="1h 30m" />
      <FlightSegment
        departure={{
          time: "10:15",
          city: "Berlin",
          terminal: "T1",
          date: "2024-01-01",
          isConfirmed: true,
        }}
        arrival={{
          time: "13:30",
          city: "Copenhagen",
          terminal: "T8",
          date: "2024-01-01",
          isConfirmed: false,
        }}
        duration="13h 40m"
        flightNumber="123456789"
        flightClass="Economy"
        operatedBy="British Airways"
        aircraftType="A320neo"
      />
      <hr className="w-full border-gray-200 my-8" />
      <div>
        <HeaderFlightDetails
          from="Berlin"
          model="Return"
          icon={<ArrowReset24Regular />}
        />
        <FlightSegment
          departure={{
            time: "10:15",
            city: "Berlin",
            terminal: "T1",
            date: "2024-01-01",
            isConfirmed: true,
          }}
          arrival={{
            time: "13:30",
            city: "Copenhagen",
            terminal: "T8",
            date: "2024-01-01",
            isConfirmed: false,
          }}
          duration="13h 40m"
          flightNumber="123456789"
          flightClass="Economy"
          operatedBy="British Airways"
          aircraftType="A320neo"
        />
        <LayoverInfo duration="1h 30m" />
        <FlightSegment
          departure={{
            time: "10:15",
            city: "Berlin",
            terminal: "T1",
            date: "2024-01-01",
            isConfirmed: true,
          }}
          arrival={{
            time: "13:30",
            city: "Copenhagen",
            terminal: "T8",
            date: "2024-01-01",
            isConfirmed: false,
          }}
          duration="13h 40m"
          flightNumber="123456789"
          flightClass="Economy"
          operatedBy="British Airways"
          aircraftType="A320neo"
        />
      </div>
      <FareDetails />
      <BagsInfo />
    </div>
  );
}

export { FlightDetails };
