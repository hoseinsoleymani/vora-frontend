"use client";

import { ProcessComponent } from "@/components/share/ProcessComponent/ProcessComponent";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ProcessHotelProps {
  steps: string[];
  currentStep: number;
  searchParams: {
    category?: string;
    brand?: string;
    quantity?: string;
    selected_product?: string;
    date_added?: string;
    current_step?: string;
  };
}

const ProcessHotel = ({ steps, currentStep, searchParams }: ProcessHotelProps) => {
  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const category = searchParams.category || "";
  const brand = searchParams.brand || "";
  const quantity = searchParams.quantity || "1";
  const selectedProduct = searchParams.selected_product || "";

  const formData = {
    category,
    brand,
    quantity,
    selected_product: selectedProduct,
  };

  if (loading) {
    return (
      <div className="p-5 bg-white rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-8 w-24" />
        </div>

        <div className="flex items-center space-x-4">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index !== 0 && <Skeleton className="h-5 w-5 mr-4" />}
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-5 w-24" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <ProcessComponent 
      steps={steps}
      currentStep={currentStep}
      title="Hotel Booking Process"
      resetButtonText=""
      formAction="/hotels"
      formData={formData}
    />
  );
};

export { ProcessHotel }; 