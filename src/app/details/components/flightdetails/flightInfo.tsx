interface FlightInfoProps {
  flightNumber: string;
  flightClass: string;
  operatedBy: string;
}

function FlightInfo({
  flightNumber,
  flightClass,
  operatedBy,
}: FlightInfoProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-start w-full max-w-md">
      <div className="flex items-center justify-between w-full">
        <p className="text-sm">Flight Number</p>
        <p className="text-sm font-light">{flightNumber}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-sm">Flight Class</p>
        <p className="text-sm font-light">{flightClass}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-sm">Operated by</p>
        <p className="text-sm font-light">{operatedBy}</p>
      </div>
    </div>
  );
}

export { FlightInfo };
