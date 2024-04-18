import React from "react";
import Socials from "../common/footer/comp/Socials";

const TabData = ({ data }) => {
  return (
    <div className="border border-black">
      <div className="w-full justify-center flex pt-20">
        <img src={data.imgSrc} alt={data.country} className="h-20 2xl:h-32" />
      </div>
      <div className="flex w-full justify-between px-24 py-12">
        <div className="space-y-6">
          <h1 className="font-bold text-[#321B2B] text-[8px] xl:text-[10px] 2xl:text-[14px] uppercase font-open-sans">
            Find us
          </h1>
          <div>
            {data.addressLines.map((line, index) => (
              <p
                key={index}
                className="leading-5 xl:leading-7 font-open-sans text-[8px] xl:text-[10px] 2xl:text-[14px] text-[#84848A]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-10">
          <div className="flex gap-20 xl:gap-28  2xl:gap-32">
            <div className="space-y-6">
              <h1 className="font-bold text-[#321B2B] text-[8px] xl:text-[10px] 2xl:text-[14px] uppercase font-open-sans">
                Email us
              </h1>
              <div className="text-[8px] xl:text-[10px] 2xl:text-[14px] text-[#84848A] font-open-sans space-y-6">
                {data.emailSections.slice(0, 2).map((section, index) => (
                  <div key={index}>
                    <p>{section.label}</p>
                    <p>{section.email}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[8px] xl:text-[10px] 2xl:text-[14px] text-[#84848A] space-y-6 pt-10 xl:pt-14">
              {data.emailSections.slice(2, 4).map((section, index) => (
                <div key={index}>
                  <p>{section.label}</p>
                  <p>{section.email}</p>
                </div>
              ))}
            </div>

            <div className="text-[8px] xl:text-[10px] 2xl:text-[14px] text-[#84848A] space-y-6 pt-10 xl:pt-14">
              {data.emailSections.slice(4).map((section, index) => (
                <div key={index}>
                  <p>{section.label}</p>
                  <p>{section.email}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-36 xl:gap-44 2xl:gap-64">
            <div className="space-y-6">
              <h1 className="font-bold text-[#321B2B] text-[8px] xl:text-[10px] 2xl:text-[14px] uppercase font-open-sans">
                SPEAK WITH US
              </h1>
              <div className="text-[8px] xl:text-[10px] 2xl:text-[14px] text-[#84848A] space-y-6">
                <p>{data.phoneNumber}</p>
              </div>
            </div>
            <div className="space-y-6 gap-10">
              <h1 className="font-bold text-[#321B2B] text-[8px] xl:text-[10px] 2xl:text-[14px] uppercase font-open-sans">
                CONNECT WITH US
              </h1>
              <Socials h={20} />
            </div>

            <div className="space-y-6">
              <button
                className={`text-[9px] py-[10px] font-semibold font-open-sans shadow flex items-center justify-center bg-[#0E58A7] text-white w-[130px] mt-8`}
              >
                VISIT OUR WEBSITE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabData;
