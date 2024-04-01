import React from "react";
import BuyFromDropdown from "./BuyFromDropdown";

const SmScreenRecent = () => {
  return (
    <div>
      <div className="lg:hidden">
        <div className="bg-[#EFEFEF] mx-8 p-7 space-y-7 font-open-sans">
          <div className="space-y-1">
            <h1 className="text-[18px] font-bold">THE LAST MYON </h1>
            <h1 className="text-[14px] font-bold">RUDI JENNINGS </h1>
          </div>
          <p className="text-[13px] leading-9">
            The Last Myon is a story of fantasy adventure, revenge and an
            individual's total unwillingness to submit or to fail, battling
            against overwhelming natural elements and a group of hardened,
            sadistic creatures who will stop at nothing to succeed in his
            capture and slavery. In an everlasting winter world, Ackrehm, the
            last of his Myon kind, must fight for his life, sustaining multiple
            injuries along the way and still demonstrating he truly is a force
            to be reckoned with. Struggling with exhaustion, both mentally and
            physically, will he manage to overcome, or will he fight or flee?
            One thing is for certain, The Last Myon will keep you hooked until
            the very end, bonding with characters and excitedly reading on with
            an obsession to find out what happens next, promoting an ethos to
            take away of never give up, never surrender.
          </p>
          <div className="w-full">
            <div className=" space-y-5 pt-8 md:w-[350px] lg:w-full">
              <div className="flex justify-between 2xl:justify-center 2xl:gap-14 gap-4 w-full">
                <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                  PAPERBACK
                </button>
                <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                  HARDBACK
                </button>
                <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                  EBOOK
                </button>
              </div>
              <BuyFromDropdown />
              <div class="overflow-hidden">
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
        <div className="p-8">
          <h1 className="text-[16px] font-bold"> RUDI JENNINGS </h1>
          <p className="text-[13px] leading-9 py-3">
            Rudi Michael Jennings spent the majority of his childhood growing up
            in the Norfolk countryside of fields and trees, really living
            amongst nature and possibly giving the basis of description in his
            book. Through travel, various professions and a keen interest in
            psychology and fantasy writings, he developed a style of his very
            own and is keen to share it with the fantasy adventure world. This
            plans to be the first instalment and adventure of many to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmScreenRecent;
