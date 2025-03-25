import React from "react";
import FAQItem from "./faqItem";
function Faq() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">FAQs</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <FAQItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <FAQItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <FAQItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <FAQItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <FAQItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
      </div>
    </div>
  );
}

export default Faq;
