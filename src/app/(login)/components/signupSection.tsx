import {
  CreateAccount,
  SignupUserInfo,
  SignupWizardLayout,
} from "@/app/(login)";
import { useWizard } from "@/hooks";
import { Dispatch, SetStateAction } from "react";

interface SignupSectionProps {
  setShowTabBar: Dispatch<SetStateAction<boolean>>;
}

function SignupSection({ setShowTabBar }: SignupSectionProps) {
  const { currentStep, nextStep, prevStep, goToStep, resetWizard } =
    useWizard();

  const handleFirstStepNext = () => {
    setShowTabBar(false);
    nextStep();
  };

  const handleBackToSignup = () => {
    setShowTabBar(true);
    prevStep();
  };

  const handleNextStep = () => {
    nextStep();
  };

  const handleCreateAccount = () => {
    console.log("create account");
  };

  const selectedStepMap = (selectedStep: number) => {
    const stepMap: Record<string, React.ReactNode> = {
      "0": <CreateAccount onClick={handleFirstStepNext} />,
      "1": <SignupUserInfo />,
      "2": <CreateAccount onClick={nextStep} />,
    };
    return stepMap[selectedStep.toString()];
  };

  return (
    <SignupWizardLayout
      currentStep={currentStep}
      totalSteps={3}
      handleBackToSignup={handleBackToSignup}
      handleNextStep={handleNextStep}
      handleCreateAccount={handleCreateAccount}
    >
      {selectedStepMap(currentStep)}
    </SignupWizardLayout>
  );
}

export { SignupSection };
