import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="lg:max-w-[850px] px-[70px] xl:max-w-[1050px] 2xl:max-w-[1450px]">
      <p className="text-[26px] font-semibold font-droid-sans text-start ">
        Categories
      </p>
      <div className="flex gap-20 py-20">
        <div className="border bg-blue-800 h-[250px] xl:h-[280px] 2xl:h-[320px] flex flex-col justify-between">
          <div className=" text-black font-open-sans">
            <h2 className="text-xl text-gray-200 p-6 font-bold font-open-sans">
              Mystery
            </h2>
          </div>
          <Image
            src="/assets/Home/cat1.png"
            width={300}
            height={500}
            alt="BumblebeeBanner"
          />
        </div>
        <div className="border bg-gray-200 h-[250px] xl:h-[280px] 2xl:h-[320px] flex flex-col justify-between">
          <div className=" text-black font-open-sans">
            <h2 className="text-xl font-bold text-blue-800 p-6 font-open-sans">
              Fantasy
            </h2>
          </div>
          <Image
            src="/assets/Home/cat2.png"
            width={300}
            height={500}
            alt="BumblebeeBanner"
          />
        </div>
        <div className="border bg-gray-200 h-[250px] xl:h-[280px] 2xl:h-[320px] flex flex-col justify-between">
          <div className=" text-black font-open-sans">
            <h2 className="text-xl font-bold text-blue-800 p-6 font-open-sans">
              Lifestyle
            </h2>
          </div>
          <Image
            src="/assets/Home/cat3.png"
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
