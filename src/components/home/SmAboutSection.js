import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const SmAboutSection = ({ heading, paragraph }) => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex-1">
        <div className="flex flex-col h-full justify-center font-open-sans p-10 gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="mt-4 text-[14px] leading-9">{paragraph}</p>
          </div>
          <Button
            title={"Read more about this"}
            width={"w-[180px]"}
            color={"transparent"}
          />
        </div>
      </div>
      <div className="flex-1 p-10 pt-3">
        <Image
          src="/assests/Banners/about-banner.png"
          width={700}
          height={200}
          alt="About Section Image"
          priority
        />
      </div>
    </div>
  );
};

export default SmAboutSection;
