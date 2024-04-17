import React from "react";
import SectionsData from "@/utils/about/SectionsData.json";

const { Who } = SectionsData;
const WhoWeAre = () => {
  return (
    <div className="lg:flex gap-4 px-3 xl:px-8">
      <div className="lg:w-1/2">
        <img
          src={Who.banner}
          alt="who-banner"
          className="hidden lg:block h-[420px] xl:h-[520px] 2xl:h-[620px] w-full"
        />
      </div>
      <div className="mx-5 font-open-sans p-5 lg:p-0 lg:w-1/2">
        <p className="font-bold text-[17px] lg:text-[13px] xl:text-[17px] mt-10 lg:hidden">
          {Who.title}
        </p>
        <p className="font-bold text-[17px] lg:text-[13px] xl:text-[17px] 2xl:text-[20px] mt-4 hidden lg:block">
          {Who.smallTitle}
        </p>
        <div className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 lg:space-y-2 xl:space-y-4 leading-9 lg:leading-6 xl:leading-7 2xl:leading-9 lg:font-droid-sans">
          <p className="mt-5">{Who.para1}</p>
          <p>{Who.para2}</p>
          <p>{Who.para3}</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
