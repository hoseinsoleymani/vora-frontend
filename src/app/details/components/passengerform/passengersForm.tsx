"use client";
import React from "react";
import { PassengersHeader } from "./passengersHeader";
import { PassengerFormSection } from "./passengerFormSection";
import { FormProvider, useForm } from "react-hook-form";

interface PassengerData {
  passportName: string;
  passportFamilyName: string;
  birthday: string;
  gender: "male" | "female";
  passportCountry: string;
}

interface PassengersFormData {
  adults: PassengerData[];
  children: PassengerData[];
}

function PassengersForm() {
  const methods = useForm<PassengersFormData>({
    defaultValues: {
      adults: [{}, {}],
      children: [{}],
    },
  });

  const onSubmit = (data: PassengersFormData) => {
    console.log("Form submitted with data:", data);
    
  };

  return (
    <div className="flex flex-col">
      <PassengersHeader />
      <div className="flex flex-col gap-8">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <PassengerFormSection type="adult" index={0} isPrimary />
            <PassengerFormSection type="adult" index={1}  />
            <PassengerFormSection type="child" index={0}  />


            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Passenger Information
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export { PassengersForm };
