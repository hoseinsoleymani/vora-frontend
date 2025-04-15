import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  phoneCode: z.string().min(1, { message: "Phone code is required" }),
});

type FormData = z.infer<typeof formSchema>;

function SignupUserInfo() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneCode: "+98",
    },
  });

  return (
    <form action="" className="flex flex-col gap-2 mt-4 w-full max-w-full">
      <div className="flex flex-col gap-2 w-full">
        <Input
          size={"lg"}
          placeholder="Name and Family name"
          {...register("name")}
          errorMessage={errors.name?.message}
        />
        <Input
          size={"lg"}
          placeholder="Email"
          {...register("email")}
          errorMessage={errors.email?.message}
        />
        <div className="flex items-center gap-2 w-full">
          <div className="w-1/3">
            <Controller
              name="phoneCode"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-13">
                    <SelectValue placeholder="Phone Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Popular</SelectLabel>
                      <SelectItem value="+98">Iran (+98)</SelectItem>
                      <SelectItem value="+1">USA/Canada (+1)</SelectItem>
                      <SelectItem value="+44">UK (+44)</SelectItem>
                      <SelectItem value="+49">Germany (+49)</SelectItem>
                      <SelectItem value="+971">UAE (+971)</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Other Countries</SelectLabel>
                      <SelectItem value="+33">France (+33)</SelectItem>
                      <SelectItem value="+90">Turkey (+90)</SelectItem>
                      <SelectItem value="+91">India (+91)</SelectItem>
                      <SelectItem value="+86">China (+86)</SelectItem>
                      <SelectItem value="+81">Japan (+81)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="w-full">
            <Input
              size={"lg"}
              placeholder="Phone Number"
              className="w-full"
              {...register("phoneNumber")}
              errorMessage={errors.phoneNumber?.message}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export { SignupUserInfo };
