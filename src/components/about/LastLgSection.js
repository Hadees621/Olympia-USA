import Button from "../common/Button";
import Image from "next/image";
import SectionsData from "@/utils/about/SectionsData.json";

const { publishing } = SectionsData;
const { section1, section2, section3, section4 } = publishing;

const PublishingJourney = () => {
  return (
    <div className="lg:flex flex-col my-20 lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto hidden">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center items-start font-open-sans lg:px-5 2xl:p-20 lg:gap-10 mx-14">
            <div className="flex flex-col gap-4 mb-5 lg:mb-0">
              <h2 className="text-[36px] lg:text-[26px] font-bold text-buttonred md:text-center lg:text-start">
                {publishing.section1.title}
              </h2>
              <p className="mt-2 font-droid text-[11px] leading-7 lg:pr-10 text-black md:text-center lg:text-start">
                {publishing.section1.subtitle}
              </p>
            </div>
            <Button
              title={publishing.section1.buttonTitle}
              width="w-[140px] text-[10px]"
              color="red"
            />
          </div>
        </div>
        <div className="flex-1 hidden lg:flex">
          <Image
            src={section1.imageUrl}
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="hidden lg:flex">
        <div className="flex-1">
          <Image
            src={section2.imageUrl}
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center font-open-sans px-24 2xl:p-20 gap-10">
            <div className="flex flex-col gap-4 text-black">
              <h2 className="text-[22px] font-semibold ">{section2.title}</h2>
              <p className="mt-2 font-droid text-[10px] pr-10">
                "{section2.quote}"
              </p>
            </div>
            <Button
              title={section2.buttonTitle}
              width="w-[160px] text-[8px] font-bold"
              color="transparent"
              href={section2.buttonLink}
            />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center items-start font-open-sans lg:px-5 2xl:p-20 lg:gap-10 mx-8">
            <div className="flex flex-col gap-4 mb-5 lg:mb-0">
              <h2 className="text-[36px] lg:text-[22px] font-bold text-buttonred md:text-center lg:text-start">
                {section3.title}
              </h2>
              <p className="mt-2 font-droid text-[11px] leading-7 lg:pr-10 text-black md:text-center lg:text-start">
                {section3.subtitle}
              </p>
            </div>
            <Button
              title={section3.buttonTitle}
              width="w-[120px] text-[9px] py-[8px]"
              color="transparent"
            />
          </div>
        </div>
        <div className="flex-1 hidden lg:flex">
          <Image
            src={section3.imageUrl}
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="relative">
        {/* Image */}
        <img
          src={section4.image}
          alt="About Section Image"
          className="h-[340px] w-[1000px] object-cover"
        />

        {/* Semi-transparent overlay */}
        <div className="absolute top-0 left-0 h-full w-1/2 bg-opacity-75 bg-gray-200 flex justify-center items-center">
          <div className="text-center mx-32 space-y-4">
            <img src={section4.overlayImage} alt="asset" className="" />
            <p className="font-droid text-[11px] leading-7 lg:pr-10 text-black md:text-center lg:text-start">
              {section4.overlayText}
            </p>
            <Button
              title={section4.buttonTitle}
              width="w-[120px] text-[9px] py-[8px]"
              color="transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingJourney;
