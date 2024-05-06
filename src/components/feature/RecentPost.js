import Image from "next/image";
import React from "react";
import Facebook from "../../../public/imgs/Facebook.svg";
import Twitter from "../../../public/imgs/Twitter.svg";
import Instagram from "../../../public/imgs/Instagram.svg";

const RecentPost = ({ flag = true }) => {
  return (
    <>
      {/* recent post */}
      {flag && (
        <h1 className="font-semibold text-black text-[22px] py-6 hidden lg:block mx-3">
          Recent post
        </h1>
      )}
      <div className="lg:border border-black flex-grow mx-3 hidden lg:flex">
        <div className="w-1/2 h-full">
          <img
            src="/Home/Asset 5.png"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="hover:shadow"
            alt="features"
          />
        </div>
        <div className="pt-10 flex flex-col w-1/2 justify-center font-open-sans space-y-5 flex-1 p-8 bg-[#FAFAFA]">
          <div className="space-y-3">
            <p className="font-bold text-[18px]">
              Article title Lorem ipsum dolor sit amet consecteuer
            </p>
            <p className="text-[12px]">July 01, 2022 - category</p>
          </div>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummyLorem ipsum dolor sit amet, consectetuer adipiscing elit,
            cing elit, sit
          </p>
          {flag ? (
            <button
              className={`text-[8px] py-3 px-8 font-bold font-open-sans shadow border border-black flex items-center justify-center w-max my-7`}
            >
              READ FEATURE
            </button>
          ) : (
            <div className="flex gap-3">
              <Image src={Facebook} alt="Facebook" height={32} />
              <Image src={Twitter} alt="Twitter" height={32} />
              <Image src={Instagram} alt="Instagram" height={32} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentPost;
