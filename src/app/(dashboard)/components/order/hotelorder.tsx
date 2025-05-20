import { HeaderHotelTicket , HotelInfo } from "@/app/(dashboard)/components";

interface HotelOrderProps {
  totalPrice: number;
}

function HotelOrder({ totalPrice }: HotelOrderProps) {
  return (
    <div className="mt-6 p-6 bg-white rounded-2xl shadow w-full">
        <HeaderHotelTicket totalPrice={totalPrice}/>
        <HotelInfo />
    </div>
  );
}

export { HotelOrder };
