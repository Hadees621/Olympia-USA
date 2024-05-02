"use client";

import React, { useState } from "react";
import Image from "next/image";
import Arrowleft from "../../../public/imgs/Arrowleft.svg";
import Arrowright from "../../../public/imgs/Arrowright.svg";
import Link from "next/link";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagePaths = [
    "/assets/Books/Asset2.png",
    "/assets/Books/Asset3.png",
    "/assets/Books/Asset4.png",
    "/assets/Books/Asset5.png",
    "/assets/Books/Asset6.png",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagePaths.length) % imagePaths.length
    );
  };

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row md:justify-center lg:justify-end bg-blue-200 lg:bg-[#ECF1EF]">
        {/* sm slider */}
        <>
          <div className="lg:hidden">
            <div className="flex gap-5 px-5 justify-center">
              <div className="flex flex-col gap-3 mt-12">
                <div className="shadow">
                  <Image
                    src={imagePaths[currentIndex + 1]}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="shadow">
                  <Image
                    src={imagePaths[currentIndex + 3]}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <div className="shadow">
                  <Image
                    src={imagePaths[currentIndex + 2]}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="shadow">
                  <Image
                    src={imagePaths[currentIndex]}
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
              adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit
              amet.
            </p>
            <Link href="/genre">
              <button
                className={`text-[8px] 2xl:text-[12px] py-[9px] 2xl:py-[12px] font-semibold font-droid-sans shadow flex items-center 2xl:items-start justify-center w-[100px] 2xl:w-[140px] border border-black hover:bg-buttonred hover:text-white`}
              >
                VIEW ALL FICTION
              </button>
            </Link>
          </div>

          <div
            id="default-carousel"
            className="relative w-full py-8 lg:hidden"
            data-carousel="slide"
          >
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {[...Array(imagePaths.length)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    currentIndex === i ? "bg-white" : "bg-black"
                  }`}
                  aria-current={currentIndex === i ? "true" : "false"}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </>

        {/* lg slider */}
        <>
          <div className="absolute top-[35%] left-[47.5%] xl:left-[48%] 2xl:top-[40%] 2xl:left-[48.5%] lg:flex flex-col gap-2 2xl:gap-4 justify-between px-4 z-10 hidden">
            <div className="bg-white rounded-full w-max cursor-pointer">
              <Image
                src={Arrowright}
                alt="Arrowright"
                onClick={nextImage}
                className="w-[28px] xl:w-[35px] 2xl:w-[50px] "
              />
            </div>
            <div className="bg-white rounded-full w-max cursor-pointer">
              <Image
                src={Arrowleft}
                alt="arrowleft"
                onClick={prevImage}
                className="w-[28px] xl:w-[35px] 2xl:w-[50px]"
              />
            </div>
          </div>
          <div className="hidden lg:block w-1/2 relative">
            <img
              className="w-full"
              src={"/assets/Banners/SliderBanner.png"}
              alt={`Image ${currentIndex + 1}`}
            />
            <div className="hidden lg:flex justify-center items-center">
              <div className="absolute bottom-10 2xl:bottom-28 left-0 right-44 xl:right-60 2xl:right-92">
                <div className="flex gap-5 xl:gap-8 2xl:gap-12 px-5 justify-center">
                  <div className="flex flex-col gap-3 xl:gap-5 2xl:gap-10 mt-10 2xl:mt-16">
                    <div className="shadow rounded-full w-max">
                      <img
                        src={imagePaths[currentIndex]}
                        alt="Asset 3"
                        objectFit="cover"
                        className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                      />
                    </div>
                    <div className="shadow">
                      <img
                        src={imagePaths[currentIndex + 3]}
                        alt="Asset 4"
                        className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-10">
                    <div className="shadow">
                      <img
                        src={imagePaths[currentIndex + 1]}
                        alt="Asset 1"
                        className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                      />
                    </div>
                    <div className="shadow">
                      <img
                        src={imagePaths[currentIndex + 2]}
                        alt="Asset 2"
                        className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Slider;
