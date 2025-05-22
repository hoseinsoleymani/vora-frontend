"use client";
import React from "react";
import Image from "next/image";

const infoCards = [
  { title: "20 +", desc: "Years of experience", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet" },
  { title: "20 +", desc: "Years of experience", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet" },
  { title: "20 +", desc: "Years of experience", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet" },
];

export function AboutInfo() {
  return (
    <section className="w-full flex flex-col items-center mb-12">
      <div className="w-full flex flex-col md:flex-row gap-13 items-start mb-10">
        <div className="flex flex-col items-start min-w-[180px]">
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <div className="mb-2">
            <Image src="/img/Vora Logo.png" alt="VORA Logo" width={90} height={40} className="invert-0 brightness-0" />
          </div>
        </div>
        <div className="flex-1 text-gray-700 leading-relaxed text-justify text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
        {infoCards.map((infoCard, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 flex-1 min-w-[220px]"
          >
            <div className="text-3xl font-bold mb-2">{infoCard.title}</div>
            <div className="text-gray-700 font-medium mb-2">{infoCard.desc}</div>
            <div className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 