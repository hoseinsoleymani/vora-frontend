import { Button } from '@/components/ui'
import React from 'react'

interface HeaderFlightTicketProps {
  totalPrice: number;
}

function HeaderFlightTicket({ totalPrice }: HeaderFlightTicketProps) {
  return (
    <div className="flex items-center justify-between">
      <Button
        variant={"secondary"}
        className="font-bold flex items-center gap-2 p-4"
        size={"lg"}
      >
        <span className="i-fluent:airplane-24-regular"></span>
        Airplane Ticket
      </Button>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-5">
            Paid Price
          </span>
          <span className="text-lg font-bold">${totalPrice}</span>
        </div>
        <Button className="flex items-center gap-2 text-sm font-medium" size={"sm"}>
          <span className="i-fluent:arrow-download-24-regular"></span>
          Download Ticket
        </Button>
      </div>
    </div>
  )
}

export  {HeaderFlightTicket}