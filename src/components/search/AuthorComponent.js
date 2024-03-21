import Image from "next/image";
import React from "react";

const AuthorComponent = ({ src, title, author }) => {
  return (
    <div className="lg:p-4 2xl:p-10 flex flex-col lg:border border-black flex-grow lg:hover:bg-[#EFF4F7]">
      <div className="bg-[#F6F6F6] lg:bg-transparent p-5 lg:p-0">
        <Image
          src={"/assests/author.png"}
          width={150}
          height={400}
          className="hover:shadow"
          alt="book"
        />
      </div>
      <div className="pt-4 lg:pt-14 font-droid-sans space-y-2 text-[12px]">
        <p className="text-[#616161] font-open-sans text-[13px]">{author}</p>
      </div>
    </div>
  );
};

export default AuthorComponent;
