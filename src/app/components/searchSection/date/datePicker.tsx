import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Calendar,
} from "@/components/ui";
import { CalendarArrowRight24Regular } from "@fluentui/react-icons";
import { useState } from "react";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

function DatePicker({ date, setDate }: DatePickerProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-start gap-2 w-[200px] cursor-pointer">
            <CalendarArrowRight24Regular className="text-gray-500" />
            <div>
              <p className="font-bold">Depart</p>
              <p className="text-sm mt-1 text-gray-500">
                {date ? date.toLocaleDateString() : "Pick a date"}
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-10 px-4 py-3 rounded-xl">
          <div className="flex items-center gap-2">
            <CalendarArrowRight24Regular className="text-gray-500" />
            <p className="font-bold text-lg ">Departure Date</p>
          </div>
          <hr className="w-full mt-4"/>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DatePicker;
