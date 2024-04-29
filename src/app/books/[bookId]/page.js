"use client";

import React from "react";
import booksData from "@/utils/books/utils.json";
import { useParams } from "next/navigation";
import LgScreenRecent from "@/components/genre/book/LgScreenRecent";
import BackButton from "@/components/feature/article/BackButton";
import SmScreenRecent from "@/components/genre/book/SmScreenRecent";
import RecommendedBooks from "@/components/genre/book/RecommendedBooks";

const Page = () => {
  const params = useParams();
  const book = booksData.find((book) => book.id === params.bookId);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1300px]">
        <BackButton />
        <div className="flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
          {book ? <LgScreenRecent book={book} /> : <p>Book not found</p>}

          <SmScreenRecent />

          <RecommendedBooks />
        </div>
      </div>
    </div>
  );
};

export default Page;
