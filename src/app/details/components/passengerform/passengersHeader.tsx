"use client";

import { GoogleIcon, FaceBookIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PassengerForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

function PassengersHeader() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PassengerForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: PassengerForm) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-lg font-medium">Passengers</h3>
      <div className="flex items-center gap-4">
        <p>To use your personal Passbook</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"link"} className="text-[#4765B6]">
              Sign in
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sign in to your account</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex flex-col gap-2 w-full">
                <Button
                  variant={"outline"}
                  className="w-full flex items-center gap-2 justify-start rounded-lg"
                >
                  <GoogleIcon className="h-6 w-6" />
                  Continue with Google
                </Button>
                <Button
                  variant={"outline"}
                  className="w-full flex items-center gap-2 justify-start rounded-lg"
                >
                  <FaceBookIcon className="h-6 w-6" />
                  Continue with Facebook
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <hr className="w-full border-gray-300" />
              <span className="text-xs text-gray-500">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="email">Please enter your mail</Label>
                <Input
                  className="text-sm"
                  type="email"
                  id="email"
                  placeholder="Mail"
                  {...register("email")}
                />
                <span className="text-red-500 text-sm">
                  {errors.email?.message}
                </span>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="Password">Enter your password</Label>
                <Input
                  className="text-sm"
                  type="Password"
                  id="Password"
                  placeholder="Password"
                  {...register("password")}
                />
                <span className="text-red-500 text-sm">
                  {errors.password?.message}
                </span>
              </div>
              <DialogFooter>
                <Button type="submit" className="px-14 py-3 rounded-lg">
                  Sign in
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export { PassengersHeader };
