import React, { useState } from "react";
import AIServiceSelector from "./aiServiceSelector";
import { ProgressStepper } from "@/components/ui/progressstepper";

function AiSearch() {
  return (
    <div className="bg-white rounded-lg px-8 py-4 flex gap-4 w-full items-center justify-between">
      <AIServiceSelector />
    </div>
  );
}

export default AiSearch;
