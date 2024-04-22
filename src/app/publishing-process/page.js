import Banner from "@/components/common/Banner";
import ProcessSteps from "@/components/publishing-process/ProcessSteps";

const page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
      <Banner title={"Publishing process"} key={2} />

      <div className="text-[13px] text-center xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-8 xl:leading-7 2xl:leading-9 md:font-droid-sans mx-7 md:text-[14px] md:max-w-[400px] md:mx-auto">
        We know that getting your book published can sometimes seem like a
        daunting prospect. We've created this page to give you the information
        and insight to help you to start your own publishing journey.
      </div>

      <ProcessSteps />
    </div>
  );
};

export default page;
