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
    { label: "The best value", icon: <span className="i-fluent:sparkle-24-regular text-2xl"></span>, value: "The best value" },
    { label: "The most popular", icon: <span className="i-fluent:clover-24-regular text-2xl"></span>, value: "The most popular" },
    { label: "The fastest", icon: <span className="i-fluent:timeline-24-regular text-2xl"></span>, value: "The fastest" },
    { label: "Price", icon: <span className="i-fluent:receipt-money-24-regular text-2xl"></span>, value: "Price" },
  ];

  return (
    <SharedSortByComponent
      title="Sorted By"
      options={sortOptions}
      activeOption={activeButton}
      formAction="/tickets"
      formData={formData}
    />
  );
};

export { SortByComponent }; 
