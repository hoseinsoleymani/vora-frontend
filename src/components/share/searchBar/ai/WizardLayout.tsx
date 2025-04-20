import { Button } from "@/components/ui";
import { ProgressBar } from "@/components/ui";

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
            <span className="i-fluent:chevron-left-16-regular text-2xl"></span>
          </Button>
          <Button
            variant="default"
            size="icon"
            className="mr-2"
            onClick={onNext}
            disabled={currentStep === totalSteps}
          >
            {isLastStep ? (
              <span className="i-fluent:search-16-regular text-2xl"></span>
            ) : (
              <span className="i-fluent:chevron-right-16-regular text-2xl"></span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WizardLayout;
