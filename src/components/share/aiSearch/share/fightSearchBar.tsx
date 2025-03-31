import Location, {
  Location as CustomLocationType,
} from "../../airplaneSearch/location/location";
import { ArrowDown16Regular, ArrowUp16Regular } from "@fluentui/react-icons";
import { useWizard } from "@/hooks";
import TripTypeSelector from "./tripTypeSelector";
import StepContainer from "./stepContainer";

function FightSearchBar() {
  const { data, setStepData } = useWizard();
  console.log(data);

  return (
    <StepContainer title="Where do you want to go?">
      <div className="flex items-center justify-between ">
        <Location
          title="From"
          icon={<ArrowUp16Regular />}
          setLocation={(location: string) => setStepData("from", location)}
          location={data.from}
          selectedLocation={data.fromLocation}
          setSelectedLocation={(location: CustomLocationType | null) =>
            setStepData("fromLocation", location)
          }
        />

        <Location
          title="Destination"
          icon={<ArrowDown16Regular />}
          setLocation={(location: string) => setStepData("to", location)}
          location={data.to}
          selectedLocation={data.toLocation}
          setSelectedLocation={(location: CustomLocationType | null) =>
            setStepData("toLocation", location)
          }
        />
        <TripTypeSelector
          tripType={data.tripType || "one-way"}
          setTripType={(tripType: string) =>
            setStepData("tripType", tripType as "one-way" | "round-trip")
          }
        />
      </div>
    </StepContainer>
  );
}

export default FightSearchBar;
