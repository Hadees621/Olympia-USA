"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import Arrowleft from "../../../public/imgs/Arrowleft.svg";
import Arrowright from "../../../public/imgs/Arrowright.svg";
import Image from "next/image";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assests/Banners/SliderBanner.png",
    "/assests/Banners/SliderBanner.png",
    "/assests/Banners/SliderBanner.png",
  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative">
      <div className="flex justify-end">
        <div className="p-6 flex flex-col items-start justify-center w-[33%] pr-16">
          <h2 className="text-5xl font-bold mb-2">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-xs mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh. Lorem ipsum dolor sit amet.Lorem ipsum, consectetuer
            adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.
          </p>
          <Button
            title={"VIEW ALL FICTION"}
            color={"transparent"}
            width={"w-[140px]"}
          />
        </div>
        <div className="absolute top-[40%] left-[47%] flex flex-col gap-4 justify-between px-4">
          <div className="bg-white rounded-full w-max">
            <Image
              src={Arrowleft}
              alt="arrowleft"
              width={40}
              onClick={handlePrev}
            />
          </div>
          <div className="bg-white rounded-full w-max">
            <Image
              src={Arrowright}
              alt="Arrowright"
              width={40}
              onClick={handleNext}
            />
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-full"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
