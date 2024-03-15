import React from "react";
import BookComponent from "./BookComponent";
import { Books } from "@/utils/home/Books";
import Button from "../common/Button";

const NewReleases = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1300px]">
      <div className="flex justify-center lg:justify-between items-center py-10 px-5 lg:px-0 lg:bg-white">
        <p className="text-[26px] font-semibold font-droid-sans">
          New Releases
        </p>
        <div className="hidden lg:block">
          <Button title="EXPLORE MORE" width="w-[150px]" color="transparent" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-0 lg:flex items-center justify-center lg:border lg:border-black">
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
    </div>
  );
};

export default NewReleases;
