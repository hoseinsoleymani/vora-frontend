"use client";
import { Button } from "@/components/ui";
import React, { useState } from "react";
import {
  Airplane16Regular,
  Building16Regular,
  TicketDiagonal16Regular,
  Sparkle16Filled,
} from "@fluentui/react-icons";
const options = [
  { id: "airplane", label: "Airplane", icon: <Airplane16Regular /> },
  { id: "stay", label: "Stay", icon: <Building16Regular /> },
  { id: "train", label: "Train", icon: <TicketDiagonal16Regular /> },
  { id: "ai-features", label: "AI Features", icon: <Sparkle16Filled /> },
];
function TransportTabs() {
  const [selected, setSelected] = useState("airplane");
  return (
    <div className="flex items-center gap-4">
      {options.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          className={`${
            selected === option.id
              ? "bg-primary text-white hover:bg-primary hover:text-white"
              : "bg-white text-primary"
          }`}
          onClick={() => setSelected(option.id)}
        >
          {option.icon}
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default TransportTabs;
