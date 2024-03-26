import React from "react";
import FictionDropdown from "./FictionDropdown";
import NonfictionDropdown from "./NonfictionDropdown";
import BumblebeeDropdown from "./BumblebeeDropdown";
import { useSortByStore } from "@/stores/States";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              d="m6 6l12 12m0-12L6 18"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
          >
            <path fill="currentColor" d="m7 10l5 5l5-5z" />
          </svg>
        </div>
        {showDropdown1 && <FictionDropdown />}
        <div
          className={`flex items-center justify-between ${
            showDropdown2 ? "py-4" : "border-b py-4"
          }`}
          onClick={() => toggleDropdown2()}
        >
          <h1>NON-FICTION</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
          >
            <path fill="currentColor" d="m7 10l5 5l5-5z" />
          </svg>
        </div>
        {showDropdown2 && <NonfictionDropdown />}
        <div
          className={`flex items-center justify-between ${
            showDropdown3 ? "py-4" : "border-b py-4"
          }`}
          onClick={() => toggleDropdown3()}
        >
          <h1>BUMBLEBEE BOOKS</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
          >
            <path fill="currentColor" d="m7 10l5 5l5-5z" />
          </svg>
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
