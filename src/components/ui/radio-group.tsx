import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const radioVariants = cva("flex flex-col space-y-2", {
  variants: {
    variant: {
      basic: "text-black",
      gray: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "basic",
  },
});

export interface RadioGroupProps {
  label?: string;
  options: { value: string; label: string }[];
  variant?: "basic" | "gray";
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, options, variant = "basic" }) => {
  return (
    <div className={cn(radioVariants({ variant }))}>
      {label && <span className="text-sm">{label}</span>}
      <RadioGroupPrimitive.Root className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <RadioGroupPrimitive.Item
              value={option.value}
              className="relative w-5 h-5 rounded-full transition-all focus:outline-none"
              style={{
                backgroundColor: variant === "basic" ? "#FBDAD9" : "black",
              }}
            >
              <RadioGroupPrimitive.Indicator
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-3 h-3 rounded-full bg-red-500" />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <span>{option.label}</span>
          </label>
        ))}
      </RadioGroupPrimitive.Root>
    </div>
  );
};

export { RadioGroup };