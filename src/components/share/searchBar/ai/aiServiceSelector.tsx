"use client";
import React, { useState } from "react";
import CalculateExpenses from "./calculateExpenses";
import TravelAssistPlanning from "./travelAssistPlanning";
import TravelBasedOnBudget from "./travelBasedOnBudget";
import AiServiceSelectorButtons from "./aiServiceSelectorButtons";
import { WizardProvider } from "@/hooks/useWizard";

export type ServiceType =
  | "travelAssist"
  | "travelBug"
  | "travelCalculate"
  | "defult";

const SERVICE_STEPS: Record<ServiceType, number> = {
  travelAssist: 6,
  travelBug: 3,
  travelCalculate: 6,
  defult: 1,
};

function AIServiceSelector() {
  const [selectedService, setSelectedService] = useState<ServiceType>("defult");

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
  };

  const resetSelection = () => {
    setSelectedService("defult");
  };

  const selectedServiceMap = (selectedService: ServiceType) => {
    const serviceMap = {
      travelAssist: <TravelAssistPlanning resetSelection={resetSelection} />,
      travelBug: <TravelBasedOnBudget resetSelection={resetSelection}/>,
      travelCalculate: <CalculateExpenses resetSelection={resetSelection}/>,
      defult: (
        <AiServiceSelectorButtons handleServiceSelect={handleServiceSelect} />
      ),
    };
    return serviceMap[selectedService];
  };

  return (
    <WizardProvider
      totalSteps={SERVICE_STEPS[selectedService]}
      initialStep={0}
      initialData={{ tripType: "one-way" }}
    >
      {selectedServiceMap(selectedService)}
    </WizardProvider>
  );
}

export default AIServiceSelector;
