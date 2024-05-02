"use client";

import BooksSection from "@/components/common/BooksSection";
import Link from "next/link";

const Error = () => {
  return (
    <div className="lg:max-w-[850px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
      <div className="px-10 font-open-sans flex flex-col items-center justify-center py-10 ">
        <h1 className="text-[30px] lg:text-[55px] font-bold lg:font-semibold text-center">
          Error 404 - <br className="lg:hidden" /> Page not found
        </h1>
        <p className="py-6 text-center text-[13px] leading-9">
          Don’t worry, there are plenty of other pages to turn to at Olympia
          publishers!
        </p>
        <Link href={"/"}>
          <button
            className={`text-[12px] p-[12px] font-semibold font-open-sans shadow flex items-center justify-center border border-buttonred text-buttonred  lg:hidden`}
          >
            Go back to the homepage
          </button>
        </Link>
        <Link href={"/"}>
          <button
            className={`text-[12px] p-[12px] font-medium font-open-sans shadow lg:flex items-center justify-center bg-buttonred border border-buttonred text-white hidden `}
          >
            RETURN TO HOMEPAGE
          </button>
        </Link>
      </div>
      <BooksSection
        title={"FIND YOUR NEXT PAGE-TURNER"}
        lgTitle={"Find your next read"}
        className="pt-20 my-20"
      />
    </div>
  );
};

export default Error;
