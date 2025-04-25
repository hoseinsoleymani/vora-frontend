"use client";

import { Tabs, TabsList, TabsContent } from "@/components/ui/tabs";
import { 
  TextDescription24Regular,
  Money24Regular,
  Home24Regular,
  DocumentText24Regular,
  Star24Regular
} from "@fluentui/react-icons";
import { LocationSection } from "./sections/LocationSection";
import { AboutPropertySection } from "./sections/AboutPropertySection";
import { FacilitiesSection } from "./sections/FacilitiesSection";
import { RulesSection } from "./sections/RulesSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { RoomPricesSection } from "./sections/RoomPricesSection";
import { TabTrigger } from "./common/TabTrigger";
import { PageHeader } from "./common/PageHeader";
import { Separator } from "./common/Separator";

interface HotelInformationProps {
  description: string;
  location: {
    address: string;
  };
}

export const HotelInformation = ({ description, location }: HotelInformationProps) => {
  const tabs = [
    {
      value: "description",
      icon: <TextDescription24Regular className="w-5 h-5" />,
      label: "Description"
    },
    {
      value: "room-prices",
      icon: <Money24Regular className="w-5 h-5" />,
      label: "Room prices"
    },
    {
      value: "facilities",
      icon: <Home24Regular className="w-5 h-5" />,
      label: "Facilities"
    },
    {
      value: "rules",
      icon: <DocumentText24Regular className="w-5 h-5" />,
      label: "Rules"
    },
    {
      value: "reviews",
      icon: <Star24Regular className="w-5 h-5" />,
      label: "Reviews"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-8">
      <PageHeader 
        icon={<Home24Regular className="w-6 h-6" />}
        title="Hotel Information"
      />

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="flex w-full gap-2 bg-transparent">
          {tabs.map((tab) => (
            <TabTrigger
              key={tab.value}
              value={tab.value}
              icon={tab.icon}
              label={tab.label}
            />
          ))}
        </TabsList>

        <Separator className="my-8" />

        <TabsContent value="description" className="mt-8">
          <LocationSection address={location.address} />
          <AboutPropertySection description={description} />
        </TabsContent>

        <TabsContent value="room-prices">
          <RoomPricesSection />
        </TabsContent>

        <TabsContent value="facilities">
          <FacilitiesSection />
        </TabsContent>

        <TabsContent value="rules">
          <RulesSection />
        </TabsContent>

        <TabsContent value="reviews">
          <ReviewsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}; 