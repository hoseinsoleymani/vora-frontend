"use client";
import {
  ArrowUp16Regular,
  ArrowDown16Regular,
  Search16Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";
import Location, { Location as LocationType } from "./location/location";
import DatePicker from "./date/datePicker";
import ReturnTicket from "./returnTicket/returnTicket";
import Travelers from "./travelers/travelers";
import { useState } from "react";

function AirplaneSearch() {
  const [fromLocation, setFromLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [selectedFromLocation, setSelectedFromLocation] =
    useState<LocationType | null>(null);
  const [selectedDestinationLocation, setSelectedDestinationLocation] =
    useState<LocationType | null>(null);

  const handleSearch = () => {
    const formatDate = (date: Date | undefined) => {
      if (!date) return undefined;
      return date.toISOString().split("T")[0].replace(/-/g, "/");
    };

    console.log({
      fromLocation,
      destinationLocation,
      date: formatDate(date),
      returnDate: formatDate(returnDate),
      adultCount,
      childCount,
      infantCount,
    });
  };

  return (
    <div className="bg-white rounded-lg px-8 py-4 flex gap-4 w-full items-center justify-between h-24">
      <Location
        title="From"
        icon={<ArrowUp16Regular />}
        location={fromLocation}
        setLocation={setFromLocation}
        selectedLocation={selectedFromLocation}
        setSelectedLocation={setSelectedFromLocation}
      />
      <Location
        title="Destination"
        icon={<ArrowDown16Regular />}
        location={destinationLocation}
        setLocation={setDestinationLocation}
        selectedLocation={selectedDestinationLocation}
        setSelectedLocation={setSelectedDestinationLocation}
      />
      <DatePicker date={date} setDate={setDate} />
      <ReturnTicket returnDate={returnDate} setReturnDate={setReturnDate} />
      <Travelers
        adultCount={adultCount}
        setAdultCount={setAdultCount}
        childCount={childCount}
        setChildCount={setChildCount}
        infantCount={infantCount}
        setInfantCount={setInfantCount}
      />

      <Button
        className="text-white w-10 h-10 rounded-full flex-none"
        aria-label="Search flights"
        size={"icon"}
        onClick={handleSearch}
      >
        <Search16Regular className="text-white" />
      </Button>
    </div>
  );
}

export default AirplaneSearch;
