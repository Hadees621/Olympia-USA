"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import Arrowleft from "../../../public/imgs/Arrowleft.svg";
import Arrowright from "../../../public/imgs/Arrowright.svg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assests/Banners/SliderBanner.png",
    "/assests/Banners/SliderBanner.png",
    "/assests/Banners/SlierBanner.png",
  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative">
      <div className="flex justify-end bg-[#ECF1EF]">
        <div className="p-4 2xl:p-6 flex flex-col items-start justify-center w-[35%] pr-16 gap-3 2xl:gap-8 ">
          <h2 className="text-2xl 2xl:text-7xl font-semibold mb-2">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-[10px] 2xl:text-xs mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh. Lorem ipsum dolor sit amet.Lorem ipsum, consectetuer
            adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.
          </p>
          <button
            className={`text-[8px] 2xl:text-[12px] py-[9px]  2xl:py-[12px] font-semibold font-droid-sans rounded shadow flex items-center justify-center w-[100px] 2xl:w-[140px] border border-black hover:bg-buttonred hover:text-white`}
          >
            VIEW ALL FICTION
          </button>
          {/* <Button title={"VIEW ALL FICTION"} color={"transparent"} width={""} /> */}
        </div>
        <div className="absolute top-[35%] 2xl:top-[40%] left-[47.5%] 2xl:left-[48%] flex flex-col gap-2 2xl:gap-4 justify-between px-4">
          <div className="bg-white rounded-full w-max">
            <Image
              src={Arrowleft}
              alt="arrowleft"
              width={20}
              onClick={handlePrev}
            />
          </div>
          <div className="bg-white rounded-full w-max">
            <Image
              src={Arrowright}
              alt="Arrowright"
              width={20}
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
