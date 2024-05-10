import Link from "next/link";
import { PublishingSteps } from "@/utils/about/utils";

const PublishingProcess = () => {
  return (
    <div className="hidden lg:block py-12">
      <div className="flex justify-between my-10 px-5">
        <h2 className="font-semibold text-[18px] font-open-sans xl:text-[22px] 2xl:text-[25px]">
          Publishing process
        </h2>
        <Link href="/publishing-process">
          <button className="text-[8px] xl:text-[9px] py-[8px] font-bold font-open-sans flex items-center justify-center w-[100px] xl:w-[120px] 2xl:w-[150px] 2xl:py-[11px] 2xl:text-[13px] border border-black hover:bg-buttonred hover:text-white">
            LEARN MORE
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-5 mt-6 items-center gap-6 justify-center">
        {PublishingSteps.map((step, index) => (
          <div
            key={index}
            className={`relative flex justify-center items-center bg-[#F0F4F7] h-40 w-48 xl:h-56 xl:w-60 mt-40 xl:mt-28 2xl:h-[230px] 2xl:w-[260px] 2xl:mt-40`}
          >
            <div
              className={`absolute bottom-6 xl:bottom-4 2xl:bottom-14 flex flex-col items-center justify-center`}
            >
              <img
                src={step.imageSrc}
                alt="Step"
                className={`w-[85px] xl:w-[100px] 2xl:w-[130px] ${step.imageClass}`}
              />
              <p className="font-bold text-center m-6 xl:m-8 2xl:m-10 text-[9px] xl:text-[12px] 2xl:text-[16px]">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishingProcess;
