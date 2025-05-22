"use client";
import React from "react";

const statistics = [
  { value: "All time 24/7", label: "Support" },
  { value: "100 + Airlines", label: "Supported" },
  { value: "More than 20 years", label: "of experience" },
  { value: "Less than a minute", label: "Response time" },
];

export function ContactStats() {
  return (
    <section className="w-full flex flex-col items-center mb-10">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        {statistics.map((statistic, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="text-lg font-bold mb-1">{statistic.value}</div>
            <div className="text-gray-600 text-base">{statistic.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 