import { buttonsData } from "@/utils/feature/utils";
import NavigationButtons from "@/components/feature/NaviagationButtons";
import RecentPost from "@/components/feature/RecentPost";
import Features from "@/components/feature/Features";
import SmPagination from "@/components/feature/SmPagination";
import LgPagination from "@/components/feature/LgPagination";

const Page = () => {
  return (
    <div className="w-full lg:flex lg:justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <div className="bg-[#FAFAFA] p-7 my-6 mx-5 lg:mx-0">
          <h1 className="font-semibold text-[#505050] text-[28px]">Features</h1>
        </div>

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
