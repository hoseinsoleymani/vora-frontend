import { QuickAmenityItem } from "./QuickAmenityItem";

interface QuickAmenity {
  icon: React.ReactNode;
  label: string;
}

interface HotelQuickAmenitiesProps {
  amenities: QuickAmenity[];
}

export const HotelQuickAmenities: React.FC<HotelQuickAmenitiesProps> = ({ amenities }) => (
  <div className="flex items-stretch p-4">
    {amenities.map((amenity, index) => (
      <QuickAmenityItem key={index} {...amenity} />
    ))}
  </div>
); 