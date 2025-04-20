"use client";

import { SortByComponent } from "@/components/share/SortByComponent/SortByComponent";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface HotelSearchParams {
  category?: string;
  brand?: string;
  quantity?: string;
  selected_product?: string;
  sort_by?: string;
}

interface HotelSortProps {
  searchParams: HotelSearchParams;
}

const HotelSortComponent = ({ searchParams }: HotelSortProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const category = searchParams.category || "";
  const brand = searchParams.brand || "";
  const quantity = searchParams.quantity || "1";
  const selectedProduct = searchParams.selected_product || "";
  const activeSort = searchParams.sort_by || "Most Popular";

  const formData = {
    category,
    brand,
    quantity,
    selected_product: selectedProduct,
  };

  const sortOptions = [
    { label: "Most Popular", icon: <span className="i-fluent:star-emphasis-24-regular text-2xl"></span>, value: "Most Popular" },
    { label: "Guest Rating", icon: <span className="i-fluent:star-emphasis-24-regular text-2xl"></span>, value: "Guest Rating" },
    { label: "Price: Low to High", icon: <span className="i-fluent:money-24-regular text-2xl"></span>, value: "Price: Low to High" },
    { label: "Price: High to Low", icon: <span className="i-fluent:number-symbol-square-24-regular text-2xl"></span>, value: "Price: High to Low" },
  ];

  if (loading) {
    return (
      <div className="bg-white p-5 rounded-2xl my-6">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-36" />
        </div>
        <div className="flex space-x-4">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton key={item} className="h-10 w-40 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <SortByComponent
      title="Sort Hotels By"
      options={sortOptions}
      activeOption={activeSort}
      formAction="/hotels"
      formData={formData}
    />
  );
};

export { HotelSortComponent }; 