"use client";
import React from "react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className=" container mx-auto flex flex-col items-center mb-10 mt-7">
      <div className="w-full rounded-[100px] overflow-hidden h-[280px] md:h-[340px] relative mb-8">
        <Image
          src="/img/hero-about.png"
          alt="About Vora Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
} 