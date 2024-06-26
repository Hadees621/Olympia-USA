import Banner from "@/components/common/Banner";
import YouTubeVideo from "@/components/about/YoutubeVideo";
import Awards from "@/components/about/Awards";
import SmSections from "@/components/about/SmSections";
import PublishingProcess from "@/components/about/PublishingProcess";
import WhoWeAre from "@/components/about/WhoWeAre";
import PublishWithUs from "@/components/about/PublishWithUs";
import BumblebeeBooksCard from "@/components/about/BumblebeeBooksCard";
import LastLgSection from "@/components/about/LastLgSection";
import HybridPublishing from "@/components/about/HybridPublishing";
import History from "@/components/about/History";
import { HistoryTabsData, tabsData } from "@/utils/about/utils";

const Page = () => {
  return (
    <>
      <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto bg-white">
        <Banner title={"About us"} />

        <WhoWeAre />

        <PublishingProcess />

        <YouTubeVideo />

        <HybridPublishing />

        <PublishWithUs />

        <SmSections />
      </div>

      <BumblebeeBooksCard />

      <Awards tabsData={tabsData} />

      <History tabsData={HistoryTabsData} />

      <LastLgSection />
    </>
  );
};

export default Page;
