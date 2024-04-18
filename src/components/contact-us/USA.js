import React from "react";

const AddressComponent = ({ data }) => {
  return (
    <div className="gap-10 my-20 hidden lg:flex">
      <div className="w-[35%] h-full">
        <img
          src="/assets/contact/Asset 1.png"
          alt={data.country}
          className="xl:h-[370px] 2xl:h-[470px]"
        />
      </div>

      <div className="w-[65%] flex justify-between">
        <div className="space-y-4 xl:space-y-8 2xl:space-y-12">
          <img src={data.imgSrc} alt={data.country} className="h-12 2xl:h-24" />
          <h1 className="font-bold text-[18px] xl:text-[24px] 2xl:text-[28px] underline font-open-sans">
            {data.country}
          </h1>
          <div className="space-y-6">
            <h1 className="font-bold text-[#321B2B] text-[8px] xl:text-[10px] 2xl:text-[14px] uppercase font-open-sans">
              Find us
            </h1>
            <div>
              {data.addressLines.map((line, index) => (
                <p
                  key={index}
                  className="leading-6 xl:leading-8 font-open-sans text-[8px] xl:text-[10px] 2xl:text-[14px] text-[#84848A]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 xl:mt-40 2xl:mt-60 space-y-6">
          <h1 className="font-bold text-[#321B2B] text-[8px] xl:text-[10px] 2xl:text-[14px] uppercase font-open-sans">
            Email us
          </h1>
          <div className="text-[8px] xl:text-[10px] 2xl:text-[14px] text-[#84848A] space-y-6">
            {data.emailSections.slice(0, 3).map((section, index) => (
              <div key={index}>
                <p>{section.label}</p>
                <p>{section.email}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-44 xl:mt-56 2xl:mt-72">
          <div className="text-[8px] xl:text-[10px] 2xl:text-[14px] text-[#84848A] space-y-6">
            {data.emailSections.slice(3).map((section, index) => (
              <div key={index}>
                <p>{section.label}</p>
                <p>{section.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComponent;
