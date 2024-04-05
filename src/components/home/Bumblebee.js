import Image from "next/image";
import { BumblebeeBanner } from "@/utils/home/Links";

const Bumblebee = () => {
  return (
    <div className=" py-20 relative">
      <div className="relative w-auto h-auto">
        <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1450px]">
          <img
            src={BumblebeeBanner}
            width={1600}
            height={700}
            alt="BumblebeeBanner"
            objectFit="cover"
          />
        </div>
        <div className="absolute lg:right-40 lg:top-36 xl:right-32 xl:top-48 2xl:right-44 2xl:top-72 text-black font-open-sans gap-3">
          <h2 className="xl:text-3xl 2xl:text-4xl font-semibold">
            Discover Bumblebee Books
          </h2>
          <p className="xl:text-2xl 2xl:text-3xl font-courier-prime font-medium tracking-tight">
            The home of children’s literature
          </p>
          <div className="py-5">
            <button className="text-[8px] xl:text-[11px] p-3 xl:px-5 xl:py-[13px] font-bold font-droid-sans rounded shadow bg-[#FEC40D] focus:border-none  ">
              VIEW BUMBLEBEE BOOKS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bumblebee;
