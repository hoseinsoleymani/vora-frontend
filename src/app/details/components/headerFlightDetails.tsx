"use client";
import { Button } from "@/components/ui";
import React from "react";
import { Edit16Regular } from "@fluentui/react-icons";

function HeaderFlightDetails() {
  return (
    <div className="flex justify-between items-center">
    <h2 className="text-xl font-bold">
      Flight from Berlin to New Yorke (Outbound)
    </h2>
    <Button variant={"outline"} size={"sm"} className="text-xs">
      <Edit16Regular /> Change Flight
    </Button>
  </div>
  )
}

export { HeaderFlightDetails };
