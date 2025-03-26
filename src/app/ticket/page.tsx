"use client"
import { useState } from "react";
import { StepProgress } from "./components";
import HotelCard from "./components/HotelCard";
import SortByComponent from "./components/SortByComponent";
import WeatherForecast from "./components/WeatherForecast";


export default function Ticket() {
    
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
      "Hotels in Berlin",
      "Choosing your room type",
      "Review your trip",
    ];

    const mockWeatherData = [
        { date: "Mon, Jan 1", temperature: "22°C",  },
        { date: "Tue, Jan 2", temperature: "23°C",  },
        { date: "Wed, Jan 3", temperature: "21°C",  },
        { date: "Thu, Jan 4", temperature: "24°C",  },
        { date: "Fri, Jan 5", temperature: "20°C",  },
        { date: "Sat, Jan 6", temperature: "19°C",  },
        { date: "Sun, Jan 7", temperature: "25°C",  },
        { date: "Mon, Jan 8", temperature: "27°C",  },
        { date: "Tue, Jan 9", temperature: "28°C",  },
        { date: "Wed, Jan 10", temperature: "26°C",  },
        { date: "Thu, Jan 11", temperature: "24°C",  },
        { date: "Fri, Jan 12", temperature: "23°C",  },
      ];


  return (
    <div className="p-4 items-center justify-center flex flex-col">
        <StepProgress
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
        <SortByComponent />
        <WeatherForecast forecast={mockWeatherData} />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
    </div>
  );
}