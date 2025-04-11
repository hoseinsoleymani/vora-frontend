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
  email?: string;
  phone?: string;
}

interface PassengersFormData {
  adults: PassengerData[];
}

interface PassengerFormSectionProps {
  index: number;
  isPrimary?: boolean;
}

function PassengerFormSection({ index, isPrimary }: PassengerFormSectionProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<PassengersFormData>();

  countries.registerLocale(enLocale);
  const countryList = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => ({
    code,
    name,
  }));

  const inputBaseName = `adults.${index}` as const;

  return (
    <div className="border border-[#E0E0E0] rounded-lg p-4 mt-4">
      <div className="flex items-center gap-2">
        <h3 className="text-lg">Adult {index + 1} information</h3>
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
              {...register(`${inputBaseName}.passportName`)}
              errorMessage={errors["adults"]?.[index]?.passportName?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              className="text-sm w-full"
              size="lg"
              placeholder="Passport Family Name"
              {...register(`${inputBaseName}.passportFamilyName`)}
              errorMessage={errors["adults"]?.[index]?.passportFamilyName?.message}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <Input
              className="text-sm w-full"
              size="lg"
              placeholder="Birthday"
              {...register(`${inputBaseName}.birthday`)}
              errorMessage={errors["adults"]?.[index]?.birthday?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name={`${inputBaseName}.gender`}
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
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name={`${inputBaseName}.passportCountry`}
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
          </div>
        </div>
        {isPrimary === true && (
          <div className="flex flex-col">
            <hr className="w-full border-gray-300 my-4" />
            <div className="flex flex-col gap-1">
              <h3>Contact information</h3>
              <p className="text-sm text-gray-5">
                Please fill the required info for receiving the ticket.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full mt-3">
              <div className="flex flex-col gap-2">
                <Input
                  className="text-sm w-full"
                  size="lg"
                  placeholder="Email"
                  {...register(`${inputBaseName}.email`)}
                  errorMessage={errors["adults"]?.[index]?.email?.message}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type="tel"
                  className="text-sm w-full"
                  size="lg"
                  placeholder="Phone number"
                  {...register(`${inputBaseName}.phone`)}
                  errorMessage={errors["adults"]?.[index]?.phone?.message}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { PassengerFormSection };
