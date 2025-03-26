"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Image1 from "../../../public/img/marissa-grootes-TVllFyGaLEA-unsplash 1 (1).png";

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [api, setApi] = useState<CarouselApi | null>(null);
  
    const slides = [
      <Image src={Image1} alt="Image 1" />,
      <Image src={Image1} alt="Image 1" />,
      <Image src={Image1} alt="Image 1" />,
    ];
  
    useEffect(() => {
      if (!api) return;
  
      const onSelect = () => {
        setActiveIndex(api.selectedScrollSnap());
      };
  
      api.on("select", onSelect);
  
      onSelect();
  
      return () => {
        api.off("select", onSelect);
      };
    }, [api]);
  
    const goToSlide = (index: number) => {
      api?.scrollTo(index);
    };
  
    return (
      <div className="relative  mt-10">
        <div className="flex justify-center gap-3 mb-4 absolute left-1/2 -translate-x-1/2 z-10 top-4">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[82px] h-1 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-white border border-gray-300"
                  : "bg-gray-transparent border border-gray-300"
              }`}
            />
          ))}
        </div>
  
        <Carousel
          className="w-[302px] mx-auto"
          opts={{
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-full relative">
                  {slide}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg py-3 px-4 w-[270px]">
                      <p className="font-semibold text-center">Plan your trip!</p>
                      <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
}

export default Slider;