import Image from "next/image";
import React from "react";
import Logo from "../../../../../public/img/Logo.png";
import { ServiceCard } from "@/app/(dashboard)/components";

const voraServices = [
  {
    title: "Book a Flight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Book Stay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Request UAE Visa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

function Dashboard() {
  return (
    <div className="mt-14">
      <h3 className="text-2xl font-bold">Dashboard</h3>
      <p className="font-300 text-gray-5 text-3xl mt-32 leading-15">
        Currently, There is nothing here to show,
        <br /> Try our services or AI features to plan your
        <br /> next Trip!
      </p>
      <div className="flex flex-col gap-3 mt-34">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" width={24} />
          <p className="text-lg font-bold">Vora Services</p>
        </div>
        <div className="flex items-center gap-2">
          {voraServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="i-fluent:sparkle-24-regular"></span>
          <p className="text-lg font-bold">AI Features</p>
        </div>
        <div className="flex items-center gap-2">
          {voraServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
