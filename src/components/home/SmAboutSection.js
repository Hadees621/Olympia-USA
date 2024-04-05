import React from "react";
import Button from "../common/Button";

const SmAboutSection = ({ heading, paragraph }) => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex-1">
        <div className="flex flex-col h-full justify-center font-droid-sans p-10 gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="mt-4 text-[13px] leading-[36px]">{paragraph}</p>
          </div>
          <Button
            title={"Read more about this"}
            width={"w-[180px] font-semibold"}
            color={"transparent"}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center items-center px-5">
        {imageData.map((image, index) => (
          <div key={index} className={`bg-${image.color} flex justify-center`}>
            <img
              src={image.src}
              alt={`Asset ${index + 9}`}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const imageData = [
  { src: "/Home/Mobile/Asset 9.png", color: "gray-100" },
  { src: "/Home/Mobile/Asset 11.png", color: "slate-500" },
  { src: "/Home/Mobile/Asset 12.png", color: "red-500" },
  { src: "/Home/Mobile/Asset 13.png", color: "gray-100" },
];

export default SmAboutSection;
