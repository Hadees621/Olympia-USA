"use client";

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
    <div className="relative my-20 lg:my-0">
      <div className="flex flex-col lg:flex-row md:justify-center lg:justify-end bg-[#7EE3AF]">
        {/* Slider */}
        <div className="flex flex-col items-center justify-center w-full lg:w-auto">
          <div className="relative m-20 2xl:m-40">
            {/* sm image */}
            <div className="">
              <img src={currentData.image} alt="pic" className="w-full" />
            </div>

            {/* lg image */}
            <div className="lg:hidden ">
              {carouselData.map((data, index) => (
                <img
                  key={index}
                  src={data.image}
                  alt="pic"
                  className={`absolute top-0 left-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 lg:border border-black bg-[#E5F9EF] flex flex-col items-center justify-center">
          <div className="grid items-center justify-center m-14 mb-2 lg:w-[60%]">
            <p className="2xl:text-[16px]">{currentData.author}</p>
            <h2 className="text-[25px] md:text-[30px] lg:text-[18px] xl:text-[25px] 2xl:text-[45px] font-bold">
              {currentData.title}
            </h2>
            <p className="2xl:text-[16px]">{currentData.description}</p>
            <Link href="/bumblebee-books">
              <button className="text-[8px] 2xl:text-[12px] py-[9px] 2xl:py-[12px] font-semibold font-droid-sans shadow flex items-center 2xl:items-start justify-center w-[110px] 2xl:w-[140px] hover:border-none border border-black hover:bg-[#FCC30B] my-10">
                VIEW ALL BOOKS
              </button>
            </Link>
          </div>
          <div className="flex justify-center mt-4 lg:hidden p-5 ">
            {[...Array(carouselData.length)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full mx-1 ${
                  currentIndex === i ? "bg-white" : "bg-black"
                }`}
                aria-current={currentIndex === i ? "true" : "false"}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute top-[43%] left-[52.5%] xl:left-[48%] 2xl:top-[40%] 2xl:left-[48.5%] lg:flex flex-col gap-2 2xl:gap-4 justify-between px-4 z-10 hidden">
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
    </div>
  );
};

export default GreenSlider;
