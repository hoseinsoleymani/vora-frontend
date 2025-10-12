"use client";
import React, { useState } from "react";
import {
  FlightDetails,
  PriceSummary,
  PassengersForm,
  Payment,
  PassengersFormData,
  LoginModul,
  FlightDetail,
} from "@/app/details/components";
import { StepNavigator } from "@/components/ui/stepNavigator";
import { useWizard } from "@/hooks/useWizard";
import { FlightSegment } from "@/app/details/page";
import { useAuth } from "@/app/(auth)";
import { Navbar } from "@/components/ui";
import { useSearchParams } from "next/navigation";
interface PaymentLayoutProps {
  destination: string;
  from: string;
  flightItinerary: FlightSegment[];
  adults: number;
  totalPrice: number;
  travellers: [];
  departure_date: string;
  offerId: string;
  duration: string; 
  airlineNameFa: string;
}

function PaymentLayout({
  destination,
  from,
  flightItinerary,
  adults,
  totalPrice,
  travellers,
  departure_date,
  offerId,
  duration,
  airlineNameFa,
}: PaymentLayoutProps) {
  const {
    currentStep,
    totalSteps,
    data,
    nextStep,
    prevStep,
    setStepData,
    goToStep,
  } = useWizard();
  const [formMethods, setFormMethods] = React.useState<any>(null);
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const searchParams = useSearchParams();
const params = {
    origin: searchParams.get("origin") || "",
    destination: searchParams.get("destination") || "",
}
  const steps = [
    { title: "Review Trip", number: 1, key: "review-trip" },
    { title: "Passenger Info", number: 2, key: "passenger-info" },
    { title: "Payment", number: 3, key: "payment" },
  ];

  const handelPayment = () => {
    if (currentStep === 0) {
      const flightDetails = {
        origin: from,
        destination: destination,
        departure_date: departure_date,
        adults: adults,
        offerId: offerId,
      };
      setStepData("flight", flightDetails);
      nextStep();
    }
    if (currentStep === 1) {
      if (!isLoggedIn) {
        setOpen(true);
        return;
      }
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
      "0": (
        <FlightDetail flightDeparture={{
          from: params.origin,
          destination: params.destination,
          model: "Outbound",
        }} flightItinerary={flightItinerary} duration={duration} airlineNameFa={airlineNameFa}/>
      ),
      "1": (
        <PassengersForm
          onSubmit={() => handelPayment()}
          setFormMethods={setFormMethods}
          travellers={travellers}
          open={open}
          setOpen={setOpen}
        />
      ),
      "2": <Payment />,
    };
    return stepMap[currentStep.toString()];
  };

  return (
    <div className="container mx-auto  ">
      <Navbar />
      <div className="flex px-4 py-6 gap-6">
        <div className="w-2/3 flex flex-col gap-6">
          <StepNavigator
            currentStep={currentStep}
            totalSteps={totalSteps}
            onBack={prevStep}
            steps={steps}
            goToStep={goToStep}
          />
          <div className="bg-white p-6 shadow-lg rounded-2xl h-fit">
            {selectedStepMap()}
          </div>
        </div>
        <div className="w-1/3 bg-white p-6 shadow-lg rounded-2xl h-fit">
          <PriceSummary
            nextStep={handelPayment}
            destination={destination}
            from={from}
            adults={adults}
            totalPrice={totalPrice}
            travellers={travellers}
          />
        </div>
      </div>
    </div>
  );
}

export { PaymentLayout };
