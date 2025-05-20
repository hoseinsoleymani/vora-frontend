import Image from "next/image";
import React from "react";
import hotelImage from "../../../../../public/img/Frame 24660.png";

function HotelInfo() {
  return (
    <div className="mt-10 flex items-center gap-4">
      <Image src={hotelImage} alt="hotel" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-6">
            <h3></h3>
        </div>
      </div>
    </div>
  );
}

export { HotelInfo };
