import React from "react";
import FictionDropdown from "./FictionDropdown";
import NonfictionDropdown from "./NonfictionDropdown";
import BumblebeeDropdown from "./BumblebeeDropdown";
import { useSortByStore } from "@/stores/States";
import Dropdownsvg from "./dropdownsvg";
import Cross from "./Cross";

const FilterByDropdown = () => {
  const {
    showDropdown1,
    showDropdown2,
    showDropdown3,
    setShowSortOptions,
    toggleDropdown1,
    toggleDropdown2,
    toggleDropdown3,
  } = useSortByStore();

  return (
    <div className="py-8 font-semibold">
      <div className="flex justify-between items-center w-full border-b py-4">
        <h1>Filter by</h1>
        <div onClick={() => setShowSortOptions()} style={{ cursor: "pointer" }}>
          <Cross />
        </div>
      </div>
      <div>
        <div
          className={`flex items-center justify-between ${
            showDropdown1 ? "py-4" : "border-b py-4"
          }`}
          onClick={() => toggleDropdown1()}
        >
          <h1>FICTION</h1>
          <Dropdownsvg />
        </div>
        {showDropdown1 && <FictionDropdown />}
        <div
          className={`flex items-center justify-between ${
            showDropdown2 ? "py-4" : "border-b py-4"
          }`}
          onClick={() => toggleDropdown2()}
        >
          <h1>NON-FICTION</h1>
          <Dropdownsvg />
        </div>
        {showDropdown2 && <NonfictionDropdown />}
        <div
          className={`flex items-center justify-between ${
            showDropdown3 ? "py-4" : "border-b py-4"
          }`}
          onClick={() => toggleDropdown3()}
        >
          <h1>BUMBLEBEE BOOKS</h1>
          <Dropdownsvg />
        </div>
        {showDropdown3 && <BumblebeeDropdown />}
        <div className="cursor-pointer space-y-3 mt-4">
          <h1>NEW RELEASES</h1>
          <h1>MOST POPULAR</h1>
          <h1>EDITOR PICKS</h1>
        </div>
      </div>
    </div>
  );
};

export default FilterByDropdown;
