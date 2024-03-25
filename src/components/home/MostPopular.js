import React from "react";
import Button from "../common/Button";
import BookComponent from "./BookComponent";
import { Books } from "@/utils/home/Books";
import Image from "next/image";

const MostPopular = () => {
  return (
    <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px] py-20">
      <div className="flex justify-between items-center py-10">
        <p className="text-[26px] font-semibold font-droid-sans">
          Most popular
        </p>
        <Button title="EXPLORE MORE" width="w-[120px]" color="transparent" />
      </div>
      <div className="flex items-center justify-center border-t border-black">
        <div className="flex">
          <BookComponent
            src="/assests/Books/Asset3.png"
            title="title"
            author="author"
          />
          <div className="relative w-[505px] xl:w-[600px] 2xl:w-[830px] h-[320px] 2xl:h-[440px]">
            <Image
              src="/assests/Banners/AuthorBanner.png"
              alt="About Section Image"
              layout="fill"
            />
            <div className="absolute top-4 left-4 2xl:top-8 2xl:left-6 p-4 space-y-2 text-[#BFE0D9] text-[13px]">
              <p className="">Featured author</p>
              <p className="text-white text-xl 2xl:text-3xl ">
                Legends of Erin: Dawn of <br /> Boyhood’s Fire
              </p>
              <p className="">Meadow Griffin</p>
              <p className="">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed{" "}
                <br />
                diam nonummy nibh euismod tincidunt ut laoreet dolore <br />
                magna tation ullamcorper suscipit loullamcorper suscipit lo.{" "}
                <br />
                Bortis nisl consequat.
              </p>
              <div>
                <button className="mt- 2xl:mt-10 text-[12px] px-9 py-[8px] 2xl:py-[13px] font-semibold font-droid-sans rounded shadow bg-white text-black w-[44%]">
                  VIEW BOOK
                </button>
              </div>
            </div>
          </div>
          <BookComponent
            src="/assests/Books/Asset4.png"
            title="title"
            author="author"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
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

export default MostPopular;
