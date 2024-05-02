"use client";

import React, { useState } from "react";
import FAQ from "./FAQ";
import SubmissionProcess from "./SubmissionProcess";
import { tabData } from "@/utils/publish-with-us/utils";
import Methods from "./Methods";
import PublishingContractsTab from "./tabs/PublishingContractsTab";
import SubmissionsTab from "./tabs/SubmissionsTab";
import RequirementsTab from "./tabs/RequirementsTab";

const LargeScreenComponents = () => {
  const [activeTab, setActiveTab] = useState("submissions");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hidden lg:block">
      <div className="font-droid-sans max-w-[420px] xl:max-w-[500px] 2xl:max-w-[650px] mx-auto my-12">
        <div className="flex justify-between mt-8 gap-6">
          <button
            onClick={() => handleTabChange("submissions")}
            className={`mr-4 focus:outline-none 2xl:text-[16px] ${
              activeTab === "submissions"
                ? "text-buttonred border border-buttonred px-5 py-2 xl:px-7 xl:py-3 2xl:px-10 2xl:py-5 font-semibold 2xl:text-[18px]"
                : "text-black font-semibold"
            }`}
          >
            About submissions
          </button>
          <button
            onClick={() => handleTabChange("publishingContracts")}
            className={`mr-4 focus:outline-none 2xl:text-[16px] ${
              activeTab === "publishingContracts"
                ? "text-buttonred border border-buttonred px-5 py-2 xl:px-7 xl:py-3 2xl:px-10 2xl:py-5 font-semibold 2xl:text-[18px]"
                : "text-black font-semibold"
            }`}
          >
            Publishing contracts
          </button>
          <button
            onClick={() => handleTabChange("requirements")}
            className={`focus:outline-none 2xl:text-[16px] ${
              activeTab === "requirements"
                ? "text-buttonred border border-buttonred px-5 py-2 xl:px-7 xl:py-3 2xl:px-10 2xl:py-5 font-semibold 2xl:text-[18px]"
                : "text-black font-semibold"
            }`}
          >
            Requirements
          </button>
        </div>

        {activeTab === "submissions" && (
          <SubmissionsTab tabData={tabData[activeTab]} />
        )}
        {activeTab === "publishingContracts" && (
          <PublishingContractsTab tabData={tabData[activeTab]} />
        )}
        {activeTab === "requirements" && (
          <RequirementsTab tabData={tabData[activeTab]} />
        )}
      </div>

      <Methods />

      <FAQ />

      <SubmissionProcess />
    </div>
  );
};

export default LargeScreenComponents;
