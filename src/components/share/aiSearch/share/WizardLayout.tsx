import { Button } from "@/components/ui";
import {
  ChevronLeft16Regular,
  ChevronRight16Regular,
  Search16Regular,
} from "@fluentui/react-icons";
import ProgressBar from "./progressBar";

interface WizardLayoutProps {
  currentStep: number;
  totalSteps: number;
  goToStep: (step: number) => void;
  onBack: () => void;
  onNext: () => void;
  children: React.ReactNode;
  isLastStep: boolean;
}

function WizardLayout({
  currentStep,
  totalSteps,
  goToStep,
  onBack,
  onNext,
  children,
  isLastStep,
}: WizardLayoutProps) {
  return (
    <div className="w-full">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        goToStep={goToStep}
      />
      <div className="flex items-center justify-between">
        <div>{children}</div>
        <div className="flex items-center gap-2 mt-15">
          <Button
            variant="outline"
            size="icon"
            className="mr-2"
            onClick={onBack}
          >
            <ChevronLeft16Regular />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="mr-2"
            onClick={onNext}
            disabled={currentStep === totalSteps}
          >
            {isLastStep ? <Search16Regular /> : <ChevronRight16Regular />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WizardLayout;
