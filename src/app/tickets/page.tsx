import Navbar from "@/components/ui/navbar";
import { 
  AirplaneSearchWrapper,
  ProcessBuy,
  PriceCalendar,
  SortByComponent,
  FlightCard
} from "./components";

interface SearchParams {
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
  [key: string]: string | undefined;
}

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const plainSearchParams: { [key: string]: string } = {};
  
  Object.keys(resolvedSearchParams).forEach((key) => {
    const value = resolvedSearchParams[key];
    if (value !== undefined) {
      plainSearchParams[key] = value;
    }
  });
  
  if (!plainSearchParams.selected_date && plainSearchParams.departure_date) {
    plainSearchParams.selected_date = plainSearchParams.departure_date;
  }
  
  const currentStep = parseInt(plainSearchParams.current_step || "1");
  const steps = ["Departing Flight to New York", "Returning flight to Berlin"];

  return (
    <div className="">
      <div className="bg-gray-3 shadow-md h-40 rounded-b-xl">
        <Navbar />
      </div>

      <div className="mx-auto max-w-6xl -mt-11">
        <AirplaneSearchWrapper searchParams={plainSearchParams} />
      </div>

      <div className="grid grid-cols-12 gap-6 mt-24 px-6">
        <div className="col-span-3 bg-white p-6 rounded-2xl shadow-md">
          {/* Filter components will be added here */}
        </div>

        <div className="col-span-9 px-4">
          <ProcessBuy 
            steps={steps} 
            currentStep={currentStep} 
            searchParams={plainSearchParams} 
          />

          <PriceCalendar searchParams={plainSearchParams} />

          <FlightCard searchParams={plainSearchParams} />
        </div>
      </div>
    </div>
  );
}
