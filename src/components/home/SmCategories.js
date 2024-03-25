import Image from "next/image";
import React from "react";

const SmCategories = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-6 my-12">
      <h1 className="font-bold text-lg pb-6">BROWSE BY CATEGORIES</h1>
      <div className="flex w-full px-5 gap-5 py-4">
        <Image src={"/Home/Mobile/Asset 16.png"} width={80} height={60} />
        <div className="bg-green-50 p-6 font-bold w-full items-center justify-center flex">
          <p>FANTASY</p>
        </div>
      </div>
      <div className="flex w-full px-5 gap-5 py-4">
        <Image src={"/Home/Mobile/Asset 17.png"} width={80} height={60} />
        <div className="bg-green-50 p-6 font-bold w-full items-center justify-center flex">
          <p>MYSTERY</p>
        </div>
      </div>
      <div className="flex w-full px-5 gap-5 py-4">
        <Image src={"/Home/Mobile/Asset 18.png"} width={80} height={60} />
        <div className="bg-green-50 p-6 w-full items-center justify-center flex font-bold">
          <p>LIFESTYLE</p>
        </div>
      </div>
    </div>
  );
};

export default SmCategories;
