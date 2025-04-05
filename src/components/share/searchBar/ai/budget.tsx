import React, { useState, useEffect } from "react";
import { useWizard } from "@/hooks";
import StepContainer from "./stepContainer";

function Budget() {
  const { data, setStepData } = useWizard();
  const [active, setActive] = useState(!!data.budget);

  useEffect(() => {
    if (data.budget) {
      setActive(true);
    }
  }, [data.budget]);

  const handleInputFocus = () => {
    setActive(true);
  };

  const handleInputBlur = () => {
    if (data.budget === "") {
      setActive(false);
    }
  };

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue) {
      return new Intl.NumberFormat().format(parseInt(numericValue));
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    setStepData("budget", value);
  };

  return (
    <StepContainer title="What's your budget?">
      <div className="flex items-center gap-4">
        <h3 className="font-bold text-sm">Enter your Budget Amount</h3>
        <div className="flex relative ">
          <label
            htmlFor="budget"
            className={`absolute ${
              active ? "top-2 text-xs" : "top-7 text-sm"
            } left-3 text-sm text-gray-500 transform -translate-y-1/2 transition-all duration-300`}
          >
            Budget
          </label>
          <div
            className={`flex items-center px-3 py-4 rounded-md border ${
              active ? "border-gray-500" : "border-gray-300"
            } w-full`}
          >
            <span
              className={`mr-1 text-gray-500 transition-opacity duration-300 ease-in-out text-sm ${
                !active || data.budget === "" ? "opacity-0" : "opacity-100"
              }`}
            >
              $
            </span>
            <input
              className="outline-none text-sm bg-transparent w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="text"
              value={formatAmount(data.budget || "")}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
        </div>
      </div>
    </StepContainer>
  );
}

export default Budget;
