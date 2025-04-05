import React, { useEffect, useState } from "react";

import { useWizard } from "@/hooks";
import StepContainer from "./stepContainer";
import TravelersContent from "../share/travelers/travelersContent";

function Passengers() {
  const { data, setStepData } = useWizard();
  console.log(data);

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const setPassengers = () => {
    setStepData("adultCount", adultCount);
    setStepData("childCount", childCount);
    setStepData("infantCount", infantCount);
  };

  useEffect(() => {
    setPassengers();
  }, [adultCount, childCount, infantCount]);

  return (
    <StepContainer title="How many travelers?">
      <div className="flex items-center gap-4">
        <TravelersContent
          adultCount={adultCount}
          setAdultCount={(count: number) => setAdultCount(count)}
          childCount={childCount}
          setChildCount={(count: number) => setChildCount(count)}
          infantCount={infantCount}
          setInfantCount={(count: number) => setInfantCount(count)}
          layout="horizontal"
          spacing="wide"
        />
      </div>
    </StepContainer>
  );
}

export default Passengers;
