"use client";
import React from "react";
import Image from "next/image";
import { Airplane24Filled, BuildingHome24Filled, ContactCardRibbon24Filled, Sparkle24Filled } from "@fluentui/react-icons";

const dreamFeatures = [
  {
    icon: <Airplane24Filled className="text-2xl text-gray-700" />,
    title: "Accommodation Requests",
    desc: "We take you to the heart of the best places to experience calmness and sweet memories during your travels.",
  },
  {
    icon: <BuildingHome24Filled className="text-2xl text-gray-700" />,
    title: "Flight Booking",
    desc: "We offer the best flights at the most suitable prices according to your budget, so you can start your trip worry-free.",
  },
  {
    icon: <ContactCardRibbon24Filled className="text-2xl text-gray-700" />,
    title: "Smart Features",
    desc: "vora, leveraging smart technologies, selects your trip precisely based on your budget, taste, and schedule",
  },
  {
    icon: <Sparkle24Filled className="text-2xl text-gray-700" />,
    title: "UAE Visa",
    desc: "vora provides complete and up-to-date UAE visa services, making the visa application process easy and fast for you.",
  },
];

export function DreamTogether() {
  return (
    <section className="w-full flex flex-col gap-20 md:flex-row items-center mb-12">
      <div className="flex-2 flex mb-8 md:mb-0">
        <div className="w-[380px] h-[520px] md:w-[420px] md:h-[700px] rounded-full overflow-hidden relative">
          <Image
            src="/img/Frame 1000002143.png"
            alt="Dream Together"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start max-w-xl w-full">
        <h2 className="text-4xl font-black leading-tight mb-2 text-gray-800">Enjoy a Delightful<br />Travel Experience with Us</h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          A journey that begins from the heart of your desires and continues with peace, excitement, and unforgettable memories.We don’t just create trips; we create moments you’ll always long for.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {dreamFeatures.map((feature, index) => (
            <div key={index} className="p-6 flex items-start gap-3 min-w-[220px]">
              <span className="mt-1">{feature.icon}</span>
              <div>
                <div className="font-bold text-lg mb-1 text-gray-800">{feature.title}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 