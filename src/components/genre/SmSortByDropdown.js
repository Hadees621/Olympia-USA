import React from "react";
import Cross from "./Cross";
import { useSortByStore } from "@/stores/States";

const SmSortByDropdown = () => {
  const { setSortByDropdown } = useSortByStore();
  return (
    <div className="mt-2 w-full bg-white rounded-md text-[10px] xl:text-[12px] 2xl:text-[15px]">
      <div className="flex justify-between items-center w-full border-b py-4 md:px-6">
        <h1 className="font-semibold text-[14px]">Sort by</h1>
        <Cross onClick={setSortByDropdown} key={1} />
      </div>
      <div className="font-medium font-open-sans space-y-6 text-[13px] py-5 px-3 md:px-6 flex flex-col">
        <div className="flex justify-between items-center">
          <h1>A - Z</h1>
          <label className="flex items-center">
            <input type="radio" name="sortBy" value="AtoZ" />
            <span className="ml-2"></span>{" "}
          </label>
        </div>
        <div className="flex justify-between items-center">
          <h1>Z - A</h1>
          <label className="flex items-center">
            <input type="radio" name="sortBy" value="ZtoA" />
            <span className="ml-2"></span>{" "}
          </label>
        </div>
        <div className="flex justify-between items-center">
          <h1>Publication date (new - old)</h1>
          <label className="flex items-center">
            <input type="radio" name="sortBy" value="NewToOld" />
            <span className="ml-2"></span>{" "}
          </label>
        </div>
        <div className="flex justify-between items-center">
          <h1>Best sellers</h1>
          <label className="flex items-center">
            <input type="radio" name="sortBy" value="BestSellers" />
            <span className="ml-2"></span>{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default SmSortByDropdown;
