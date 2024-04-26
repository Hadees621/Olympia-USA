import { useSortByStore } from "@/stores/States";
import React, { useState } from "react";

const SortByDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleOptionClick = (option) => {
    setTitle(option);
  };
  const { setTitle } = useSortByStore();

  return (
    <div
      className="absolute top-12 xl:top-14 left-0 mt-2 w-full bg-white rounded-md border border-gray-300 text-[10px] xl:text-[12px] 2xl:text-[15px] "
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div>
        <h1
          onClick={() => handleOptionClick("A - Z")}
          className="border-b w-full p-2 xl:p-4 cursor-pointer"
        >
          A - Z
        </h1>
        <h1
          onClick={() => handleOptionClick("Z - A")}
          className="border-b w-full p-2 xl:p-4 cursor-pointer"
        >
          Z - A
        </h1>
        <h1
          onClick={() => handleOptionClick("Publication date (new - old)")}
          className="border-b w-full p-2 xl:p-4 cursor-pointer"
        >
          Publication date (new - old)
        </h1>
        <h1
          onClick={() => handleOptionClick("Best sellers")}
          className="w-full p-2 xl:p-4 cursor-pointer"
        >
          Best sellers
        </h1>
      </div>
      {/* )} */}
    </div>
  );
};

export default SortByDropdown;
