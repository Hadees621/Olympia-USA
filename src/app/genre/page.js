"use client";

import React, { useEffect, useState } from "react";
import FilterByDropdown from "@/components/genre/FilterByDropdown";
import Banner from "@/components/genre/Banner";
import BookComponent from "@/components/home/BookComponent";
import SmPagination from "@/components/genre/SmPagination";
import SvgDropdown from "@/components/genre/SvgDropdown";
import SortByDropdown from "@/components/genre/SortByDropdown";
import SortBySvg from "@/components/genre/SortBySvg";
import FictionDropdown from "@/components/genre/FictionDropdown";
import NonfictionDropdown from "@/components/genre/NonfictionDropdown";
import BumblebeeDropdown from "@/components/genre/BumblebeeDropdown";
import LgPagination from "@/components/feature/LgPagination";
import LgBanner from "@/components/genre/LgBanner";
import SmSortByDropdown from "@/components/genre/SmSortByDropdown";
import { useSortByStore } from "@/stores/States";
import { DropdownSection } from "@/components/genre/sidebar/DropdownSection";
import { SidebarMenu } from "@/components/genre/sidebar/SidebarMenu";
import { fictionBanner, fictionLgBanner } from "@/utils/genre/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import booksData from "@/utils/books/utils.json";

export default function Page() {
  const {
    sortByDropdown,
    showFilterOptions,
    setSortByDropdown,
    toggleShowFilterOptions,
    showDropdown,
    setShowDropdown,
  } = useSortByStore();
  const params = useParams();

  const [books, setBooks] = useState([]);

  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);

  const sidebarItems = ["New releases", "Most popular", "Editors picks"];

  const selectOption = (option) => {};

  useEffect(() => {
    if (showFilterOptions || sortByDropdown) {
      setIsAnyDropdownOpen(true);
    } else {
      setIsAnyDropdownOpen(false);
    }
  }, [showFilterOptions, sortByDropdown]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className="px-4">
      <div className="lg:hidden">
        <Banner title={"Fiction"} img={fictionBanner} />
      </div>
      <div className="hidden lg:block">
        <LgBanner title={"Fiction"} img={fictionLgBanner} />
      </div>
      <div className="lg:hidden">
        {!isAnyDropdownOpen && (
          <div className="flex items-center justify-between py-4 font-semibold md:px-6">
            <h1 onClick={toggleShowFilterOptions}>Filter by</h1>
            <div className="flex items-center gap-2">
              <h1 onClick={setSortByDropdown}>Sort by</h1>
              <SvgDropdown />
            </div>
          </div>
        )}

        {showFilterOptions && <FilterByDropdown />}
        {sortByDropdown && <SmSortByDropdown />}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center gap-3">
          {books.map((book, index) => (
            <div className="flex-none" key={index}>
              <BookComponent
                src={book.src}
                title={book.title}
                author={book.author}
                bookId={book.id}
              />
            </div>
          ))}
        </div>
        <SmPagination />
      </div>
      <div className="lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1600px] mx-auto hidden lg:block">
        <div className="flex items-center p-8 gap-12 font-semibold text-[12px] xl:text-[15px] 2xl:text-[18px]">
          <div className="w-1/5">
            <h1 className="border-y border-gray-300 py-4 text-[12px] xl:text-[13px] 2xl:text-[18px]">
              FILTER BY
            </h1>
          </div>
          <div className="w-4/5">
            <div className="flex justify-between border-y border-gray-300">
              <div className="flex items-center py-4 gap-3">
                <h1 className="font-open-sans text-[12px] xl:text-[13px] 2xl:text-[18px]">
                  ADVENTURE
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    d="m6 6l12 12m0-12L6 18"
                  />
                </svg>
              </div>
              <div className="relative">
                <button
                  onClick={setShowDropdown}
                  className="flex items-center gap-24 xl:gap-28 focus:outline-none py-4 border px-4"
                >
                  <h1 className="text-[12px] xl:text-[13px] 2xl:text-[18px]">
                    SORT BY
                  </h1>
                  <SortBySvg />
                </button>
                {showDropdown && <SortByDropdown selectOption={selectOption} />}
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      <div className="lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1600px] mx-auto hidden lg:block">
        <div className="flex items- px-8 gap-12 font-semibold text-[10px] xl:text-[12px] 2xl:text-[15px]">
          <div className="w-1/5">
            <SidebarMenu items={sidebarItems} />
            <div className="grid font-semibold text-[10px] xl:text-[15px] 2xl:text-[18px]">
              <DropdownSection
                title="Fiction"
                DropdownComponent={FictionDropdown}
              />
              <DropdownSection
                title="Non-Fiction"
                DropdownComponent={NonfictionDropdown}
              />
              <DropdownSection
                title="Bumblebee Books"
                DropdownComponent={BumblebeeDropdown}
              />
            </div>
          </div>
          <div className="w-4/5">
            <div className="grid grid-cols-4">
              {books.map((book, index) => (
                <div className="flex-none" key={index}>
                  <BookComponent
                    src={book.src}
                    title={book.title}
                    author={book.author}
                    bookId={book.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <LgPagination />
      </div>
    </div>
  );
}
