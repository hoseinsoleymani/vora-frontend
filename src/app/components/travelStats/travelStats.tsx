import React from 'react'

function TravelStats({number, text}: {number: number, text: string}) {
  return (
    <div className="flex flex-col items-center bg-[#f0f4f8] rounded-lg py-3 w-[193px]">
        <span className="text-2xl font-bold">+{number}</span>
        <span className="text-lg">{text}</span>
    </div>
  )
}

export default TravelStats;
