"use client";
import React from "react";
import BuyFromDropdown from "./BuyFromDropdown";
import { useBumblebeeStore, useFictionStore } from "@/stores/States";

const LgScreenRecent = ({ book }) => {
  const { flag } = useBumblebeeStore();

  const flag2 = true;

  const backgroundColor = flag ? "hover:bg-[#FEEDB6]" : "hover:bg-[#F0F4F7]";
 

  return (
    <>
      <div className="hidden lg:block">
        {flag2 && (
          <h1 className="font-semibold text-black text-[22px] py-6 hidden lg:block mx-3">
            Recent post
          </h1>
        )}
        <div className="lg:border border-black flex-grow mx-3 hidden lg:flex bg-white">
          <div className="flex flex-col w-1/2 h-full bg-white ">
            <div
              className={`h-full p-28 xl:p- flex justify-center ${backgroundColor}`}
            >
              <img
                src={book.src}
                style={{
                  height: "",
                  objectFit: "cover",
                }}
                className="hover:shadow h-[410px] w-full xl:h-[490px] 2xl:h-[750px] 2xl:w-[450px]"
                alt="features"
              />
            </div>
            <div className="p-10 xl:p-12 space-y-4 border-t border-black">
              <h1 className="text-[14px] xl:text-[21px] 2xl:text-[24px] font-bold">
                {book.title}
              </h1>
              <p className="text-[10px] xl:text-[12px] 2xl:text-[16px] 2xl:leading-9 leading-6 text-black">
                {book.description}
              </p>
              <p className="text-[#817977] text-[9px] 2xl:text-[14px] uppercase cursor-pointer">
                + MORE ABOUT {book.author}
              </p>
            </div>
          </div>
          <div className="pt-10 flex flex-col w-1/2 justify-center xl:justify-start font-open-sans space-y-5 flex-1 p-8 xl:p-14 border border-black">
            <div className="space-y-1 2xl:space-y-3">
              <h1 className="text-[18px] xl:text-[22px] 2xl:text-[34px] font-semibold">
                {book.title}
              </h1>
              <h1 className="text-[10px] xl:text-[14px] 2xl:text-[16px] font-semibold text-[#817977]">
                {book.author}
              </h1>
            </div>
            <p className="text-[12px] xl:text-[14px] leading-7 xl:leading-9 2xl:text-[18px] 2xl:leading-[40px] font-open-sans">
              {book.fullDescription}
            </p>

            <div className="grid items-center w-full bg-white">
              <div className="md:w-[350px] lg:w-full">
                <hr className="my-5 2xl:my-10" />
                <div className="">
                  <div className="flex justify-between 2xl:gap-16 gap-4 w-full pr-24 xl:pr-40">
                    <button className="text-[11px] xl:p-5 xl:text-[12px] 2xl:text-[18px] p-3 px-5 2xl:p-6 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                      PAPERBACK
                    </button>
                    <button className="text-[11px] xl:p-5 xl:text-[12px] 2xl:text-[18px] p-3 px-5 2xl:p-6 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                      HARDBACK
                    </button>
                    <button className="text-[11px] xl:p-5 xl:text-[12px] 2xl:text-[18px] p-3 px-5 2xl:p-6 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                      EBOOK
                    </button>
                  </div>
                  <div className="grid items-center w-full py-5 ">
                    <BuyFromDropdown />
                  </div>
                </div>
                <hr className="my-5" />
                <div class="overflow-hidden pb-8 pt-4 text-[9px] xl:text-[14px] 2xl:text-[18px] 2xl:space-y-3">
                  <p class="mb-2">
                    <span class="">ISBN:</span> {book.isbn}
                  </p>
                  <p class="mb-2">
                    <span class="">Published:</span> {book.publishedDate}
                  </p>
                  <p class="mb-2">
                    <span class="font-">Pages:</span> {book.pages}
                  </p>
                  <p class="mb-2">
                    <span class="">Size:</span> {book.size}
                  </p>
                  <p>
                    <span class="">Imprint:</span> {book.imprint}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LgScreenRecent;
