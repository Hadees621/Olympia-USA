import Banner from "@/components/common/Banner";
import YouTubeVideo from "@/components/about/YoutubeVideo";
import { PublishingProcessImages, tabsData } from "@/utils/about/utils";
import Awards from "@/components/about/Awards";
import SmSections from "@/components/about/SmSections";
import PublishingProcess from "@/components/about/PublishingProcess";
import WhoWeAre from "@/components/about/WhoWeAre";
import PublishWithUs from "@/components/about/PublishWithUs";
import BumblebeeBooksCard from "@/components/about/BumblebeeBooksCard";
import LastLgSection from "@/components/about/LastLgSection";

const Page = () => {
  return (
    <>
      <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto bg-white">
        <Banner title={"About us"} />

        <WhoWeAre />

        <PublishingProcess imagePaths={PublishingProcessImages} />

        <YouTubeVideo />

        <PublishWithUs />

        <SmSections />
      </div>

      <BumblebeeBooksCard />

      <Awards tabsData={tabsData} />

      {/* <History tabsData={tabsData} /> */}

      <LastLgSection />
    </>
  );
};

export default Page;
