import SmallScreenComponents from "@/components/publish/SmallScreenComponents";
import LargeScreenComponents from "@/components/publish/LargeScreenComponents";
import Banner from "@/components/common/Banner";

const Page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
      <Banner title="Publish with us" key={1} />
      <SmallScreenComponents />
      <LargeScreenComponents />
    </div>
  );
};

export default Page;
