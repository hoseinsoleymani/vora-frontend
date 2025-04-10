"use client";

import {
  Sparkle24Regular,
  Clover24Regular,
  Timeline24Regular,
  ReceiptMoney24Regular,
} from "@fluentui/react-icons";
import { SortByComponent as SharedSortByComponent } from "@/components/share/SortByComponent/SortByComponent";

interface SortByComponentProps {
  searchParams: {
    origin?: string;
    destination?: string;
    departure_date?: string;
    adults?: string;
    selected_date?: string;
    sort_by?: string;
    [key: string]: string | undefined;
  };
}

const SortByComponent = ({ searchParams }: SortByComponentProps) => {
  const origin = searchParams?.origin || "LON";
  const destination = searchParams?.destination || "PAR";
  const departureDate = searchParams?.departure_date || "2025-04-10";
  const selectedDate = searchParams?.selected_date || departureDate;
  const adults = searchParams?.adults || "1";
  const activeButton = searchParams?.sort_by || "The most popular";

  const formData: Record<string, string> = {
    origin,
    destination,
    departure_date: departureDate,
    adults,
    selected_date: selectedDate
  };

  const sortOptions = [
    { label: "The best value", icon: <Sparkle24Regular />, value: "The best value" },
    { label: "The most popular", icon: <Clover24Regular />, value: "The most popular" },
    { label: "The fastest", icon: <Timeline24Regular />, value: "The fastest" },
    { label: "Price", icon: <ReceiptMoney24Regular />, value: "Price" },
  ];

  return (
    <SharedSortByComponent
      title="Sorted By"
      options={sortOptions}
      activeOption={activeButton}
      formAction="/ticket"
      formData={formData}
    />
  );
};

export { SortByComponent }; 