import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

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
            <span className="i-fluent:search-sparkle-16-regular text-2xl"></span>
            Try Service
          </Button>
        </div>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center gap-4 mt-6">
          {[
            { icon: <span className="i-fluent:slide-text-sparkle-24-filled text-2xl"></span>, title: "Save Money" },
            { icon: <span className="i-fluent:location-24-filled text-2xl"></span>, title: "Find Best Places" },
            { icon: <span className="i-fluent:ticket-diagonal-24-filled text-2xl"></span>, title: "Great Deals" },
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
