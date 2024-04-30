import React from "react";
import Link from "next/link";
import { useBumblebeeStore } from "@/stores/States";

const BookComponent = ({ src, title, author, bumblebee, bookId }) => {
  const { setFlag } = useBumblebeeStore();

  const backgroundColor = bumblebee
    ? "lg:hover:bg-[#FEEDB6] hover:border-none"
    : "lg:hover:bg-[#EFF4F7]";

  return (
    <div
      className={`flex flex-col lg:border lg:border-black flex-grow items-center justify-start h-[350px] lg:h-[280px] xl:h-[340px] 2xl:h-[470px] ${backgroundColor} lg:p-2 xl:p-4`}
    >
      <Link href={`/books/${bookId}`}>
        <div
          className="bg-[#F6F6F6] lg:bg-transparent overflow-x-auto w-full"
          onClick={() => {
            setFlag(bumblebee);
          }}
        >
          <div className="p-6 lg:p-4 xl:p-6 2xl:p-8">
            <img
              src={src}
              alt="book"
              className="h-[215px] lg:w-[135px] lg:h-[160px] xl:h-[210px] 2xl:w-[200px] 2xl:h-[300px]"
            />
          </div>
        </div>
      </Link>
      <div className="p-4 lg:p-3 2xl:p-7 w-full">
        <p className="font-semibold font-driod-sans lg:text-[10px] xl:text-[12px] 2xl:text-[15px] uppercase">
          {title + title}
        </p>
        <p className="text-[#616161] font-open-sans lg:text-[10px] xl:text-[11px] 2xl:text-[14px]">
          {author + author}
        </p>
      </div>
    </div>
  );
};

export default BookComponent;
