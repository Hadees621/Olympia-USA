import React from "react";

const SearchBar = () => {
  return (
    <div class="flex items-center bg-white shadow-md mx-5 px-5 m-5">
      <input
        type="search"
        class="block w-full p-4 text-sm text-gray-900 rounded-lg focus:outline-none"
        placeholder="Search books and authors..."
        required
      />
      <svg
        class="w-5 h-5 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
