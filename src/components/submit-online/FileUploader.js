"use client";

import React, { useState } from "react";

const FileUploader = ({ id }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const removeFileName = () => {
    setFileName("");
  };

  return (
    <div className="flex items-center">
      <label
        htmlFor={`${id}_file_input`}
        className="inline-block py-4 font-bold text-center text-gray-900 border border-black cursor-pointer text-[10px] w-[30%]"
      >
        SELECT FILES
      </label>
      <input
        id={`${id}_file_input`}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      {fileName && (
        <span className="flex justify-between ml-4 text-sm text-gray-600 bg-[#FAF9F9] py-4 px-5 items-center gap-5 font-bold uppercase w-[65%]">
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M3 1h12.414L21 6.586V23H3zm15.586 6L15 3.414V7zM13 3H5v18h14V9h-6zm-6 9h10v2H7zm0 4h10v2H7z"
              />
            </svg>
            {fileName}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            onClick={removeFileName}
            className="cursor-pointer"
          >
            <path
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeWidth="2"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default FileUploader;
