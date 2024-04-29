"use client";

import React from "react";
import booksData from "@/utils/books/utils.json";
import LgScreenRecent from "@/components/genre/book/LgScreenRecent";
import BackButton from "@/components/feature/article/BackButton";
import SmScreenRecent from "@/components/genre/book/SmScreenRecent";
import RecommendedBooks from "@/components/genre/book/RecommendedBooks";
import { useBumblebeeStore } from "@/stores/States";
import { useRouter, useParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const { flag } = useBumblebeeStore();
  const book = booksData.find((book) => book.id === params.bookId);

  const handleNavigation = () => {
    if (flag) {
      router.push("/bumblebee-books");
    } else {
      router.back();
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="">
        {/* <BackButton onClick={handleNavigation} /> */}

        <div className="flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
          {flag && (
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${"/assets/Bumblebee/Asset 1-45/Asset 31.png"})`,
              }}
            >
              <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1300px]">
                <BackButton onClick={handleNavigation} />

                {book ? <LgScreenRecent book={book} /> : <p>Book not found</p>}
              </div>
            </div>
          )}

          {!flag && (
            <div className="lg:border border-black flex-grow mx-3 hidden lg:flex">
              <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1300px] mx-auto">
                <BackButton onClick={handleNavigation} />

                {book ? <LgScreenRecent book={book} /> : <p>Book not found</p>}
              </div>
            </div>
          )}

          <SmScreenRecent book={book} />

          <RecommendedBooks />
        </div>
      </div>
    </div>
  );
};

export default Page;
