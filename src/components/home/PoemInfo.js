import React from "react";
import Button from "../common/Button";

const PoemInfo = ({ title, author }) => {
  return (
    <div className="flex-1 flex items-center lg:border border-black py-4 lg:py-0">
      <div className="flex justify-between items-center lg:items-start p-4 lg:flex-col lg:justify-start font-open-sans lg:px-10 gap-6 w-full">
        <div className="flex flex-col">
          <h2 className="text-xl lg:text-3xl font-bold">{title}</h2>
          <p className="mt-2 text-[11px]">{author}</p>
        </div>
        <Button
          title={"VIEW BOOK"}
          width={
            "w-[150px] h-[50px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px]"
          }
          color={"transparent"}
        />
      </div>
    </div>
  );
};

export default PoemInfo;
