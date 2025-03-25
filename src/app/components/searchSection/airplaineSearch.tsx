"use client";
import {
  ArrowUp16Regular,
  ArrowDown16Regular,
  Search16Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";
import Location from "./location/location";
import DatePicker from "./date/datePicker";
import ReturnTicket from "./returnTicket/returnTicket";
import Travelers from "./travelers/travelers";

interface AirplaneSearchProps {
  fromLocation: string;
  setFromLocation: (location: string) => void;
  destinationLocation: string;
  setDestinationLocation: (location: string) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  returnDate: Date | undefined;
  setReturnDate: (date: Date | undefined) => void;
}

function AirplaneSearch({
  fromLocation,
  setFromLocation,
  destinationLocation,
  setDestinationLocation,
  date,
  setDate,
  returnDate,
  setReturnDate,
}: AirplaneSearchProps) {
  
  return (
    <div className="bg-white rounded-full px-8 py-4 flex gap-4 w-full">
      <div className="flex items-center w-full gap-4">
        <Location
          title="From"
          icon={<ArrowUp16Regular />}
          location={fromLocation}
          setLocation={setFromLocation}
        />
        <Location
          title="Destination"
          icon={<ArrowDown16Regular />}
          location={destinationLocation}
          setLocation={setDestinationLocation}
        />
        <DatePicker date={date} setDate={setDate} />
        <ReturnTicket returnDate={returnDate} setReturnDate={setReturnDate} />
        <Travelers />
      </div>

      <Button
        className="text-white w-10 h-10 rounded-full flex-none"
        aria-label="Search flights"
      >
        <Search16Regular className="text-white" />
      </Button>
    </div>
  );
}

export default AirplaneSearch;
