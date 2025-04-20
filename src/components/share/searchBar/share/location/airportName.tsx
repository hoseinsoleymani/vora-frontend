import { Region } from "./location";

interface AirportNameProps {
  data: Region[];
  setLocation: (location: Region) => void;
}

function AirportName({ data, setLocation }: AirportNameProps) {
  return (
    <div className="mt-4 flex flex-col gap-2 max-h-[280px] overflow-y-auto ml-5">
      {data.slice(1).map((airport, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          onClick={() => setLocation(airport)}
        >
          <div className="flex items-center gap-4">
            <span className="i-fluent:arrow-right-12-regular text-2xl"></span>
            <p className="font-semibold text-sm">
              {airport.iataCode}-{airport.name}
            </p>
          </div>
          <p className="text-sm font-light">
            {airport.address.cityName},{airport.address.countryName}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AirportName;
