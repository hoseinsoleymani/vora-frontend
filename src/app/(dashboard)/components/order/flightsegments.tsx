import { AirplaneIcon } from "@/components/icons";

interface FlightSegmentProps {
  arrival: {
    at: string;
    iataCode: string;
    terminal?: string;
  };
  carrierCode: string;
  icon : 0 | 1
}

function FlightSegments({ arrival, carrierCode , icon }: FlightSegmentProps) {
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = newDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return { date: formattedDate, time: formattedTime };
  };
  return (
    <div className="flex items-center gap-2 ">
      {icon == 1 ? <AirplaneIcon /> : ""}
      <div className="flex flex-col">
        <span>{`${formatDate(arrival.at).time}`}</span>
        <div className="flex items-center gap-1 text-sm font-medium">
          <span>{arrival.iataCode}</span>
          <span>
            ({carrierCode} {arrival.terminal})
          </span>
        </div>
        <span className="text-gray-5 text-sm">{`${
          formatDate(arrival.at).date
        }`}</span>
      </div>
    </div>
  );
}

export { FlightSegments };
