"use client";
import React from "react";
import Image from "next/image";

export function ContactHeroImage() {
  return (
    <div className="w-full mx-auto rounded-[100px] overflow-hidden h-[280px] md:h-[340px] relative mb-14">
      <Image
        src="/img/Frame 1000002894.png"
        alt="VORA Support Hero"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
} 