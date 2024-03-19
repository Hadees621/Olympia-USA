"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrowleft from "../../../public/imgs/Arrowleft.svg";
import Arrowright from "../../../public/imgs/Arrowright.svg";

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
      <div className="flex flex-col lg:flex-row lg:justify-end bg-blue-200 lg:bg-[#ECF1EF]">
        <div className="lg:hidden">
          <div className="flex gap-5 px-5 justify-center">
            <div className="flex flex-col gap-3 mt-12">
              <div className="shadow">
                <Image
                  src={"/Home/Mobile/Asset 3.png"}
                  width={100}
                  height={100}
                />
              </div>
              <div className="shadow">
                <Image
                  src={"/Home/Mobile/Asset 4.png"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <div className="shadow">
                <Image
                  src={"/Home/Mobile/Asset 1.png"}
                  width={100}
                  height={100}
                />
              </div>
              <div className="shadow">
                <Image
                  src={"/Home/Mobile/Asset 2.png"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 lg:p-4 2xl:p-6 flex flex-col items-start justify-center lg:w-[35%] lg:pr-16 gap-3 2xl:gap-8 px-16 2xl:px-0">
          <h2 className="text-3xl lg:text-2xl xl:text-3xl 2xl:text-7xl font-semibold mb-2">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-xs mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh. Lorem ipsum dolor sit amet.Lorem ipsum, consectetuer
            adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet.
          </p>
          <button
            className={`text-[8px] 2xl:text-[12px] py-[9px] 2xl:py-[12px] font-semibold font-droid-sans shadow flex items-center 2xl:items-start justify-center w-[100px] 2xl:w-[140px] border border-black hover:bg-buttonred hover:text-white`}
          >
            VIEW ALL FICTION
          </button>
        </div>

        <div
          id="default-carousel"
          class="relative w-full py-8 lg:hidden"
          data-carousel="slide"
        >
          <div class="relative overflow-hidden rounded-lg">
            {/* <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-1.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-2.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-3.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-4.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-5.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div> */}
          </div>
          <div class="absolute  z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-white"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
        </div>

        <div className="absolute top-[35%] 2xl:top-[40%] left-[47.5%] xl:left-[48%] 2xl:left-[48.7%] lg:flex flex-col gap-2 2xl:gap-4 justify-between px-4 hidden">
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

        <div className="hidden lg:block w-1/2">
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
