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
            The Best Experiences Are Waiting for You
          </h2>
          <p className="mt-4">
            No more endless searching through tours—leave everything from A to Z to us.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl">
          <OfferCard
            title="Save Time"
            description="No need to browse multiple websites, check prices, or compare tour packages.Just enter your budget and receive your complete travel plan in less than a minute.We provide all necessary information in one place—accurate, clear, and ready to go."
            image={Image1}
          />
          <OfferCard
            title="Travel Based on Your Real Budget"
            description="You simply enter your travel budget, and we’ll suggest the best options that match your financial capabilities.The itinerary is set in a way that avoids any unnecessary or extra expenses."
            image={Image3}
          />
          <OfferCard
            title="Multiple Travel Plans to Choose From"
            description="We offer various travel packages based on your budget, preferences, and available time.Each package includes a combination of destination, accommodation, and special activities to make your trip unique and unforgettable."
            image={Image1}
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
