import React from "react";
import BookComponent from "./BookComponent";
import { Books } from "@/utils/home/Books";

const SmScreenPopular = () => {
  return (
    <div>
      <div className="flex justify-center lg:justify-between items-center py-10 px-5 lg:px-0 lg:bg-white">
        <div>
          <p className="text-[23px] font-semibold font-open-sans">
            MOST POPULAR
          </p>
        </div>
      </div>
      
      <div className="flex overflow-x-auto gap-5 lg:gap-0 lg:justify-center lg:border lg:border-black ml-10 mr-5 lg:mx-0">
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
