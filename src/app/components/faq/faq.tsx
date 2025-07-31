import React from "react";
import FAQItem from "./faqItem";

function Faq() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-px items-start w-3/4">
        <h2 className="text-2xl font-bold">FAQs</h2>
       
      </div>
      <div className="mt-12 flex flex-col gap-4 w-3/4">
        <FAQItem
          question="Can I choose my own destination?"
          answer="Yes, you can select your travel destination based on your preferences and needs."
        />
        <FAQItem
          question="How far in advance should I plan my trip on the website?"
          answer="We recommend planning your trip at least one month before your intended departure.
"
        />
        <FAQItem
          question="Is this service available for both domestic and international trips?"
          answer="Yes, our packages include both domestic and international travel options."
        />
        <FAQItem
          question="Are the prices listed on the website guaranteed and up to date?"
          answer="Yes, all prices shown on our website are accurate, current, and transparent"
        />
        <FAQItem
          question="Do you also book flight tickets?"
          answer="Yes, in addition to planning your trip, we offer flight booking services.We work with trusted airlines to find the best flights that suit your budget and schedule, ensuring a smooth experience from start to finish.
"
        />
      </div>
    </div>
  );
}

export default Faq;
