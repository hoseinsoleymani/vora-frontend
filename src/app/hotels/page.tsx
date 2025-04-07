import Navbar from "@/components/ui/navbar";

import { AirplaneSearchWrapper } from "../ticket/components";
import {
  ProcessHotel,
  HotelSortComponent,
  HotelList,
  WeatherCalendar
} from "./components";

interface PageProps {
  searchParams: {
    category?: string;
    brand?: string;
    date_added?: string;
    quantity?: string;
    selected_product?: string;
    selectedItemIndex?: string;
    currentIndex?: string;
    page?: string;
    current_step?: string;
    sort_by?: string;
    min_price?: string;
    max_price?: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const currentStep = parseInt(searchParams.current_step || "1");
  const steps = ["Choose Hotel", "Select Room", "Review & Pay"];

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
          {/*Filter components can be added here in future */}
        </div>

        <div className="col-span-9 px-4">
          <ProcessHotel 
            steps={steps} 
            currentStep={currentStep} 
            searchParams={searchParams} 
          />

          <WeatherCalendar searchParams={searchParams} />

          <HotelSortComponent searchParams={searchParams} />

          <HotelList searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
} 