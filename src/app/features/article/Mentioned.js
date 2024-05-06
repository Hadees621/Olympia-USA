import Button from "@/components/common/Button";
import BookComponent from "@/components/home/BookComponent";
import AuthorComponent from "@/components/search/AuthorComponent";
import { Books } from "@/utils/home/Books";
import React from "react";

const Mentioned = () => {
  return (
    <div className="lg:bg-[#FAFAFA]">
      <div className=" w-full lg:max-w-[900px] xl:max-w-[1600px] 2xl:max-w-[1600px] mx-auto">
        <div className="lg:max-w-[900px] xl:max-w-[1600px] 2xl:max-w-[1600px] mx-auto">
          <div className="flex flex-col justify-center  items-center py-10 px-5 lg:px-0 mx-5">
            <div className="flex w-full justify-between my-6 lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
              <p className="text-[25px] font-bold font-droid-sans hidden lg:block">
                Books mentioned
              </p>
              <p className="text-[21px] font-bold font-open-sans lg:hidden uppercase">
                Books mentioned
              </p>
              <div className="hidden lg:block">
                <Button
                  title="EXPLORE MORE"
                  width="w-[150px]"
                  color={"transparent"}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-center justify-center mx-5 gap-3 lg:gap-0">
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
          <div className="w-full flex justify-center lg:hidden">
            <button
              className={`text-[14px] py-[12px] font-semibold font-open-sans shadow flex items-center justify-center border border-buttonred text-buttonred px-3 w-[170px] my-7`}
            >
              Explore more
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center lg:hidden lg:bg-[#FAFAFA]">
          <Button
            title={"View all books"}
            width={"w-[120px]"}
            color={"transparent"}
            key={12}
          />
          <div className="flex flex-col justify-center lg:justify-between items-center">
            <div className="flex justify-center lg:justify-between items-center py-10 px-5 lg:px-0 lg:bg-white">
              <div>
                <p className="text-[23px] font-bold font-open-sans">
                  BOOKS MENTIONED
                </p>
              </div>
            </div>
            <div className="flex overflow-x-auto gap-5 lg:gap-0 lg:justify-center lg:border lg:border-black mx-3 lg:mx-0">
              <AuthorComponent
                author={"Author name"}
                title={"title"}
                src={"/assets/author.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentioned;
