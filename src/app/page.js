"use client";

import AboutSection from "@/components/home/AboutSection";
import Bumblebee from "@/components/home/Bumblebee";
import Categories from "@/components/home/Categories";
import EditorsPick from "@/components/home/EditorsPick";
import Features from "@/components/home/Features";
import MostPopular from "@/components/home/MostPopular";
import NewReleases from "@/components/home/NewReleases";
import PoemsComponent from "@/components/home/PoemsComponent";
import PublishingJourney from "@/components/home/PublishingJourney";
import Slider from "@/components/home/Slider";
import SmScreenPopular from "@/components/home/SmScreenPopular";
import SmAboutSection from "@/components/home/SmAboutSection";
import FeaturedAuthor from "@/components/home/FeaturedAuthor";
import SmBumblebee from "@/components/home/SmBumblebee";
import Button from "@/components/common/Button";
import SmEditorsPick from "@/components/home/SmEditorsPick";
import SmCategories from "@/components/home/SmCategories";
import { AboutUsData, SmAboutUsData } from "@/utils/home/Home";
import Link from "next/link";
import { useBumblebeeStore } from "@/stores/States";
import { useEffect } from "react";
import HashtagSection from "@/components/home/HashtagSection";

export default function Home() {
  const { heading, paragraph } = AboutUsData;
  const { headingS, paragraphS } = SmAboutUsData;
  const { setFlag } = useBumblebeeStore();
  useEffect(() => {
    setFlag(false);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Slider />

      <div className="lg:hidden">
        <SmScreenPopular />
        <SmAboutSection heading={headingS} paragraph={paragraphS} />
        <PoemsComponent />
        <SmCategories />
        <NewReleases />
        <FeaturedAuthor />
        <SmBumblebee />
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center">
        <NewReleases />
        <AboutSection heading={heading} paragraph={paragraph} />
        <MostPopular />
        <Bumblebee />
        <Categories />
      </div>

      {/* <Features />

      <div
        className="bg-cover bg-center md:hidden my-4 w-full"
        style={{ backgroundImage: "url('/Home/Mobile/Asset 30.png')" }}
      >
        <div className="bg-[#F8F6F4] flex flex-col justify-start items-start my-8 mx-6 gap-4 p-8 font-open-sans">
          <p className="font-bold text-[16px] ">MEET OUR AUTHORS</p>
          <p className="font-medium text-[12px]">
            Chances are you’re looking for one of our <br /> most popular
            writers, so here they are.
          </p>
          <Link href="/authors">
            <Button
              title="View all authors"
              color="transparent"
              width="w-[140px] font-bold text-[14px]"
            />
          </Link>
        </div>
      </div>

      <PublishingJourney />

      <div className="hidden lg:flex flex-col justify-center items-center">
        <EditorsPick />
      </div>

      <div className="lg:hidden">
        <SmEditorsPick />
      </div>

      <HashtagSection /> */}
    </div>
  );
}
