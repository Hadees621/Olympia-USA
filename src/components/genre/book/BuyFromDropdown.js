"use client";
import React, { useState } from "react";

const OptionWithIcon = ({ value, label, icon }) => {
  const handleHover = (event) => {
    event.target.style.backgroundColor = "bg-gray-100";
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = "bg-white";
  };

  return (
    <option
      value={value}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      className="bg-white"
    >
      {label}
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="inline-block ml-1 w-4 h-4"
        >
          <path fill="currentColor" d={icon} />
        </svg>
      )}
    </option>
  );
};

const BuyFromDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("BUY FROM");
  const amazonIcon =
    "M6.5 2a.5.5 0 0 0 0 1h5A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5a.5.5 0 0 0 0 1h5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm3.354 5.646l-3-3a.5.5 0 1 0-.708.708L8.293 7.5H1.5a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708";

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full inline-block">
      <label htmlFor="buyFrom" className="mr-2">
        BUY FROM:
      </label>
      <select
        id="buyFrom"
        className="border border-gray-300 rounded px-2 py-1 w-full"
        onChange={handleOptionChange}
      >
        <option
          value="BUY FROM"
          className={selectedOption === "BUY FROM" ? "bg-red-500" : ""}
        >
          {selectedOption}
        </option>
        <OptionWithIcon
          value="amazon_us"
          label="Amazon.com"
          icon={amazonIcon}
        />
        <OptionWithIcon
          value="amazon_uk"
          label="Amazon.co.uk"
          icon={amazonIcon}
        />
        <OptionWithIcon value="amazon_in" label="Amazon.in" icon={amazonIcon} />
        <OptionWithIcon
          value="barnes_noble"
          label="Barnes & Noble"
          icon={amazonIcon}
        />
        <OptionWithIcon
          value="waterstones"
          label="Waterstones"
          icon={amazonIcon}
        />
      </select>
    </div>
  );
};

export default BuyFromDropdown;

// import React from "react";

// const OptionWithIcon = ({ value, label, icon }) => {
//   const handleHover = (event) => {
//     event.target.style.backgroundColor = "bg-gray-100";
//   };

//   const handleMouseOut = (event) => {
//     event.target.style.backgroundColor = "bg-white";
//   };

//   return (
//     <option
//       value={value}
//       onMouseOver={handleHover}
//       onMouseOut={handleMouseOut}
//       className="bg-white"
//     >
//       {label}
//       {icon && (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="1em"
//           height="1em"
//           viewBox="0 0 16 16"
//           className="inline-block ml-1 w-4 h-4"
//         >
//           <path fill="currentColor" d={icon} />
//         </svg>
//       )}
//     </option>
//   );
// };

// const BuyFromDropdown = () => {
//   const amazonIcon =
//     "M6.5 2a.5.5 0 0 0 0 1h5A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5a.5.5 0 0 0 0 1h5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm3.354 5.646l-3-3a.5.5 0 1 0-.708.708L8.293 7.5H1.5a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708";

//   return (
//     <div className="w-full inline-block">
//       <select
//         id="buyFrom"
//         className="border border-gray-300 rounded px-2 py-1 w-full"
//       >
//         <OptionWithIcon
//           value="amazon_us"
//           label="Amazon.com"
//           icon={amazonIcon}
//         />
//         <OptionWithIcon
//           value="amazon_uk"
//           label="Amazon.co.uk"
//           icon={amazonIcon}
//         />
//         <OptionWithIcon value="amazon_in" label="Amazon.in" icon={amazonIcon} />
//         <OptionWithIcon
//           value="barnes_noble"
//           label="Barnes & Noble"
//           icon={amazonIcon}
//         />
//         <OptionWithIcon
//           value="waterstones"
//           label="Waterstones"
//           icon={amazonIcon}
//         />
//       </select>
//     </div>
//   );
// };

// export default BuyFromDropdown;
