import { Button } from "@/components/ui";
import { ChevronLeft16Regular } from "@fluentui/react-icons";
import React from "react";

interface TravelBasedOnBudgetProps {
  resetSelection?: () => void;
}

function TravelBasedOnBudget({ resetSelection }: TravelBasedOnBudgetProps) {
  const handleBackClick = () => {
    if (resetSelection) {
      resetSelection();
    }
  };

  return (
    <div className="w-full">
      <div>TravelBasedOnBudget content goes here</div>
    </div>
  );
}

export default TravelBasedOnBudget;
