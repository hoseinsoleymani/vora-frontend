import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";

export const HotelBookingSidebar: React.FC = () => (
  <div className="bg-white p-6 rounded-3xl shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-medium">Rooms From $120 Per night</h2>
      <span className="text-gray-500">for 10 People</span>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Rooms</h3>
      <RadioGroup
        options={[
          { value: "business", label: "Business Twin Room", price: "$150 / Night" },
          { value: "superior-twin", label: "Superior Twin Room", price: "$134 / Night" },
          { value: "superior-double", label: "Superior Double Room", price: "$1,435 / Night" },
          { value: "deluxe", label: "Superior Deluxe Double or Twin Room", price: "$1,475 / Night" }
        ]}
      />
    </div>

    <div className="w-full h-px bg-gray-200 mb-8"></div>

    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Extra feature</h3>
      <RadioGroup
        options={[
          { value: "pet", label: "Allow to bring pet", price: "$15" },
          { value: "lunch", label: "Lunch a day per person", price: "$15" },
          { value: "parking", label: "Parking a day", price: "$15" },
          { value: "pillow", label: "Extra pillow", price: "$15" }
        ]}
      />
    </div>

    <div className="w-full h-px bg-gray-200 mb-8"></div>

    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Price Summary</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-8">
          <span>$120 x 5 Nights</span>
          <span className="ml-auto">$600</span>
        </div>
        <div className="flex items-center justify-between gap-8">
          <span>Service fee</span>
          <span className="ml-auto">$103</span>
        </div>
        <div className="flex items-center justify-between gap-8">
          <span>Discount</span>
          <span className="ml-auto text-red-500">- $125</span>
        </div>
        <div className="flex items-center justify-between gap-8 pt-4 border-t border-gray-200">
          <span className="font-medium">Total price</span>
          <span className="ml-auto font-medium">$ 6,697.80</span>
        </div>
      </div>
    </div>

    <Button className="w-full py-6 text-lg bg-black text-white hover:bg-black/90">
      Reserve
    </Button>
  </div>
); 