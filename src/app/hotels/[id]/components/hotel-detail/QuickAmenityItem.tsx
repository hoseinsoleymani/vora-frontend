import React from "react";

interface QuickAmenity {
  icon: React.ReactNode;
  label: string;
}

interface QuickAmenityItemProps extends QuickAmenity {}

export const QuickAmenityItem: React.FC<QuickAmenityItemProps> = ({ icon, label }) => (
  <div className="flex-1 flex flex-col items-center gap-2 px-2 py-3 border-r last:border-r-0 min-w-[100px]">
    <div className="text-black">
      {icon}
    </div>
    <span className="text-sm text-black text-center">{label}</span>
  </div>
); 