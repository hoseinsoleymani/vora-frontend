import SelectTravelers from "./selectTravelers";
import { Person24Regular } from "@fluentui/react-icons";
interface TravelersContentProps {
  adultCount: number;
  setAdultCount: (count: number) => void;
  childCount: number;
  setChildCount: (count: number) => void;
  infantCount: number;
  setInfantCount: (count: number) => void;
}

function TravelersContent({
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  infantCount,
  setInfantCount,
}: TravelersContentProps) {
  return (
    <div className="flex flex-col gap-2">
      <SelectTravelers
        lable="Adult"
        subLable="Above 16 years old"
        icon={<Person24Regular />}
        count={adultCount}
        onIncrement={() => setAdultCount(adultCount + 1)}
        onDecrement={() => setAdultCount(Math.max(0, adultCount - 1))}
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
  );
}

export default TravelersContent;
