import BookComponent from "@/components/home/BookComponent";
import AuthorComponent from "@/components/search/AuthorComponent";
import { Books } from "@/utils/home/Books";
import React from "react";

const SearchResults = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="lg:max-w-[800px] 2xl:max-w-[1200px]">
        <div className="bg-[#FAFAFA] p-7 my-6">
          <h1 className="font-semibold text-[#505050] text-[28px]">
            Search results
          </h1>
        </div>
        <div className="flex flex-col font-semibold py-8">
          <div className="flex justify-between md:justify-center md:gap-6 xl:gap-14">
            <p>All</p>
            <p>Books</p>
            <p>Authors</p>
          </div>
          <p className="font-bold text-center lg:text-start my-8 lg:hidden">
            (6) Books
          </p>
          <p className="font-semibold text-center lg:text-start mt-10 hidden lg:block text-xl ">
            Books(6)
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-0 lg:flex items-center justify-center lg:border-black mx-5 lg:mx-0">
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
        <p className="font-bold text-center lg:text-start my-8 lg:hidden">
          (6) Books
        </p>
        <p className="font-semibold text-center lg:text-start mt-24 hidden lg:block text-xl">
          Authors(6)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-0 lg:flex items-center justify-center lg:border-black mx-5 lg:mx-0 my-8">
          {Books.map((book, index) => (
            <div className="">
              <AuthorComponent
                key={index}
                src={book.src}
                title={book.title}
                author={book.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
