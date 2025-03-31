interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  goToStep: (step: number) => void;
}

function ProgressBar({ currentStep, totalSteps, goToStep }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => goToStep(index)}
        >
          <div
            className={`w-10 h-1 rounded-full ${
              index <= currentStep ? "bg-black" : "border border-black"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
