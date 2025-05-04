import { Star24Filled, Star24Regular } from "@fluentui/react-icons";

interface RatingStarsProps {
  rating: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<Star24Filled key={i} className="w-5 h-5 text-yellow-500" />);
    } else {
      stars.push(<Star24Regular key={i} className="w-5 h-5 text-gray-400" />);
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>;
}; 