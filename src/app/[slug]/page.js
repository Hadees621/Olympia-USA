"use client";
import React, { useState } from "react";
import Banner from "@/components/genre/Banner";
import { useSortByStore } from "@/stores/States";
import FilterByDropdown from "@/components/genre/FilterByDropdown";
import BookComponent from "@/components/home/BookComponent";
import { Books } from "@/utils/home/Books";
import LgBanner from "@/components/genre/LgBanner";
import SmPagination from "@/components/genre/SmPagination";
import SvgDropdown from "@/components/genre/SvgDropdown";
import Cross from "@/components/common/navbar/comp/Cross";

export default function Page({ params }) {
  const { showSortOptions, setShowSortOptions } = useSortByStore();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectOption = (option) => {
    console.log("Selected option:", option);
    // You can perform further actions here when an option is selected
  };

  return (
    <div className="px-4">
      {window.innerWidth >= 1024 ? (
        <LgBanner params={params} />
      ) : (
        <Banner params={params} />
      )}

      <div className="lg:hidden">
        {!showSortOptions ? (
          <div className="flex items-center justify-between py-8 font-semibold md:px-6">
            <h1>Filter by</h1>
            <div className="flex items-center gap-2" onClick={() => setShowSortOptions()}>
              <h1>Sort by</h1>
              <SvgDropdown />
            </div>
          </div>
        ) : (
          <FilterByDropdown />
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center">
          {Books.map((book, index) => (
            <div className="flex-none" key={index}>
              <BookComponent src={book.src} title={book.title} author={book.author} />
            </div>
          ))}
        </div>
        <SmPagination />
      </div>

      <div className="lg:max-w-[800px] xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto">
        <div className="flex items-center p-8 gap-12 font-semibold text-[12px] xl:text-[15px] 2xl:text-[18px]">
          <div className="w-1/5">
            <h1 className="border-y border-gray-300 py-6 text-[12px] xl:text-[15px] 2xl:text-[18px]">FILTER BY</h1>
          </div>
          <div className="w-4/5">
            <div className="flex justify-between border-y border-gray-300">
              <div className="flex items-center py-4">
                <h1>ADVENTURE</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" d="m6 6l12 12m0-12L6 18" />
                </svg>
              </div>
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center gap-24 xl:gap-36 focus:outline-none py-4">
                  <h1>SORT BY</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 14.5a.74.74 0 0 1-.53-.22L8 10.78a.75.75 0 0 1 1-1.06l3 3l3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1-.5.22" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                {showDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md border border-gray-300 text-[10px] xl:text-[12px] 2xl:text-[15px]">
                    {[1, 2, 3, 4].map((option, index) => (
                      <h1 key={index} onClick={() => selectOption(`Option ${option}`)} className={`${index !== 3 ? 'border-b ' : ''} w-full p-2 xl:p-4 cursor-pointer`}>
                        {option === 3 ? 'Publication date (new - old)' : option === 4 ? 'Best sellers' : `A - Z`}
                      </h1>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
