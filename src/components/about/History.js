"use client";

import { useState } from "react";
import Radio from "./Radio";

const History = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="lg:flex bg-[#FAFAFA] border-y hidden border border-black">
      <div className=" flex space-x-24 xl:space-x-32 2xl:space-x-60 border-black lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto">
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start py-32 2xl:py-28 ">
          <div className="p-16 bg-white rounded-[400px]">
            <img
              src={tabsData[activeTab].image}
              alt={`Image ${activeTab + 1}`}
              className="w-[130px] h-[120px] xl:w-[220px] xl:h-[220px] 2xl:w-[400px] 2xl:h-[400px] "
            />
          </div>
        </div>

        <vr className="border-[0.5px] border-black" />

        {/* left */}
        <div className="relative flex justify-center gap-16 xl:gap-20 px-4">
          <vr className="border-[0.5px] border-[#4A81BC] my-36 xl:mt-44 xl:mb-48 2xl:mt-48 2xl:mb-56 " />
          <div className="font-open-sans p-5 lg:p-0 flex justify-center items-center w-[250px] 2xl:w-[450px]">
            <div className=" tabs space-y-14 2xl:space-y-24 w-full">
              {tabsData.map((tab, index) => (
                <div
                  key={index}
                  className={`flex tab ${activeTab === index ? "active" : ""}`}
                  onClick={() => changeTab(index)}
                >
                  <Radio
                    activeTab={activeTab}
                    classes={tab.class}
                    currentIndex={index}
                  />
                  <div
                    className="flex flex-col"
                    onClick={() => setActiveTab(index)}
                  >
                    <p
                      className={`text-[9px] xl:text-[10px] 2xl:text-[16px] font-open-sans text-[#BABABA] cursor-pointer ${
                        activeTab === index ? "text-blue-500" : ""
                      }`}
                    >
                      {tab.label}
                    </p>

                    <p
                      className={`text-[9px] xl:text-[10px] 2xl:text-[16px] font-open-sans text-[#BABABA] cursor-pointer ${
                        activeTab === index ? "text-blue-500 font-bold" : ""
                      }`}
                    >
                      {tab.label3}
                    </p>

                    <p
                      className={`text-[9px] xl:text-[10px] 2xl:text-[16px] font-open-sans text-[#BABABA] cursor-pointer ${
                        activeTab === index ? "text-blue-500 font-bold" : ""
                      }`}
                    >
                      {tab.label2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
