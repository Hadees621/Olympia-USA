"use client";

import BookComponent from "@/components/home/BookComponent";
import booksData from "@/utils/books/utils.json";
import { Books } from "@/utils/home/Books";
import { useEffect, useState } from "react";

const BooksSection = ({ title, lgTitle, className = "" }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className={`${className} mx-auto`}>
      <div className="flex justify-center lg:justify-start items-center lg:bg-white py-10">
        <p className="text-[26px] font-semibold font-droid-sans hidden lg:block">
          {lgTitle}
        </p>
        <p className="text-[20px] font-bold font-open-sans lg:hidden">
          {title}
        </p>
      </div>

      {/* scroll one */}
      <div
        className="pt-8 mx-5 lg:hidden"
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

      <div className="lg:flex items-center justify-center mx-5 gap-3 lg:gap-0 hidden">
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
  );
};

export default BooksSection;
