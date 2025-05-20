"use client";
import React, { useRef } from "react";
import { ChevronLeft24Filled, ChevronRight24Filled } from "@fluentui/react-icons";
import { TeamCard } from "./TeamCard";

const teamMembers = [
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
  { name: "John Johnson", desc: "Lorem ipsum dolor sit amet", img: "/img/Frame 1000002909.png" },
];

export function TeamSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 240;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-xl font-bold flex flex-col gap-2">Behind the <span className="text-2xl">Scenes</span></h2>
          <p className="text-gray-600 max-w-1/3 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 p-2 border flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Previous team members"
            type="button"
          >
            <ChevronLeft24Filled />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 p-2 border flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Next team members"
            type="button"
          >
            <ChevronRight24Filled />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar" aria-label="Team members slider">
        {teamMembers.map((teamMember, index) => (
          <TeamCard key={index} {...teamMember} />
        ))}
      </div>
    </section>
  );
} 