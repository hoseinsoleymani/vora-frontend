"use client";
import { Button } from "@/components/ui";
import {
  ArrowUpRight24Regular,
  ArrowReset24Regular,
  Person24Regular,
  Edit16Regular,
} from "@fluentui/react-icons";

type departingFlight = {
    airline: string;
    from: string;
    to: string;
}

type returnFlight = {
    airline: string;
    from: string;
    to: string;
}

type travelers = {
    adults: number;
    children: number;
}

interface TravelDetailsCardProps {
    departingFlight: departingFlight;
    returnFlight: returnFlight;
    travelers: travelers;
    onEditClick: () => void;
}
function TravelDetailsCard({ departingFlight, returnFlight, travelers, onEditClick }: TravelDetailsCardProps) {
  return (
    <div className="flex flex-col py-9 px-6 gap-12 bg-gray-100 rounded-2xl">
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <ArrowUpRight24Regular color="#9EA8C3" />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-[#33363B]">Departing flight</h3>
            <p>{`${departingFlight.airline}, ${departingFlight.from} to ${departingFlight.to}`}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <ArrowReset24Regular color="#9EA8C3" />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-[#33363B]">Return flight</h3>
            <p>{`${returnFlight.airline}, ${returnFlight.from} to ${returnFlight.to}`}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Person24Regular color="#9EA8C3" />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-[#33363B]">Travelers</h3>
            <p>{`${travelers.adults} Adults - ${travelers.children} Child`}</p>
          </div>
        </div>
      </div>
      <Button
        className="flex items-center gap-2 w-full rounded-lg bg-gray-100 hover:bg-gray-200"
        variant={"outline"}
        onClick={onEditClick}
      >
        <Edit16Regular />
        Edit Tickets
      </Button>
    </div>
  );
}

export { TravelDetailsCard };
