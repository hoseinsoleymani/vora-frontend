"use client";
import { ProcessComponent } from "@/components/share/ProcessComponent/ProcessComponent";

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
  const destination = searchParams.destination || "PAR";
  const departureDate = searchParams.departure_date || "2025-04-10";
  const selectedDate = searchParams.selected_date || departureDate;
  const adults = searchParams.adults || "1";

  const formData = {
    origin,
    destination,
    departure_date: departureDate,
    adults,
    selected_date: selectedDate
  };

  return (
    <ProcessComponent 
      steps={steps}
      currentStep={currentStep}
      title="Buying Ticket Process"
      resetButtonText="Change Departing Ticket"
      formAction="/ticket"
      formData={formData}
    />
  );
};

export { ProcessBuy }; 