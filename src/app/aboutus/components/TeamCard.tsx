import React from "react";
import Image from "next/image";

export interface TeamMember {
  name: string;
  desc: string;
  img: string;
}

export const TeamCard = React.memo(function TeamCard({ name, desc, img }: TeamMember) {
  return (
    <div className="min-w-[220px] max-w-[220px] flex-shrink-0 flex flex-col">
      <div className="relative w-[220px] h-[220px] rounded-xl overflow-hidden mb-2">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div className="font-medium text-gray-800 text-base">{name}</div>
      <div className="text-gray-500 text-sm ">{desc}</div>
    </div>
  );
}); 