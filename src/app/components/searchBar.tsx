"use client";
//Todo: refactor this component to server action
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Airplane16Regular,
  Building16Regular,
  TicketDiagonal16Regular,
  Sparkle16Filled,
} from "@fluentui/react-icons";
import { useState } from "react";
import AirplaneSearch from "@/components/share/airplaneSearch/airplaineSearch";
import HotelSearch from "../../components/share/hotelSearch/hotelSearch";

function SearchBar() {
  const [fromLocation, setFromLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  return (
    <div className="transition-all duration-1000 ease-in-out">
      <Tabs defaultValue="Airplaine" className="w-full">
        <TabsList className="bg-white px-4 py-10 rounded-full">
          <TabsTrigger value="Airplaine">
            <Airplane16Regular className="mr-2" /> Airplaine
          </TabsTrigger>
          <TabsTrigger value="Stay">
            <Building16Regular className="mr-2" /> Stay
          </TabsTrigger>
          <TabsTrigger value="Train">
            <TicketDiagonal16Regular className="mr-2" /> Train
          </TabsTrigger>
          <TabsTrigger value="AIfeatures">
            <Sparkle16Filled className="mr-2" /> AI features
          </TabsTrigger>
        </TabsList>
        <div className="mt-4">
          <TabsContent
            value="Airplaine"
            className="animate-in fade-in-50 slide-in-from-right-4 duration-700 ease-in-out"
          >
            <AirplaneSearch
              fromLocation={fromLocation}
              setFromLocation={setFromLocation}
              destinationLocation={destinationLocation}
              setDestinationLocation={setDestinationLocation}
              date={date}
              setDate={setDate}
              returnDate={returnDate}
              setReturnDate={setReturnDate}
              adultCount={adultCount}
              setAdultCount={setAdultCount}
              childCount={childCount}
              setChildCount={setChildCount}
              infantCount={infantCount}
              setInfantCount={setInfantCount}
            />
          </TabsContent>
          <TabsContent
            value="Stay"
            className="animate-in fade-in-50 slide-in-from-right-4 duration-700 ease-in-out"
          >
            <HotelSearch />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default SearchBar;
