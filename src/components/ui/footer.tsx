import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import VoroLogo from "../../../public/img/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative max-w-7xl mx-auto my-10 mt-20 rounded-3xl overflow-hidden shadow-sm bg-gradient-to-tr from-[#f6f6f6] to-[#fafafa] py-8 flex items-center justify-between px-27 ">
      <div className="absolute -top-60 -left-1 w-1/2 h-[600px] bg-gray-700 opacity-10 rotate-[-45deg] rounded-3xl pointer-events-none z-0" />
      <div className="flex flex-col gap-4">
        <Image src={VoroLogo} alt="Voro Logo" width={100} height={100} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex items-center gap-18">
        <ul className="flex flex-col gap-3">
          <li className="text-lg font-bold">Services</li>
          <div className="flex flex-col gap-2 font-300 text-[#212121]">
            <li>
              <Link href="/hotels">Reserve Stay</Link>
            </li>
            <li>
              <Link href="/tickets">Book Airplane Ticket</Link>
            </li>
            <li>UEA Visa</li>
          </div>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="text-lg font-bold">Smart Trip</li>
          <div className="flex flex-col gap-2 font-300 text-[#212121]">
            <li>Trip Planner</li>
            <li>Travel On Budget</li>
            <li>Price Calculator</li>
          </div>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="text-lg font-bold">Services</li>
          <div className="flex flex-col gap-2 font-300 text-[#212121]">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>Blogs</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
