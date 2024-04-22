import Image from "next/image";
import Button from "../common/Button";

const Section = ({ title, subtitle, buttonTitle, imageUrl }) => (
  <div className="lg:flex flex-col lg:flex-row my-36">
    <div className="flex-1">
      <div className="flex flex-col h-full justify-center items-start font-open-sans lg:px-5 2xl:p-20 lg:gap-10 mx-14">
        <div className="flex flex-col gap-4 mb-5 lg:mb-0">
          <h2 className="text-[36px] lg:text-[26px] 2xl:text-[30px] font-bold text-buttonred md:text-center lg:text-start">
            {title}
          </h2>
          <p className="mt-2 font-droid text-[11px] xl:text-[12px] 2xl:text-[17px] leading-7 lg:pr-10 text-black md:text-center lg:text-start">
            {subtitle}
          </p>
        </div>
        <Button title={buttonTitle} width="w-[140px] text-[10px]" color="red" />
      </div>
    </div>
    <div className="flex-1 hidden lg:flex">
      <Image src={imageUrl} width={700} height={200} alt="Section Image" />
    </div>
  </div>
);

export default Section;
