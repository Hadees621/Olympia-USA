"use client";
import React, { useRef } from "react";
import Button from "@/components/common/Button";
import Socials from "@/components/common/footer/comp/Socials";
import Link from "next/link";

const LocationCard = ({
  countryName,
  imgSrc,
  addressLines,
  emailSections,
  phoneNumber,
  i,
}) => {
  const mainDivRef = useRef(null);

  const handleClick = () => {
    if (mainDivRef.current) {
      mainDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* <CountryLinks /> */}
      <div
        id={countryName}
        ref={mainDivRef}
        className={`grid p-14 items-center gap-7 ${
          i % 2 === 0 ? "bg-[#F9F7F6]" : "bg-white"
        }`}
      >
        <img src={imgSrc} alt={`${countryName} flag`} />
        <h1 className="font-bold text-3xl">{countryName}</h1>
        <h1 className="font-semibold text-[17px] uppercase">Find us</h1>
        <p className="leading-10 font-semibold font-open-sans text-[13px]">
          {addressLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <h1 className="font-semibold text-xl uppercase">email us</h1>

        {emailSections.map((section, index) => (
          <div key={index}>
            <h1 className="font-semibold text-lg uppercase font-open-sans">
              {section.label}
            </h1>
            <p className="leading-10 font-semibold text-[12px]">
              {section.email}
            </p>
          </div>
        ))}

        <h1 className="font-bold text-xl uppercase">Speak with us</h1>
        <p className="leading-10 font-semibold text-[12px]">{phoneNumber}</p>
        <h1 className="font-bold text-xl uppercase">CONNECT WITH US</h1>

        <Socials />

        <Button title="VISIT OUR WEBSITE" width={"w-[160px]"} />
      </div>
    </div>
  );
};

export default LocationCard;
