import { RatingStars } from "./RatingStars";

interface HotelHeaderProps {
  name: string;
  rating: number;
}

export const HotelHeader: React.FC<HotelHeaderProps> = ({ name, rating }) => (
  <div className="p-4">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="flex items-center gap-1">
        <RatingStars rating={rating} />
      </div>
    </div>
  </div>
); 