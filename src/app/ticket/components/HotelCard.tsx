"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Star24Regular,
  Star24Filled,
  Eye24Regular,
  Location16Regular,
} from "@fluentui/react-icons";

// API جعلی برای شبیه‌سازی داده‌ها
const fetchHotelData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Living Hotel Berlin Mitte",
        address: "Markgrafenstraße 16-16a, Friedrichshain-Kreuzberg, Berlin",
        imageUrl: "https://images.app.goo.gl/c49mwY7vDMz3CcmM6",
        rating: 8.7,
        reviewCount: 3963,
        price: "$1,208.24",
        availableRooms: 33,
        description: "1 bedroom, 1 bathroom",
        nights: 5,
        adults: 2,
        distance: "2.2 km from center",
        excellent: "Excellent",
      });
    }, 1000);
  });
};

const HotelCard: React.FC = () => {
  const [hotel, setHotel] = useState<any>(null);

  useEffect(() => {
    const loadHotelData = async () => {
      const data = await fetchHotelData();
      setHotel(data);
    };

    loadHotelData();
  }, []);

  if (!hotel) return <div>Loading...</div>;

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <Star24Filled key={i} className="w-5 h-5 text-yellow-500" />
        );
      } else {
        stars.push(<Star24Regular key={i} className="w-5 h-5" />);
      }
    }
    return stars;
  };

  return (
    <div className="max-w-5xl mx-auto my-6 bg-white shadow-md rounded-2xl overflow-hidden flex">
      <img
        src={hotel.imageUrl}
        alt={hotel.name}
        className="w-1/3 h-full object-cover"
      />

      <div className="flex-1 m-5 border-r">
        <h2 className="text-xl font-semibold">{hotel.name}</h2>
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex items-center">{renderRating(hotel.rating)}</div>
          <span className="text-sm text-gray-600">{hotel.nights}-Star</span>
        </div>

        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-500 font-light mt-2 flex items-center gap-1 underline">
            <Location16Regular />
            {hotel.address}
          </p>
          <p className="text-sm text-gray-600">{hotel.description}</p>
          <p className="text-sm text-gray-600">{hotel.nights} Nights</p>
          <p className="text-sm text-gray-600">{hotel.adults} Adults</p>
          <p className="text-sm text-gray-600">{hotel.distance}</p>
        </div>
      </div>



      <div className="flex flex-col items-center justify-between p-5 ">
        <div className="flex items-center space-x-2">
          <div className="bg-destructive p-3 text-white  items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            {hotel.rating}
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">{hotel.excellent}</span>
            <span className="mt-2 text-xs text-gray-500">
              {hotel.reviewCount} reviews
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-col space-y-3 justify-between items-center">
          <div className="text-lg font-bold text-right">{hotel.price}</div>
          <Button variant="default" size="sm">
            <Eye24Regular />
            View & Reserve
          </Button>
          <div className=" text-red-500 text-sm text-gray-500">
            {hotel.availableRooms} Room is left
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
