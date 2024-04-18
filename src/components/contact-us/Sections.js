import Button from "../common/Button";
import Image from "next/image";
import SectionsData from "@/utils/about/SectionsData.json";

const { publishing } = SectionsData;
const { section2, section1 } = publishing;
const Sections = () => {
  return (
    <div className="lg:flex flex-col my-20 lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto hidden">
      <div className="hidden lg:flex">
        <div className="flex-1">
          <Image
            src={"/assets/contact/Asset 4.png"}
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center font-open-sans px-14 2xl:p-20 gap-10">
            <div className="flex flex-col gap-4 text-black">
              <h2 className="text-[22px] font-semibold">
                Request a review copy
              </h2>
              <p className="mt-2 font-droid text-[10px] pr-10">
                We’re happy to offer review copies to magazines, newspapers,
                book bloggers and Vloggers who are interested in reviewing our
                books.
              </p>
            </div>
            <Button
              title={"FILL OUT FORM"}
              width="w-[111px] text-[8px] font-bold py-[8px] font-open-sans"
              color="transparent"
              href={section2.buttonLink}
            />
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Sections;
