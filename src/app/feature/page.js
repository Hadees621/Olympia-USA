import React from "react";
import { articlesData, buttonsData } from "@/utils/feature/utils";
import Article from "@/components/feature/Article";
import Button from "@/components/feature/Button";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full lg:flex lg:justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        {/* Features section */}
        <div className="bg-[#FAFAFA] p-7 my-6 mx-5 lg:mx-0">
          <h1 className="font-semibold text-[#505050] text-[28px]">Features</h1>
        </div>

        {/* Navigation buttons */}
        <div className="overflow-x-auto py-6 xl:py-2 ml-5 lg:border-b">
          <div className="flex justify-between 2xl:justify-center 2xl:gap-14 gap-6 w-full">
            {buttonsData.map((button, index) => (
              <button
                key={index}
                className={`text-[14px] 2xl:text-[18px] tp-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7`}
              >
                {button.title}
              </button>
            ))}
          </div>
        </div>

        {/* recent post */}
        <h1 className="font-semibold text-black text-[22px] py-6 hidden lg:block mx-3">
          Recent post
        </h1>

        <div className="lg:border border-black flex-grow mx-3 hidden lg:flex">
          <div className="w-1/2 h-full">
            <img
              src="/Home/Asset 5.png"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="hover:shadow"
              alt="features"
            />
          </div>
          <div className="pt-10 flex flex-col w-1/2 justify-center font-open-sans space-y-5 flex-1 p-8">
            <div className="space-y-3">
              <p className="font-bold text-[18px]">
                Article title Lorem ipsum dolor sit amet consecteuer
              </p>
              <p className="text-[12px]">July 01, 2022 - category</p>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummyLorem ipsum dolor sit amet, consectetuer adipiscing elit,
              cing elit, sit
            </p>
            <button
              className={`text-[8px] py-2 px-6 font-semibold font-droid-sans shadow border border-black flex items-center justify-center w-max my-7`}
            >
              READ FEATURE
            </button>
          </div>
        </div>

        <h1 className="font-semibold text-black text-[22px] py-6 mx-3">
          All features
        </h1>

        {/* Article section */}
        <div className="grid lg:grid-cols-3 md:justify-center gap-4 lg:gap-0 lg:flex-row py-10 mx-3">
          {articlesData.map((article, index) => (
            <Article key={index} {...article} />
          ))}
        </div>
        <div className="flex flex-col w-full justify-center items-center py-8">
          <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    class="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    class="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <Button
            title="Load more"
            width="w-[140px]"
            color="border border-buttonred text-buttonred"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
