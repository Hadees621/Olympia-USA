import TextSection from "@/components/publish/TextSection";
import Submission from "@/components/publish/Submission";
import Banner from "@/components/common/Banner";
import FAQ from "@/components/publish/FAQ";
import Button from "@/components/common/Button";

const Page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
      <Banner title={"Publish with us"} key={1} />

      <TextSection />

      <Submission />

      <FAQ />

      <div
        className={`flex flex-col justify-between items-start p-8 lg:flex-col lg:justify-start font-open-sans lg:px-10 gap-8 text-white py-14 my-14 mx-8 bg-[#C61E2B]`}
      >
        <h2 className="text-[24px] font-semibold pr-10 leading-[36px]">
          SUBMIT ONLINE
        </h2>
        <p className="text-[14px] font-open-sans leading-[28px]">
          A quick and simple way to submit to us is by using our online
          submission form, just click below to begin.
        </p>
        <Button
          title={"Read our submissions guidelines"}
          width={
            "w-[240px] h-[44px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px] border border-white mt-6"
          }
          color={"transparent"}
        />
      </div>

      <div
        className={`flex flex-col justify-between items-start p-8 lg:flex-col lg:justify-start font-open-sans lg:px-10 gap-8 py-14 my-14 mx-8 bg-[#F9F7F6] text-black`}
      >
        <h2 className="text-[22px] font-bold pr-10 leading-[36px]">EMAIL</h2>
        <p className="text-[12px] font-open-sans leading-[28px]">
          Please include your name and book title in the subject of the email
          and send us the following:
        </p>
        <ol className="list-decimal text-[12px] font-open-sans leading-[28px] font-semibold mx-5">
          <li>A SYNOPSIS OF THE BOOK</li>
          <li>A COVERING LETTER</li>
          <li>THE FULL MANUSCRIPT</li>
        </ol>

        <p className="text-[14px] font-open-sans leading-[28px] font-semibold text-buttonred uppercase">
          submissions@olympiapublishers.com
        </p>
      </div>
    </div>
  );
};

export default Page;
