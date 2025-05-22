"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";

export function ContactMap() {
  return (
    <section className="w-full flex flex-col items-center mb-10">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 flex flex-col gap-2">We are here,<span className="text-3xl">For you!</span></h2>
          <div className="text-gray-700 text-base mb-2">4th InterChange, Al Quoz Industrial Area, Al Barsha</div>
        </div>
        <div className="flex-[2] flex justify-center">
          <div className="w-full max-w-2xl rounded-[100px] overflow-hidden h-[220px] md:h-[260px] relative">
            <Image
              src="/img/map.png"
              alt="VORA Map"
              fill
              className="object-cover"
              priority
            />
            <Button  className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-black text-white rounded-full px-6 py-2 text-sm shadow-lg">Open in maps</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 