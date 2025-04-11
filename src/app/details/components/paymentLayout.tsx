"use client";
import React from "react";
import {
  FlightDetails,
  PriceSummary,
  PassengersForm,
  Payment,
  PassengersFormData,
} from "@/app/details/components";
import { StepNavigator } from "@/components/ui/stepNavigator";
import { useWizard } from "@/hooks/useWizard";

function PaymentLayout() {
  const {
    currentStep,
    totalSteps,
    data,
    nextStep,
    prevStep,
    setStepData,
    goToStep,
    resetWizard,
  } = useWizard();
  const [formMethods, setFormMethods] = React.useState<any>(null);

  const steps = [
    { title: "Review Trip", number: 1, key: "review-trip" },
    { title: "Passenger Info", number: 2, key: "passenger-info" },
    { title: "Payment", number: 3, key: "payment" },
  ];

  const handelPayment = () => {
    if (currentStep === 1) {
      if (formMethods) {
        formMethods.handleSubmit((passengers: PassengersFormData) => {
          setStepData("passengers", passengers);
          console.log(data);
          nextStep();
        })();
      }
    } else {
      nextStep();
    }
  };

  const selectedStepMap = () => {
    const stepMap: Record<string, React.ReactNode> = {
      "0": <FlightDetails />,
      "1": (
        <PassengersForm
          onSubmit={() => handelPayment()}
          setFormMethods={setFormMethods}
        />
      ),
      "2": <Payment />,
    };
    return stepMap[currentStep.toString()];
  };

  return (
    <div className="container mx-auto px-4 py-6 gap-6 flex">
      <div className="w-2/3 flex flex-col gap-6">
        <StepNavigator
          currentStep={currentStep}
          totalSteps={totalSteps}
          onBack={prevStep}
          steps={steps}
          goToStep={goToStep}
        />
        <div className="bg-white px-12 py-8 shadow-lg rounded-2xl h-fit">
          {selectedStepMap()}
        </div>
      </div>
      <div className="w-1/3 bg-white p-6 shadow-lg rounded-2xl h-fit">
        <PriceSummary nextStep={handelPayment} />
      </div>
    </div>
  );
}

export { PaymentLayout };
