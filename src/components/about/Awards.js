"use client";

import { useState } from "react";

const TabsComponent = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="lg:flex bg-[#E8E9E4] border-black border-y hidden">
      <div className="flex space-x-12 xl:space-x-32 border-black lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto">
        <div className="mx-5 font-open-sans p-5 lg:p-0 lg:w-1/2 flex justify-center items-center">
          <div className="tabs border-l-black border-2 space-y-10 pl-12">
            {tabsData.map((tab, index) => (
              <div
                key={index}
                className={`flex flex-col tab ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => changeTab(index)}
              >
                <p
                  className={`text-[10px] xl:text-[12px] 2xl:text-[16px] font-open-sans text-[#B1B1AD]`}
                >
                  {tab.label}
                </p>
                <p
                  className={`text-[10px] xl:text-[12px] 2xl:text-[16px] font-open-sans text-[#B1B1AD]`}
                >
                  {tab.label3}
                </p>
                <p
                  className={`text-[10px]  xl:text-[12px] 2xl:text-[16px] font-open-sans text-[#B1B1AD] cursor-pointer ${
                    activeTab === index ? "font-bold text-black" : ""
                  }`}
                >
                  {tab.label2}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start py-20 2xl:py-28">
          <img
            src={tabsData[activeTab].image}
            alt={`Image ${activeTab + 1}`}
            className="w-[370px] h-[400px] 2xl:w-[470px] 2xl:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
