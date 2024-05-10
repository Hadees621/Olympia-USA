import React from "react";

const Submit = ({ text, imageSrc, positionClasses }) => {
  const classes = positionClasses;
  return (
    <div
      className={`relative flex border bg-[#F0F4F7] h-48 w-64 xl:h-52 xl:w-80 mt-40 xl:mt-52 2xl:h-[250px] 2xl:w-[320px] 2xl:mt-52 `}
    >
      <div className={`absolute bottom-8 xl:bottom-8  ${classes}`}>
        <img
          src={imageSrc}
          alt="Step"
          className="w-[140px] xl:w-[170px] 2xl:w-[255px]"
        />
        <p className="font-semibold text-center m-8 xl:m-10 text-[11px] xl:text-[12px] 2xl:text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Submit;
