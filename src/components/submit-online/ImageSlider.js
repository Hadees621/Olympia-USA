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
      <h1 className="text-[20px] uppercase lg:text-[50px] font-bold text-center px-10">
        SUBMISSIONS PROCESS
      </h1>
      <div className="slider-container relative max-w-screen-lg mx-auto overflow-hidden">
        <div className="slider flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide flex ${
                index === slideIndex ? "block" : "hidden"
              } m-10 gap-10`}
            >
              <img
                src={image}
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
  );
};

export default ImageSlider;
