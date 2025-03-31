import React from "react";
import VoraLogo from "../../../../public/img/Vora Logo.png";
import TeravelBanner from "../../../../public/img/18914f6f3ddf8b69553d8a651c94fcfb.jpg";
import Image from "next/image";
import TravelStats from "./travelStats";


function TravelBanner() {
  return (
    <div className="flex  items-center gap-12">
      <div className="w-[410px] h-[600px] rounded-full overflow-hidden">
        <Image
          src={TeravelBanner}
          alt="Travel Banner"
          className="rounded-full object-cover w-full h-full"
        />
      </div>

      <div className="max-w-lg">
        <div className="w-[110px] h-[40px]">
          <Image src={VoraLogo} alt="Vora Logo" />
        </div>
        <h2 className="text-3xl font-bold leading-relaxed mt-4">
          Go anywhere,
          <br /> you want
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center gap-6 mt-8">
          <TravelStats number={2000} text="Travelers" />
          <TravelStats number={100} text="Airlines" />
          <TravelStats number={20} text="Years of experience" />
        </div>
      </div>
    </div>
  );
}

export default TravelBanner;
