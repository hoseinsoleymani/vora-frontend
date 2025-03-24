import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from "@/components/ui";
import { Search20Regular , Dismiss16Regular } from "@fluentui/react-icons";
import React, { useEffect, useState } from "react";

interface LocationProps {
  title: "From" | "Destination";
  icon: React.ReactNode;
  setLocation: (location: string) => void;
  location: string;
}

function Location({ title, icon, setLocation, location }: LocationProps) {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setSearchLocation(selectedLocation);
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
              } w-8 h-8 flex items-center justify-center`}
            >
              {icon}
            </div>
            <div>
              <p className="font-bold">{title}</p>
              <p className="text-sm mt-1 text-gray-500">
                {location ? location : "City or Airport"}
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-10 w-[320px] px-4 py-3 rounded-xl overflow-hidden">
          <DropdownMenuItem>
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="flex items-center gap-2">
                <div
                  className={`border ${
                    title === "From" ? "rounded-full" : "rounded-lg"
                  } w-8 h-8 flex items-center justify-center`}
                >
                  {icon}
                </div>
                <p className="font-bold">{title}</p>
              </div>
            </div>
            {location && <Button variant={"outline"} onClick={handleRemoveLocation}><Dismiss16Regular /> Remove</Button>}
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
            <div className="mt-2 max-h-[200px] overflow-y-auto">
              {searchResults.map((result: any, index: number) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handleLocationSelect(result.name)}
                  className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                >
                  {result.name}
                </DropdownMenuItem>
              ))}
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Location;
