import React from 'react';
import {
  Wifi2Regular,
  Food24Regular,
  DrinkBeer24Regular,
  LeafTwo24Regular,
  VehicleCar24Regular,
  BuildingRetail24Regular,
  Home24Regular,
  // Add other necessary icons
} from "@fluentui/react-icons";

interface AmenityIconProps {
  iconIdentifier: string;
  className?: string; // Allow passing className
}

// Default className for icons
const defaultClassName = "w-5 h-5 text-gray-600";

export const AmenityIcon: React.FC<AmenityIconProps> = ({ 
  iconIdentifier, 
  className = defaultClassName 
}) => {
  const identifier = iconIdentifier?.toLowerCase() || '';

  switch (identifier) {
    case "wifi": 
      return <Wifi2Regular className={className} />;
    case "food":
    case "breakfast":
    case "restaurant": 
      return <Food24Regular className={className} />;
    case "bar": 
      return <DrinkBeer24Regular className={className} />;
    case "spa": 
      return <LeafTwo24Regular className={className} />;
    case "parking": 
      return <VehicleCar24Regular className={className} />;
    case "gym": 
      return <BuildingRetail24Regular className={className} />; // Placeholder
    // Add other cases as needed
    default:
      console.warn(`Unknown amenity icon identifier: ${iconIdentifier}`);
      return <Home24Regular className={className} />; // Fallback icon
  }
}; 