"use client";
import { Search16Regular } from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CheckInAndOut from "./checkInAndOut";
import { Travelers } from "@/components/share/searchBar";
import Rooms from "./rooms";
import From from "./from";
import { useRouter } from "next/navigation";

function HotelSearch() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    const formatDate = (date: Date | undefined): string | undefined => {
      if (!date) return undefined;
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const params = new URLSearchParams();

    if (location) {
        params.set("city", location);
    }
    const formattedCheckIn = formatDate(checkInDate);
    if (formattedCheckIn) {
        params.set("check_in_date", formattedCheckIn);
    }
    const formattedCheckOut = formatDate(checkOutDate);
    if (formattedCheckOut) {
        params.set("check_out_date", formattedCheckOut);
    }

    params.set("adults", adultCount.toString());
    params.set("children", childCount.toString());
    params.set("rooms", rooms.toString());

    router.push(`/hotels?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg px-8 py-4 flex gap-4 w-full items-center justify-between h-24">
      <From setLocation={setLocation} />

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
          className="text-white w-10 h-10 rounded-full flex-none"
          aria-label="Search hotels"
          onClick={handleSearch}
          size={"icon"}
        >
          <Search16Regular className="text-white" />
        </Button>
      </div>
    </div>
  );
}

export { HotelSearch };
