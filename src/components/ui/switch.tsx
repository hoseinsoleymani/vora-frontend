import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export interface SwitchProps {
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ label }) => {
  return (
    <div className="flex items-center space-x-2">
      <SwitchPrimitive.Root
        className="relative inline-flex h-7 w-12 items-center rounded-full bg-gray-200 transition-all data-[state=checked]:bg-green-400"
      >
        <SwitchPrimitive.Thumb
          className="block h-5 w-5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
        />
      </SwitchPrimitive.Root>
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
};

export { Switch };