import AboutSection from "@/components/home/AboutSection";
import Bumblebee from "@/components/home/Bumblebee";
import Categories from "@/components/home/Categories";
import EditorsPick from "@/components/home/EditorsPick";
import Features from "@/components/home/Features";
import HashtagSection from "@/components/home/HashtagSection";
import MostPopular from "@/components/home/MostPopular";
import NewReleases from "@/components/home/NewReleases";
import PoemsComponent from "@/components/home/PoemsComponent";
import PublishingJourney from "@/components/home/PublishingJourney";
import { AboutUsData } from "@/utils/home/Home";
import Slider from "@/components/home/Slider";
import SmScreenPopular from "@/components/home/SmScreenPopular";

export default function Home() {
  const { heading, paragraph } = AboutUsData;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <Slider /> */}

      {/* <NewReleases /> */}

      <div className="lg:hidden">
        <SmScreenPopular />
      </div>

      {/* <AboutSection heading={heading} paragraph={paragraph} />

      <PoemsComponent />

      <MostPopular />

      <Bumblebee />

      <Categories />

      <Features />

      <PublishingJourney />

      <EditorsPick />

      <HashtagSection /> */}
    </div>
  );
}
