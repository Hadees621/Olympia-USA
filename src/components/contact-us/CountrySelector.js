"use client";
const CountrySelector = () => {
  const handleButtonClick = (country) => {
    console.log(`${country} button clicked`);
  };

  return (
    <div className="flex overflow-x-auto py-6 xl:py-2 ml-5 lg:border-b justify-center items-center ">
      <div className="flex 2xl:justify-center 2xl:gap-14 gap-6 w-full md:w-max">
        <button
          className="text-[12px] 2xl:text-[18px] p-4 px-16 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7"
          onClick={() => handleButtonClick("UK")}
        >
          UK
        </button>
        <button
          className="text-[12px] 2xl:text-[18px] p-4 px-16 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7"
          onClick={() => handleButtonClick("USA")}
        >
          USA
        </button>
        <button
          className="text-[12px] 2xl:text-[18px] p-4 px-12 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7"
          onClick={() => handleButtonClick("INDIA")}
        >
          INDIA
        </button>
      </div>
    </div>
  );
};

export default CountrySelector;
