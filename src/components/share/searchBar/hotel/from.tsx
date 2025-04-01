import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from "@/components/ui";
import {
  Dismiss16Regular,
  Location12Regular,
  Search20Regular,
} from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import { Location } from "../share/location/location";
import CityName from "./cityName";

interface FromProps {
  setLocation: (location: string) => void;
}

function From({ setLocation }: FromProps) {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResults, setSearchResults] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const getLocation = async () => {
    try {
      if (searchLocation.trim() === "") {
        setSearchResults([]);
        return;
      }
      const response = await fetch(
        `http://5.161.155.143:5000//hotel/location/search?keyword=${encodeURIComponent(
          searchLocation
        )}&sub_type=CITY`
      );
      const data = await response.json();
      setSearchResults(data);
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
    setLocation(selectedLocation.iataCode);
    setSearchLocation(selectedLocation.name);
    setSelectedLocation(selectedLocation);
    setSearchResults([]);
  };

  const handleRemoveLocation = () => {
    setLocation("");
    setSearchLocation("");
    setSelectedLocation(null);
    setSearchResults([]);
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-start gap-2 w-[200px] cursor-pointer">
            <div className="border rounded-full w-8 h-8 flex items-center justify-center">
              <Location12Regular className="text-gray-500" />
            </div>
            <div>
              <p className="font-bold">From</p>
              <p className="text-sm mt-1 text-gray-500">
                {selectedLocation ? selectedLocation.name : "City or Airport"}
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-10 w-[302px] px-4 py-3 rounded-xl overflow-hidden">
          <DropdownMenuItem>
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="flex items-center gap-2">
                <div className="border rounded-full w-8 h-8 flex items-center justify-center">
                  <Location12Regular className="text-gray-500" />
                </div>
                <p className="font-bold">Where to?</p>
              </div>
              {selectedLocation && (
                <Button variant={"outline"} onClick={handleRemoveLocation}>
                  <Dismiss16Regular /> Remove
                </Button>
              )}
            </div>
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
            <div className="mt-4 flex flex-col gap-3 max-h-[280px] overflow-y-auto ">
              <hr className="w-full border-gray-300 my-4" />
              <CityName
                data={searchResults}
                setLocation={handleLocationSelect}
              />
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default From;
