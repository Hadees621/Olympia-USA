"use client";

import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <>
        <h1 className="text-[20px] uppercase lg:text-[50px] font-bold text-center px-10 lg:hidden">
          SUBMISSIONS PROCESS
        </h1>

        <div className="slider-container relative max-w-screen-lg mx-auto overflow-hidden lg:hidden">
          <div className="slider flex">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide flex ${
                  index === slideIndex ? "block" : "hidden"
                } m-10 gap-10`}
              >
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="w-[250px]"
                />
                <button
                  className="slider-button next right-0 mr-2 "
                  onClick={nextSlide}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 26 26"
                    className="bg-[#F5F3F2] rounded-2xl"
                  >
                    <g fill="currentColor">
                      <path d="M10.116 7.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z" />
                      <path d="M10.884 19.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z" />
                    </g>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
      <>
        <h1 className="lg:text-[20px] font-bold text-start px-10 hidden lg:block lg:mt-14">
          Submissions Process
        </h1>

        <div className="lg:flex flex-wrap justify-center gap-3 py-10 hidden">
          {images.map((item, index) => (
            <img
              src={item.src2}
              alt={`Image ${index + 1}`}
              className="max-w-[250px] w-full lg:max-w-[190px] lg:h-[200px] xl:max-w-[230px] xl:h-[260px] 2xl:max-w-[300px] 2xl:h-[330px] object-cover"
            />
          ))}
        </div>
      </>
    </>
  );
};

export default ImageSlider;
