import { Person24Regular } from "@fluentui/react-icons";

interface TravelersHeaderProps {
  totalTravelers: number;
}

function TravelersHeader({ totalTravelers }: TravelersHeaderProps) {
  return (
    <div className="flex items-start gap-2 w-[200px] cursor-pointer">
      <Person24Regular className="text-gray-500" />
      <div>
        <p className="font-bold">Travelers</p>
        <p className="text-sm mt-1 text-gray-500">
          {totalTravelers} {totalTravelers === 1 ? "Traveler" : "Travelers"}
        </p>
      </div>
    </div>
  );
}

export default TravelersHeader;
