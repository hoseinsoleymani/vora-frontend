import { useWizard } from "@/hooks";
import StepContainer from "./stepContainer";
import {
  Dismiss12Filled,
  SelectAllOn16Regular,
  BuildingSkyscraper16Regular,
  Home16Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";

type StayOptionType = "hotel" | "accommodation" | "noDifference" | "noStay";

function StayOptionPicker() {
  const { data, setStepData } = useWizard();
  const options: {
    label: string;
    value: StayOptionType;
    icon: React.ReactNode;
  }[] = [
    { label: "Hotel", value: "hotel", icon: <BuildingSkyscraper16Regular /> },
    { label: "Accommodation", value: "accommodation", icon: <Home16Regular /> },
    {
      label: "No difference",
      value: "noDifference",
      icon: <SelectAllOn16Regular />,
    },
    { label: "Don't suggest stay", value: "noStay", icon: <Dismiss12Filled /> },
  ];
  return (
    <StepContainer title="What sort of stay do you prefer?">
      <div className="flex gap-4">
        {options.map(({ label, value, icon }) => (
          <Button
            key={value}
            className={`rounded-lg py-4 px-4 font-medium flex justify-start w-[210px] transition-all 
              ${
                data.travelModel === value
                  ? "bg-gray-900 text-white hover:bg-gray-900 hover:text-white"
                  : "bg-white border border-gray-300"
              }`}
            size={"lg"}
            variant={"outline"}
            onClick={() => setStepData("travelModel", value)}
          >
            {icon}
            {label}
          </Button>
        ))}
      </div>
    </StepContainer>
  );
}

export default StayOptionPicker;
