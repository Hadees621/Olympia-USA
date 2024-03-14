import Image from "next/image";
import Button from "../common/Button";

const Features = () => {
  return (
    <div className="max-w-[1200px]">
      <p className="text-[26px] font-semibold font-droid-sans text-start">
        Features
      </p>
      <div className="flex py-10">
        <div className="p-6 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Home/Features.png"
              width={350}
              height={190}
              className="hover:shadow"
              alt="features"
            />
          </div>
          <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
            <div>
              <p className="font-bold text-[18px]">Lorem ipsum Feature title</p>
              <p className="text-[12px]">July 01 2022 - Category</p>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetuer
              <br /> adipiscing elit, sed diam nonummy...
            </p>

            <Button title="READ FEATURE" width="w-[48%]" color="transparent" />
          </div>
        </div>
        <div className="p-6 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Home/Features.png"
              width={350}
              height={190}
              className="hover:shadow"
              alt="features"
            />
          </div>
          <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
            <div>
              <p className="font-bold text-[18px]">Lorem ipsum Feature title</p>
              <p className="text-[12px]">July 01 2022 - Category</p>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetuer
              <br /> adipiscing elit, sed diam nonummy...
            </p>

            <Button title="READ FEATURE" width="w-[48%]" color="transparent" />
          </div>
        </div>
        <div className="p-6 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Home/Features.png"
              width={350}
              height={190}
              className="hover:shadow"
              alt="features"
            />
          </div>
          <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
            <div>
              <p className="font-bold text-[18px]">Lorem ipsum Feature title</p>
              <p className="text-[12px]">July 01 2022 - Category</p>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetuer
              <br /> adipiscing elit, sed diam nonummy...
            </p>

            <Button title="READ FEATURE" width="w-[48%]" color="transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
