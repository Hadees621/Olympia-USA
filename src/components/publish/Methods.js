import Link from "next/link";
import React from "react";
import Button from "../common/Button";

const Methods = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Methods;
