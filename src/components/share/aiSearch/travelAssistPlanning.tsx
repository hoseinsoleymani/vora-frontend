import { useWizard } from "@/hooks";
import FightSearchBar from "./share/fightSearchBar";
import Budget from "./share/budget";
import Passengers from "./share/passengers";
import TravelModelSelector from "./share/travelModelSelector";
import StayOptionPicker from "./share/stayOptionPicker";
import TravelDateSelector from "./share/travelDateSelector";
import WizardLayout from "./share/WizardLayout";

interface TravelAssistPlanningProps {
  resetSelection?: () => void;
}

function TravelAssistPlanning({ resetSelection }: TravelAssistPlanningProps) {
  const { currentStep, totalSteps, nextStep, prevStep, goToStep, data } =
    useWizard();

  const handleBackClick = () => {
    if (currentStep === 0) {
      if (resetSelection) {
        resetSelection();
      }
    } else {
      prevStep();
    }
  };

  const handleSearch = async () => {
    try {
      // Here you can implement the API call to send data to backend
      console.log("Sending data to backend:", data);
      // Example API call:
      // const response = await fetch('/api/travel-search', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      // const result = await response.json();
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const selectWizardFromContentMap = () => {
    const wizardFromContentMap: Record<string, React.ReactNode> = {
      "0": <FightSearchBar />,
      "1": <Budget />,
      "2": <Passengers />,
      "3": <TravelModelSelector />,
      "4": <StayOptionPicker />,
      "5": <TravelDateSelector />,
    };
    return wizardFromContentMap[currentStep.toString()];
  };

  const isLastStep = currentStep === totalSteps - 1;

  return (
    <WizardLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      goToStep={goToStep}
      onBack={handleBackClick}
      onNext={isLastStep ? handleSearch : nextStep}
      isLastStep={isLastStep}
    >
      {selectWizardFromContentMap()}
    </WizardLayout>
  );
}

export default TravelAssistPlanning;
