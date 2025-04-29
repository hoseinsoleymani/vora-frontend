import React from "react";
import Image from "next/image";
import Logo from "../../../../public/img/Logo.png";
import { SectionType } from "../dashboard/page";
import { Button } from "@/components/ui/button";

interface NavMenueProps {
  section: SectionType;
  setSection: (section: SectionType) => void;
}

function NavMenue({ section, setSection }: NavMenueProps) {
  const sectionList = [
    {
      icon: "i-fluent:home-24-filled",
      label: "Dashboard",
      active: true,
    },
    {
      icon: "i-fluent:task-list-square-24-regular",
      label: "Orders",
    },
    {
      icon: "i-fluent:receipt-money-24-regular",
      label: "Payment List",
    },
    {
      icon: "i-fluent:cart-24-regular",
      label: "Cart",
    },
    {
      icon: "i-fluent:slide-text-person-24-regular",
      label: "Passport Info",
    },
    {
      icon: "i-fluent:contact-card-ribbon-24-regular",
      label: "Request Visa",
    },
  ];

  return (
    <div className="w-1/7 fixed left-0 top-0 h-screen border-r border-gray-200">
      <div className="py-14 flex flex-col w-full h-full">
        <Image src={Logo} alt="Logo" className="mx-auto" />
        <div className="flex flex-col gap-2 mt-14 px-4 w-full">
          <ul className="flex flex-col gap-2 w-full cursor-pointer">
            {sectionList.map((item) => (
              <li
                className={`flex items-center gap-2  px-4 py-3 rounded-lg w-full transition-all duration-300 ${
                  item.label === section ? "bg-gray-900 text-white" : ""
                }`}
                key={item.label}
                onClick={() => setSection(item.label as SectionType)}
              >
                <span className={item.icon}></span>
                <span className="font-300">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto mb-4 px-4 w-full">
          <Button variant="ghost" className="w-full justify-start">
            <span className="i-fluent:person-24-regular"></span>
            <span className="font-300">Settings and Profile</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <span className="i-fluent:sign-out-24-regular"></span>
            <span className="font-300">Sign out</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { NavMenue };
