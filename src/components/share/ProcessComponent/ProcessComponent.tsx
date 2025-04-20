import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProcessComponentProps {
  steps: string[];
  currentStep: number;
  title?: string;
  resetButtonText?: string;
  formAction: string;
  formData: Record<string, string>;
  onStepClick?: (step: number) => void;
}

const ProcessComponent = ({ 
  steps, 
  currentStep, 
  title = "Process Steps", 
  resetButtonText = "Reset",
  formAction,
  formData,
  onStepClick
}: ProcessComponentProps) => {
  return (
    <div className="p-5 bg-white rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-between space-x-4">
            <span className="i-fluent:flow-24-regular text-gray-500 text-2xl"></span>
            <span className="font-semibold text-xl">{title}</span>
        </div>
        {resetButtonText && (
          <form action={formAction} method="GET">
            {Object.entries(formData).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
            <Button variant="outline" size="sm" type="submit">
                <span className="i-fluent:arrow-reset-20-regular text-gray-500 text-xl mr-2"></span>
                {resetButtonText}
            </Button>
          </form>
        )}
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          return (
            <div
              key={index}
              className="flex items-center space-x-2"
            >
              {index !== 0 && <span className="i-fluent:ios-chevron-right-20-regular text-gray-500 text-xl mr-4"></span>}

              <form action={formAction} method="GET" className="inline">
                {Object.entries(formData).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}
                <input type="hidden" name="current_step" value={stepNumber.toString()} />
                
                <Button 
                  type="submit"
                  variant="ghost"
                  className={cn(
                    "flex items-center justify-center",
                    currentStep > index
                      ? "bg-black text-white"
                      : "bg-gray-300 text-gray-600",
                    "h-8 w-8 rounded-full border-2 transition-all p-0"
                  )}
                  onClick={() => onStepClick && onStepClick(stepNumber)}
                >
                  <span>{stepNumber}</span>
                </Button>
              </form>
              
              <span
                className={cn(
                  "text-sm font-medium",
                  currentStep === stepNumber ? "text-black" : "text-gray-400"
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ProcessComponent }; 