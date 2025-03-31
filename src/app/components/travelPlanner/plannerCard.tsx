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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center gap-4 mt-6">
          {[
            { icon: <SlideTextSparkle24Filled />, title: "Save Money" },
            { icon: <Location24Filled />, title: "Find Best Places" },
            { icon: <TicketDiagonal24Filled />, title: "Great Deals" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {item.icon}
                <p className="font-bold">{item.title}</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlannerCard;
