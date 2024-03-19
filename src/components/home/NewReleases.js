import React from "react";
import BookComponent from "./BookComponent";
import { Books } from "@/utils/home/Books";
import Button from "../common/Button";

const NewReleases = () => {
  return (
    <div className="lg:max-w-[800px] 2xl:max-w-[1300px]">
      <div className="flex justify-center lg:justify-between items-center py-10 px-5 lg:px-0 lg:bg-white">
        <div>
          <p className="text-[26px] font-semibold font-droid-sans hidden lg:block">
            New Releases
          </p>
          <p className="text-[23px] font-semibold font-open-sans lg:hidden">
            NEW RELEASES
          </p>
        </div>
        <div className="hidden lg:block">
          <Button title="EXPLORE MORE" width="w-[150px]" color="transparent" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-0 lg:flex items-center justify-center lg:border lg:border-black mx-5 lg:mx-0">
        {Books.map((book, index) => (
          <div className="">
            <BookComponent
              key={index}
              src={book.src}
              title={book.title}
              author={book.author}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center lg:hidden">
        <button
          className={`text-[14px] py-[12px] font-semibold font-open-sans shadow flex items-center justify-center border border-buttonred text-buttonred px-3 w-[170px] my-7 `}
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default NewReleases;
