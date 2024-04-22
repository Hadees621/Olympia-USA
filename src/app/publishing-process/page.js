import Banner from "@/components/common/Banner";
import Button from "@/components/common/Button";
import Sections from "@/components/contact-us/Sections";
import PublishingJourney from "@/components/home/PublishingJourney";
import ProcessSteps from "@/components/publishing-process/ProcessSteps";

import SectionsData from "@/utils/about/SectionsData.json";
import Image from "next/image";

const { publishing } = SectionsData;
const { section1 } = publishing;

const page = () => {
  return (
    <>
      <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
        <Banner title={"Publishing process"} key={2} />
        <div className="text-[13px] text-center xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-8 xl:leading-7 2xl:leading-9 md:font-droid-sans mx-7 md:text-[14px] md:max-w-[400px] md:mx-auto lg:text-start lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] lg:my-16">
          We know that getting your book published can sometimes seem like a
          daunting prospect. We've created this page to give you the information
          and insight to help you to start your own publishing journey.
        </div>
      </div>

      <ProcessSteps />

      <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
        <div className="lg:hidden">
          <PublishingJourney />
        </div>

        <div className="lg:flex flex-col lg:flex-row hidden my-36">
          <div className="flex-1">
            <div className="flex flex-col h-full justify-center items-start font-open-sans lg:px-5 2xl:p-20 lg:gap-10 mx-14">
              <div className="flex flex-col gap-4 mb-5 lg:mb-0">
                <h2 className="text-[36px] lg:text-[26px] 2xl:text-[30px] font-bold text-buttonred md:text-center lg:text-start">
                  {publishing.section1.title}
                </h2>
                <p className="mt-2 font-droid text-[11px] xl:text-[12px] 2xl:text-[17px] leading-7 lg:pr-10 text-black md:text-center lg:text-start">
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
      </div>
    </>
  );
};

export default page;
