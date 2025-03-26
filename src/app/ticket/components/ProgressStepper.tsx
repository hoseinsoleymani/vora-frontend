import * as React from "react";
import { cn } from "@/lib/utils";
import { Flow24Regular, IosChevronRight20Regular } from "@fluentui/react-icons";

interface StepProgressProps {
  steps: string[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepProgress: React.FC<StepProgressProps> = ({
  steps,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Flow24Regular />
          <span className="font-semibold text-xl">Process</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setCurrentStep(index + 1)}
            className="flex items-center cursor-pointer space-x-2"
          >
            {index !== 0 && (
              <IosChevronRight20Regular className=" mr-4" />
            )}
            <div
              className={cn(
                "flex items-center justify-center",
                currentStep > index
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600",
                "h-8 w-8 rounded-full border-2 transition-all"
              )}
            >
              <span>{index + 1}</span>
            </div>
            <span
              className={cn(
                "text-sm font-medium",
                currentStep === index + 1 ? "text-black" : "text-gray-400"
              )}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { StepProgress };
