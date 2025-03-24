"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUp16Regular, ArrowDown16Regular } from "@fluentui/react-icons";
import { useState, useEffect } from "react";


interface LocationFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: "up" | "down";
}

function LocationField({
  label,
  value,
  onChange,
  icon = "up",
}: LocationFieldProps) {
  const [searchCity, setSearchCity] = useState("");
  const [searchResults, setSearchResults] = useState<Location[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const getLocation = async () => {
    try {
      if (searchCity.trim() === "") {
        setSearchResults([]);
        return;
      }
      const response = await fetch(
        `/api/flight/location/search?keyword=${encodeURIComponent(searchCity)}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchCity) {
      getLocation();
    }
  }, [searchCity]);

  const handleSelectCity = (cityName: string) => {
    onChange(cityName);
    setSearchCity("");
    setSearchResults([]);
    setIsOpen(false);
  };

  const Icon = icon === "up" ? ArrowUp16Regular : ArrowDown16Regular;

  return (
    <div className="w-full">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="flex flex-col">
          <div className="flex items-center" onClick={() => setIsOpen(true)}>
            <div className="border rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <Icon className="text-gray-500" />
            </div>
            <p className="font-bold">{label}</p>
          </div>
          <p className="text-sm mt-1 text-gray-500 ml-9">
            {value ? value : "City or Airport"}
          </p>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[320px] px-4 py-3 rounded-xl mt-10 ml-40">

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LocationField;
