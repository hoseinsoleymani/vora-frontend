import { QuickAmenityItem } from "./QuickAmenityItem";
import { AmenityIcon } from "./AmenityIcon"; // Import the new component

// Types (Aligned with HotelData)
interface HotelAmenity {
  name: string;
  icon: string; // Expecting icon name identifier
}

interface HotelQuickAmenitiesProps {
  amenities: HotelAmenity[];
  maxItems?: number; // Optional prop to limit displayed items
}

export const HotelQuickAmenities: React.FC<HotelQuickAmenitiesProps> = ({ 
  amenities,
  maxItems = 8 // Default to 8 items
}) => (
  <div className="flex items-stretch p-4 flex-wrap gap-x-4 gap-y-2">
    {/* Use slice based on maxItems prop */} 
    {amenities.slice(0, maxItems).map((amenity, index) => {
      // Render the item (iconComponent can be null if identifier is unknown, QuickAmenityItem should handle it or we add a check here)
      return (
        <QuickAmenityItem 
          key={`${amenity.name}-${index}`} // Use a more stable key
          icon={<AmenityIcon iconIdentifier={amenity.icon} />} 
          label={amenity.name}
        />
      );
    })}
  </div>
); 