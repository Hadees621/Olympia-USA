import React from "react";
import SearchDropdown from "./SearchDropdown";
import { useNavbarStore } from "@/stores/States";

const SearchBar = () => {
  const { searchDropdownOpen, toggleSearchDropdown } = useNavbarStore();

  return (
    <div className="relative flex items-center bg-gray-50 px-5 mt-3">
      <input
        type="search"
        className="block w-full p-4 text-sm text-gray-900 rounded-lg bg-gray-50 focus:outline-none"
        placeholder="Search books and authors..."
        required
        onClick={toggleSearchDropdown}
      />
      <svg
        className="w-4 h-4 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      {searchDropdownOpen && <SearchDropdown />}
    </div>
  );
};

export default SearchBar;
