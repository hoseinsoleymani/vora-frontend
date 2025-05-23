import { FlightSegments , FlightInfo } from "@/app/(dashboard)/components";
import { flightOrder } from "./order";
import { ProgressLine } from "@/app/details/components";

interface DetailsTicketProps {
  flightOrder?: flightOrder;
}

function DetailsTicket({ flightOrder }: DetailsTicketProps) {
  const segments = flightOrder?.offer_data?.[0]?.itineraries?.[0]?.segments;
    
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <span className="i-fluent:arrow-forward-24-regular"></span>
        <h3>Flight from Berlin to New Yorke (Outbound)</h3>
      </div>
      {segments?.map((item, index) => (
        <div className="flex items-center mt-5 gap-8" key={index}>
          <div className="flex items-center gap-16">
            <FlightSegments
              arrival={item.arrival}
              carrierCode={item.carrierCode}
              icon={1}
            />

            <ProgressLine duration={item.duration} />

            <FlightSegments
              arrival={item.departure}
              carrierCode={item.carrierCode}
              icon={0}
            />
          </div>
          <div className="h-10 w-px bg-gray-3"></div>
          <FlightInfo
            cabin={item.co2Emissions[0].cabin}
            number={item.number}
            baggage={`${item.co2Emissions[0].weight} KG`}
          />
        </div>
      ))}
    </div>
  );
}

export { DetailsTicket };
