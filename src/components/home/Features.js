import Image from "next/image";
import Button from "../common/Button";

const Features = () => {
  return (
    <div className="lg:max-w-[800px] 2xl:max-w-[1200px]">
      <p className="text-[26px] font-semibold font-droid-sans text-center lg:text-start">
        Features
      </p>
      <div className="flex flex-col lg:flex-row py-10">
        <div className="p-2 lg:p-3 xl:p-6 flex flex-col lg:border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Home/Features.PNG"
              width={450}
              height={190}
              className="hover:shadow"
              alt="features"
            />
          </div>
          <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
            <div className="flex flex-col-reverse">
              <p className="font-bold text-[18px]">ARTICLE TITLE</p>
              <p className="text-[12px]">July 01 2022 - Category</p>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetuer
              <br className="hidden xl:block" /> adipiscing elit, sed diam
              nonummy...
            </p>

            <Button
              title="READ FEATURE"
              width="w-[48%] lg:w-[50%] xl:w-[48%]"
              color="transparent"
            />
          </div>
        </div>
        <div className="p-2 lg:p-3 xl:p-6 flex flex-col lg:border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Home/Features.PNG"
              width={450}
              height={190}
              className="hover:shadow"
              alt="features"
            />
          </div>
          <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
            <div className="flex flex-col-reverse">
              <p className="font-bold text-[18px]">ARTICLE TITLE</p>
              <p className="text-[12px]">July 01 2022 - Category</p>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetuer
              <br className="hidden xl:block" /> adipiscing elit, sed diam
              nonummy...
            </p>

            <Button
              title="READ FEATURE"
              width="w-[48%] lg:w-[50%] xl:w-[48%]"
              color="transparent"
            />
          </div>
        </div>
        <div className="p-2 lg:p-3 xl:p-6 flex flex-col lg:border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Home/Features.PNG"
              width={450}
              height={190}
              className="hover:shadow"
              alt="features"
            />
          </div>
          <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
            <div className="flex flex-col-reverse">
              <p className="font-bold text-[18px]">ARTICLE TITLE</p>
              <p className="text-[12px]">July 01 2022 - Category</p>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetuer
              <br className="hidden xl:block" /> adipiscing elit, sed diam
              nonummy...
            </p>

            <Button
              title="READ FEATURE"
              width="w-[48%] lg:w-[50%] xl:w-[48%]"
              color="transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
