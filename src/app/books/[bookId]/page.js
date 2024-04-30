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

  const containerStyle = flag
    ? {
        backgroundImage: `url("/assets/Bumblebee/detail-bg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        maxHeight: "1000px",
      }
    : {
        backgroundColor: "transparent",
      };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
        <div style={containerStyle}>
          <div
            className={`w-full lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1300px] mx-auto`}
          >
            <BackButton onClick={handleNavigation} />
            {book ? <LgScreenRecent book={book} /> : <p>Book not found</p>}
          </div>
        </div>

        <SmScreenRecent book={book} />

        <RecommendedBooks />
      </div>
    </div>
  );
};

export default Page;
