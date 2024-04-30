import React from "react";
import BuyFromDropdown from "./BuyFromDropdown";

const SmScreenRecent = ({ book }) => {
  return (
    <div>
      <div className="lg:hidden">
        <div className="flex w-full justify-center items-center py-10 lg:hidden">
          <img src={book.src} alt="book" className="h-[440px]" />
        </div>
        <div className="bg-[#EFEFEF] mx-8 p-7 space-y-7 font-open-sans md:md:max-w-[600px] md:mx-auto">
          <div className="space-y-1">
            <h1 className="text-[18px] font-bold"> {book.title}</h1>
            <h1 className="text-[14px] font-bold"> {book.author} </h1>
          </div>
          <p className="text-[13px] leading-9">{book.fullDescription}</p>
          <div className="w-full ">
            <div className="md:mx-auto space-y-5 pt-8 md:w-[350px] lg:w-full">
              <div className="flex justify-between 2xl:justify-center 2xl:gap-14 gap-4 w-full">
                <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                  PAPERBACK
                </button>
                <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                  HARDBACK
                </button>
                <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                  EBOOK
                </button>
              </div>
              <BuyFromDropdown />
              <div class="overflow-hidden">
                <p class="mb-2">
                  <span class="">ISBN:</span> {book.isbn}
                </p>
                <p class="mb-2">
                  <span class="">Published:</span>
                  {book.publishedDate}
                </p>
                <p class="mb-2">
                  <span class="font-">Pages:</span> {book.pages}
                </p>
                <p class="mb-2">
                  <span class="">Size:</span> {book.size}
                </p>
                <p>
                  <span class="">Imprint:</span> {book.imprint}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:md:max-w-[600px] md:mx-auto">
          <h1 className="text-[16px] font-bold"> {book.author} </h1>
          <p className="text-[13px] leading-9 py-3 text-ellipsis">
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmScreenRecent;
