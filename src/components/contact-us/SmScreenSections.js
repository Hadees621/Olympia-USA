import React from "react";
import CommonSection from "./CommonSection";
import LocationCard from "./LocationCard";
import Review from "./Review";
import CountrySelector from "./CountrySelector";
import ContactUsData from "@/utils/contact-us/ContactUsData.json";

const SmScreenSections = () => {
  const { addressInfo } = ContactUsData;

  return (
    <div className="lg:hidden">
      {/* <CountrySelector /> */}

      {addressInfo.map((info, index) => (
        <LocationCard
          key={index}
          countryName={info.country}
          imgSrc={info.imgSrc}
          addressLines={info.addressLines}
          emailSections={info.emailSections}
          phoneNumber={info.phoneNumber}
        />
      ))}

      <Review />

      <CommonSection />
    </div>
  );
};

export default SmScreenSections;
