import Navbar from "@/components/ui/navbar";
import { 
  AirplaneSearchWrapper,
  ProcessBuy,
  PriceCalendar,
  SortByComponent,
  FlightCard
} from "./components";

interface PageProps {
  searchParams: {
    origin?: string;
    destination?: string;
    departure_date?: string;
    adults?: string;
    selected_date?: string;
    selectedItemIndex?: string;
    currentIndex?: string;
    page?: string;
    current_step?: string;
    sort_by?: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const currentStep = parseInt(searchParams.current_step || "1");
  const steps = ["Departing Flight to New York", "Returning flight to Berlin"];

  return (
    <div className="">
      <div className="bg-gray-3 shadow-md h-40 rounded-b-xl">
        <Navbar />
      </div>

      <div className="mx-auto max-w-6xl -mt-11">
        <AirplaneSearchWrapper searchParams={searchParams} />
      </div>

      <div className="grid grid-cols-12 gap-6 mt-24 px-6">
        {/* Left Sidebar: Filter Section */}
        <div className="col-span-3 bg-white p-6 rounded-2xl shadow-md">
          {/*Filter components */}
        </div>

        <div className="col-span-9 px-4">
          <ProcessBuy 
            steps={steps} 
            currentStep={currentStep} 
            searchParams={searchParams} 
          />

          <PriceCalendar searchParams={searchParams} />

          <SortByComponent searchParams={searchParams} />

          <FlightCard searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}