//Todo: refactor this component to server action
import { AiSearch, AirplaneSearch, HotelSearch } from "@/components/share/searchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function SearchBar() {
  return (
    <div className="transition-all duration-1000 ease-in-out">
      <Tabs defaultValue="Airplaine" className="w-full">
        <TabsList className="bg-white px-4 py-10 rounded-full">
          <TabsTrigger value="Airplaine">
            <span className="i-fluent:airplane-16-regular text-2xl mr-2"></span> Airplaine
          </TabsTrigger>
          <TabsTrigger value="Stay">
            <span className="i-fluent:building-16-regular text-2xl mr-2"></span> Stay
          </TabsTrigger>
          <TabsTrigger value="AIfeatures">
            <span className="i-fluent:sparkle-16-filled text-2xl mr-2"></span> AI features
          </TabsTrigger>
        </TabsList>
        <div className="mt-4">
          <TabsContent
            value="Airplaine"
            className="animate-in fade-in-50 slide-in-from-right-4 duration-700 ease-in-out"
          >
            <AirplaneSearch />
          </TabsContent>
          <TabsContent
            value="Stay"
            className="animate-in fade-in-50 slide-in-from-right-4 duration-700 ease-in-out"
          >
            <HotelSearch />
          </TabsContent>
          <TabsContent
            value="AIfeatures"
            className="animate-in fade-in-50 slide-in-from-right-4 duration-700 ease-in-out"
          >
            <AiSearch />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default SearchBar;
