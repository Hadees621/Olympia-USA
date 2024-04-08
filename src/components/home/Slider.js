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
      <div className="flex flex-col lg:flex-row md:justify-center lg:justify-end bg-blue-200 lg:bg-[#ECF1EF]">
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
        <div className="p-6 lg:p-4 2xl:p-6 flex flex-col items-start justify-center md:w-[50%] md:mx-auto lg:mx-0 lg:w-[35%] xl:w-[36%] 2xl:w-[30%] lg:pr-16 2xl:pr-28 gap-3 2xl:gap-8 px-16 2xl:px-0">
          <h2 className="text-[35px] md:text-[45px] lg:text-[45px] lg:leading-[40px] xl:text-[55px] xl:leading-[60px] 2xl:text-[92px] 2xl:leading-[92px] font-semibold mb-2">
            Lorem ipsum <br /> dolor sit amet
          </h2>
          <p className="text-[11px] md:text-[12px] lg:text-[10px] xl:text-[14px] 2xl:text-[20px] mb-4">
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
          <div className="relative overflow-hidden rounded-lg">
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

        <div className="absolute top-[35%] left-[47.5%] xl:left-[48%] 2xl:top-[40%] 2xl:left-[48.5%] lg:flex flex-col gap-2 2xl:gap-4 justify-between px-4 z-10 hidden">
          <div className="bg-white rounded-full w-max ">
            <Image
              src={Arrowright}
              alt="Arrowright"
              onClick={handleNext}
              objectFit="cover"
              className="w-[28px] xl:w-[35px] 2xl:w-[50px]"
            />
          </div>
          <div className="bg-white rounded-full w-max">
            <Image
              src={Arrowleft}
              alt="arrowleft"
              onClick={handlePrev}
              objectFit="cover"
              className="w-[28px] xl:w-[35px] 2xl:w-[50px]"
            />
          </div>
        </div>

        <div className="hidden lg:block w-1/2 relative">
          <img
            className="w-full"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
          <div className="absolute bottom-10 2xl:bottom-28 left-0 right-44 xl:right-60 2xl:right-92">
            <div className="flex gap-5 xl:gap-8 2xl:gap-12 px-5 justify-center">
              <div className="flex flex-col gap-3 xl:gap-5 2xl:gap-10 mt-10 2xl:mt-16">
                <div className="shadow rounded-full w-max">
                  <img
                    src={"/Home/Mobile/Asset 3.png"}
                    alt="Asset 3"
                    objectFit="cover"
                    className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                  />
                </div>
                <div className="shadow">
                  <img
                    src={"/Home/Mobile/Asset 4.png"}
                    alt="Asset 4"
                    className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-10">
                <div className="shadow">
                  <img
                    src={"/Home/Mobile/Asset 1.png"}
                    alt="Asset 1"
                    className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                  />
                </div>
                <div className="shadow">
                  <img
                    src={"/Home/Mobile/Asset 2.png"}
                    alt="Asset 2"
                    className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
