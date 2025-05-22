import { Button } from "@/components/ui";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../actions/goolelogin";
import { useRouter } from "next/navigation";

function SocialLoginButtons() {
  const router = useRouter();

  const handleLoginSuccess = async (tokenResponse: any) => {
    const { access_token } = tokenResponse;

    if (!access_token) {
      console.error("No access_token received from Google.");
      return;
    }

    try {
      const result = await googleLogin(access_token);

      if (result.success) {
        
        router.push("/dashboard");
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
    <div className="flex flex-col gap-4 w-full">
      <Button
        variant={"outline"}
        className="w-full bg-[#f9fafb] flex items-center justify-start"
        onClick={() => login()}
      >
        Continue with Google
      </Button>
      <Button
        variant={"outline"}
        className="w-full bg-[#f9fafb] flex items-center justify-start"
        onClick={() => alert("Facebook login هنوز پیاده‌سازی نشده")}
      >
        Continue with Facebook
      </Button>
    </div>
  );
}

export { SocialLoginButtons };
