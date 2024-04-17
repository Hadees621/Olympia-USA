import Image from "next/image";
import Button from "../common/Button";

const Review = () => {
  return (
    <div className="flex flex-col lg:border lg:my-12 2xl:my-20 gap-32 lg:gap-0 lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px] mt-12 lg:hidden ">
      <div className="flex flex-col lg:flex-row bg-[#F9F9F9] lg:hidden">
        <div className="flex-1">
          <Image
            src="/assets/Home/poems.PNG"
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
        <div className="flex-1 flex-col items-center lg:border border-black">
          <div className="flex flex-col justify-between items-start p-4 lg:flex-col lg:justify-start font-open-sans lg:px-10 w-full gap-4 py-6 mx-5">
            <h2 className="text-xl lg:text-3xl font-bold">
              REQUEST A REVIEW COPY
            </h2>
            <p className="text-[14px] font-open-sans leading-10">
              We’re happy to offer review copies to magazines, <br />{" "}
              newspapers, book bloggers and Vloggers who are <br /> interested
              in reviewing our books.{" "}
            </p>
            <Button
              title={"Fill out our form"}
              width={
                "w-[150px] h-[42px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px]"
              }
              color={"transparent"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
