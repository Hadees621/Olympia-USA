import React from "react";

const SearchDropdown = () => {
  return (
    <div className="absolute top-full -left-8 bg-white rounded-md p-8 mt-1 z-20 h-[300px] w-[450px] xl:w-[550px] 2xl:w-[800px] overflow-y-auto">
      <div className="flex flex-col px-6 text-[10px]">
        <div className="text-md gap-4 grid my-5">
          <p className="text-gray-400 font-medium">Books</p>
          <p>Book title — Author name</p>
          <p>Book title — Author name</p>
          <p>Book title — Author name</p>
        </div>

        <hr className="w-full border-b border-gray-100 mt-1 my-5" />

        <div className="text-md gap-4 grid">
          <p className="text-gray-400 font-medium">Authors</p>
          <p>Author name</p>
          <p>Author name</p>
          <p>Author name</p>
        </div>

        <div className="w-full flex justify-center py-4">
          <button className="text-[14px] py-[12px] font-semibold font-droid-sans shadow flex items-center justify-center border border-red-300 w-[140px] text-red-500">
            See all results
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
