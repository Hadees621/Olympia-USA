"use client";

import React, { useState } from "react";
import { useBumblebeeStore } from "@/stores/States";

const BuyFromDropdown = () => {
  const { flag } = useBumblebeeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const baseColorClass = flag
    ? "bg-[#FCC30B] text-black"
    : "bg-[#C42222] text-white";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["Amazon", "Watertones", "Book depository"];

  return (
    <div className={`relative border border-${baseColorClass}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen ? "true" : "false"}
        aria-labelledby="listbox-label"
        onClick={toggleDropdown}
        onBlur={() => setIsOpen(false)}
        className={`flex items-center justify-between w-full ${baseColorClass} px-6 py-3 text-sm leading-normal shadow-primary-3 transition duration-150 ease-in-out focus:shadow-primary-2 focus:outline-none focus:ring-0 font-semibold w-full`}
      >
        {selectedOption || "BUY FROM"}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 17l5-5H5l5 5z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div
          tabIndex="-1"
          role="listbox"
          id="options"
          className={`absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg max-h-56 overflow-auto focus:outline-none sm:text-sm ${
            flag ? "border border-[#FCC30B]" : "border border-[#C42222]"
          }`}
          aria-labelledby="listbox-label"
          onBlur={() => setIsOpen(false)}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onMouseEnter={() => setSelectedOption(option)}
              onMouseLeave={() => setSelectedOption("")}
              onClick={() => handleOptionClick(option)}
              className="option text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 flex justify-between items-center hover:bg-[#FAFAFA]"
            >
              <span className="font-normal block truncate">{option}</span>
              <svg
                className="h-5 w-5 stroke-current text-[#DFDFDF] hidden cursor-pointer"
                style={{
                  display: selectedOption === option ? "block" : "none",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  stroke="#2D6DB2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 3h7v7m-1.5-5.5L20 12m-3-7H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9"
                />
              </svg>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuyFromDropdown;
