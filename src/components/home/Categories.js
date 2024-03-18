import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="lg:max-w-[800px] 2xl:max-w-[1200px]">
      <p className="text-[26px] font-semibold font-droid-sans text-start ">
        Categories
      </p>
      <div className="flex gap-20 py-20">
        <div className="border bg-blue-800 h-[340px] flex flex-col justify-between">
          <div className=" text-black font-open-sans">
            <h2 className="text-xl font-semibold text-gray-200 p-6">Mystery</h2>
          </div>
          <Image
            src="/assests/Home/cat1.png"
            width={300}
            height={500}
            alt="BumblebeeBanner"
          />
        </div>
        <div className="border bg-gray-200 h-[340px] flex flex-col justify-between">
          <div className=" text-black font-open-sans">
            <h2 className="text-xl font-semibold text-blue-800 p-6">Mystery</h2>
          </div>
          <Image
            src="/assests/Home/cat2.png"
            width={300}
            height={500}
            alt="BumblebeeBanner"
          />
        </div>
        <div className="border bg-gray-200 h-[340px] flex flex-col justify-between">
          <div className=" text-black font-open-sans">
            <h2 className="text-xl font-semibold text-blue-800 p-6">Mystery</h2>
          </div>
          <Image
            src="/assests/Home/cat3.png"
            width={300}
            height={500}
            alt="BumblebeeBanner"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
