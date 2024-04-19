import Submission from "@/components/publish/Submission";
import Banner from "@/components/common/Banner";
import FAQ from "@/components/publish/FAQ";
import TextSection from "@/components/publish/TextSection";

const Page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
      <Banner title={"Publish with us"} key={1} />

      <TextSection />

      <Submission />

      <FAQ />
    </div>
  );
};

export default Page;
