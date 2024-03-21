import Image from "next/image";
import { BumblebeeBanner } from "@/utils/home/Links";

const Bumblebee = () => {
  return (
    <div className="lg:max-w-[800px] 2xl:max-w-[1200px] py-20 relative">
      <div className="relative w-auto h-auto">
        <Image
          src={BumblebeeBanner}
          width={1300}
          height={700}
          alt="BumblebeeBanner"
        />
        <div className="absolute lg:right-10 lg:top-24 xl:right-10 xl:top-24 2xl:right-20 2xl:top-36 text-black font-open-sans gap-3">
          <h2 className="text-xl 2xl:text-3xl font-semibold">
            Discover Bumblebee Books
          </h2>
          <p className="text-lg 2xl:text-2xl font-courier-prime font-medium tracking-tight">
            The home of children’s literature
          </p>
          <div className="py-5">
            <button className="text-[11px] px-5 py-[13px] font-bold font-droid-sans rounded shadow bg-[#FEC40D] focus:border-none  ">
              VIEW BUMBLEBEE BOOKS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bumblebee;
