import React from "react";
import StepContainer from "./stepContainer";
import { Button } from "@/components/ui";
import { useWizard } from "@/hooks";

type TravelModelType = "flight" | "train" | "noDifference" | "personal";

function TravelModelSelector() {
  const { data, setStepData } = useWizard();
  console.log(data);

  const options: {
    label: string;
    value: TravelModelType;
    icon: React.ReactNode;
  }[] = [
    { label: "Flight", value: "flight", icon: <span className="i-fluent:airplane-16-regular text-2xl"></span> },
    { label: "Train", value: "train", icon: <span className="i-fluent:vehicle-subway-16-regular text-2xl"></span> },
    {
      label: "No Difference",
      value: "noDifference",
      icon: <span className="i-fluent:select-all-on-16-regular text-2xl"></span>,
    },
    { label: "Personal", value: "personal", icon: <span className="i-fluent:dismiss-12-filled text-2xl"></span> },
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
