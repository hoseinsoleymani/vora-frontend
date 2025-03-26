import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from "@/components/ui";
import { Search20Regular, Dismiss16Regular } from "@fluentui/react-icons";
import React, { useEffect, useState } from "react";
import HeaderAirportSearch from "./headerAirportSearch";
import AirportName from "./airportName";

interface LocationProps {
  title: "From" | "Destination";
  icon: React.ReactNode;
  setLocation: (location: string) => void;
  location: string;
}

interface Address {
  cityName: string;
  cityCode: string;
  countryName: string;
  countryCode: string;
  stateCode?: string;
}

export interface Location {
  address: Address;
  detailedName: string;
  iataCode: string;
  id: string;
  name: string;
  subType: string;
  timeZoneOffset: string;
  type: string;
}

function Location({ title, icon, setLocation, location }: LocationProps) {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResults, setSearchResults] = useState<Location[]>([]);

  const getLocation = async () => {
    try {
      if (searchLocation.trim() === "") {
        setSearchResults([]);
        return;
      }
      const response = await fetch(
        `/api/flight/location/search?keyword=${encodeURIComponent(
          searchLocation
        )}`
      );
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchLocation) {
      getLocation();
    }
  }, [searchLocation]);

  const handleLocationSelect = (selectedLocation: Location) => {
    setLocation(selectedLocation.name);
    setSearchLocation(selectedLocation.name);
    setSearchResults([]);
  };

  const handleRemoveLocation = () => {
    setLocation("");
    setSearchLocation("");
    setSearchResults([]);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-start gap-2 w-[200px] cursor-pointer">
            <div
              className={`border ${
                title === "From" ? "rounded-full" : "rounded-lg"
              } min-w-[32px] max-w-[32px] h-8 flex items-center justify-center overflow-hidden`}
            >
              <div className="flex items-center justify-center w-full h-full">
                {icon}
              </div>
            </div>
            <div>
              <p className="font-bold">{title}</p>
              <p className="text-sm mt-1 text-gray-500">
                {location ? location : "City or Airport"}
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-10 w-[360px] px-4 py-3 rounded-xl overflow-hidden">
          <DropdownMenuItem>
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="flex items-center gap-2">
                <div
                  className={`border ${
                    title === "From" ? "rounded-full" : "rounded-lg"
                  } min-w-[32px] max-w-[32px] h-8 flex items-center justify-center overflow-hidden`}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    {icon}
                  </div>
                </div>
                <p className="font-bold">{title}</p>
              </div>
            </div>
            {location && (
              <Button variant={"outline"} onClick={handleRemoveLocation}>
                <Dismiss16Regular /> Remove
              </Button>
            )}
          </DropdownMenuItem>
          <hr className="w-full border-gray-300 my-4" />
          <div className="relative">
            <Search20Regular className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="City or Airport"
              className="w-full outline-none border rounded-full px-4 py-2 text-sm text-gray-500 pl-10"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>

          {searchResults.length > 0 && (
            <>
              <hr className="w-full border-gray-300 my-4" />
              <HeaderAirportSearch
                data={searchResults[0]}
                setLocation={handleLocationSelect}
              />
              <AirportName
                data={searchResults}
                setLocation={handleLocationSelect}
              />
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Location;
