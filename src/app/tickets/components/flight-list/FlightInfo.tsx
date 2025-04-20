interface FlightInfoProps {
  airline: string;
  airlineImage: string;
}

const FlightInfo: React.FC<FlightInfoProps> = ({ airline, airlineImage }) => {
  return (
    <div className="flex flex-col w-1/6 justify-center space-y-3">
      {airlineImage ? (
        <img src={airlineImage} alt={airline} className="w-8 h-8 object-cover" />
      ) : (
        <span className="i-fluent:airplane-24-regular text-2xl text-gray-500"></span>
      )}
      <div className="text-sm font-light">{airline}</div>
    </div>
  );
};

export { FlightInfo };