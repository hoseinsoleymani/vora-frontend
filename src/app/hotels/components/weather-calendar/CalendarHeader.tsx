"use client";

import { Calendar24Regular } from "@fluentui/react-icons";

interface CalendarHeaderProps {
  dateRange: string;
}

const CalendarHeader = ({ dateRange }: CalendarHeaderProps) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center space-x-2">
      <Calendar24Regular />
      <span className="text-lg font-semibold">Local Weather</span>
    </div>
    <span className="text-sm text-gray-500">({dateRange})</span>
  </div>
);

export { CalendarHeader }; 