import React from "react";
import CommonSection from "./CommonSection";
import LocationCard from "./LocationCard";
import Review from "./Review";
import CountrySelector from "./CountrySelector";
import { addressInfo } from "@/utils/contact-us/utils";

const SmScreenSections = () => {
  return (
    <div className="lg:hidden">
      <CountrySelector />

      {addressInfo.map((info, index) => (
        <LocationCard
          i={index}
          key={index}
          countryName={info.country}
          imgSrc={info.imgSrc}
          addressLines={info.addressLines}
          emailSections={info.emailSections}
          phoneNumber={info.phoneNumber}
        />
      ))}

      <Review />

      <CommonSection
        title="START YOUR PUBLISHING JOURNEY WITH US"
        content="Olympia Publishers are now accepting submissions across various genres. If you have written a story, submit your manuscript for us to review."
        buttonTitle="Read our submissions guidelines"
        buttonWidth="w-[240px] h-[44px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px] border border-white mt-6"
        bgColor="bg-[#C61E2B]"
      />
      <CommonSection
        title="FAQS"
        content="For anymore questions or queries, visit our frequently asked questions page. We are ready to answer all of your questions!"
        buttonTitle="View FAQs"
        buttonWidth="w-[100px] h-[44px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px] border border-white mt-6"
        bgColor="bg-black"
      />
    </div>
  );
};

export default SmScreenSections;
