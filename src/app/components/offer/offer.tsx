import React from "react";
import OfferCard from "./offerCard";
import Image1 from "../../../../public/img/68ee8542d61bd1710771b66f6a9e8d35_1.jpg";
import Image3 from "../../../../public/img/a7b7b2f590b0f6996143133a81c8d2c7.jpg";

function Offer() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <div className="flex flex-col gap-4 max-w-md text-center lg:text-left">
          <h2 className="text-2xl font-bold leading-relaxed">
            The best to offer, for you
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl">
          <OfferCard
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
            image={Image1}
          />
          <OfferCard
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
            image={Image3}
          />
          <OfferCard
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            image={Image1}
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
