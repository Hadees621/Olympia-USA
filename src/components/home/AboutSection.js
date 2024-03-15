import Image from "next/image";
import { aboutBanner } from "@/utils/home/Links";
import Button from "../common/Button";
const AboutSection = ({ heading, paragraph }) => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1200px] flex py-32">
      <div className="flex-1">
        <div className="flex flex-col h-full justify-center font-open-sans px-5 xl:p-10 xl:gap-10">
          <div className="flex flex-col gap-2 xl:gap-4">
            <h2 className="text-xl xl:text-3xl font-bold">{heading}</h2>
            <p className="my-4 text-[15px] xl:text-[19px]">{paragraph}</p>
          </div>
          <Button title={"MORE ABOUT US"} width={"w-[34%]"} color={"red"} />
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/assests/Banners/about-banner.png"
          width={700}
          height={200}
          alt="About Section Image"
          priority
        />
      </div>
    </div>
  );
};

export default AboutSection;
