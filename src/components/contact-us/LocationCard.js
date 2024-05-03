'use client'
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
  const mainDivRef = useRef(null); // Ref for the main div

  const handleClick = () => {
    // Rename the function
    if (mainDivRef.current) {
      mainDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <CountryLinks />
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

const CountryLinks = ({ handleButtonClick }) => {
  return (
    <div className="flex overflow-x-auto py-6 xl:py-2 ml-5 lg:border-b justify-center items-center lg:hidden">
      <div className="flex 2xl:justify-center 2xl:gap-14 gap-6 md:w-max">
        <Link href="#UK">
          <button className="text-[12px] 2xl:text-[18px] p-4 px-16 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7">
            UK
          </button>
        </Link>
        <Link href="#USA">
          <button className="text-[12px] 2xl:text-[18px] p-4 px-16 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7">
            USA
          </button>
        </Link>
        <Link href="#INDIA">
          <button className="text-[12px] 2xl:text-[18px] p-4 px-12 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7">
            INDIA
          </button>
        </Link>
      </div>
    </div>
  );
};

export { CountryLinks };
export default LocationCard;
