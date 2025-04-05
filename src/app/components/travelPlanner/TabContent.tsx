import React, { JSX } from "react";
import PlannerCard from "./plannerCard";
import Altravel from "../../../../public/img/AI icon - based on budget.svg";
import Planner from "../../../../public/img/AI icon - Planner.svg";

interface TabContentProps {
  visibleTabs: string[];
  selectedTab: string;
}

const tabComponents: Record<string, JSX.Element> = {
  "Trip Planner": (
    <PlannerCard
      image={Altravel}
      backgroundImage="./img/25524e6e32417a2beb22d3ed03702b18.jpg"
      height={314}
      width={1062}
    />
  ),
  "Travelling on a Budget": (
    <PlannerCard
      image={Planner}
      backgroundImage="./img/e5dec6adcd8569cf3ebc851283ee5dd8.jpg"
      height={314}
      width={1022}
    />
  ),
  "Cost Expenses": (
    <PlannerCard
      image={Altravel}
      backgroundImage="./img/9e4a0d416a76e5c5bd041084a6226dcd.jpg"
      height={314}
      width={990}
    />
  ),
};

const TabContent: React.FC<TabContentProps> = ({
  visibleTabs,
  selectedTab,
}) => {
  const totalVisibleTabs = visibleTabs.length;
  const centerPosition = (totalVisibleTabs - 1) * 5;
  return (
    <div className="relative w-full max-w-5xl mt-10 h-[350px] flex justify-center items-center">
      {visibleTabs.map((tab, index) => {
        const stackOffset = index * 10;
        const isActive = tab === selectedTab;
        return (
          <div
            key={tab}
            className="absolute w-full transition-all duration-500 ease-in-out flex justify-center"
            style={{
              top: `${stackOffset - centerPosition}px`,
              zIndex: isActive ? totalVisibleTabs + 1 : index,
            }}
          >
            {tabComponents[tab]}
          </div>
        );
      })}
    </div>
  );
};

export default TabContent;
