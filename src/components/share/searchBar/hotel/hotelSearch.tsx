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
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSearch = async () => {
    const formatDate = (date: Date | undefined) => {
      if (!date) return undefined;
      return date.toISOString().split("T")[0].replace(/-/g, "/");
    };

    try {
      const params = new URLSearchParams({
        city: location,
        check_in_date: formatDate(checkInDate) || "",
        check_out_date: formatDate(checkOutDate) || "",
        adults: adultCount.toString(),
        room_quantity: rooms.toString(),
        page: "1",
        page_size: "10",
      });

      const response = await fetch(
        `http://5.161.155.143:5000/hotel/offer/search?${params.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotel offers");
      }

      const data = await response.json();
      console.log("Hotel search results:", data);
      // router.push(`/hotels?${params.toString()}`);
    } catch (error) {
      console.error("Error searching for hotels:", error);
    }
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
