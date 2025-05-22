"use client";
import React from "react";
import { Footer, Navbar } from "@/components/ui";
import { AboutHero, AboutInfo, TravelSmart, DreamTogether, TeamSlider } from "./components";

export default function AboutUs() {
  return (
    <>
      <Navbar />
        <main >
          <AboutHero />
          <div className="flex flex-col gap-36 max-w-7xl mx-auto">
            <AboutInfo />
            <TravelSmart />
            <DreamTogether />
            <TeamSlider />
          </div>
        </main>
      <Footer />
    </>
  );
} 