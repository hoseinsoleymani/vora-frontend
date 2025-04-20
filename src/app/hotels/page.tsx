import Navbar from "@/components/ui/navbar";
import { HotelSearch } from "@/components/share/searchBar/hotel/hotelSearch";
import {
  ProcessHotel,
  HotelSortComponent,
  HotelList,
  WeatherCalendar
} from "./components";
import { getHotels, getLocationCode, HotelResponse } from "./actions";

export interface HotelSearchParams {
  [key: string]: string | undefined;
  category?: string;
  brand?: string;
  date_added?: string;
  quantity?: string;
  selected_product?: string;
  selectedItemIndex?: string;
  currentIndex?: string;
  city?: string;
  check_in_date?: string;
  check_out_date?: string;
  page?: string;
  current_step?: string;
  sort_by?: string;
  min_price?: string;
  max_price?: string;
}

interface PageProps {
  searchParams: Promise<HotelSearchParams>;
}

// Helper function for default dates in YYYY-MM-DD format
function getDefaultDate(offsetDays: number = 0): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const currentStep = parseInt(resolvedSearchParams.current_step || "1");
  const steps = ["Choose Hotel", "Select Room", "Review & Pay"];

  const plainSearchParams: { [key: string]: string | undefined } = {};
  Object.keys(resolvedSearchParams).forEach((key) => {
    const value = resolvedSearchParams[key as keyof HotelSearchParams];
    if (value !== undefined) {
      plainSearchParams[key] = value;
    }
  });

  const locationKeyword = resolvedSearchParams.city;
  let cityCodeForSearch: string | null = null;
  let hotelData: HotelResponse = { hotels: [], totalCount: 0, totalPages: 1 };

  if (locationKeyword) {
    cityCodeForSearch = await getLocationCode(locationKeyword);
  }

  const checkIn = resolvedSearchParams.check_in_date || getDefaultDate();
  const checkOut = resolvedSearchParams.check_out_date || getDefaultDate(1);
  const page = parseInt(resolvedSearchParams.page || "1");

  if (cityCodeForSearch) {
    try {
      hotelData = await getHotels(cityCodeForSearch, checkIn, checkOut, page);
    } catch (error) {
      console.error("Failed to fetch hotels:", error);
    }
  }

  const currentSearchParams: HotelSearchParams = { 
    ...plainSearchParams,
    city: cityCodeForSearch || undefined,
    check_in_date: checkIn,
    check_out_date: checkOut,
    page: page.toString(),
  };

  return (
    <div className="">
      <div className="bg-gray-3 shadow-md h-40 rounded-b-xl">
        <Navbar />
      </div>

      <div className="mx-auto max-w-6xl -mt-11">
        <HotelSearch />
      </div>

      <div className="grid grid-cols-12 gap-6 mt-24 px-6">
        <div className="col-span-3 bg-white p-6 rounded-2xl shadow-md">
        </div>

        <div className="col-span-9 px-4">
          <ProcessHotel 
            steps={steps} 
            currentStep={currentStep} 
            searchParams={currentSearchParams}
          />

          <WeatherCalendar searchParams={currentSearchParams} />

          <HotelSortComponent searchParams={currentSearchParams} />

          <HotelList 
            searchParams={currentSearchParams}
            initialHotels={hotelData.hotels}
            totalCount={hotelData.totalCount}
            totalPages={hotelData.totalPages}
          />
        </div>
      </div>
    </div>
  );
} 