"use client";

import { IosArrowRtl24Filled , IosArrow24Filled } from "@fluentui/react-icons";
import { useState } from "react";

interface WeatherForecastProps {
    forecast: { date: string; temperature: string; icon: React.JSX.Element }[];
  }
  
  const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeItem, setActiveItem] = useState<number | null>(null);
  
    const handlePrevClick = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 7);
      }
    };
  
    const handleNextClick = () => {
      if (currentIndex + 7 < forecast.length) {
        setCurrentIndex(currentIndex + 7); 
      }
    };
  
    const handleItemClick = (index: number) => {
      setActiveItem(activeItem === index ? null : index);
    };
  
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-3 w-full">
          <span className="text-lg font-semibold">Weather forecast</span>
          <span className="text-sm text-gray-500">
            ({forecast[currentIndex]?.date} to{" "}
            {forecast[currentIndex + 6]?.date})
          </span>
        </div>
  
        <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className="absolute left-0 px-3 py-3 bg-transparent rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <IosArrow24Filled />
        </button>
  
          <div className="flex space-x-4 py-2 w-full max-w-4xl">
          {forecast.slice(currentIndex, currentIndex + 6).map((day, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(index)}
              className={`flex-shrink-0 w-32 h-24 bg-white rounded-lg shadow-md flex flex-col items-center justify-center transition-all ${
                activeItem === index
                  ? "transform scale-105 bg-blue-100 border-2 border-gray-400"
                  : "transform scale-100"
              }`}
              style={{
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <span className="text-sm">{day.date}</span>
              <div className="flex mt-4">
              <div>{day.icon}</div>
              <span className="text-sm ml-2">{day.temperature}</span>

              </div>
            </div>
          ))}
        </div>

  
        <button
          onClick={handleNextClick}
          disabled={currentIndex + 7 >= forecast.length}
          className="absolute right-0 px-3 py-3 bg-transparent rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <IosArrowRtl24Filled />
        </button>
        </div>
      </div>
    );
  };
  
  export default WeatherForecast;