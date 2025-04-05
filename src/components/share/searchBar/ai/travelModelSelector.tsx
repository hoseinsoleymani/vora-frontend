import React from "react";
import StepContainer from "./stepContainer";
import { Button } from "@/components/ui";
import { useWizard } from "@/hooks";
import {
  Airplane16Regular,
  VehicleSubway16Regular,
  SelectAllOn16Regular,
  Dismiss12Filled,
} from "@fluentui/react-icons";
type TravelModelType = "flight" | "train" | "noDifference" | "personal";

function TravelModelSelector() {
  const { data, setStepData } = useWizard();
  console.log(data);

  const options: {
    label: string;
    value: TravelModelType;
    icon: React.ReactNode;
  }[] = [
    { label: "Flight", value: "flight", icon: <Airplane16Regular /> },
    { label: "Train", value: "train", icon: <VehicleSubway16Regular /> },
    {
      label: "No Difference",
      value: "noDifference",
      icon: <SelectAllOn16Regular />,
    },
    { label: "Personal", value: "personal", icon: <Dismiss12Filled /> },
  ];

  return (
    <StepContainer title="How do you Prefer to travel?">
      <div className="flex gap-4">
        {options.map(({ label, value, icon }) => (
          <Button
            key={value}
            className={`rounded-lg py-4 px-4 font-medium flex justify-start w-[210px] transition-all 
              ${
                data.travelModel === value
                  ? "bg-gray-900 text-white hover:bg-gray-900 hover:text-white"
                  : "bg-white border border-gray-300"
              }`}
            size={"lg"}
            variant={"outline"}
            onClick={() => setStepData("travelModel", value)}
          >
            {icon}
            {label}
          </Button>
        ))}
      </div>
    </StepContainer>
  );
}

export default TravelModelSelector;
