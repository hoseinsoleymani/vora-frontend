import { AirplaneIcon } from "@/components/icons";

export interface FlightSegmentDisplayProps {
  time: string;
  city: string;
  terminal: string;
  date: string;
  isConfirmed?: boolean;
}

function FlightSegmentDisplay({
  time,
  city,
  terminal,
  date,
  isConfirmed = false,
}: FlightSegmentDisplayProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {isConfirmed && <AirplaneIcon />}
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium">{time}</span>
          <div className="flex items-center gap-2 text-sm font-medium">
            <p>{city}</p>
            <p>({terminal})</p>
          </div>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
}

export { FlightSegmentDisplay };
