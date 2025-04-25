import { 
  Wifi2Regular,
  Food24Regular,
  Water24Regular,
  Cart24Regular
} from "@fluentui/react-icons";

interface AmenityIconProps {
  icon: string;
}

export const AmenityIcon: React.FC<AmenityIconProps> = ({ icon }) => {
  switch (icon) {
    case "wifi":
      return <Wifi2Regular className="w-5 h-5" />;
    case "food":
      return <Food24Regular className="w-5 h-5" />;
    case "pool":
      return <Water24Regular className="w-5 h-5" />;
    case "spa":
      return <Cart24Regular className="w-5 h-5" />;
    default:
      return null;
  }
}; 