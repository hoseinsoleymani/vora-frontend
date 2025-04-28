// Remove Fluent UI icon imports
/*
import { Star24Filled, Star24Regular } from "@fluentui/react-icons";
*/
import { cn } from "@/lib/utils"; // Import cn

interface RatingStarsProps {
  rating: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      // Use span with i-fluent:star-24-filled and existing styles
      stars.push(<span key={i} className={cn("i-fluent:star-24-filled", "w-5 h-5 text-yellow-500")} />);
    } else {
      // Use span with i-fluent:star-24-regular and existing styles
      stars.push(<span key={i} className={cn("i-fluent:star-24-regular", "w-5 h-5 text-gray-400")} />);
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>;
}; 