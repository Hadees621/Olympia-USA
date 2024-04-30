"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrowleft from "../../../public/imgs/Arrowleft.svg";
import Arrowright from "../../../public/imgs/Arrowright.svg";
import Link from "next/link";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/Bumblebee/Asset 1-45/Asset 45.png",
    "/assets/Bumblebee/Asset 1-45/Asset 45.png",
    "/assets/Bumblebee/Asset 1-45/Asset 45.png",
  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row md:justify-center lg:justify-end bg-gradient-to-bl from-[#FFFFFE] via-[#FEF5DA] to-[#FEC413]">
        <div className="lg:hidden">
          <div className="flex gap-5 px-5 justify-center">
            <div className="flex flex-col gap-3 mt-12">
              <div className="shadow rounded-full w-max">
                <img
                  src={"/assets/Bumblebee/Asset 1-45/Asset 8.png"}
                  alt="Asset 3"
                  objectFit="cover"
                  className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                />
              </div>
              <div className="shadow">
                <img
                  src={"/assets/Bumblebee/Asset 1-45/Asset 11.png"}
                  alt="Asset 4"
                  className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <div className="shadow">
                <img
                  src={"/assets/Bumblebee/Asset 1-45/Asset 12.png"}
                  alt="Asset 1"
                  className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                />
              </div>
              <div className="shadow">
                <img
                  src={"/assets/Bumblebee/Asset 1-45/Asset 13.png"}
                  alt="Asset 2"
                  className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 lg:p-4 2xl:p-6 flex flex-col items-start justify-center md:w-[50%] md:mx-auto lg:mx-0 lg:w-[40%] xl:w-[36%] 2xl:w-[30%] lg:pr-20 2xl:pr-28 gap-3 2xl:gap-8 px-16 2xl:px-0 pt-10">
          <div className="">
            <h2 className="text-[25px] md:text-[30px] lg:text-[18px] lg:leading-[25px] xl:text-[25px] xl:leading-[30px] 2xl:text-[40px] 2xl:leading-[42px] font-bold">
              Welcome to Bumblebee Books!
            </h2>
            <h2 className="text-[18px] md:text-[20px] lg:text-[16px] lg:tracking-tighter xl:text-[20px] 2xl:text-[40px] font-semibold font-courier-prime">
              The home of children’s literature
            </h2>
          </div>
          <p className="text-[11px] md:text-[12px] lg:text-[9px] xl:text-[11px] 2xl:text-[18px] pt-5">
            An imprint of Olympia Publishers. Children’s books are at the heart
            of Olympia Publishers. For over a decade we have been publishing
            exciting children’s books that are loved by our young readers from
            around the world. From adventure to fantasy, non-fiction to rhyme,
            you won’t Bee-lieve the range of books we have!
          </p>
          <Link href="/bumblebee-books">
            <button
              className={`text-[8px] 2xl:text-[12px] py-[9px] 2xl:py-[12px] font-semibold font-droid-sans shadow flex items-center 2xl:items-start justify-center w-[110px] 2xl:w-[140px] hover:border-none border border-black  hover:bg-[#FCC30B] my-10`}
            >
              VIEW ALL BOOKS
            </button>
          </Link>
        </div>

        <div
          id="default-carousel"
          className="relative w-full py-8 lg:hidden"
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
          <div className="absolute  z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-white"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
        </div>

        <div className="absolute top-[35%] left-[47.5%] xl:left-[48%] 2xl:top-[40%] 2xl:left-[48.5%] lg:flex flex-col gap-2 2xl:gap-4 justify-between px-4 z-10 hidden cursor-pointer">
          <div className="bg-white rounded-full w-max cursor-pointer">
            <Image
              src={Arrowright}
              alt="Arrowright"
              onClick={handleNext}
              className="w-[28px] xl:w-[35px] 2xl:w-[50px]"
            />
          </div>
          <div className="bg-white rounded-full w-max cursor-pointer">
            <Image
              src={Arrowleft}
              alt="arrowleft"
              onClick={handlePrev}
              className="w-[28px] xl:w-[35px] 2xl:w-[50px]"
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="hidden lg:block w-1/2 relative border border-l-black">
          {/* Background Image */}
          <img
            className="w-full h-full"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
          <div className="absolute bottom-14 left-0 right-44 xl:right-60 2xl:right-92">
            <div className="flex gap-5 xl:gap-8 2xl:gap-12 px-5 justify-center">
              {/* bee */}
              <div className="absolute top-0 left-10 xl:-top-4 xl:left-24 2xl:-top-6 2xl:left-72">
                <img
                  src={"/assets/Bumblebee/Asset 1-45/Asset 1.png"}
                  alt="Asset 3"
                  objectFit="cover"
                  className="w-[62px] h-[62px] xl:w-[82px] xl:h-[82px] 2xl:w-[140px] 2xl:h-[140px]"
                />
              </div>
              <div className="flex flex-col gap-5 xl:gap-7 2xl:gap-10 mt-10 2xl:mt-16">
                <div className="shadow w-max">
                  <img
                    src={"/assets/Bumblebee/Asset 1-45/Asset 11.png"}
                    alt="Asset 3"
                    objectFit="cover"
                    className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                  />
                </div>
                <div className="shadow">
                  <img
                    src={"/assets/Bumblebee/Asset 1-45/Asset 11.png"}
                    alt="Asset 4"
                    className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                  />
                </div>
              </div>

              {/* bee */}
              <div className="absolute top-24 right-0 xl:top-24 xl:right-4 2xl:top-36 2xl:right-4">
                <img
                  src={"/assets/Bumblebee/Asset 1-45/Asset 1.png"}
                  alt="Asset 3"
                  objectFit="cover"
                  className="w-[45px] h-[45px] xl:w-[62px] xl:h-[62px] 2xl:w-[110px] 2xl:h-[110px]"
                />
              </div>

              {/* bee */}
              <div className="absolute bottom-48 right-14 xl:top-56 xl:right-20 2xl:top-[310px] 2xl:right-64">
                <img
                  src={"/assets/Bumblebee/Asset 1-45/Asset 3.png"}
                  alt="Asset 3"
                  objectFit="cover"
                  className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[110px] 2xl:h-[110px]"
                />
              </div>

              <div className="flex flex-col gap-5 xl:gap-7 2xl:gap-10">
                <div className="shadow">
                  <img
                    src={"/assets/Bumblebee/Asset 1-45/Asset 12.png"}
                    alt="Asset 1"
                    className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                  />
                </div>
                <div className="shadow">
                  <img
                    src={"/assets/Bumblebee/Asset 1-45/Asset 13.png"}
                    alt="Asset 2"
                    className="w-[90px] xl:w-[125px] 2xl:w-[235px]"
                  />
                </div>
              </div>
              {/* bee */}
              <div className="absolute -bottom-4 right-20 xl:-bottom-6 xl:right-24  2xl:-bottom-14 2xl:right-72">
                <img
                  src={"/assets/Bumblebee/Asset 1-45/Asset 1.png"}
                  alt="Asset 3"
                  objectFit="cover"
                  className="w-[62px] h-[62px] xl:w-[82px] xl:h-[82px] 2xl:w-[140px] 2xl:h-[140px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
