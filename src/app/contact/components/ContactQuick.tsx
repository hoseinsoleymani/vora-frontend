"use client";
import React from "react";
import { Call24Filled, Mail24Filled, Chat24Filled } from "@fluentui/react-icons";

const contactMethods = [
  { icon: <Call24Filled className="text-2xl" />, label: "Phone Number", value: "+971-532-697-8980" },
  { icon: <Mail24Filled className="text-2xl" />, label: "Email", value: "Support@vora.com" },
  { icon: <Chat24Filled className="text-2xl" />, label: "Online support", value: "+971-532-697-8980" },
];

export function ContactQuick() {
  return (
    <section className="w-full flex flex-col items-center mb-10">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 flex flex-col gap-2">Not alone,<span className="text-3xl">Anywhere!</span></h2>
          <p className="text-gray-600 text-base leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex-[2] flex flex-row gap-6 w-full justify-end">
          {contactMethods.map((contactMethod, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-100 rounded-2xl px-6 py-4 min-w-[270px] max-w-[320px]">
              <div className="flex items-center gap-2 justify-between">
                <span className="text-2xl mb-2">{contactMethod.icon}</span>
                <div className="font-bold text-base mb-1 flex items-center">{contactMethod.label}</div>
              </div>
              <div>
                <div className="text-gray-700 text-base">{contactMethod.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 