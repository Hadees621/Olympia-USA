import React from "react";

const SubmissionsTab = ({ tabData }) => (
  <div>
    <p className="font-bold text-[20px] xl:text-[17px] mt-10 font-open-sans">
      {tabData.title}
    </p>
    <div className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
      {tabData.paragraphs.map((paragraph, index) => (
        <p key={index} className="mt-5">
          {paragraph}
        </p>
      ))}
    </div>
  </div>
);

export default SubmissionsTab;
