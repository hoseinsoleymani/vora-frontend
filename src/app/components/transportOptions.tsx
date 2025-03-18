import React from 'react'
import TransportTabs from './tansportTabs'
import BookingFrom from './bookingFrom'

function TransportOptions() {
  return (
    <div className="flex flex-col gap-4">
        <TransportTabs />
        <BookingFrom />
    </div>
  )
}

export default TransportOptions