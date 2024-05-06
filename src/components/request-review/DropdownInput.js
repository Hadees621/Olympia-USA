"use client";

import React, { useState } from "react";

function DropdownInput({
  label,
  options,
  width = "w-full",
  isRequired = true,
  showRequiredText = true,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    if (isRequired) {
      setTouched(true);
    }
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const isError = touched && isRequired && !selectedOption;
  const inputClass = `border ${
    isError ? "border-red-500" : "border-black"
  } text-gray-900 text-sm rounded-md p-4 ${width}`;

  return (
    <div className={`flex flex-col ${width} my-1`}>
      <div className="flex justify-between items-center mb-2">
        <label
          htmlFor="dropdown_input"
          className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] font-medium text-gray-900"
        >
          {label}
          {isRequired && "*"}
        </label>
      </div>
      <select
        id="dropdown_input"
        className={inputClass}
        required={isRequired}
        value={selectedOption}
        onChange={(e) => selectOption(e.target.value)}
        onBlur={handleBlur}
      >
        <option value="" disabled hidden>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {isError && showRequiredText && (
        <p className="text-red-500 text-[11px] font-medium">
          *Required field must be filled in
        </p>
      )}
    </div>
  );
}

export default DropdownInput;
