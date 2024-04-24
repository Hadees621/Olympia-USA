"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import FAQ from "./FAQ";
import SubmissionProcess from "./SubmissionProcess";
import { tabData } from "@/utils/publish-with-us/utils";
import Link from "next/link";

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
            className={`mr-4 focus:outline-none ${
              activeTab === "submissions"
                ? "text-buttonred border border-buttonred px-5 py-2 xl:px-7 xl:py-3 2xl:px-10 2xl:py-5 font-semibold 2xl:text-[18px]"
                : "text-black font-semibold"
            }`}
          >
            About submissions
          </button>
          <button
            onClick={() => handleTabChange("publishingContracts")}
            className={`mr-4 focus:outline-none ${
              activeTab === "publishingContracts"
                ? "text-buttonred border border-buttonred px-5 py-2 xl:px-7 xl:py-3 2xl:px-10 2xl:py-5 font-semibold 2xl:text-[18px]"
                : "text-black font-semibold"
            }`}
          >
            Publishing contracts
          </button>
          <button
            onClick={() => handleTabChange("requirements")}
            className={`focus:outline-none ${
              activeTab === "requirements"
                ? "text-buttonred border border-buttonred px-5 py-2 xl:px-7 xl:py-3 2xl:px-10 2xl:py-5 font-semibold 2xl:text-[18px]"
                : "text-black font-semibold"
            }`}
          >
            Requirements
          </button>
        </div>
        <p className="font-bold text-[20px] xl:text-[17px] mt-10 font-open-sans">
          {tabData[activeTab].title}
        </p>
        <div className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
          {tabData[activeTab].paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-5">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="flex my-12">
        <div className="publish-section bg-[#FEEDEF] border-2 border-[#E29095] flex flex-col items-start w-1/2 gap-5 py-12 px-14 xl:p-20">
          <h2 className="text-[20px] xl:text-[24px] pr-10 leading-[36px] text-buttonred font-bold">
            Submit online
          </h2>
          <p className="text-[11px] xl:text-[13px] leading-[20px] pr-10">
            A quick and simple way to submit to us is by using our online
            submission form, just click below to begin.
          </p>
          <Link href="/submit-online">
            <Button
              title="SUBMIT ONLINE"
              width="w-[240px] h-[44px] lg:w-[110px] lg:h-[35px] 2xl:w-[130px] 2xl:h-[45px] text-[9px] border border-white mt-6"
              color="red"
            />
          </Link>
        </div>
        <div className="email-section bg-[#F0F4F7] border-2 border-[#3975B7] flex flex-col items-start w-1/2 gap-5 py-12 px-16 xl:p-20">
          <h2 className="text-[20px] xl:text-[24px] text-[#0E58A8] font-bold pr-10 leading-[36px]">
            Email
          </h2>
          <p className="text-[11px] xl:text-[13px] leading-[20px]">
            Please include your name and book title in the subject of the email
            and send us the following:
          </p>
          <ol className="list-decimal text-[11px] xl:text-[13px] leading-[26px] font-semibold mx-5 text-[#187AD2]">
            <li>A synopsis of the book (No longer than one a4 page).</li>
            <li>A covering letter</li>
            <li>The full manuscript</li>
          </ol>
          <p className="text-[12px] text-black underline font-bold">
            submissions@olympiapublishers.com
          </p>
        </div>
      </div>

      <FAQ />

      <SubmissionProcess />
    </div>
  );
};

export default LargeScreenComponents;
