import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const FeaturedAuthor = () => {
  return (
    <div className=" w-full flex flex-col items-center p-8">
      <p className="text-[21px] font-bold font-open-sans text-start my-7">
        FEATURED AUTHOR
      </p>
      <div className="p-7 space-y-3 bg-[#F9F7F6] md:flex md:flex- md:items-center md:justify-center w-full font-open-sans">
        <Image src={"/Home/Mobile/Asset 25.png"} width={400} height={800} />
        <div className="md:p-8">
          <div className="py-8 space-y-2">
            <p className="font-bold text-[15px] pr-12">
              LEGENDS OF ERIN: DAWN OF BOYHOOD’S FIRE
            </p>
            <p className="text-[12px] font-bold">MEADOW GRIFFIN</p>
          </div>
          <p className="text-[11px] font-medium leading-9 font-droid-sans">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
          </p>
          <button className="my-3 text-[14px] px-6 py-3 w-[120px] rounded-sm font-semibold font-droid-sans border border-black shadow hover:bg-[#FEC40D] focus:border-none">
            View book
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAuthor;
