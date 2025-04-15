"use client";

import {AirplaneSearch} from "@/components/share/searchBar/airplane/airplaineSearch";

export interface SearchParams {
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
}

interface AirplaneSearchWrapperProps {
  searchParams?: SearchParams;
}

const AirplaneSearchWrapper = ({ searchParams }: AirplaneSearchWrapperProps) => {
  return (
    <div className="w-full">
      <AirplaneSearch />
    </div>
  );
};

export { AirplaneSearchWrapper }; 