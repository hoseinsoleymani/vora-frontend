interface SortByComponentProps {
  searchParams: {
    sortBy?: string;
  };
}

function SortByComponent({ searchParams }: SortByComponentProps) {
  const defaultSortBy = searchParams.sortBy || "mostPopular";
  
  const sortOptions = [
    {
      value: "mostPopular",
      label: "Most Popular",
      icon: <span className="i-fluent:star-emphasis-24-regular text-2xl"></span>,
    },
    {
      value: "guestRating",
      label: "Guest Rating",
      icon: <span className="i-fluent:star-emphasis-24-regular text-2xl"></span>,
    },
    {
      value: "priceLowToHigh",
      label: "Price: Low to High",
      icon: <span className="i-fluent:money-24-regular text-2xl"></span>,
    },
    {
      value: "priceHighToLow",
      label: "Price: High to Low",
      icon: <span className="i-fluent:number-symbol-square-24-regular text-2xl"></span>,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Sort by</label>
      <select
        className="border rounded-md p-2"
        defaultValue={defaultSortBy}
        name="sortBy"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortByComponent; 