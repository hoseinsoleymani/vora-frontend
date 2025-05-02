import { Button } from "@/components/ui";
import React from "react";

interface HeaderFlightTicketProps {
    totalPrice: number
}

function HeaderHotelTicket({totalPrice} : HeaderFlightTicketProps) {
  return (
    <div className="flex items-center justify-between">
      <Button
        variant={"secondary"}
        size={"lg"}
        className="flex items-center gap-4 p-4 font-bold"
      >
        <span className="i-fluent:building-home-24-regular"></span>
        Accommodation Reservation
      </Button>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-5">Paid Price</span>
          <span className="text-lg font-bold">${totalPrice}</span>
        </div>
        <Button className="flex items-center gap-2" size={"sm"}>
          <span className="i-fluent:arrow-download-24-regular"></span>
          Download Ticket
        </Button>
      </div>
    </div>
  );
}

export { HeaderHotelTicket };
