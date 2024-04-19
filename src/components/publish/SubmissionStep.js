import React from "react";

const SubmissionStep = ({ image, description }) => {
  return (
    <div className="flex flex-col items-center justify-start mx-8 gap-5">
      <img src={image} alt="Step image" className="pr-6 my-8" />
      <div className="bg-[#F6F4F3] text-center p-10 font-semibold leading-9 w-full text-[14px] px-20">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SubmissionStep;
