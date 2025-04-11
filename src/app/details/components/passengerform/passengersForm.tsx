"use client";
import React, { useEffect } from "react";
import { PassengersHeader } from "./passengersHeader";
import { PassengerFormSection } from "./passengerFormSection";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface PassengerData {
  passportName: string;
  passportFamilyName: string;
  birthday: string;
  gender: "male" | "female";
  passportCountry: string;
  email?: string;
  phone?: string;
}

export interface PassengersFormData {
  adults: PassengerData[];
}
 

const passengersFormSchema = z.object({
  adults: z.array(
    z.object({
      passportName: z.string().min(1),
      passportFamilyName: z.string().min(1),
      birthday: z.string().min(1),
      gender: z.enum(["male", "female"]),
      passportCountry: z.string().min(1),
      email: z.string().email().optional(),
      phone: z.string().min(1).optional(),
    })
  ),
  children: z
    .array(
      z.object({
        passportName: z.string().min(1),
        passportFamilyName: z.string().min(1),
        birthday: z.string().min(1),
        gender: z.enum(["male", "female"]),
        passportCountry: z.string().min(1),
        email: z.string().email().optional(),
        phone: z.string().min(1).optional(),
      })
    )
    .default([]),
});

interface PassengersFormProps {
  onSubmit: () => void;
  setFormMethods?: (methods: any) => void;
}

function PassengersForm({ onSubmit, setFormMethods }: PassengersFormProps) {
  const methods = useForm<PassengersFormData>({
    resolver: zodResolver(passengersFormSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (setFormMethods) {
      setFormMethods(methods);
    }
  }, [methods, setFormMethods]);

  const { fields, append, replace } = useFieldArray({
    control: methods.control,
    name: "adults",
  });

  useEffect(() => {
    const generatedFields = Array.from({ length: 2 }, () => ({
      passportName: "",
      passportFamilyName: "",
      birthday: "",
      gender: "male" as "male" | "female",
      passportCountry: "",
      email: "",
      phone: "",
    }));
    replace(generatedFields);
  }, []);

  return (
    <div className="flex flex-col">
      <PassengersHeader />
      <div className="flex flex-col gap-8">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-8">
            {fields.map((field, index) => (
              <PassengerFormSection
                key={field.id}
                index={index}
                isPrimary={index === 0}
              />
            ))}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export { PassengersForm };
