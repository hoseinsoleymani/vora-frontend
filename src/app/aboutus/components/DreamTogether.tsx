"use client";
import React from "react";
import Image from "next/image";
import { Airplane24Filled, BuildingHome24Filled, ContactCardRibbon24Filled, Sparkle24Filled } from "@fluentui/react-icons";

const dreamFeatures = [
  {
    icon: <Airplane24Filled className="text-2xl text-gray-700" />,
    title: "Buying Airplane Ticket",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    icon: <BuildingHome24Filled className="text-2xl text-gray-700" />,
    title: "Request Stay",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    icon: <ContactCardRibbon24Filled className="text-2xl text-gray-700" />,
    title: "Request UEA Visa",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    icon: <Sparkle24Filled className="text-2xl text-gray-700" />,
    title: "Advanced AI Features",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
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
        <h2 className="text-4xl font-black leading-tight mb-2 text-gray-800">Let's Dream,<br />Together!</h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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