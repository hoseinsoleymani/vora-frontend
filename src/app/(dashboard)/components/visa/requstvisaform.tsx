import { useWizard } from "@/hooks";
import { Visa, VisaProgressBar } from "@/app/(dashboard)/components";
import { VisaInfo } from "./visainfo";

interface RequstVisaFormProps {
  token: string;
  passengerList: boolean;
  setPassengerList: () => void;
  getData : () => void
}

function RequstVisaForm({
  token,
  passengerList,
  setPassengerList,
  getData
}: RequstVisaFormProps) {
  const { currentStep, nextStep } = useWizard();
  const selectedStepMap = (selectedStep: number) => {
    const stepMap: Record<string, React.ReactNode> = {
      "0": (
        <div>
          <VisaInfo
            token={token}
            nextStep={nextStep}
            passengerList={passengerList}
            setPassengerList={setPassengerList}
            getData={getData}
          />
        </div>
      ),
      "1": <div>step-2</div>,
    };
    return stepMap[selectedStep.toString()];
  };
  return (
    <div>
      <VisaProgressBar currentStep={currentStep} />
      <div>{selectedStepMap(currentStep)}</div>
    </div>
  );
}

export { RequstVisaForm };
