"use client";

import {ArrowSort24Regular, Sparkle24Regular, Clover24Regular, Timeline24Regular, ReceiptMoney24Regular } from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SortByComponent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("The most popular");

  const buttons = [
    { label: "The best value", icon: <Sparkle24Regular /> },
    { label: "The most popular", icon: <Clover24Regular /> },
    { label: "The fastest", icon: <Timeline24Regular /> },
    { label: "Price", icon: <ReceiptMoney24Regular /> },
  ];

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
        <div>
        <ArrowSort24Regular />
        <span className="text-lg font-semibold ml-2">Sorted By</span>
        </div>
        
      <div className="flex space-x-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={() => handleButtonClick(button.label)}
            variant={activeButton === button.label ? "secondary" : "outline"}
            size="default"
            className="flex items-center justify-center"
          >
            {button.icon}
            <span className="ml-2">{button.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SortByComponent;