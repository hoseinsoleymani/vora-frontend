import { FlightLine, type StopInfo } from "@/components/share/FlightLineComponent";

interface FlightTimesProps {
  departureTime: string;
  departureCity: string;
  arrivalTime: string;
  arrivalCity: string;
  duration: string;
  stops: string;
  stopInfo?: StopInfo[];
}

const FlightTimes: React.FC<FlightTimesProps> = ({
  departureTime,
  departureCity,
  arrivalTime,
  arrivalCity,
  duration,
  stops,
  stopInfo = [],
}) => {
  return (
    <FlightLine
      departureTime={departureTime}
      departureCity={departureCity}
      arrivalTime={arrivalTime}
      arrivalCity={arrivalCity}
      duration={duration}
      stops={stops}
      stopInfo={stopInfo}
      className="max-w-md"
    />
  );
};

export { FlightTimes };