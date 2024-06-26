"use client";

import Link from "next/link";

const CountryLinks = ({ handleButtonClick }) => {
  return (
    <div className="flex overflow-x-auto py-6 xl:py-2 ml-5 lg:border-b justify-center items-center lg:hidden">
      <div className="flex 2xl:justify-center 2xl:gap-14 gap-6 md:w-max">
        <Link href="#UK">
          <button className="text-[12px] 2xl:text-[18px] p-4 px-16 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7">
            UK
          </button>
        </Link>
        <Link href="#USA">
          <button className="text-[12px] 2xl:text-[18px] p-4 px-16 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7">
            USA
          </button>
        </Link>
        <Link href="#INDIA">
          <button className="text-[12px] 2xl:text-[18px] p-4 px-12 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7">
            INDIA
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountryLinks
