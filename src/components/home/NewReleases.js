"use client";

import React, { useEffect, useState } from "react";
import BookComponent from "./BookComponent";
import { Books } from "@/utils/home/Books";
import Button from "../common/Button";
import { useBumblebeeStore } from "@/stores/States";
import { fetchBooks } from "@/utils/genre/APIcall";

const NewReleases = () => {
  const { flag } = useBumblebeeStore();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      try {
        const data = await fetchBooks();
        const slicedData = data.slice(0, 5);
        setBooks(slicedData);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    }
    getBooks();
  }, []);

  return (
    <div className="lg:max-w-[900px] xl:max-w-[1600px] 2xl:max-w-[1600px]">
      <div className="flex justify-center lg:justify-between items-center py-10 px-5 lg:px-0 lg:bg-white mx-5">
        <div>
          <p className="text-[25px] font-bold font-droid-sans hidden lg:block">
            New Releases
          </p>
          <p className="text-[21px] font-bold font-open-sans lg:hidden">
            NEW RELEASES
          </p>
        </div>
        <div className="hidden lg:block">
          <Button
            title="EXPLORE MORE"
            width="w-[150px]"
            color={flag ? "yellow" : "red"}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-center justify-center mx-5 gap-3 lg:gap-0">
        {books.map((book, index) => (
          <div className="flex-none" key={index}>
            <BookComponent {...book} />
            {/* <BookComponent
              src={book.src}
              title={book.title}
              author={book.author}
              bumblebee={flag}
            /> */}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center lg:hidden">
        <button
          className={`text-[14px] py-[12px] font-semibold font-open-sans shadow flex items-center justify-center border border-buttonred text-buttonred px-3 w-[170px] my-7`}
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default NewReleases;
