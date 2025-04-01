"use client";
import {
  ArrowUp16Regular,
  ArrowDown16Regular,
  Search16Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { DatePicker, ReturnTicket, Travelers , Location, Location as LocationType } from "@/components/share/searchBar";

function AirplaneSearch() {
  const router = useRouter();
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

  const handleSearch = async () => {
    const formatDate = (date: Date | undefined) => {
      if (!date) return undefined;
      return date.toISOString().split("T")[0].replace(/-/g, "/");
    };

    try {
      const queryParams = new URLSearchParams({
        origin: selectedFromLocation?.iataCode || "",
        destination: selectedDestinationLocation?.iataCode || "",
        departure_date: formatDate(date) || "",
        arrival_date: formatDate(returnDate) || "",
        adults: adultCount.toString(),
        page: "1",
        page_size: "10",
      });

      const response = await fetch(
        `http://5.161.155.143:5000/flight/offers/search?${queryParams}`
      );
      const data = await response.json();
      console.log(data);

      // if (data) {
      //   router.push(
      //     `/flights?${new URLSearchParams({
      //       origin: selectedFromLocation?.iataCode || "",
      //       destination: selectedDestinationLocation?.iataCode || "",
      //       departure_date: formatDate(date) || "",
      //       arrival_date: formatDate(returnDate) || "",
      //       adults: adultCount.toString(),
      //       originCity: selectedFromLocation?.address.cityName || "",
      //       destinationCity:
      //         selectedDestinationLocation?.address.cityName || "",
      //     }).toString()}`
      //   );
      // }
    } catch (error) {
      console.error("Error searching flights:", error);
    }
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

export { AirplaneSearch };
