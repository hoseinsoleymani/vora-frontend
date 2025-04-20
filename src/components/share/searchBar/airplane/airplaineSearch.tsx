"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DatePicker,
  ReturnTicket,
  Travelers,
  Location,
  Location as LocationType,
} from "@/components/share/searchBar";

function AirplaneSearch() {
  const router = useRouter();
  const [fromLocation, setFromLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [selectedFromLocation, setSelectedFromLocation] =
    useState<LocationType | null>(null);
  const [selectedDestinationLocation, setSelectedDestinationLocation] =
    useState<LocationType | null>(null);

  const handleSearch = async () => {
    const formatDate = (date: Date | undefined) => {
      if (!date) return undefined;
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}/${month}/${day}`;
    };

    try {
      const params = new URLSearchParams({
        origin: selectedFromLocation?.iataCode || "LON",
        destination: selectedDestinationLocation?.iataCode || "PAR",
        departure_date: formatDate(date) || "",
        adults: adultCount.toString(),
        page: "1",
      });

      if (returnDate) {
        params.set("arrival_date", formatDate(returnDate) || "");
      }

      router.push(`/tickets?${params.toString()}`);
    } catch (error) {
      console.error("خطا در جستجوی پروازها:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg px-8 py-4 flex gap-4 w-full items-center justify-between h-24">
      <Location
        title="From"
        icon={<span className="i-fluent:arrow-up-16-regular text-xl"></span>}
        location={fromLocation}
        setLocation={setFromLocation}
        selectedLocation={selectedFromLocation}
        setSelectedLocation={setSelectedFromLocation}
      />
      <Location
        title="Destination"
        icon={<span className="i-fluent:arrow-down-16-regular text-xl"></span>}
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
        <span className="i-fluent:search-16-regular text-white text-xl"></span>
      </Button>
    </div>
  );
}

export { AirplaneSearch };
