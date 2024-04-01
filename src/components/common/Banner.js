import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="bg-[#FAFAFA] p-7 my-6 mx-5 lg:mx-0">
      <h1 className="font-semibold text-[#505050] text-[28px]">{title}</h1>
    </div>
  );
};

export default Banner;
