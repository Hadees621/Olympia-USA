"use client";

import React, { useState } from "react";

function Step({ step, index }) {
  const isOddStep = index % 2 !== 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`font-open-sans lg:flex justify-center gap-16 ${
        isOddStep ? "m-8 my-12 lg:m-0" : "p-8 py-12 lg:m-0"
      } sm:${isOddStep ? "m-32 lg:p-0 lg:mr-0" : "p-32 lg:p-0 lg:pr-0"} ${
        isOddStep ? "bg-white" : "bg-[#F9F7F6]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" lg:relative lg:flex lg:max-w-[630px] xl:max-w-[800px] 2xl:max-w-[1100px] ">
        {/* progress bar */}
        <vr
          className={`lg:border-l-[1.9px] lg:border-[#2D6DB2] lg:pl-14 xl:pl-24 ${
            step.id == 1 ? "mt-32" : ""
          } ${step.id == 10 ? "mb-[385px]" : ""}`}
        />

        <div className="lg:absolute -left-[8px] top-32 bg-white hidden lg:block">
          {isHovered ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 32 32"
            >
              <circle cx="16" cy="16" r="10" fill="#2D6DB2" />
              <path
                fill="#2D6DB2"
                d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2D6DB2"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
          )}
        </div>
        <div className="">
          {/* section image*/}
          <div className="flex justify-between lg:hidden">
            <img
              src={step.imageUrl}
              alt="Step Image"
              className="w-full p-10 sm:mx-48 sm:mb-8"
            />
          </div>
          {/* number + image + title*/}
          <div className="lg:flex flex-col justify-between hidden lg:pt-24 lg:pb-[130px]">
            <div className="flex gap-6 group">
              <h1
                className={`text-[60px] font-bold ${
                  isHovered ? "text-[#3058A5]" : "text-[#E6E6E6]"
                }`}
              >
                {step.id}
              </h1>
              <h1
                className={`font-semibold text-[14px] w-44 items-center flex ${
                  isHovered ? "text-[#3058A5]" : "text-[#E6E6E6]"
                }`}
              >
                {step.SmTitle}
              </h1>
            </div>
            <img
              src={`/assets/Publishing process/${step.id}.png`}
              alt="Step Image"
              className="w-full lg:w-52 sm:mx-48 sm:mb-8 lg:m-10"
            />
          </div>
        </div>
        {/* text */}
        <div
          className={`lg:py-10 ${
            isOddStep ? "m-8 lg:m-16" : "p-8 lg:m-16"
          } sm:${isOddStep ? "m-32 lg:m-0 " : "m-32 lg:p-0"}`}
        >
          <h2 className="font-bold text-[12px] lg:hidden">{step.mainTitle}</h2>
          <p
            className={`text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 text-[#E6E6E6]"
          }`}
          >
            {step.description}
          </p>
          <br />
          {step.description2 && (
            <div>
              <p className="text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
                {step.description2}
              </p>
              <br />
            </div>
          )}
          {step.description3 && (
            <div>
              <p className="text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
                {step.description3}
              </p>
              <br />
            </div>
          )}
          <h4 className="text-[12px] leading-8 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 text-[#6C686B]">
            Top tip
          </h4>
          <p className="text-[12px] leading-8 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 mt-1 text-[#6C686B]">
            {step.tipContent}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step;
