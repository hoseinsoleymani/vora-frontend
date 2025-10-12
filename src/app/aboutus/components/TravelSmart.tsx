"use client";
import React from "react";
import Image from "next/image";

const travelFeatures = [
  {
    icon: "/img/AI icon - based on budget.svg",
    title: "Flight Booking",
    desc: "At vora, airplane tickets are suggested based on your budget.We help you find and purchase the best possible flight at the lowest price that fits your financial capability",
  },
  {
    icon: "/img/AI icon - Planner.svg",
    title: "Destination Selection",
    desc: "Your travel destination is suggested according to your budget, interests, and preferred time. Simply enter your desired budget to receive the best economical and attractive options.",
  },
  {
    icon: "/img/AI icon - based on budget.svg",
    title: "Accommodation Selection",
    desc: "vora recommends the best accommodations based on your budget and taste. From luxury hotels to budget plans, everything is arranged for your comfort and satisfaction.",
  },
];

export function TravelSmart() {
  return (
    <section className="w-full flex flex-col items-center mb-12">
      <div className="w-full flex flex-col md:flex-row gap-20 items-start">
        <div className="flex-1 min-w-[260px] max-w-[340px]">
          <h2 className="text-4xl font-black leading-tight mb-2">Travel safe,<br />Travel Smart!</h2>
          <p className="text-gray-600 text-base leading-relaxed mt-4">
            vora, with smart planning, designs a precise trip tailored to your budget and calculates all travel costs completely and transparently.
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