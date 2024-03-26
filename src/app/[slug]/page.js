"use client";
import React from "react";
import Banner from "@/components/genre/Banner";
import { useSortByStore } from "@/stores/States";
import FilterByDropdown from "@/components/genre/FilterByDropdown";
import Dropdownsvg from "@/components/genre/dropdownsvg";

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
            <Dropdownsvg />
          </div>
        </div>
      ) : (
        <FilterByDropdown />
      )}
    </div>
  );
}
