import React from "react";
import Review from "./Review";
import CountryLinks from "./CountryLinks";
import LocationCard from "./LocationCard";
import CommonSection from "./CommonSection";
import ContactUsData from "@/utils/contact-us/ContactUsData.json";

const SmScreenSections = () => {
  const { addressInfo } = ContactUsData;

  return (
    <div className="lg:hidden">
      <CountryLinks />

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
