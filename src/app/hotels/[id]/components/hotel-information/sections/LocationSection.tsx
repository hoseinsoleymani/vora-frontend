"use client";

import { Button } from "@/components/ui/button";
import { Location24Regular } from "@fluentui/react-icons";
import { SectionHeader } from "../common/SectionHeader";

interface LocationSectionProps {
  address: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ address }) => (
  <div className="mb-8">
    <SectionHeader 
      icon={<Location24Regular className="w-5 h-5" />}
      title="Location"
    />
    <div className="flex items-start justify-between mb-4">
      <p className="text-gray-600">{address}</p>
      <Button variant="outline" className="whitespace-nowrap flex items-center gap-2">
        <Location24Regular className="w-5 h-5" />
        Show location on map
      </Button>
    </div>
  </div>
); 