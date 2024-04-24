import Link from "next/link";
import Button from "../common/Button";

const CommonSection = () => {
  return (
    <>
      <div
        className={`flex flex-col justify-between items-start p-8 lg:flex-col lg:justify-start font-open-sans lg:px-10 gap-8 text-white py-14 my-14 ml-9 bg-[#C61E2B]`}
      >
        <h2 className="text-[24px] font-semibold pr-10 leading-[36px]">
          START YOUR PUBLISHING JOURNEY WITH US
        </h2>
        <p className="text-[14px] font-open-sans leading-10">
          Olympia Publishers are now accepting submissions across various
          genres. If you have written a story, submit your manuscript for us to
          review.
        </p>
        <Link href="/publish-with-us">
          <Button
            title={"Read our submissions guidelines"}
            width={
              "w-[240px] h-[44px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px] border border-white mt-6"
            }
            color={"transparent"}
          />
        </Link>
      </div>
      <div
        className={`flex flex-col justify-between items-start p-8 lg:flex-col lg:justify-start font-open-sans lg:px-10 gap-8 text-white py-14 my-14 ml-9 bg-black`}
      >
        <h2 className="text-[24px] font-semibold pr-10 leading-[36px]">FAQS</h2>
        <p className="text-[14px] font-open-sans leading-10">
          For anymore questions or queries, visit out frequently asked questions
          page. We are ready to answer all of your questions!
        </p>
        <Link href="/publish-with-us">
          <Button
            title={"View FAQs"}
            width={
              "w-[100px] h-[44px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px] border border-white mt-6"
            }
            color={"transparent"}
          />
        </Link>
      </div>
    </>
  );
};

export default CommonSection;
