import { Button } from "@/components/ui";
import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <Button
          variant={"outline"}
          className="w-full bg-[#f9fafb] flex items-center justify-start "
        >
          Continue with Google
        </Button>
        <Button
          variant={"outline"}
          className="w-full bg-[#f9fafb] flex items-center justify-start "
        >
          Continue with Facebook
        </Button>
      </div>
    </div>
  );
}

export { LoginForm };
