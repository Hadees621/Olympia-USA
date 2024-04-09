import React from "react";
import FictionDropdown from "./FictionDropdown";
import NonfictionDropdown from "./NonfictionDropdown";
import BumblebeeDropdown from "./BumblebeeDropdown";
import { useSortByStore } from "@/stores/States";
import Cross from "./Cross";
import SvgDropdown from "./SvgDropdown";

const DropdownItem = ({ title, showDropdown, toggleDropdown, children }) => (
  <div>
    <div
      className={`flex items-center justify-between ${
        showDropdown ? "py-4" : "border-b py-4"
      }`}
      onClick={toggleDropdown}
    >
      <h1>{title}</h1>
      <SvgDropdown />
    </div>
    {showDropdown && children}
  </div>
);

const FilterByDropdown = () => {
  const {
    showDropdown1,
    showDropdown2,
    showDropdown3,
    toggleDropdown1,
    toggleDropdown2,
    toggleDropdown3,
    toggleShowFilterOptions,
  } = useSortByStore();

  return (
    <div className="py-8 font-semibold md:px-8">
      <div className="flex justify-between items-center w-full border-b py-4">
        <h1>Filter by</h1>
        <Cross onClick={toggleShowFilterOptions} />
      </div>
      <div>
        <DropdownItem
          title="FICTION"
          showDropdown={showDropdown1}
          toggleDropdown={toggleDropdown1}
        >
          <div className="py-4 px-1">
            <FictionDropdown />
          </div>
        </DropdownItem>
        <DropdownItem
          title="NON-FICTION"
          showDropdown={showDropdown2}
          toggleDropdown={toggleDropdown2}
        >
          <NonfictionDropdown />
        </DropdownItem>
        <DropdownItem
          title="BUMBLEBEE BOOKS"
          showDropdown={showDropdown3}
          toggleDropdown={toggleDropdown3}
        >
          <BumblebeeDropdown />
        </DropdownItem>
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
