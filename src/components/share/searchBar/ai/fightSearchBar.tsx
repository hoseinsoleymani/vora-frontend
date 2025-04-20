import { Region, Region as LocationType } from "../share/location/location";
import { useWizard } from "@/hooks";
import TripTypeSelector from "./tripTypeSelector";
import StepContainer from "./stepContainer";

function FightSearchBar() {
  const { data, setStepData } = useWizard();
  console.log(data);

  return (
    <StepContainer title="Where do you want to go?">
      <div className="flex items-center justify-between ">
        <Region
          title="From"
          icon={<span className="i-fluent:arrow-up-16-regular text-2xl"></span>}
          setLocation={(location: string) => setStepData("from", location)}
          location={data.from}
          selectedLocation={data.fromLocation}
          setSelectedLocation={(location: LocationType | null) =>
            setStepData("fromLocation", location)
          }
        />

        <Region
          title="Destination"
          icon={<span className="i-fluent:arrow-down-16-regular text-2xl"></span>}
          setLocation={(location: string) => setStepData("to", location)}
          location={data.to}
          selectedLocation={data.toLocation}
          setSelectedLocation={(location: LocationType | null) =>
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
