import { useState } from "react";

const Slider = ({}) => {
  const slidesData = [
    {
      title: "AUTHOR NAME 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet...",
      moreInfo: "+ MORE ABOUT RUDI JENNINGS",
    },
    {
      title: "AUTHOR NAME 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet...",
      moreInfo: "+ MORE ABOUT ANOTHER AUTHOR",
    },
    {
      title: "AUTHOR NAME 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet...",
      moreInfo: "+ MORE ABOUT RUDI JENNINGS",
    },
    {
      title: "AUTHOR NAME 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet...",
      moreInfo: "+ MORE ABOUT ANOTHER AUTHOR",
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  return (
    <div className="flex-col justify-center lg:justify-between items-center hidden lg:flex">
      <div>
        <p className="text-[23px] font-bold font-open-sans py-12">
          Authors mentioned
        </p>
      </div>
      <div className="relative w-[400px] xl:w-[450px] 2xl:w-[550px]">
        <div className="py-8 px-10 2xl:py-14 2xl:px-16 border border-black font-open-sans">
          <h1 className="font-semibold 2xl:text-[15px]">
            {slidesData[currentSlideIndex].title}
          </h1>
          <p className="text-[11px] 2xl:text-[14px] py-4 2xl:py-8">
            {slidesData[currentSlideIndex].content}
          </p>
          <div className="flex justify-between text-[#C2C2C2] text-[11px] 2xl:text-[14px]">
            <p>{slidesData[currentSlideIndex].moreInfo}</p>
            <p>
              {currentSlideIndex + 1}/{slidesData.length}
            </p>
          </div>
        </div>
        <div
          className="absolute -right-4 xl:-right-6 top-28 xl:top-24 2xl:top-40 2xl:-right-8 bg-white cursor-pointer"
          onClick={handleNextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 26 26"
            className="w-9 h-9 xl:w-11 xl:h-11 2xl:w-14 2xl:h-14"
          >
            <g fill="currentColor">
              <path d="M10.116 7.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z" />
              <path d="M10.884 19.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z" />
              <path
                fillRule="evenodd"
                d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"
                clipRule="evenodd"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
