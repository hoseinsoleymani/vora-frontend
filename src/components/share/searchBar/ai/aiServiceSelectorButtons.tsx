import { Button } from "@/components/ui/button";
import React from "react";
import { ServiceType } from "./aiServiceSelector";
import StepContainer from "./stepContainer";

interface AiServiceSelectorButtonsProps {
  handleServiceSelect: (service: ServiceType) => void;
}

function AiServiceSelectorButtons({
  handleServiceSelect,
}: AiServiceSelectorButtonsProps) {
  return (
    <StepContainer title="What AI do you need to assist you?">
      <div className="flex items-center w-full gap-4">
        <Button
          size={"lg"}
          variant={"outline"}
          className="rounded-lg py-4 px-10 font-medium"
          onClick={() => handleServiceSelect("travelAssist")}
        >
          Travel Assist Planning
        </Button>
        <Button
          size={"lg"}
          variant={"outline"}
          className="rounded-lg py-4 px-10 font-medium"
          onClick={() => handleServiceSelect("travelBug")}
        >
          Travel based on budget
        </Button>
        <Button
          size={"lg"}
          variant={"outline"}
          className="rounded-lg py-4 px-10 font-medium"
          onClick={() => handleServiceSelect("travelCalculate")}
        >
          Calculate expenses
        </Button>
      </div>
    </StepContainer>
  );
}

export default AiServiceSelectorButtons;
