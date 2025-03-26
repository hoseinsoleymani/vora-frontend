// TravelPlannerCard.tsx
"use client";
import { useState } from "react";
import HeaderSection from "./HeaderSection";
import TabButtons from "./TabButtons";
import TabContent from "./TabContent";

const options = [
  { id: "Trip Planner", label: "Trip Planner" },
  { id: "Travelling on a Budget", label: "Travelling on a Budget" },
  { id: "Cost Expenses", label: "Cost Expenses" },
];

function TravelPlannerCard() {
  const [selectedTab, setSelectedTab] = useState("Trip Planner");
  const [visitedTabs, setVisitedTabs] = useState<string[]>(["Trip Planner"]);

  const handleTabChange = (tab: string) => {
    if (!visitedTabs.includes(tab)) {
      setVisitedTabs((prevVisited) => [...prevVisited, tab]);
    }
    setSelectedTab(tab);
  };

  // فیلتر کردن تب‌هایی که باید نمایش داده شوند
  const getVisibleTabs = () => {
    const selectedIndex = options.findIndex((opt) => opt.id === selectedTab);
    return visitedTabs.filter((tab) => {
      const tabIndex = options.findIndex((opt) => opt.id === tab);
      return tabIndex <= selectedIndex;
    });
  };

  const visibleTabs = getVisibleTabs();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between items-end w-full gap-[133px]">
        <HeaderSection />
        <TabButtons options={options} selectedTab={selectedTab} onTabChange={handleTabChange} />
      </div>
      <TabContent visibleTabs={visibleTabs} selectedTab={selectedTab} />
    </div>
  );
}

export default TravelPlannerCard;
