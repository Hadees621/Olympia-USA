"use client";
import React, { useState } from "react";
import Banner from "@/components/genre/Banner";
import { useSortByStore } from "@/stores/States";
import FilterByDropdown from "@/components/genre/FilterByDropdown";
import BookComponent from "@/components/home/BookComponent";
import { Books } from "@/utils/home/Books";
import SmPagination from "@/components/genre/SmPagination";
import SvgDropdown from "@/components/genre/SvgDropdown";
import SortByDropdown from "@/components/genre/SortByDropdown";
import SortBySvg from "@/components/genre/SortBySvg";
import FictionDropdown from "@/components/genre/FictionDropdown";
import NonfictionDropdown from "@/components/genre/NonfictionDropdown";
import BumblebeeDropdown from "@/components/genre/BumblebeeDropdown";
import { SidebarMenu } from "@/components/genre/sidebar/SidebarMenu";
import { DropdownSection } from "@/components/genre/sidebar/DropdownSection";
import LgPagination from "@/components/feature/LgPagination";
import LgBanner from "@/components/genre/LgBanner";

export default function Page() {
  const { showSortOptions, setShowSortOptions } = useSortByStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const sidebarItems = ["New releases", "Most popular", "Editors picks"];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectOption = (option) => {};

  return (
    <div className="px-4">
      <div className="lg:hidden">
        <Banner />
      </div>
      <div className="hidden lg:block">
        <LgBanner />
      </div>
      <div className="lg:hidden">
        {!showSortOptions ? (
          <div className="flex items-center justify-between py-4 font-semibold md:px-6">
            <h1>Filter by</h1>
            <div
              className="flex items-center gap-2"
              onClick={() => setShowSortOptions()}
            >
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
      <div className="lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1600px] mx-auto hidden lg:block">
        <div className="flex items-center p-8 gap-12 font-semibold text-[12px] xl:text-[15px] 2xl:text-[18px]">
          <div className="w-1/5">
            <h1 className="border-y border-gray-300 py-6 text-[12px] xl:text-[15px] 2xl:text-[18px]">
              FILTER BY
            </h1>
          </div>
          <div className="w-4/5">
            <div className="flex justify-between border-y border-gray-300">
              <div className="flex items-center py-4 gap-3">
                <h1>ADVENTURE</h1>
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
                  onClick={toggleDropdown}
                  className="flex items-center gap-24 xl:gap-36 focus:outline-none py-4"
                >
                  <h1>SORT BY</h1>
                  <SortBySvg />
                </button>
                {showDropdown && <SortByDropdown selectOption={selectOption} />}
              </div>
            </div>
          </div>
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
          </div>
        </div>
        <LgPagination />
      </div>
      );
    </div>
  );
}