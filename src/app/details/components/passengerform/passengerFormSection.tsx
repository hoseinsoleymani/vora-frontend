"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { ChevronDown24Regular } from "@fluentui/react-icons";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";


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

interface PassengerFormSectionProps {
  type: "adult" | "child";
  index: number;
  isPrimary?: boolean;
}

function PassengerFormSection({
  type,
  index,
  isPrimary,
}: PassengerFormSectionProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<PassengersFormData>();
  const arrayKey = type === "adult" ? "adults" : "children";

  countries.registerLocale(enLocale);
  const countryList = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => ({
    code,
    name,
  }));

  const getError = (field: keyof PassengerData) => {
    return errors[arrayKey]?.[index]?.[field];
  };

  return (
    <div className="border border-[#E0E0E0] rounded-lg p-4 mt-4">
      <div className="flex items-center gap-2">
        <h3 className="text-lg">
          {type === "adult" ? "Adult" : "Child"} {index + 1} information
        </h3>
        <p className="text-sm text-[#757575]">
          {isPrimary ? "Primary Passenger" : ""}
        </p>
      </div>
      <p className="text-[#757575] mt-1">
        Add the general information about the passenger
      </p>
      <div className="flex flex-col gap-2 w-full mt-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <Input
              className="text-sm w-full"
              size="lg"
              placeholder="Passport Name"
              {...register(`${arrayKey}.${index}.passportName` as const, {
                required: true,
              })}
            />
            {getError("passportName") && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Input
              className="text-sm w-full"
              size="lg"
              placeholder="Passport Family Name"
              {...register(`${arrayKey}.${index}.passportFamilyName` as const, {
                required: true,
              })}
            />
            {getError("passportFamilyName") && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <Input
              className="text-sm w-full"
              size="lg"
              placeholder="Birthday"
              {...register(`${arrayKey}.${index}.birthday` as const, {
                required: true,
              })}
            />
            {getError("birthday") && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name={`${arrayKey}.${index}.gender`}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger asChild>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-[#757575]">
                          Gender on ID
                        </span>
                        <SelectValue placeholder="Select" />
                      </div>
                      <ChevronDown24Regular />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {getError("gender") && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name={`${arrayKey}.${index}.passportCountry`}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger asChild>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-[#757575]">
                          Passport Country
                        </span>
                        <SelectValue placeholder="Select" />
                      </div>
                      <ChevronDown24Regular />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {countryList.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {getError("passportCountry") && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { PassengerFormSection };
