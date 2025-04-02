"use client";
import { Button } from "@/components/ui";
import React from "react";
import { Edit16Regular } from "@fluentui/react-icons";

interface HeaderFlightDetailsProps {
  from: string;
  model: string;
  icon: React.ReactNode;
  onEditFlight?: () => void;
}

function HeaderFlightDetails({ from, model, icon, onEditFlight }: HeaderFlightDetailsProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-xl font-bold">
          Flight from {from} to New Yorke ({model})
        </h2>
      </div>
      <Button variant={"outline"} size={"sm"} className="text-xs" onClick={onEditFlight}>
        <Edit16Regular /> Change Flight
      </Button>
    </div>
  );
}

export { HeaderFlightDetails };
