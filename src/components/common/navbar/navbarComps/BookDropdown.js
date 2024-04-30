import React from "react";
import Link from "next/link";

const BookDropdown = () => {
  return (
    <div className="absolute top-full -left-8 xl:-left-12 bg-white rounded-md p-8 mt-1">
      <p className="py-3">Categories</p>
      <div
        className="flex gap-2 xl:gap-4 text-white 2xl:text-[13px]  overflow-x-auto"
        style={{ paddingRight: "20px" }}
      >
        <Link href="/genre">
          <div
            className="flex justify-center items-center p-9 w-[120px] h-[95px] xl:p-11 xl:w-[175px] xl:h-[135px] 2xl:p-14 2xl:w-[200px]"
            style={{
              backgroundImage: "url('/assets/Genre banner/Fiction.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Fiction</h1>
          </div>
        </Link>
        <Link href="/genre">
          <div
            className="flex justify-center items-center p-9 w-[120px] h-[95px] xl:p-11 xl:w-[175px] xl:h-[135px] 2xl:p-14 2xl:w-[200px]"
            style={{
              backgroundImage: "url('/assets/Genre banner/Non Fiction.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Non-Fiction</h1>
          </div>
        </Link>
        <Link href="/bumblebee-books">
          <div
            className="flex justify-center items-center p-9 w-[120px] h-[95px] xl:p-11 xl:w-[175px] xl:h-[135px] 2xl:p-14 2xl:w-[200px]"
            style={{
              backgroundImage:
                "url('/assets/Genre banner/Bumblebee books.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Bumblebee Books</h1>
          </div>
        </Link>
        <div className="grid px-2">
          <div className="w-[100px] xl:w-[70px] 2xl:text-[15px] 2xl:w-[170px] space-y-2 text-black">
            <p className="">New releases</p>
            <p className="">Most popular</p>
            <p className="">Editors pick</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDropdown;
