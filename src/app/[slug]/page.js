"use client";
import React from "react";
import Banner from "@/components/genre/Banner";
import { useSortByStore } from "@/stores/States";
import FilterByDropdown from "@/components/genre/FilterByDropdown";
import Dropdownsvg from "@/components/genre/dropdownsvg";
import BookComponent from "@/components/home/BookComponent";
import { Books } from "@/utils/home/Books";
import Button from "@/components/feature/Button";

export default function Page({ params }) {
  const { showSortOptions, setShowSortOptions } = useSortByStore();

  return (
    <div className="px-4">
      <Banner params={params} />

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

      <div className="grid grid-cols-2  md:grid-cols-4 lg:flex items-center justify-center">
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

      <div className="flex flex-col w-full justify-center items-center py-8 lg:hidden">
        <nav aria-label="Page navigation example ">
          <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  class="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  class="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <button
          className={`text-[12px] py-2 px-6 font-semibold font-open-sans shadow border border-red-500 text-buttonred flex items-center justify-center my-7 w-[130px]`}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
