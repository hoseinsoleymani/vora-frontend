import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Button,
} from "@/components/ui";
import {
  Person24Regular,
  Checkmark16Regular,
  ArrowUndo16Regular,
} from "@fluentui/react-icons";
import { useState } from "react";
import { TravelerSummary } from "./TravelerSummary";
import TravelersHeader from "./travelersHeader";
import TravelersContent from "./travelersContent";

interface TravelersProps {
  adultCount: number;
  setAdultCount: (count: number) => void;
  childCount: number;
  setChildCount: (count: number) => void;
  infantCount: number;
  setInfantCount: (count: number) => void;
}

function Travelers({
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  infantCount,
  setInfantCount,
}: TravelersProps) {
  const totalTravelers = adultCount + childCount + infantCount;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger>
          <TravelersHeader totalTravelers={totalTravelers} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-10 px-4  rounded-xl w-[302px]">
          <div>
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <Person24Regular className="text-gray-500" />
                <p className="font-bold">Travelers</p>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  totalTravelers > 0
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 max-h-0"
                }`}
              >
                {totalTravelers > 0 && (
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className="text-sx rounded-full"
                    onClick={() => {
                      setAdultCount(0);
                      setChildCount(0);
                      setInfantCount(0);
                    }}
                  >
                    <ArrowUndo16Regular /> Reset
                  </Button>
                )}
              </div>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out ${
                totalTravelers > 0
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              {totalTravelers > 0 && (
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-sm font-bold">Selected :</p>
                  <TravelerSummary
                    adultCount={adultCount}
                    childCount={childCount}
                    infantCount={infantCount}
                  />
                </div>
              )}
            </div>
          </div>
          <hr className="my-4 w-full" />
          <TravelersContent
            adultCount={adultCount}
            setAdultCount={setAdultCount}
            childCount={childCount}
            setChildCount={setChildCount}
            infantCount={infantCount}
            setInfantCount={setInfantCount}
          />
          <div className="my-4 flex justify-end">
            <Button
              size={"sm"}
              className="text-xs gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Checkmark16Regular /> Done
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Travelers;
