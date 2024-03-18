import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const FeaturedAuthor = () => {
  return (
    <div className=" w-full flex flex-col items-center p-8">
      <p className="text-[26px] font-semibold font-droid-sans text-start">
        FEATURED AUTHOR
      </p>
      <div className="p-7 space-y-3 bg-[#F9F7F6] md:flex md:flex-col md:items-center md:justify-center w-full">
        <Image src={"/Home/Mobile/Asset 25.png"} width={400} height={800} />
        <p className="font-bold text-[18px] pr-12">
          LEGENDS OF ERIN: DAWN OF BOYHOOD’S FIRE
        </p>
        <p className="text-[12px] font-semibold">MEADOW GRIFFIN</p>
        <p className="text-[12px] font-normal leading-8">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla
        </p>
        <Button title={"View book"} width={"w-[120px]"} />
      </div>
    </div>
  );
};

export default FeaturedAuthor;
