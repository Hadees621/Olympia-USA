import Image from "next/image";
import React from "react";

const AuthorComponent = ({ src, author }) => {
  return (
    <div className="lg:p-4 2xl:p-10 flex flex-col justify-center items-center lg:border border-black flex-grow lg:hover:bg-[#EFF4F7]">
      <div className="bg-[#F6F6F6] lg:bg-transparent p-5 lg:p-3 w-[180px] h-[200px] 2xl:w-[280px] 2xl:h-[300px]">
        <div className="relative w-[140px] h-[160px] lg:w-[150px] lg:h-[170px] 2xl:w-[240px] 2xl:h-[260px]">
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            className="hover:shadow"
            alt="book"
          />
        </div>
      </div>
      <div className="pt-4 font-droid-sans space-y-2 text-[12px]">
        <p className="text-black font-open-sans text-[13px] 2xl:text-[15px] text-start font-semibold">
          {author}
        </p>
      </div>
    </div>
  );
};

export default AuthorComponent;
