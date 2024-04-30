"use client";

import React, { useEffect } from "react";
import BookComponent from "./BookComponent";
import { Books } from "@/utils/home/Books";
import Button from "../common/Button";
import { useBumblebeeStore } from "@/stores/States";

const NewReleases = () => {
  const { flag } = useBumblebeeStore();

  return (
    <div className="lg:max-w-[850px] xl:max-w-[1200px] 2xl:max-w-[1600px]">
      <div className="flex justify-center lg:justify-between items-center py-10 px-5 lg:px-0 lg:bg-white mx-5">
        <div>
          <p className="text-[25px] font-bold font-droid-sans hidden lg:block">
            New Releases
          </p>
          <p className="text-[21px] font-bold font-open-sans lg:hidden">
            NEW RELEASES
          </p>
        </div>
        <div className="hidden lg:block">
          <Button
            title="EXPLORE MORE"
            width="w-[150px]"
            color={flag ? "yellow" : "red"}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-center justify-center mx-5">
        {Books.map((book, index) => (
          <div className="flex-none" key={index}>
            <BookComponent
              src={book.src}
              title={book.title}
              author={book.author}
              bumblebee={flag}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center lg:hidden">
        <button
          className={`text-[14px] py-[12px] font-semibold font-open-sans shadow flex items-center justify-center border border-buttonred text-buttonred px-3 w-[170px] my-7`}
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default NewReleases;
