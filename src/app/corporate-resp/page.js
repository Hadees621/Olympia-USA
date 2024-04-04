import Banner from "@/components/common/Banner";
import CharitiesAndInitiatives from "@/components/corporate/CharitiesAndInitiatives";
import EnvironmentAndSustainability from "@/components/corporate/EnvironmentAndSustainability";
import LoveForAll from "@/components/corporate/LoveForAll";

const page = () => {
  return (
    <div className="font-open-sans lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] mx-auto">
      <Banner title={"Corporate social responsibilities"} />
      <div className="px-10 lg:px-0 font-medium py-10 mb-40 lg:mb-0">
        <CharitiesAndInitiatives />
        <LoveForAll />
        <EnvironmentAndSustainability />
      </div>
    </div>
  );
};

export default page;
