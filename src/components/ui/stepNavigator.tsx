"use client";
import {
  Flow24Regular,
  ChevronLeft16Regular,
  ChevronRight16Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui";
import clsx from "clsx";

interface StepNavigatorProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  steps: {
    title: string;
    number: number;
    key: string;
  }[];
  goToStep: (step: number) => void;
}

function StepNavigator({
  currentStep,
  totalSteps,
  onBack,
  steps,
  goToStep,
}: StepNavigatorProps) {
  return (
    <div className="bg-white px-6 py-4 shadow-lg rounded-2xl flex flex-col gap-4">
      <div className="flex justify-between items-center min-h-[40px]">
        <div className="flex items-center gap-3">
          <Flow24Regular />
          <h3 className="text-lg font-bold">Check Out Process</h3>
        </div>
        {currentStep > 0 ? (
          <Button
            variant={"outline"}
            size={"sm"}
            className="flex items-center gap-2 rounded-xl"
            onClick={onBack}
          >
            <ChevronLeft16Regular />
            Previous State
          </Button>
        ) : (
          <div />
        )}
      </div>
      <div className="flex items-center gap-4">
        {steps.map((step) => (
          <div
            className="flex items-center gap-4 cursor-pointer"
            key={step.key}
            onClick={() => {
              if (step.number <= currentStep + 1) {
                goToStep(step.number - 1);
              }
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className={clsx(
                  "w-6 h-6 rounded-full flex items-center justify-center",
                  {
                    "bg-gray-9": step.number === currentStep + 1,
                    "bg-green-600": step.number < currentStep + 1,
                    "bg-gray-300": step.number > currentStep + 1,
                  }
                )}
              >
                <p className="text-white text-xs">{step.number}</p>
              </div>
              <div className="flex items-center gap-2">
                <p
                  className={`${
                    step.number === currentStep + 1 ? "font-bold" : ""
                  } 
                ${
                  step.number < currentStep ? "text-green-600" : "text-gray-9"
                }`}
                >
                  {step.title}
                </p>
                <ChevronRight16Regular />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { StepNavigator };
