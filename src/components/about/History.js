"use client";

import { useState } from "react";

const History = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="lg:flex bg-white border-y hidden">
      <div className="flex space-x-12 xl:space-x-32 border-black lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto">
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start py-20 2xl:py-28 bg-[#FAFAFA]">
          <div className="p-20 bg-white">
            <img
              src={tabsData[activeTab].image}
              alt={`Image ${activeTab + 1}`}
              className="w-[330px] h-[300px] 2xl:w-[470px] 2xl:h-[500px] "
            />
          </div>
        </div>
        <div className="mx-5 font-open-sans p-5 lg:p-0 lg:w-1/2 flex justify-center items-center">
          <div className="tabs space-y-10 pl-12">
            {tabsData.map((tab, index) => (
              <div
                key={index}
                className={`flex flex-col tab ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => changeTab(index)}
              >
                <p
                  className={`text-[10px] xl:text-[10px] 2xl:text-[16px] font-open-sans text-[#BABABA] cursor-pointer ${
                    activeTab === index ? "text-blue-500" : ""
                  }`}
                >
                  {tab.label}
                </p>
                <p
                  className={`text-[10px] xl:text-[10px] 2xl:text-[16px] font-open-sans text-[#BABABA] cursor-pointer ${
                    activeTab === index ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  {tab.label3}
                </p>
                <p
                  className={`text-[10px] xl:text-[10px] 2xl:text-[16px] font-open-sans text-[#BABABA] cursor-pointer ${
                    activeTab === index ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  {tab.label2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
