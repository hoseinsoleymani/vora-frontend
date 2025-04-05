import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import { SelectRangeEventHandler } from "react-day-picker";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Calendar,
  Button,
} from "@/components/ui";
import {
  CalendarArrowRight24Regular,
  CalendarArrowCounterclockwise24Regular,
  ChevronLeft24Regular,
  ChevronRight24Regular,
  Checkmark16Regular,
  ArrowUndo16Regular,
} from "@fluentui/react-icons";

interface CheckInAndOutProps {
  checkInDate: Date | undefined;
  setCheckInDate: (date: Date | undefined) => void;
  checkOutDate: Date | undefined;
  setCheckOutDate: (date: Date | undefined) => void;
}

const calendarClassNames = {
  nav: "hidden",
  caption: "flex justify-center",
  caption_label: "text-xl font-bold px-5",
};

const CheckInAndOut = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}: CheckInAndOutProps) => {
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const handleMonthChange = (direction: "prev" | "next") => {
    setCurrentMonth((prev) =>
      direction === "prev" ? subMonths(prev, 1) : addMonths(prev, 1)
    );
  };

  const handleDateSelect: SelectRangeEventHandler = (range) => {
    if (range?.from) setCheckInDate(range.from);
    if (range?.to) setCheckOutDate(range.to);
  };

  const formattedDateRange =
    checkInDate || checkOutDate
      ? `${checkInDate?.toLocaleDateString() || ""} ${
          checkOutDate ? `- ${checkOutDate.toLocaleDateString()}` : ""
        }`
      : "Pick a date";

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <div className="flex items-start gap-2 w-[200px]">
          <CalendarArrowRight24Regular className="text-gray-500" />
          <div>
            <p className="font-bold">Check in and out</p>
            <p className="text-sm mt-1 text-gray-500">{formattedDateRange}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-8 px-4 py-4rounded-xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <CalendarArrowCounterclockwise24Regular className="text-gray-500" />
            <p className="font-bold text-lg">Check in and out</p>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden h-full flex items-center ${
              checkInDate || checkOutDate
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 max-h-0"
            }`}
          >
            {(checkInDate || checkOutDate) && (
              <div className="flex items-center gap-2xl">
                <div className="flex items-center gap-2">
                  {checkInDate && (
                    <>
                      <p className="text-sm font-semibold">From : </p>
                      <p className="text-sm font-light">
                        {checkInDate.toLocaleDateString()}
                      </p>
                    </>
                  )}
                  {checkInDate && checkOutDate && (
                    <span className="-mt-1 text-gray-500">|</span>
                  )}
                  {checkOutDate && (
                    <>
                      <p className="text-sm font-semibold">To : </p>
                      <p className="text-sm font-light">
                        {checkOutDate.toLocaleDateString()}
                      </p>
                    </>
                  )}
                </div>
                <Button
                  size={"sm"}
                  variant={"outline"}
                  className="px- py-1 text-sx rounded-full"
                  onClick={() => {
                    setCheckInDate(undefined);
                    setCheckOutDate(undefined);
                  }}
                >
                  <ArrowUndo16Regular /> Reset
                </Button>
              </div>
            )}
          </div>
        </div>
        <hr className="w-full mt-4" />
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleMonthChange("prev")}
          >
            <ChevronLeft24Regular className="h-4 w-4" />
          </Button>
          <Calendar
            mode="range"
            month={currentMonth}
            hideHead={false}
            classNames={calendarClassNames}
            selected={{ from: checkInDate, to: checkOutDate }}
            onSelect={handleDateSelect}
          />
          <Calendar
            mode="range"
            month={addMonths(currentMonth, 1)}
            hideHead={false}
            classNames={calendarClassNames}
            selected={{ from: checkInDate, to: checkOutDate }}
            onSelect={handleDateSelect}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleMonthChange("next")}
          >
            <ChevronRight24Regular className="h-4 w-4" />
          </Button>
        </div>
        <hr className="w-full" />
        <div className="flex justify-end my-4">
          <Button onClick={() => setOpen(false)}>
            <Checkmark16Regular /> Done
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CheckInAndOut;
