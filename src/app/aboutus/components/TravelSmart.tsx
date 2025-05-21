"use client";
import React from "react";
import Image from "next/image";

const travelFeatures = [
  {
    icon: "/img/AI icon - based on budget.svg",
    title: "Travel Planner",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet",
  },
  {
    icon: "/img/AI icon - Planner.svg",
    title: "Travel based on Budget",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet",
  },
  {
    icon: "/img/AI icon - based on budget.svg",
    title: "Budget Calculator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet",
  },
];

export function TravelSmart() {
  return (
    <section className="w-full flex flex-col items-center mb-12">
      <div className="w-full flex flex-col md:flex-row gap-20 items-start">
        <div className="flex-1 min-w-[260px] max-w-[340px]">
          <h2 className="text-4xl font-black leading-tight mb-2">Travel safe,<br />Travel Smart!</h2>
          <p className="text-gray-600 text-base leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex-[2] flex flex-col gap-10">
          {travelFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-5">
              <Image src={feature.icon} alt={feature.title} width={56} height={56} className="min-w-[56px]" />
              <div>
                <div className="font-bold text-xl mb-1 text-gray-700">{feature.title}</div>
                <div className="text-gray-600 text-base leading-relaxed">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 