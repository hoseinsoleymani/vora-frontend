import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Button,
} from "@/components/ui";
import { Person24Regular, Checkmark16Regular } from "@fluentui/react-icons";
import SelectTravelers from "./selectTravelers";

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

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-start gap-2 w-[200px] cursor-pointer">
            <Person24Regular className="text-gray-500" />
            <div>
              <p className="font-bold">Travelers</p>
              <p className="text-sm mt-1 text-gray-500">
                {totalTravelers}{" "}
                {totalTravelers === 1 ? "Traveler" : "Travelers"}
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-10 px-4 py-3 rounded-xl w-[302px]">
          <div className="flex items-center gap-2">
            <Person24Regular className="text-gray-500" />
            <p className="font-bold">Travelers</p>
          </div>
          <hr className="my-4 w-full" />
          <div className="flex flex-col gap-2">
            <SelectTravelers
              lable="Adult"
              subLable="Above 16 years old"
              icon={<Person24Regular />}
              count={adultCount}
              onIncrement={() => setAdultCount(adultCount + 1)}
              onDecrement={() => setAdultCount(Math.max(1, adultCount - 1))}
            />
            <hr className="w-full my-3" />
            <SelectTravelers
              lable="Children"
              subLable="Ages 2 to 16"
              icon={<Person24Regular />}
              count={childCount}
              onIncrement={() => setChildCount(childCount + 1)}
              onDecrement={() => setChildCount(Math.max(0, childCount - 1))}
            />
            <hr className="w-full my-3" />
            <SelectTravelers
              lable="Infants"
              subLable="Younger than 2"
              icon={<Person24Regular />}
              count={infantCount}
              onIncrement={() => setInfantCount(infantCount + 1)}
              onDecrement={() => setInfantCount(Math.max(0, infantCount - 1))}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <Button size={"sm"} className="text-xs gap-2">
              <Checkmark16Regular /> Done
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Travelers;
