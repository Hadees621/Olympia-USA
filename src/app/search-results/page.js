import React from "react";
import BookComponent from "@/components/home/BookComponent";
import AuthorComponent from "@/components/search/AuthorComponent";
import { Books } from "@/utils/home/Books";

const SearchResults = () => {
  const renderBooks = () => {
    return Books.map((book, index) => (
      <div key={index} className="w-full lg:w-1/4">
        <BookComponent src={book.src} title={book.title} author={book.author} />
      </div>
    ));
  };

  const renderAuthors = () => {
    return Books.map((book, index) => (
      <div key={index} className="w-full lg:w-1/4">
        <AuthorComponent
          src={book.src}
          title={book.title}
          author={book.author}
        />
      </div>
    ));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <div className="bg-[#FAFAFA] p-7 my-6 mx-5 lg:mx-0">
          <h1 className="font-semibold text-[#505050] text-[28px]">
            Search results
          </h1>
        </div>
        <div className="flex flex-col font-semibold py-8">
          <div className="flex justify-center gap-6 xl:gap-14">
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
          {renderBooks()}
        </div>
        <p className="font-bold text-center lg:text-start my-8 lg:hidden">
          (6) Books
        </p>
        <p className="font-semibold text-center lg:text-start mt-24 hidden lg:block text-xl">
          Authors(6)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-0 lg:flex items-center justify-center lg:border-black mx-5 lg:mx-0 my-8">
          {renderAuthors()}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
