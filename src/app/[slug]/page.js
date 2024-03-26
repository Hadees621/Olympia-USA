"use client";
import React from "react";
import Banner from "@/components/genre/Banner";
import { useSortByStore } from "@/stores/States";
import FilterByDropdown from "@/components/genre/FilterByDropdown";
import BookComponent from "@/components/home/BookComponent";
import { Books } from "@/utils/home/Books";
import LgBanner from "@/components/genre/LgBanner";
import SmPagination from "@/components/genre/SmPagination";
import Dropdownsvg from "@/components/genre/Dropdownsvg";

export default function Page({ params }) {
  const { showSortOptions, setShowSortOptions } = useSortByStore();

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
            <div
              className="flex items-center gap-2"
              onClick={() => setShowSortOptions()}
            >
              <h1>Sort by</h1>
              <Dropdownsvg />
            </div>
          </div>
        ) : (
          <FilterByDropdown />
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center">
          {Books.map((book, index) => (
            <div className="flex-none" key={index}>
              <BookComponent
                src={book.src}
                title={book.title}
                author={book.author}
              />
            </div>
          ))}
        </div>
        <SmPagination />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px] hidden lg:block h-80 border"></div>
      </div>
    </div>
  );
}
