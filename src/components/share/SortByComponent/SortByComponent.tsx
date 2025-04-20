"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SortOption {
  label: string;
  icon: ReactNode;
  value: string;
}

interface SortByComponentProps {
  title?: string;
  options: SortOption[];
  activeOption: string;
  formAction: string;
  formData: Record<string, string>;
  onSortChange?: (option: string) => void;
}

const SortByComponent = ({ 
  title = "Sort By",
  options,
  activeOption,
  formAction,
  formData,
  onSortChange
}: SortByComponentProps) => {
  return (
    <div className="p-5 bg-white rounded-2xl mt-4">
      <div className="flex items-center">
        <span className="i-fluent:arrow-sort-24-regular text-2xl"></span>
        <span className="text-lg font-semibold ml-2">{title}</span>
      </div>

      <div className="flex space-x-4 mt-4">
        {options.map((option, index) => (
          <form 
            key={index}
            action={formAction} 
            method="GET"
            className="flex-grow"
          >
            {Object.entries(formData).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
            <input type="hidden" name="sort_by" value={option.value} />
            
            <Button
              type="submit"
              variant={activeOption === option.value ? "secondary" : "outline"}
              size="default"
              className="flex items-center justify-center w-full"
              onClick={() => onSortChange && onSortChange(option.value)}
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </Button>
          </form>
        ))}
      </div>
    </div>
  );
};

export { SortByComponent }; 