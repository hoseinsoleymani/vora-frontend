import React from "react";
import { ContactInfo, PassengersInfo, DetailsSectionProps } from "@/app/(dashboard)";

function PassengerDetails({
  email,
  phoneNumber,
  travelers_data,
}: DetailsSectionProps) {
  return (
    <div>
      <ContactInfo email={email} phoneNumber={phoneNumber} />
      <PassengersInfo travelers_data={travelers_data} isPrimary={true} />
    </div>
  );
}

export { PassengerDetails };
