"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Calendar } from "../ui";
import { ChevronDown24Regular } from "@fluentui/react-icons";

interface DatePickerProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  title: string;
  icon: React.JSX.Element;
}

function DatePicker({ date, setDate, title , icon }: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-1"
    >
      <div className="border border-gray rounded-lg w-full px-4 py-2 border-gray">
        <CollapsibleTrigger asChild>
          <div
            className="flex items-center justify-between w-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-1">
              {icon}
              <span className="text-lg font-semibold">{title}</span>
            </div>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <span className="sr-only">Toggle</span>
              <ChevronDown24Regular
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-2 mt-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="border-none"
          />
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

export { DatePicker };
