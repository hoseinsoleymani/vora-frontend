"use client";
import React from "react";
import FAQItem from "@/app/components/faq/faqItem";

const faqs = [
  {
    question: "How can I contact Vora support?",
    answer: "You can contact us via phone, email, or online support at any time.",
  },
  {
    question: "How fast is Vora support response time?",
    answer: "Vora support is available 24/7 and responds in less than a minute.",
  },
  {
    question: "Is Vora service available for all airlines?",
    answer: "Yes, Vora collaborates with more than 100 reputable airlines.",
  },
  {
    question: "Can I ask my questions online?",
    answer: "Yes, you can submit your questions through the online support section on our website.",
  },
  {
    question: "Where is Vora's main office located?",
    answer: "Dubai, Al Quoz Industrial Area, 4th InterChange, Vora Building.",
  },
];

export function ContactFAQ() {
  return (
    <section className="w-full flex flex-col items-center mb-10 ">
      <div className="w-full mx-auto">
        <h2 className="text-2xl font-bold flex flex-col">FAQs about Vora <span className="text-primary">Supports</span></h2>
        <p className="mt-4 text-gray-600 text-sm w-1/3">
          Here you can find answers to the most frequently asked questions about Vora support.
        </p>
        <div className="mt-12 flex flex-col gap-4 text-gray-500">
          {faqs.map((faqItem, index) => (
            <FAQItem key={index} question={faqItem.question} answer={faqItem.answer} />
          ))}
        </div>
      </div>
    </section>
  );
} 