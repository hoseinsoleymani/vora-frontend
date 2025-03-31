"use client";
import React, { useState } from "react";
import {ChevronDown32Regular} from "@fluentui/react-icons"

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl px-8 py-4 border-gray-200">
      <button
        className="flex justify-between items-center w-full text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={`transition-transform ${isOpen ? "rotate-180 translate transition-all duration-300" : "translate transition-all duration-300"}`}>
          <ChevronDown32Regular />
        </span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600 ">{answer}</p>}
    </div>
  );
};

export default FAQItem;
