"use client";
import React from "react";
import Banner from "@/components/genre/Banner";
import { useSortByStore } from "@/stores/States";
import FilterByDropdown from "@/components/genre/FilterByDropdown";

export default function Page({ params }) {
  const { showSortOptions, setShowSortOptions } = useSortByStore();

  return (
    <div className="px-4">
      <Banner params={params} />

      {!showSortOptions ? (
        <div className="flex items-center justify-between py-8 font-semibold">
          <h1>Filter by</h1>
          <div
            className="flex items-center gap-2"
            onClick={() => setShowSortOptions()}
          >
            <h1>Sort by</h1>
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
        </div>
      ) : (
        <FilterByDropdown />
      )}
    </div>
  );
}
