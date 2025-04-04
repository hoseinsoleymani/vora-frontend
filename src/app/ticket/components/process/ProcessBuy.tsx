"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ArrowReset20Regular,
  Flow24Regular,
  IosChevronRight20Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui";

interface ProcessBuyProps {
  steps: string[];
  currentStep: number;
  searchParams: {
    origin?: string;
    destination?: string;
    departure_date?: string;
    adults?: string;
    selected_date?: string;
  };
}

const ProcessBuy = ({ steps, currentStep, searchParams }: ProcessBuyProps) => {
  const origin = searchParams.origin || "LON";
  const destination = searchParams.destination || "CHI";
  const departureDate = searchParams.departure_date || "2025-04-10";
  const selectedDate = searchParams.selected_date || departureDate;
  const adults = searchParams.adults || "1";

  return (
    <div className="p-5 bg-white rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-between space-x-4">
            <Flow24Regular />
            <span className="font-semibold text-xl">Buying Ticket Process</span>
        </div>
        <form action="/ticket" method="GET">
          <input type="hidden" name="origin" value={origin} />
          <input type="hidden" name="destination" value={destination} />
          <input type="hidden" name="departure_date" value={departureDate} />
          <input type="hidden" name="adults" value={adults} />
          <Button variant="outline" size="sm" type="submit">
              <ArrowReset20Regular />
              Change Departing Ticket
          </Button>
        </form>
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
              {index !== 0 && <IosChevronRight20Regular className=" mr-4" />}

              <form action="/ticket" method="GET" className="inline">
                <input type="hidden" name="origin" value={origin} />
                <input type="hidden" name="destination" value={destination} />
                <input type="hidden" name="departure_date" value={departureDate} />
                <input type="hidden" name="adults" value={adults} />
                <input type="hidden" name="selected_date" value={selectedDate} />
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

export { ProcessBuy };
