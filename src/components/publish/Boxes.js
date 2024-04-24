import React from "react";
import Button from "@/components/common/Button";
import Link from "next/link";

const Boxes = () => {
  return (
    <div>
      <div className="publish-section bg-[#C61E2B] text-white py-14 my-14 mx-8 p-8 lg:px-10 flex flex-col lg:flex-col gap-8 items-start justify-between">
        <h2 className="text-[24px] font-semibold pr-10 leading-[36px]">
          SUBMIT ONLINE
        </h2>
        <p className="text-[14px] leading-[28px]">
          A quick and simple way to submit to us is by using our online
          submission form, just click below to begin.
        </p>
        <Link href="/submit-online">
          <Button
            title="Read our submissions guidelines"
            width="w-[240px] h-[44px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px] border border-white mt-6"
            color="transparent"
          />
        </Link>
      </div>

      <div className="email-section bg-[#F9F7F6] text-black py-14 my-14 mx-8 p-8 lg:px-10 flex flex-col lg:flex-col gap-8 items-start justify-between">
        <h2 className="text-[22px] font-bold pr-10 leading-[36px]">EMAIL</h2>
        <p className="text-[12px] leading-[28px]">
          Please include your name and book title in the subject of the email
          and send us the following:
        </p>
        <ol className="list-decimal text-[12px] leading-[28px] font-semibold mx-5">
          <li>A SYNOPSIS OF THE BOOK</li>
          <li>A COVERING LETTER</li>
          <li>THE FULL MANUSCRIPT</li>
        </ol>
        <p className="text-[14px] leading-[28px] font-semibold text-buttonred uppercase">
          submissions@olympiapublishers.com
        </p>
      </div>
    </div>
  );
};

export default Boxes;
