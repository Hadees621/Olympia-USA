// "use client";

import React, { useState } from "react";
import Image from "next/image";
import Arrowleft from "../../../public/imgs/Arrowleft.svg";
import Arrowright from "../../../public/imgs/Arrowright.svg";
import Link from "next/link";

const GreenSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      image: "/assets/Bumblebee/Asset 1-45/Asset 27.png",
      title: "What Happened to Grandad’s Teeth?",
      author: "Mark Harrington",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
    {
      image: "/assets/Bumblebee/Asset 1-45/Asset 27.png",
      title: "The Adventures of Tom Sawyer",
      author: "Mark Twain",
      description:
        "Tom Sawyer, a young boy growing up along the Mississippi River, is always up to mischief and grand adventures. An enchanting tale that captures the essence of youthful curiosity and wonder.",
    },
    {
      image: "/assets/Bumblebee/Asset 1-45/Asset 27.png",
      title: "Journey to the Center of the Earth",
      author: "Jules Verne",
      description:
        "Follow Professor Lidenbrock as he journeys through volcanic tubes to the center of the Earth. A timeless adventure that explores unknown worlds beneath our feet.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const currentData = carouselData[currentIndex];

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row md:justify-center lg:justify-end bg-[#7EE3AF]">
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

        {/* RIGHT */}
        <div className="flex flex-col items-start m-20 2xl:mr-32">
          <h2 className="text-[25px] md:text-[30px] lg:text-[18px] lg:leading-[25px] xl:text-[25px] xl:leading-[30px] 2xl:text-[40px] 2xl:leading-[42px] font-bold text-center my-8">
            Most popular
          </h2>
          <img
            src={currentData.image}
            alt="pic"
            className="h-[280px] w-[360px] xl:h-[320px] xl:w-[390px] 2xl:h-[550px] 2xl:w-[620px]"
          />
        </div>

        {/* sm slider */}
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

        <div className="absolute top-[35%] left-[47.5%] xl:left-[48%] 2xl:top-[40%] 2xl:left-[48.5%] lg:flex flex-col gap-2 2xl:gap-4 justify-between px-4 z-10 hidden">
          <div className="bg-white rounded-full w-max ">
            <Image
              src={Arrowright}
              alt="Arrowright"
              onClick={handleNext}
              className="w-[28px] xl:w-[35px] 2xl:w-[50px]"
            />
          </div>
          <div className="bg-white rounded-full w-max">
            <Image
              src={Arrowleft}
              alt="arrowleft"
              onClick={handlePrev}
              className="w-[28px] xl:w-[35px] 2xl:w-[50px]"
            />
          </div>
        </div>

        {/* LEFT */}
        <div className="w-1/2 border border-black bg-[#E5F9EF] flex items-center justify-center">
          <div className="grid items-center justify-center w-[60%]">
            <p className="2xl:text-[16px]">{currentData.author}</p>
            <h2 className="text-[25px] md:text-[30px] lg:text-[18px] xl:text-[25px] 2xl:text-[45px]  font-bold">
              {currentData.title}
            </h2>
            <p className="2xl:text-[16px]">Mark Harrington</p>
            <p className="text-[11px] md:text-[12px] lg:text-[9px] xl:text-[11px] 2xl:text-[18px] pt-5">
              {currentData.description}
            </p>
            <Link href="/bumblebee-books">
              <button
                className={`text-[8px] 2xl:text-[12px] py-[9px] 2xl:py-[12px] font-semibold font-droid-sans shadow flex items-center 2xl:items-start justify-center w-[110px] 2xl:w-[140px] hover:border-none border border-black hover:bg-[#FCC30B] my-10`}
              >
                VIEW ALL BOOKS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenSlider;
