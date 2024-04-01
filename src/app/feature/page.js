import { buttonsData } from "@/utils/feature/utils";
import NavigationButtons from "@/components/feature/NaviagationButtons";
import RecentPost from "@/components/feature/RecentPost";
import Features from "@/components/feature/Features";
import SmPagination from "@/components/feature/SmPagination";
import LgPagination from "@/components/feature/LgPagination";
import Banner from "@/components/common/Banner";

const Page = () => {
  return (
    <div className="w-full lg:flex lg:justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <Banner title={"Features"} />

        <NavigationButtons data={buttonsData} />

        <RecentPost />

        <Features key={1} />

        <SmPagination />

        <LgPagination />
      </div>
    </div>
  );
};

export default Page;
