"use client";
import {
  ArrowUp16Regular,
  ArrowDown16Regular,
  CalendarArrowRight24Regular,
  Add16Regular,
  Person24Regular,
  Search16Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";

function AirplaneSearch() {
  return (
    <div className="bg-white rounded-full px-8 py-4 flex gap-4 w-full">
      <div className="flex items-center w-full gap-4">
        {/* From */}
        <div className="flex items-start gap-2 flex-1">
          <div className="border rounded-full w-8 h-8 flex items-center justify-center">
            <ArrowUp16Regular className="text-gray-500" />
          </div>
          <div>
            <p className="font-bold">From</p>
            <p className="text-sm mt-1 text-gray-500">City or Airport</p>
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-start gap-2 flex-1">
          <div className="border rounded-lg w-8 h-8 flex items-center justify-center">
            <ArrowDown16Regular className="text-gray-500" />
          </div>
          <div>
            <p className="font-bold">Destination</p>
            <p className="text-sm mt-1 text-gray-500">City or Airport</p>
          </div>
        </div>

        {/* Depart */}
        <div className="flex items-start gap-2 flex-1">
          <CalendarArrowRight24Regular className="text-gray-500" />
          <div>
            <p className="font-bold">Depart</p>
            <p className="text-sm mt-1 text-gray-500">Pick a date</p>
          </div>
        </div>

        {/* Return Ticket */}
        <div className="flex items-center gap-2 border border-dotted rounded-full px-4 py-3 flex-1">
          <div className="border w-6 h-6 rounded-full flex items-center justify-center">
            <Add16Regular className="text-gray-500" />
          </div>
          <p className="text-sm text-gray-500">Add Return Ticket</p>
        </div>

        {/* Travelers */}
        <div className="flex items-start gap-2 flex-1">
          <Person24Regular className="text-gray-500" />
          <div>
            <p className="font-bold">Travelers</p>
            <p className="text-sm mt-1 text-gray-500">1 Adult</p>
          </div>
        </div>
      </div>

      {/* Search Button (Small Size) */}
      <div className="flex items-center">
        <Button
          className="text-white w-10 h-10 rounded-full flex-none"
          aria-label="Search flights"
        >
          <Search16Regular className="text-white" />
        </Button>
      </div>
    </div>
  );
}

export default AirplaneSearch;
