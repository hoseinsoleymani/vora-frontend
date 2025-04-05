interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  goToStep: (step: number) => void;
  size?: "small" | "large";
}

function ProgressBar({
  currentStep,
  totalSteps,
  goToStep,
  size = "small",
}: ProgressBarProps) {
  const height = size === "small" ? "h-1" : "h-2";
  const stepWidth = Math.floor(320 / totalSteps);

  return (
    <div className="flex items-center gap-3 w-[320px]">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => goToStep(index)}
        >
          <div
            className={`${height} rounded-full ${
              index <= currentStep ? "bg-black" : "border border-black"
            }`}
            style={{ width: `${stepWidth}px` }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export { ProgressBar };
