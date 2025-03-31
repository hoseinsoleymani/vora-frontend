import { Person24Regular } from "@fluentui/react-icons";
import Counter from "./counter";
interface TravelersContentProps {
  adultCount: number;
  setAdultCount: (count: number) => void;
  childCount: number;
  setChildCount: (count: number) => void;
  infantCount: number;
  setInfantCount: (count: number) => void;
  className?: string;
  layout?: "vertical" | "horizontal";
  spacing?: "normal" | "wide";
}

function TravelersContent({
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  infantCount,
  setInfantCount,
  className = "",
  layout = "vertical",
  spacing = "normal",
}: TravelersContentProps) {
  const isVertical = layout === "vertical";

  return (
    <div
      className={`flex ${
        isVertical ? "flex-col" : "flex-row"
      } gap-2 ${className}`}
    >
      <Counter
        lable="Adult"
        subLable="Above 16 years old"
        icon={<Person24Regular />}
        count={adultCount}
        onIncrement={() => setAdultCount(adultCount + 1)}
        onDecrement={() => setAdultCount(Math.max(0, adultCount - 1))}
        spacing={spacing}
      />
      {isVertical ? (
        <hr className="w-full my-3" />
      ) : (
        <div className="h-auto w-[1px] bg-gray-200 mx-3"></div>
      )}
      <Counter
        lable="Children"
        subLable="Ages 2 to 16"
        icon={<Person24Regular />}
        count={childCount}
        onIncrement={() => setChildCount(childCount + 1)}
        onDecrement={() => setChildCount(Math.max(0, childCount - 1))}
        spacing={spacing}
      />
      {isVertical ? (
        <hr className="w-full my-3" />
      ) : (
        <div className="h-auto w-[1px] bg-gray-200 mx-3"></div>
      )}
      <Counter
        lable="Infants"
        subLable="Younger than 2"
        icon={<Person24Regular />}
        count={infantCount}
        onIncrement={() => setInfantCount(infantCount + 1)}
        onDecrement={() => setInfantCount(Math.max(0, infantCount - 1))}
        spacing={spacing}
      />
    </div>
  );
}

export default TravelersContent;
