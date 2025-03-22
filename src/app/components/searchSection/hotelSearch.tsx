"use client";
import {
  Location12Regular,
  CalendarArrowRight24Regular,
  DoorRegular,
  Person24Regular,
  Search16Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";

function HotelSearch() {
  return (
    <div className="bg-white rounded-full px-8 py-4 flex gap-4 w-full">
      <div className="flex items-center w-full gap-4">
        {/* From */}
        <div className="flex items-start gap-2 flex-1">
          <div className="border rounded-full w-8 h-8 flex items-center justify-center">
            <Location12Regular className="text-gray-500" />
          </div>
          <div>
            <p className="font-bold">From</p>
            <p className="text-sm mt-1 text-gray-500">City or Airport</p>
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-start gap-2 flex-1">
          <CalendarArrowRight24Regular className="text-gray-500" />
          <div>
            <p className="font-bold">Check in and out</p>
            <p className="text-sm mt-1 text-gray-500">City or Airport</p>
          </div>
        </div>

        {/* Depart */}
        <div className="flex items-start gap-2 flex-1">
          <Person24Regular className="text-gray-500" />
          <div>
            <p className="font-bold">Travelers</p>
            <p className="text-sm mt-1 text-gray-500">1 Adult</p>
          </div>
        </div>
        <div className="flex items-start gap-2 flex-1">
          <DoorRegular className="text-gray-500" fontSize={24} />
          <div>
            <p className="font-bold">Rooms</p>
            <p className="text-sm mt-1 text-gray-500">1 How many rooms</p>
          </div>
        </div>
      </div>

      {/* Search Button (Small Size) */}
      <div className="flex items-center">
        <Button
          className="text-white w-12 h-12 rounded-full flex-none bg-gray-800 hover:bg-gray-700"
          aria-label="Search hotels"
        >
          <Search16Regular className="text-white" />
        </Button>
      </div>
    </div>
  );
}

export default HotelSearch;
