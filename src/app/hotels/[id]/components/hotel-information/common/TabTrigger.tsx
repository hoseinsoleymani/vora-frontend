"use client";

import { ReactNode } from "react";
import { TabsTrigger } from "@/components/ui/tabs";

interface TabTriggerProps {
  value: string;
  icon: ReactNode;
  label: string;
}

export const TabTrigger: React.FC<TabTriggerProps> = ({ value, icon, label }) => (
  <TabsTrigger 
    value={value} 
    className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 text-sm font-medium [&_*]:text-black [&]:text-black data-[state=active]:bg-gray-100 data-[state=active]:border-transparent"
  >
    {icon}
    <span>{label}</span>
  </TabsTrigger>
); 