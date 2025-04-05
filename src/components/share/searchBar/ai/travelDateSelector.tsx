import React from "react";
import StepContainer from "./stepContainer";
import { useWizard } from "@/hooks";
import { DatePicker, ReturnTicket } from "@/components/share/searchBar";
function TravelDateSelector() {
  const { data, setStepData } = useWizard();
  console.log(data);

  return (
    <StepContainer title="When do you want to travel?">
      <div className="flex gap-4">
        <DatePicker
          date={data.travelDate}
          setDate={(date: Date | undefined) => setStepData("travelDate", date)}
        />
        <ReturnTicket
          returnDate={data.returnDate}
          setReturnDate={(returnDate: Date | undefined) =>
            setStepData("returnDate", returnDate)
          }
        />
      </div>
    </StepContainer>
  );
}

export default TravelDateSelector;
