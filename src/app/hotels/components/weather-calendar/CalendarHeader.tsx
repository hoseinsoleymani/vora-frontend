interface CalendarHeaderProps {
  dateRange: string;
}

const CalendarHeader = ({ dateRange }: CalendarHeaderProps) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center space-x-2">
      <span className="i-fluent:calendar-24-regular text-2xl"></span>
      <span className="text-lg font-semibold">Local Weather</span>
    </div>
    <span className="text-sm text-gray-500">({dateRange})</span>
  </div>
);

export { CalendarHeader }; 