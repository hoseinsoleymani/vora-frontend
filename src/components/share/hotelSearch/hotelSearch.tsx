"use client";
import { Search16Regular } from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";
import WhereTo from "./whereto/whereTo";
import { useState } from "react";
import CheckInAndOut from "./checkInAndOut";
import Travelers from "../airplaneSearch/travelers/travelers";
import Rooms from "./rooms/rooms";

function HotelSearch() {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    const formatDate = (date: Date | undefined) => {
      if (!date) return undefined;
      return date.toISOString().split("T")[0].replace(/-/g, "/");
    };

    console.log({
      location,
      checkInDate: formatDate(checkInDate),
      checkOutDate: formatDate(checkOutDate),
      adultCount,
      childCount,
      infantCount,
      rooms,
    });
  };

  return (
    <div className="bg-white rounded-full px-8 py-4 flex gap-4 w-full items-center justify-between">
      <WhereTo setLocation={setLocation} />

      <CheckInAndOut
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
      />

      <Travelers
        adultCount={adultCount}
        setAdultCount={setAdultCount}
        childCount={childCount}
        setChildCount={setChildCount}
        infantCount={infantCount}
        setInfantCount={setInfantCount}
      />
      <Rooms rooms={rooms} setRooms={setRooms} />

      <div className="flex items-center">
        <Button
          className="text-white w-12 h-12 rounded-full flex-none bg-gray-800 hover:bg-gray-700"
          aria-label="Search hotels"
          onClick={handleSearch}
        >
          <Search16Regular className="text-white" />
        </Button>
      </div>
    </div>
  );
}

export default HotelSearch;
