"use client";
import React from "react";
import Image from "next/image";
import { ContactHeroImage } from "./ContactHeroImage";

export function ContactHero() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row w-full gap-8 items-start justify-between">
        <div className="flex flex-col items-start min-w-[180px]">
          <div className="mb-2">
            <Image src="/img/Vora Logo.png" alt="VORA Logo" width={90} height={40} className="invert-0 brightness-0" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Support</h2>
        </div>
        <div className="flex-1 text-gray-700 leading-relaxed text-justify text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </section>
  );
} 