"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Airplane16Regular,
  Building16Regular,
  TicketDiagonal16Regular,
  Sparkle16Filled,
} from "@fluentui/react-icons";
import AirplaneSearch from "./airplaineSearch";
import HotelSearch from "./hotelSearch";
function searchBar() {
  return (
    <div>
      <Tabs defaultValue="Airplaine" className="w-full">
        <TabsList className="bg-white px-4 py-10 rounded-full">
          <TabsTrigger value="Airplaine">
            <Airplane16Regular className="mr-2" /> Airplaine
          </TabsTrigger>
          <TabsTrigger value="Stay">
            <Building16Regular className="mr-2" /> Stay
          </TabsTrigger>
          <TabsTrigger value="Train">
            <TicketDiagonal16Regular className="mr-2" /> Train
          </TabsTrigger>
          <TabsTrigger value="AIfeatures">
            <Sparkle16Filled className="mr-2" /> AI features
          </TabsTrigger>
        </TabsList>
        <div className="mt-4">
          <TabsContent value="Airplaine">
            <AirplaneSearch />
          </TabsContent>
          <TabsContent value="Stay">
            <HotelSearch />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default searchBar;
