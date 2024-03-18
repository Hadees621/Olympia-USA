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
      <div className="grid grid-cols-2 gap-4 justify-center items-center px-5">
        <div className="bg-gray-100 flex justify-center">
          <Image src={"/Home/Mobile/Asset 9.png"} width={250} height={250} />
        </div>
        <div className="bg-slate-500 flex justify-center">
          <Image src={"/Home/Mobile/Asset 11.png"} width={250} height={250} />
        </div>
        <div className="bg-red-500 flex justify-center">
          <Image src={"/Home/Mobile/Asset 12.png"} width={250} height={250} />
        </div>
        <div className="bg-gray-100 flex justify-center">
          <Image src={"/Home/Mobile/Asset 13.png"} width={250} height={250} />
        </div>
      </div>
    </div>
  );
};

export default SmAboutSection;
