import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface OfferCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

function offerCard({ image, title, description }: OfferCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-20 w-20 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          objectFit="fit"
        />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default offerCard;
