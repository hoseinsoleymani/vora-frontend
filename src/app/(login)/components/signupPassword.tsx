import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    password2: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });

interface FormData {
  password: string;
  password2: string;
}

interface SignupPasswordProps {
  onSubmit: (data: FormData) => void;
  formRef?: React.RefObject<HTMLFormElement | null>;
}

function SignupPassword({ onSubmit, formRef }: SignupPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <Input
          size="lg"
          placeholder="Set a password"
          {...register("password")}
          errorMessage={errors.password?.message}
        />
        <Input
          size="lg"
          placeholder="Confirm password"
          {...register("password2")}
          errorMessage={errors.password2?.message}
        />
      </form>
      <div className="flex flex-col mt-4 gap-4 border border-gray-3 rounded-lg p-4 items-start">
        <div className="flex items-center gap-4">
          <span className="i-fluent:info-24-filled"></span>
          <p className="text-gray-7 text-sm font-300">
            Please follow the guidelines for your password
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="i-fluent:checkmark-12-regular"></span>
            <p className="text-sm font-300 text-gray-7">
              Your password must be at least 8 characters
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="i-fluent:checkmark-12-regular"></span>
            <p className="text-sm font-300 text-gray-7">
              Please use characters and numbers.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="i-fluent:checkmark-12-regular"></span>
            <p className="text-sm font-300 text-gray-7">
              I will write the rest of it later in documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SignupPassword };
