import React from "react";
import Button from "../common/Button";
import Socials from "../common/footer/comp/Socials";

const LocationCard = ({
  countryName,
  imgSrc,
  addressLines,
  emailSections,
  phoneNumber,
  i,
}) => {
  return (
    <div
      className={`grid p-14 items-center gap-7 ${
        i % 2 === 0 ? "bg-[#F9F7F6]" : "bg-white"
      }`}
    >
      <img src={imgSrc} alt={`${countryName} flag`} />
      <h1 className="font-bold text-3xl">{countryName}</h1>
      <h1 className="font-bold text-xl uppercase">Find us</h1>
      <p className="leading-10 font-medium">
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
  );
};

export default LocationCard;
