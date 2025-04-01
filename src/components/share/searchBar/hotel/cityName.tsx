import { Location24Regular } from "@fluentui/react-icons";
import { Location } from "../../airplaneSearch/location/location";

interface CityNameProps {
  data: Location[];
  setLocation: (location: Location) => void;
}

function cityName({ data, setLocation }: CityNameProps) {
  return (
    <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto ">
      {data.length > 0 &&
        data.slice(1).map((city, index) => (
          <div
            key={index}
            className="flex  gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
            onClick={() => setLocation(city)}
          >
            <div className="flex items-center gap-3">
              <Location24Regular className="text-gray-500" />
              <div>
                <p className="font-semibold text-sm">{city.name}</p>
                <p className="text-sm font-light">{city.address.countryName}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default cityName;
