"use client"
import { useState } from "react";

const NavigationButtons = ({ data, flag }) => {
  const [selectedAlphabet, setSelectedAlphabet] = useState("");

  const handleClick = (alphabet) => {
    setSelectedAlphabet(alphabet);
  };

  return (
    <>
      <div className="overflow-x-auto py-6 xl:py-2 ml-5 lg:border-b">
        <div className="flex justify-between 2xl:justify-center 2xl:gap-28 gap-9 lg:gap-6 ">
          {data.map((button, index) => (
            <button
              key={index}
              className="text-[12px] lg:text-[10px] xl:text-[12px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 lg:w-max hover:text-[#C9444F] my-7 whitespace-nowrap"
              onClick={() => handleClick(button.title)}
            >
              {button.title}
            </button>
          ))}
        </div>
      </div>
      {flag && (
        <h1 className="pt-4 text-buttonred text-[60px] font-semibold hidden lg:block">
          {selectedAlphabet}
        </h1>
      )}
    </>
  );
};

export default NavigationButtons;
