"use client";
import React, { useEffect, useState } from "react";
import { LoginModul } from "./loginModul";
import { PassengerFormSection } from "./passengerFormSection";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/app/(auth)/authProvider";
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

const passengersFormSchema = z
  .object({
    adults: z.array(
      z.object({
        passportName: z.string().min(1),
        passportFamilyName: z.string().min(1),
        birthday: z.string().min(1),
        gender: z.enum(["male", "female"]),
        passportCountry: z.string().min(1),
        email: z.string().email().optional().or(z.literal("")),
        phone: z.string().min(1).optional().or(z.literal("")),
      })
    ),
  })
  .superRefine((data, ctx) => {
    if (data.adults.length > 0) {
      const firstPassenger = data.adults[0];
      if (!firstPassenger.email) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email is required for the primary passenger",
          path: ["adults", 0, "email"],
        });
      }
      if (!firstPassenger.phone) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Phone is required for the primary passenger",
          path: ["adults", 0, "phone"],
        });
      }
    }
  });

interface PassengersFormProps {
  onSubmit: () => void;
  setFormMethods?: (methods: any) => void;
  travellers: [];
  open: boolean;
  setOpen: (open: boolean) => void;
}

function PassengersForm({
  onSubmit,
  setFormMethods,
  travellers,
  open,
  setOpen,
}: PassengersFormProps) {
  const { isLoggedIn } = useAuth();
  const methods = useForm<PassengersFormData>({
    resolver: zodResolver(passengersFormSchema),
    mode: "onChange",
    defaultValues: {
      adults: [],
    },
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
    const generatedFields = Array.from({ length: travellers.length }, () => ({
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
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Passengers</h3>
        {!isLoggedIn && <LoginModul open={open} setOpen={setOpen} />}
      </div>
      <div className="flex flex-col gap-8">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
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
