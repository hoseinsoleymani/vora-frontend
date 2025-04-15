"use client";
import { Button } from "@/components/ui";
import {
  ChevronLeft16Regular,
  ChevronRight16Regular,
  Signature16Regular,
} from "@fluentui/react-icons";
import { SignupProgressBar } from "./signupProgressBar";

interface SignupWizardLayoutProps {
  currentStep: number;
  totalSteps: number;
  children: React.ReactNode;
  handleBackToSignup: () => void;
  handleNextStep: () => void;
  handleCreateAccount: () => void;
}

function SignupWizardLayout({
  currentStep,
  children,
  handleBackToSignup,
  handleNextStep,
  handleCreateAccount,
}: SignupWizardLayoutProps) {
  return (
    <div className="flex flex-col">
      {currentStep !== 0 && (
        <div className="flex flex-col gap-6 w-full items-center">
          <SignupProgressBar currentStep={currentStep} />
        </div>
      )}
      {currentStep === 1 && (
        <p className="text-justify mt-10">
          Please provide the requested information and advance to the next step
          of creating your account
        </p>
      )}
      {currentStep === 2 && (
        <p className="text-justify mt-10">
          Please provide a well secured password for the safety of your account
          and advance to your personal dashboard.
        </p>
      )}
      <div className="mt-4">{children}</div>
      <div className="mt-48 flex items-center justify-between">
        {currentStep === 1 && (
          <Button
            variant={"link"}
            className="hover:underline text-gray-5"
            onClick={handleBackToSignup}
          >
            Back to Sign up
          </Button>
        )}
        {currentStep === 2 && (
          <Button
            variant={"outline"}
            size={"sm"}
            onClick={handleBackToSignup}
            className="flex items-center gap-2"
          >
            <ChevronLeft16Regular />
            Previous Step
          </Button>
        )}
        {currentStep === 1 && (
          <Button
            variant={"outline"}
            size={"sm"}
            onClick={handleNextStep}
            className="flex items-center gap-2 bg-[#f9fafb] ___"
          >
            Next Step
            <ChevronRight16Regular />
          </Button>
        )}
        {currentStep === 2 && (
          <Button
            variant={"default"}
            size={"sm"}
            onClick={handleCreateAccount}
            className="flex items-center gap-2 px-10 py-3"
          >
            Sign Up
            <Signature16Regular />
          </Button>
        )}
      </div>
    </div>
  );
}

export { SignupWizardLayout };
