"use client";

import React, { useState } from "react";

function InputField({
  label,
  width = "w-full",
  isRequired = true,
  showRequiredText = true,
}) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    if (isRequired) {
      setTouched(true);
    }
  };

  const isError = touched && isRequired && !value.trim();
  const inputClass = `border ${
    isError ? "border-red-500" : "border-black"
  } text-gray-900 text-sm rounded-md p-4 ${width}`;

  return (
    <div className={`flex flex-col ${width} my-1`}>
      <div className="flex justify-between items-center mb-2">
        <label
          htmlFor="first_name"
          className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] font-medium text-gray-900"
        >
          {label}
          {isRequired && "*"}
        </label>
        {isError && showRequiredText && (
          <p className="text-red-500 text-[11px] font-medium">
            *Required field must be filled in
          </p>
        )}
      </div>
      <input
        type="text"
        id="first_name"
        className={inputClass}
        required={isRequired}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default InputField;
