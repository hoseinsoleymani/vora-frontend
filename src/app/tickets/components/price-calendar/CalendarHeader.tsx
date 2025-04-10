"use client";

import { Calendar24Regular } from "@fluentui/react-icons";

const CalendarHeader = () => (
  <div className="flex items-center space-x-2 w-full">
    <Calendar24Regular />
    <span className="text-lg font-semibold">Price Calendar</span>
    <span className="text-sm text-gray-500">(For Departing Flight)</span>
  </div>
);

export { CalendarHeader }; 