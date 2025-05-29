import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative max-w-7xl mx-auto my-10 rounded-3xl overflow-hidden shadow-sm bg-gradient-to-tr from-[#f6f6f6] to-[#fafafa]">
      <div className="absolute -top-60 -right-1 w-1/2 h-[600px] bg-gray-700 opacity-10 rotate-[45deg] rounded-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex-1 min-w-[250px]">
          <div className="text-4xl font-light text-gray-800 mb-4">VORA</div>
          <p className="text-gray-700 w-2/3 text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-1 justify-between w-full max-w-2xl">
          <div>
            <div className="font-bold text-lg mb-3 text-gray-800">Services</div>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="#" className="hover:text-black">Reserve Stay</Link></li>
              <li><Link href="#" className="hover:text-black">Book Airplane Ticket</Link></li>
              <li><Link href="#" className="hover:text-black">UEA Visa</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-lg mb-3 text-gray-800">Smart Trip</div>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="#" className="hover:text-black">Trip Planner</Link></li>
              <li><Link href="#" className="hover:text-black">Travel On Budget</Link></li>
              <li><Link href="#" className="hover:text-black">Price Calculator</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-lg mb-3 text-gray-800">About us</div>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="#" className="hover:text-black">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-black">About Us</Link></li>
              <li><Link href="#" className="hover:text-black">Blogs</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
