import React from "react";
import VoraLogo from "../../../../public/img/Vora Logo.png";
import TeravelBanner from "../../../../public/img/18914f6f3ddf8b69553d8a651c94fcfb.jpg";
import Image from "next/image";
import TravelStats from "./travelStats";


function TravelBanner() {
  return (
    <div className="flex justify-center items-center gap-12">
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
          Leading in Technology
          <br /> 
        </h2>
        <p className="mt-4 text-gray-600">
          Using the latest AI technologies, we’ve taken travel planning to a whole new level.Our system analyzes your budget in detail and offers the best destinations, hotels, and travel programs.This advanced technology minimizes planning time and prevents extra costs—so you can enjoy a stress-free and exceptional travel experience.

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
