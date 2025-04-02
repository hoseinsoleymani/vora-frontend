"use client";
import { Timer16Regular } from "@fluentui/react-icons";

interface LayoverInfoProps {
  duration : string;
}

function LayoverInfo({duration}: LayoverInfoProps) {
  return (
    <div className="flex items-center justify-between mt-8 w-full gap-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Timer16Regular />
          <p>Layover duration</p>
        </div>
        <p>{duration}</p>
      </div>
      <hr className="flex-1 border-gray-200"/>
    </div>
  );
}

export { LayoverInfo };
