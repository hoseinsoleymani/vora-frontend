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
import { useAuth } from "@/app/(auth)";
import { Login } from "@/app/(login)";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "@/app/(login)/actions/goolelogin";

interface PassengerForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface LoginModulProps { 
  open: boolean;
  setOpen: (open: boolean) => void;
}

function LoginModul({ open, setOpen }: LoginModulProps) {
  const { setIsLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PassengerForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: PassengerForm) => {
    const response = await Login(data);
    if (response.success) {
      setIsLoggedIn(true);
    }
  };

  const handleLoginSuccess = async (tokenResponse: any) => {
    const { access_token } = tokenResponse;

    if (!access_token) {
      console.error("No access_token received from Google.");
      return;
    }

    try {
      const result = await googleLogin(access_token);

      if (result.success) {
        
      } else {
        console.error("Login failed:", result);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: (error) => {
      console.error("Google login error:", error);
      
    },
    flow: "implicit",
  });

  return (
    <div className="flex items-center gap-4">
      <p>To use your personal Passbook</p>
      <Dialog open={open} onOpenChange={setOpen}>
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
                onClick={() => login()}
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
  );
}

export { LoginModul };
