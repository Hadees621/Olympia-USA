import React from "react";
import Button from "../common/Button";

const FAQs = () => {
  return (
    <div className="lg:flex bg-[#EDF1F4] w-full hidden my-20">
      <div className="flex justify-center items-center border border-black w-1/2">
        <img
          src="/assets/contact/Asset 5.png"
          alt="questions"
          className="h-[125px]"
        />
      </div>
      <div className="flex border border-black w-1/2 py-10">
        <div className="flex flex-col h-full justify-center font-open-sans px-20 2xl:p-20 gap-10">
          <div className="flex flex-col gap-4 text-black">
            <h2 className="text-[22px] font-semibold">FAQs</h2>
            <p className="mt-2 font-droid text-[10px] pr-10">
              For anymore questions or queries, visit out frequently asked
              questions page. We are ready to answer all of your questions!
            </p>
          </div>
          <Button
            title={"VIEW FAQS"}
            width="w-[110px] text-[9px] font-bold py-[8px] font-open-sans"
            color="transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
