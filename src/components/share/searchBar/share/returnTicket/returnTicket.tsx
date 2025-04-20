"use client";
import { Button } from "@/components/ui";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Calendar,
} from "@/components/ui";

interface ReturnTicketProps {
  returnDate: Date | undefined;
  setReturnDate: (date: Date | undefined) => void;
}

function ReturnTicket({ returnDate, setReturnDate }: ReturnTicketProps) {
  const [isReturnTicket, setIsReturnTicket] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    setReturnDate(selectedDate);
    setOpen(false);
  };

  const handleDismiss = () => {
    setIsReturnTicket(false);
    setReturnDate(undefined);
  };

  return (
    <div
    >
      {!isReturnTicket ? (
        <div className="flex items-center gap-2 border border-dotted rounded-full px-4 py-3 w-[200px] hover:bg-gray-50 transition-all duration-300 ease-in-out">
          <Button
            className="border h-2 w-2 p-3 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 ease-in-out"
            variant={"outline"}
            onClick={() => setIsReturnTicket(true)}
          >
            <div className="flex items-center justify-center">
              <span className="i-fluent:add-24-filled text-gray-500 text-lg"></span>
            </div>
          </Button>
          <p className="text-sm text-gray-500">Add Return Ticket</p>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-2 border border-dotted rounded-xl px-4 py-3 w-[200px]">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <div className="flex items-start gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
                <span className="i-fluent:calendar-reply-24-regular text-gray-500 text-2xl"></span>
                <div>
                  <p className="font-bold">Return</p>
                  <p className="text-sm mt-1 text-gray-500">
                    {returnDate ? returnDate.toLocaleDateString() : "Pick a date"}
                  </p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-10 px-4 py-3 rounded-xl animate-in fade-in-50 slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2">
                <span className="i-fluent:calendar-reply-24-regular text-gray-500 text-2xl"></span>
                <p className="font-bold text-lg">Return Date</p>
              </div>
              <hr className="w-full mt-4" />
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={handleSelect}
                initialFocus
              />
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            className="border h-2 w-2 p-3 rounded-full flex items-center justify-center hover:bg-red-50 transition-all duration-300 ease-in-out"
            variant={"destructive"}
            onClick={handleDismiss}
          >
            <div className="flex items-center justify-center">
              <span className="i-fluent:dismiss-16-regular text-white text-base"></span>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}

export { ReturnTicket };
