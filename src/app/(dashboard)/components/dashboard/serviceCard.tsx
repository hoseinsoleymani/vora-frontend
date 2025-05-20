import React from "react";
import { Button } from "@/components/ui";

interface ServiceCardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="flex items-center p-4 border border-gray-2 rounded-xl gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold">{title}</h3>
        <p>{description}</p>
      </div>
      <Button size={"icon"}>
        <span className="i-fluent:arrow-up-right-24-regular"></span>
      </Button>
    </div>
  );
}

export { ServiceCard };
