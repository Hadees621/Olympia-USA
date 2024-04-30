import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import { useBumblebeeStore } from "@/stores/States";

const SubmitOnline = () => {
  const { flag } = useBumblebeeStore();
  return (
    <div className="flex flex-col lg:flex-row lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px] lg:my-40">
      <div className="flex-1">
        <div className="flex flex-col h-full md:justify-center md:items-center lg:items-start lg:justify-center font-open-sans p-5 md:px-10 lg:px-5 2xl:p-20 lg:gap-10">
          <div className="flex flex-col gap-4 mb-5 lg:mb-0 mr-10 xl:mr-16 2xl:">
            <h2 className="text-[36px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] font-bold text-black md:text-center lg:text-start ">
              Start your publishing journey with us
            </h2>
            <p className="mt-2 font-droid text-[12px] xl:text-[13px] 2xl:text-[15px] leading-7 lg:pr-10 text-black md:text-center lg:text-start">
              If you have written a story to inspire a child, submit your story
              to us. Submit your manuscript for us to review, we would love to
              read it.
            </p>
          </div>
          <Link href="/submit-online">
            <Button
              title="SUBMIT ONLINE"
              width={flag && "border-none w-[130px] text-[9px] font-bold"}
              color={"yellow"}
            />
          </Link>
        </div>
      </div>

      {/* sm  */}
      <div className="flex gap-5 px-5 sm:justify-center sm:w-full lg:hidden">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="">
            <Image src={"/Home/Mobile/Asset 31.png"} width={200} height={400} />
          </div>
          <div className="">
            <Image src={"/Home/Mobile/Asset 32.png"} width={200} height={200} />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="h-full">
            <Image
              src={"/Home/Mobile/Asset 33.png"}
              width={200}
              height={1000}
            />
          </div>
          <div className="">
            <Image src={"/Home/Mobile/Asset 34.png"} width={200} height={900} />
          </div>
        </div>
      </div>

      {/* banner */}

      <div className="flex-1 hidden lg:flex">
        <Image
          src={"/assets/Bumblebee/Asset 1-45/Asset 24.png"}
          width={700}
          height={200}
          alt="About Section Image"
        />
      </div>
    </div>
  );
};

export default SubmitOnline;
