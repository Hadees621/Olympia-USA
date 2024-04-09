import React from "react";
import Cross from "./Cross";
import { useSortByStore } from "@/stores/States";

const SmSortByDropdown = () => {
  const { setSortByDropdown } = useSortByStore();
  return (
    <div className="mt-2 w-full bg-white rounded-md text-[10px] xl:text-[12px] 2xl:text-[15px]">
      <div className="flex justify-between items-center w-full border-b py-4">
        <h1>Sort by</h1>
        <Cross onClick={setSortByDropdown} key={1} />
      </div>
      <h1>asdgsdagsasdfvadf</h1>
      <h1>asdgsdagsasdfvadf</h1>
      <h1>asdgsdagsasdfvadf</h1>
      <h1>asdgsdagsasdfvadf</h1>
      <h1>asdgsdagsasdfvadf</h1>
      <h1>asdgsdagsasdfvadf</h1>
      <h1>asdgsdagsasdfvadf</h1>
      <h1>asdgsdagsasdfvadf</h1>
      <h1>asdgsdagsasdfvadf</h1>
    </div>
  );
};

export default SmSortByDropdown;
