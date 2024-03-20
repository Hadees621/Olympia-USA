import React from "react";

const SearchMenu = () => {
  return (
    <div className="flex flex-col px-6">
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

      <div className="w-full flex justify-center py-14">
        <button className="text-[14px] py-[12px] font-semibold font-droid-sans shadow flex items-center justify-center border border-red-300 w-[140px] text-red-500">
          See all results
        </button>
      </div>
    </div>
  );
};

export default SearchMenu;
