import React from "react";
import BookComponent from "./BookComponent";
import { Books } from "@/utils/home/Books";

const SmScreenPopular = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center lg:justify-between items-center pt-10 px-10 lg:px-0 lg:bg-white">
        <p className="text-[21px] font-bold font-open-sans">MOST POPULAR</p>
      </div>

      <div className="flex overflow-x-scroll lg:overflow-x-hidden pt-8 lg:py-0 lg:border lg:border-black mx-5 gap-3">
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

      <div className="flex overflow-x-scroll lg:overflow-x-hidden pt-8 lg:py-0 lg:border lg:border-black mx-5 gap-3">
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

export default SmScreenPopular;
