"use client";
import React from "react";
import { Navbar, Footer } from "@/components/ui";
import { ContactHero, ContactStats, ContactQuick, ContactMap, ContactFAQ } from "./components";
import { ContactHeroImage } from "./components/ContactHeroImage";

export default function ContactUs() {
  return (
    <>
      <Navbar />
        <main className="container mx-auto py-10">
          <ContactHeroImage />
          <div className="flex flex-col gap-36 max-w-7xl mx-auto">
          <ContactHero />
          <ContactStats />
          <ContactQuick />
          <ContactMap />
          <ContactFAQ />
          </div>
        </main>
      <Footer />
    </>
  );
} 