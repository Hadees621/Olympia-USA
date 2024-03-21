import BookComponent from "@/components/home/BookComponent";
import AuthorComponent from "@/components/search/AuthorComponent";
import { Books } from "@/utils/home/Books";
import React from "react";

const SearchResults = () => {
  return (
    <div className="mx-5">
      <div className="bg-[#FAFAFA] p-7 my-6">
        <h1 className="font-semibold text-[#505050] text-[28px]">
          Search results
        </h1>
      </div>
      <div className="flex justify-between font-semibold p-8">
        <p>All</p>
        <p>Books</p>
        <p>Authors</p>
      </div>
      <p className="font-bold text-center my-8">(6) Books</p>
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
      <p className="font-bold text-center my-8">(4) Authors</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-0 lg:flex items-center justify-center lg:border lg:border-black mx-5 lg:mx-0 my-8">
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
  );
};

export default SearchResults;
