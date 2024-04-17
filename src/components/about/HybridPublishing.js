import React from "react";
import SectionsData from "@/utils/about/SectionsData.json";
const { hybrid } = SectionsData;
const HybridPublishing = () => {
  return (
    <div>
      {" "}
      <div className="mx-5 font-open-sans p-3 lg:max-w-[470px] xl:max-w-[600px] 2xl:max-w-[800px] lg:mx-auto">
        <p className="font-bold text-[20px] mt-10 lg:hidden">
          HYBRID <br className="lg:hidden" /> PUBLISHING{" "}
          <br className="lg:hidden" /> MODEL
        </p>
        <p className="font-bold text-[20px] xl:text-[23px] 2xl:text-[26px] mt-10 hidden lg:block">
          {hybrid.title}
        </p>
        <div className="text-[13px] xl:text-[13px] 2xl:text-[17px] space-y-4 leading-9 lg:leading-7 xl:leading-9 2xl:leading-10 lg:font-droid-sans lg:space-y-4 ">
          <p className="mt-5">
            {hybrid.para}
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            {hybrid.para2}
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            {hybrid.para3}
            <a className="lg:underline lg:font-semibold ">
              {" "}
              hybrid publishing model.{" "}
            </a>
          </p>
          <p className="lg:hidden">
            Please see our <a className="underline"> submissions page </a> for
            further information on how to submit your work to us.
          </p>
        </div>

        <div className="relative overflow-hidden w-full my-10 pt-[56.25%] hidden lg:block ">
          {" "}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/vd7mnHBzaGU?si=pHQ3pcDQ7n3Xsync"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HybridPublishing;
