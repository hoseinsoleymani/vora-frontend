import React from "react";
import StepContainer from "./stepContainer";
import { useWizard } from "@/hooks";
import DatePicker from "@/components/share/airplaneSearch/date/datePicker";
import ReturnTicket from "@/components/share/airplaneSearch/returnTicket/returnTicket";
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
