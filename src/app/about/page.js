import Banner from "@/components/common/Banner";

const Page = () => {
  return (
    <div className="w-full lg:flex lg:justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <Banner title={"About us"} />
      </div>
    </div>
  );
};

export default Page;
