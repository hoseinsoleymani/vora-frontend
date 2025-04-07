import React from "react";
import OfferCard from "./offerCard";
import Image1 from "../../../../public/img/68ee8542d61bd1710771b66f6a9e8d35_1.jpg";
import Image3 from "../../../../public/img/a7b7b2f590b0f6996143133a81c8d2c7.jpg";

function Offer() {
  return (
    <div className="grid grid-cols-3 gap-16 items-center">
      <div className="col-span-1">
        <h2 className="text-2xl font-bold leading-relaxed">
          The best to offer, for you
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="col-span-2 flex gap-6">
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
  );
}

export default Offer;
