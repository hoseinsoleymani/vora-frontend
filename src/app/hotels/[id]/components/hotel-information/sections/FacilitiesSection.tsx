"use client";

import { 
  Home24Regular,
  Tv24Regular,
  ShieldLockRegular,
  Bed24Regular,
  Food24Regular,
  Accessibility24Regular,
  Wifi124Regular,
  VehicleCarParking24Regular,
  Info24Regular
} from "@fluentui/react-icons";
import { SectionHeader } from "../common/SectionHeader";

interface FacilityItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const FacilityItem: React.FC<FacilityItemProps> = ({ icon, title, items }) => (
  <div>
    <SectionHeader 
      icon={icon}
      title={title}
      className="text-gray-600"
    />
    <ul className="space-y-2 text-gray-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: <Home24Regular className="w-5 h-5 text-gray-600" />,
      title: "Bathroom",
      items: [
        "Toilet paper",
        "Towels",
        "Private bathroom",
        "Toilet",
        "Free toiletries",
        "Hairdryer",
        "Shower"
      ]
    },
    {
      icon: <Tv24Regular className="w-5 h-5 text-gray-600" />,
      title: "Living area",
      items: [
        "Desk",
        "Couch",
        "Flat-screen TV"
      ]
    },
    {
      icon: <ShieldLockRegular className="w-5 h-5 text-gray-600" />,
      title: "Safety & security",
      items: [
        "Fire extinguishers",
        "CCTV outside property",
        "CCTV in common areas",
        "Smoke alarms",
        "Security alarm",
        "Key card access",
        "Key access",
        "24-hour security",
        "Safety deposit box"
      ]
    },
    {
      icon: <Bed24Regular className="w-5 h-5 text-gray-600" />,
      title: "Bedroom",
      items: [
        "Linen",
        "Extra long beds (>2 metres)"
      ]
    },
    {
      icon: <Food24Regular className="w-5 h-5 text-gray-600" />,
      title: "Food & Drinks",
      items: [
        "Coffee house on site",
        "Snack bar",
        "Bar",
        "Wine/champagne"
      ]
    },
    {
      icon: <Accessibility24Regular className="w-5 h-5 text-gray-600" />,
      title: "Accessibility",
      items: [
        "Upper floors accessible by elevator"
      ]
    },
    {
      icon: <Wifi124Regular className="w-5 h-5 text-gray-600" />,
      title: "Internet",
      items: [
        "Free wi-fi"
      ]
    },
    {
      icon: <VehicleCarParking24Regular className="w-5 h-5 text-gray-600" />,
      title: "Parking",
      items: [
        "Parking garage"
      ]
    },
    {
      icon: <Info24Regular className="w-5 h-5 text-gray-600" />,
      title: "General",
      items: [
        "Hypoallergenic",
        "Air conditioning",
        "Non-smoking throughout",
        "Hardwood or parquet floors",
        "Heating",
        "Soundproofing",
        "Soundproof rooms",
        "Lift",
        "Non-smoking rooms",
        "Facilities for disabled guests"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-x-6">
      {facilities.map((facility, index) => (
        <div key={index} className="space-y-8">
          <FacilityItem {...facility} />
        </div>
      ))}
    </div>
  );
}; 