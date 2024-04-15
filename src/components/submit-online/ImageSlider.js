"use client";

import React, { useState } from "react";

const ImageSlider = ({ images, imageClass = "w-[250px]", title, flag }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderBgClass = flag ? "bg-[#F5F5F5] py-10" : "bg-white";
  const buttonBgClass = flag ? "bg-white" : "bg-[#F5F3F2]";

  return (
    <>
      <h1
        className={`text-[20px] uppercase lg:text-[50px] font-bold text-center px-0 lg:hidden ${sliderBgClass}`}
      >
        {title}
      </h1>
      <div
        className={`slider-container relative max-w-screen-lg mx-auto overflow-hidden lg:hidden ${sliderBgClass}`}
      >
        <div className="slider flex w-full items-center justify-center">
          {images.map((image, index) => (
            <div key={index}>
              <div
                className={`slide grid ${
                  index === slideIndex ? "block" : "hidden"
                } m-10 gap-10`}
              >
                <div className="flex gap-6 py-4 mx-auto">
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className={imageClass}
                  />
                  <button
                    className="slider-button next right-0 mr-2"
                    onClick={nextSlide}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3em"
                      height="3em"
                      viewBox="0 0 26 26"
                      className={`rounded-3xl ${buttonBgClass}`}
                    >
                      <g fill="currentColor">
                        <path d="M10.116 7.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z" />
                        <path d="M10.884 19.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z" />
                      </g>
                    </svg>
                  </button>
                </div>

                {flag && (
                  <div className="mx-auto">
                    <p className="uppercase font-open-sans font-bold text-[13px] text-center px-32">
                      {image.text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {flag && (
          <button
            className={`text-[13px] py-[10px] font-bold font-open-sans flex items-center justify-center w-[130px] mx-auto border border-buttonred text-buttonred`}
          >
            Learn More
          </button>
        )}
      </div>
    </>
  );
};

export default ImageSlider;
