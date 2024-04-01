const NavigationButtons = ({ data }) => (
  <div className="overflow-x-auto py-6 xl:py-2 ml-5 lg:border-b">
    <div className="flex justify-between 2xl:justify-center 2xl:gap-14 gap-6 w-full">
      {data.map((button, index) => (
        <button
          key={index}
          className="text-[14px] 2xl:text-[18px] pt-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-red-300 w-max hover:text-[#C9444F] my-7"
        >
          {button.title}
        </button>
      ))}
    </div>
  </div>
);

export default NavigationButtons;
