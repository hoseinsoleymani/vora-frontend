"use client";
import { useState } from "react";
import {
  NavMenue,
  Dashboard,
  Order,
  PasportInfo,
  VisaRequest,
} from "@/app/(dashboard)/components";
import { VisaProvider } from "@/hooks";

export type SectionType =
  | "Dashboard"
  | "Orders"
  | "Payment List"
  | "Cart"
  | "Passport Info"
  | "Request Visa";

function LayoutPanel({ token }: { token: string }) {
  const [section, setSection] = useState<SectionType>("Dashboard");

  const selectSectionMap = (section: SectionType) => {
    const sectionMap = {
      Dashboard: <Dashboard />,
      Orders: <Order token={token} />,
      "Payment List": <div>Payment</div>,
      Cart: <div>Cart</div>,
      "Passport Info": <PasportInfo token={token} />,
      "Request Visa": (
        <VisaProvider>
          <VisaRequest token={token} />
        </VisaProvider>
      ),
    };
    return sectionMap[section];
  };
  return (
    <div className="flex">
      <NavMenue section={section} setSection={setSection} token={token}/>
      <div className="w-6/7 ml-[16.666667%]">{selectSectionMap(section)}</div>
    </div>
  );
}

export { LayoutPanel };
