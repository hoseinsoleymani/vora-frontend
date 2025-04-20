import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login } from "../actions/auth";
import { useRouter } from "next/navigation";
type FormLogin = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function FormLogin() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormLogin>({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data: FormLogin) => {
    const response = await Login(data);
    if (response.success) {
      reset();
      router.push("/");
    }
  };

  return (
    <form
      className="mt-4 flex flex-col gap-2 h-[300px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 flex-grow">
        <Input
          size="lg"
          placeholder="Mail"
          label="Enter your mail"
          {...register("email")}
          errorMessage={errors?.email?.message}
        />
        <Input
          size="lg"
          placeholder="password"
          label="Enter your password"
          {...register("password")}
          errorMessage={errors?.password?.message}
          type="password"
        />
      </div>
      <div className="flex justify-end items-center mt-auto">
        <Button size="sm" className="px-10 py-3" type="submit">
          Sign in
        </Button>
      </div>
    </form>
  );
}
export { FormLogin };
