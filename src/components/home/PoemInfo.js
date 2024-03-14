import React from "react";
import Button from "../common/Button";

const PoemInfo = ({ title, author }) => {
  return (
    <div className="flex-1 flex items-center  border border-black">
      <div className="flex flex-col justify-start font-open-sans px-10 gap-6 w-full">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-2 text-[11px]">{author}</p>
        </div>
        <Button title={"VIEW BOOK"} width={"w-[26%]"} color={"transparent"} />
      </div>
    </div>
  );
};

export default PoemInfo;
