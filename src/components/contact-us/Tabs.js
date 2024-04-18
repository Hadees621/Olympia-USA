"use client";

import React, { useState } from "react";
import ContactUsData from "@/utils/contact-us/ContactUsData";
import TabData from "./TabData";

const Tabs = () => {
  const [selectedCountry, setSelectedCountry] = useState("UK");
  const selectedData = ContactUsData.addressInfo.find(
    (info) => info.country === selectedCountry
  );

  const handleTabClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className="lg:flex hidden">
        <div
          className={`flex flex-col w-1/2 border border-black justify-center items-center px-14 pt-8 2xl:px-24 2xl:pt-20 hover:bg-[#F0F4F7] active:bg-[#F0F4F7] ${
            selectedCountry === "UK" ? "bg-[#F0F4F7]" : ""
          }`}
          onClick={() => handleTabClick("UK")}
        >
          <img
            src="/assets/contact/Asset 2.png"
            alt={"UK"}
            className="2xl:w-full"
          />
          <div className="w-full flex justify-center items-center py-5">
            <h1 className="font-bold text-[18px] hover:underline">UK</h1>
          </div>
        </div>
        <div
          className={`flex flex-col w-1/2 border border-black justify-center items-center px-14 pt-8 2xl:px-24 2xl:pt-20 hover:bg-[#F0F4F7] active:bg-[#F0F4F7] ${
            selectedCountry === "INDIA" ? "bg-[#F0F4F7]" : ""
          }`}
          onClick={() => handleTabClick("INDIA")}
        >
          <img
            src="/assets/contact/Asset 3.png"
            alt={"INDIA"}
            className="2xl:w-full"
          />
          <div className="w-full flex justify-center items-center py-5">
            <h1 className="font-bold text-[18px] hover:underline">INDIA</h1>
          </div>
        </div>
      </div>

      <TabData data={selectedData} />
    </>
  );
};

export default Tabs;
