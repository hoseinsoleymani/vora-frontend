import { Button } from "@/components/ui";
import { useState } from "react";
import {
  PassengerDetails,
  DetailsTicket,
  flightOrder,
} from "@/app/(dashboard)/components";

type ActiveTab = "Ticket Details" | "Passenger Details";

export interface DetailsSectionProps {
  email: string;
  phoneNumber: string;
  travelers_data: Array<{
    contact: {
      emailAddress: string;
      phones: Array<{
        countryCallingCode: string;
        number: string;
      }>;
    };
    documents: Array<{
      issuanceCountry: string;
    }>;
    gender: string;
    name: {
      firstName: string;
      lastName: string;
    };
    dateOfBirth: string;
  }>;
  flightOrder?: flightOrder;
}

function DetailsSection({
  email,
  phoneNumber,
  travelers_data,
  flightOrder,
}: DetailsSectionProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("Ticket Details");

  const selectTabMap = (tab: ActiveTab) => {
    const tabMap = {
      "Ticket Details": <DetailsTicket flightOrder={flightOrder} />,
      "Passenger Details": (
        <PassengerDetails
          email={email}
          phoneNumber={phoneNumber}
          travelers_data={travelers_data}
        />
      ),
    };
    return tabMap[tab];
  };

  return (
    <div className="mt-10">
      <div className="flex items-center gap-8 border-b border-gray-2 ">
        <Button
          variant={"link"}
          onClick={() => setActiveTab("Ticket Details")}
          className={`${
            activeTab === "Ticket Details"
              ? "text-blue-500 border-b-1 border-blue-500 pb-3"
              : ""
          }`}
        >
          Ticket Details
        </Button>
        <Button
          variant={"link"}
          onClick={() => setActiveTab("Passenger Details")}
          className={`${
            activeTab === "Passenger Details"
              ? "text-blue-500 border-b-1 border-blue-500 pb-3"
              : ""
          }`}
        >
          Passenger Details
        </Button>
      </div>
      <div className="mt-4">{selectTabMap(activeTab)}</div>
    </div>
  );
}

export { DetailsSection };
