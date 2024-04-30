import { fictionLgBannner } from "@/utils/genre/utils";
import Image from "next/image";

const LgBanner = ({ title, img }) => {
  return (
    <div className="relative md:flex justify-center items-center w-full">
      <div className="w-full">
        <Image
          src={img}
          height={350}
          width={1500}
          alt="banner"
          layout="responsive"
        />
      </div>
      <div className="absolute top-30 left-28 2xl:top-[200px] 2xl:left-[400px] flex justify-center items-center md:px-8">
        <p className="text-white  text-[45px] xl:text-[55px] 2xl:text-[85px] font-bold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default LgBanner;
