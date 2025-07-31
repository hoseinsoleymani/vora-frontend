import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import {
  SearchSparkle16Regular,
  SlideTextSparkle24Filled,
  Location24Filled,
  TicketDiagonal24Filled,
} from "@fluentui/react-icons";

interface PlannerCardProps {
  image: StaticImageData | string;
  backgroundImage: string;
  width?: number;
  height?: number;
}

function PlannerCard({ image, backgroundImage, width = 1062, height = 314 }: PlannerCardProps) {
  return (
    <div
      className="bg-cover bg-center rounded-2xl mt-8 p-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={image} alt="AI icon - based on budget" />
            <div>
              <h3 className="text-2xl font-bold">AI travel assists Planning</h3>
              <p className="text-[11px] mt-1">
                Designed and developed by VORA TRAVELS
              </p>
            </div>
          </div>
          <Button variant="default" size="lg">
            <SearchSparkle16Regular />
            Try Service
          </Button>
        </div>
        <p className="mt-6">
          
        </p>
        <div className="flex items-center gap-4 mt-6">
          {[
            { icon: <SlideTextSparkle24Filled />, title: "Custom Trips Just for You" ,desc : "Every trip is designed to precisely match your needs, budget, and preferences."},
            { icon: <Location24Filled />, title: "Personalized Travel Planning", desc : "Just tell us your budget, and we’ll deliver a complete travel package."},
            { icon: <TicketDiagonal24Filled />, title: "Destination Selection", desc : "We suggest accommodations that perfectly match your budget and personal taste." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {item.icon}
                <p className="font-bold">{item.title}</p>
              </div>
              <p>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlannerCard;
