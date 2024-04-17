import React from "react";

const page = () => {
  return (
    <div className="p-6 font-open-sans space-y-5 lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto">
      <div className="flex justify-center w-full">
        <img
          src="/assets/Icons/Thank you.png"
          alt="sa"
          className="w-[300px] md:w-[320px]"
        />
      </div>
      <h1 className="text-[20px]  lg:text-[50px] font-bold text-center px-10">
        Thank you for requesting a review copy!
      </h1>
      <div className="bg-[#F9F7F6] p-8 space-y-3 lg:hidden">
        <h1 className="text-[14px] font-bold">WHAT HAPPENS NEXT?</h1>
        <h1 className="text-[12px] font-semibold leading-8">
          A MEMBER FROM OUR PUBLICITY TEAM WILL GET IN TOUCH WITH YOU WITH
          REGARDS TO YOUR REQUEST.
        </h1>
      </div>
      <div className="bg-[#F9F7F6] p-8 space-y-3 hidden lg:block">
        <h1 className="text-[14px] font-bold">What happens next?</h1>
        <h1 className="text-[12px] font-semibold leading-8">
          A member from our publicity team will get in touch with you with
          regards to your request.
        </h1>
      </div>
    </div>
  );
};

export default page;
