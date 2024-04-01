import React from "react";
import BuyFromDropdown from "./BuyFromDropdown";

const LgScreenRecent = () => {
  const flag = true;
  return (
    <div>
      <div className="hidden lg:block">
        {flag && (
          <h1 className="font-semibold text-black text-[22px] py-6 hidden lg:block mx-3">
            Recent post
          </h1>
        )}
        <div className="lg:border border-black flex-grow mx-3 hidden lg:flex">
          <div className="flex flex-col w-1/2 h-full bg-white border-b border-black">
            <div className="h-full p-28 xl:p- bg-[#F0F4F7] flex justify-center">
              <img
                src="/assests/Books/Asset5.png"
                style={{
                  height: "",
                  objectFit: "cover",
                }}
                className="hover:shadow h-[410px] w-full xl:h-[490px]"
                alt="features"
              />
            </div>
            <div className="p-10 xl:p-12 space-y-4 border-t border-black">
              <h1 className="text-[14px] xl:text-[21px] font-bold">
                Rudi Jennings{" "}
              </h1>
              <p className="text-[10px] xl:text-[12px] leading-6 text-black">
                Rudi Michael Jennings spent the majority of his childhood
                growing up in the Norfolk countryside of fields and trees,
                really living amongst nature and possibly giving the basis of
                description in his book. Through travel, various professions and
                a keen est in psychology...
              </p>
              <p className="text-[#817977] text-[9px] ">
                + MORE ABOUT RUDI JENNINGS
              </p>
            </div>
          </div>
          <div className="pt-10 flex flex-col w-1/2 justify-center xl:justify-start font-open-sans space-y-5 flex-1 p-8 xl:p-14 border border-black">
            <div className="space-y-1">
              <h1 className="text-[18px] xl:text-[22px] font-semibold">
                THE LAST MYON{" "}
              </h1>
              <h1 className="text-[10px] xl:text-[14px] font-semibold text-[#817977]">
                Rudi Jennings{" "}
              </h1>
            </div>
            <p className="text-[12px] xl:text-[14px] leading-7 xl:leading-9 font-open-sans">
              The Last Myon is a story of fantasy adventure, revenge and an
              individual's total unwillingness to submit or to fail, battling
              against overwhelming natural elements and a group of hardened,
              sadistic creatures who will stop at nothing to succeed in his
              capture and slavery. In an everlasting winter world, Ackrehm, the
              last of his Myon kind, must fight for his life, sustaining
              multiple injuries along the way and still demonstrating he truly
              is a force to be reckoned with. Struggling with exhaustion, both
              mentally and physically, will he manage to overcome, or will he
              fight or flee? One thing is for certain, The Last Myon will keep
              you hooked until the very end, bonding with characters and
              excitedly reading on with an obsession to find out what happens
              next, promoting an ethos to take away of never give up, never
              surrender.
            </p>

            <div className="grid items-center w-full bg-white">
              <div className="md:w-[350px] lg:w-full">
                <hr className="my-5" />
                <div className="">
                  <div className="flex justify-between 2xl:justify-center 2xl:gap-14 gap-4 w-full pr-24 xl:pr-40">
                    <button className="text-[11px] xl:text-[14px]  2xl:text-[18px] p-3 px-5 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                      PAPERBACK
                    </button>
                    <button className="text-[11px] xl:text-[14px] 2xl:text-[18px] p-3 px-5 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                      HARDBACK
                    </button>
                    <button className="text-[11px] xl:text-[14px] 2xl:text-[18px] p-3 px-5 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                      EBOOK
                    </button>
                  </div>
                  <div className="grid items-center justify-start xl:justify-start w-full py-5">
                    <BuyFromDropdown />
                  </div>
                </div>
                <hr className="my-5" />
                <div class="overflow-hidden pb-8 pt-4 text-[9px] xl:text-[14px]">
                  <p class="mb-2">
                    <span class="">ISBN:</span> 9781848979345
                  </p>
                  <p class="mb-2">
                    <span class="">Published:</span> 30/11/2017
                  </p>
                  <p class="mb-2">
                    <span class="font-">Pages:</span> 147
                  </p>
                  <p class="mb-2">
                    <span class="">Size:</span> 205x140mm
                  </p>
                  <p>
                    <span class="">Imprint:</span> Olympia Publishers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgScreenRecent;
