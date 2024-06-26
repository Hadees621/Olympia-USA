import React from "react";
import BookComponent from "./BookComponent";
import { Books } from "@/utils/home/Books";

const SmEditorsPick = () => {
  return (
    <div>
      <div className="flex justify-center lg:justify-between items-center pt-10 px-5 lg:px-0 lg:bg-white">
        <div>
          <p className="text-[21px] font-bold font-open-sans">EDITIORS PICK</p>
        </div>
      </div>

      <div
        className="pt-8 mx-5"
        style={{ overflowX: "auto", overflowY: "hidden", maxWidth: "90vw" }}
      >
        <div
          className="flex gap-6"
          style={{ minWidth: `${Books.length * 150}px` }}
        >
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

export default SmEditorsPick;
