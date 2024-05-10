import SectionsData from "@/utils/about/SectionsData.json";
import Button from "../common/Button";
import Link from "next/link";

const { BumblebeeBooks } = SectionsData;

const BumblebeeBooksCard = () => {
  return (
    <div className="lg:flex gap-4 2xl:gap-24 bg-[#FEF3CE] border-y border-black hidden">
      <div className="lg:w-1/2 w-full relative">
        <img
          src={BumblebeeBooks.banner}
          alt="who-banner"
          className="w-full 2xl:h-[700px]"
        />
        <div className="absolute inset-0 left-10 xl:top-8 2xl:top-60 flex flex-col justify-center items-center">
          <img
            src="/assets/about/Asset 11.png"
            alt="bees"
            className="absolute top-4 left-40 w-24 xl:top-2 xl:left-48 xl:w-28 2xl:-top-44 2xl:left-[480px] 2xl:w-40 z-10"
          />
          <img
            src="/assets/about/Asset 12.png"
            alt="bees"
            className="absolute top-2 right-0 w-16 xl:top-0 xl:right-0 xl:w-20 z-10 2xl:-top-52 2xl:right-[30px] 2xl:w-32"
          />
          <div className="relative overflow-hidden w-full my-10 pt-[56.25%]">
            <div className="absolute top-0 right-0">
              <iframe
                className="w-[300px] h-[190px] xl:w-[440px] xl:h-[280px] 2xl:w-[650px] 2xl:h-[450px]"
                src={BumblebeeBooks.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="w-[300px] xl:w-[440px] 2xl:w-[650px] p-5 space-y-3 border border-black flex items-center justify-between bg-gradient-to-l from-[#FFFFFE] via-[#FEF5DA] to-[#FEC413]">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-[10px] xl:text-[13px] 2xl:text-[17px] font-open-sans font-extrabold uppercase">
                    {BumblebeeBooks.title2}
                  </h3>
                  <h2 className="font-courier-prime text-[8px] xl:text-[11px]  2xl:text-[15px] font-medium tracking-tighter">
                    {BumblebeeBooks.subTitle}
                  </h2>
                </div>
                <Link href="/bumblebee-books">
                  <Button
                    title={BumblebeeBooks.buttonTitle}
                    color={"yellow"}
                    width={
                      "w-[90px] text-[6px] xl:w-[120px] xl:text-[9px] py-[7px] font-bold bg-transparent"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
          <img
            src="/assets/about/Asset 13.png"
            alt="bees"
            className="absolute bottom-8 left-44 w-16 xl:bottom-12 xl:left-52 xl:w-20 z-10 2xl:bottom-10 2xl:left-[500px] 2xl:w-32"
          />
        </div>
      </div>

      <div className="mx-5 font-open-sans p-5 lg:p-0 lg:w-1/2">
        <div className="max-w-[300px] xl:max-w-[450px] 2xl:max-w-[550px] grid items-center h-full">
          <div className="space-y-4">
            <p className="font-bold text-[19px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-open-sans">
              {BumblebeeBooks.title}
            </p>
            <p className="text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-[15px] space-y-4 leading-9 lg:leading-6 xl:leading-7 2xl:leading-9 font-open-sans">
              {BumblebeeBooks.para1}
            </p>
            <p className="text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-[15px] space-y-4 leading-9 lg:leading-6 xl:leading-7 2xl:leading-9 font-open-sans">
              {BumblebeeBooks.para2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BumblebeeBooksCard;
