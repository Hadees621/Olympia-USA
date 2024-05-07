"use client";

import React from "react";
import booksData from "@/utils/books/utils.json";
import LgScreenRecent from "@/components/genre/book/LgScreenRecent";
import BackButton from "@/components/feature/article/BackButton";
import SmScreenRecent from "@/components/genre/book/SmScreenRecent";
import RecommendedBooks from "@/components/genre/book/RecommendedBooks";
import { useBumblebeeStore } from "@/stores/States";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const router = useRouter();
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
      <div className="w-full flex flex-col justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
        <div className="lg:hidden bg-transparent">
          {" "}
          <BackButton onClick={handleNavigation} />
          {book ? <SmScreenRecent book={book} /> : <p>Book not found</p>}
        </div>

        <div className="hidden lg:block w-full">
          {" "}
          <div
            style={{
              backgroundImage: flag
                ? `url("/assets/Bumblebee/detail-bg.png")`
                : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: flag ? "1000px" : "none",
            }}
          >
            <div
              className={`w-full lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto `}
            >
              <BackButton onClick={handleNavigation} />
              {book ? <LgScreenRecent book={book} /> : <p>Book not found</p>}
            </div>
          </div>
        </div>

        <RecommendedBooks />
      </div>
    </div>
  );
};

export default Page;
