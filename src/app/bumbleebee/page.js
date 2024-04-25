"use client";

import { useEffect } from "react";
import { useBumblebeeStore } from "@/stores/States";
import Slider from "@/components/bumblebee/Slider";
import NewReleases from "@/components/home/NewReleases";
import SubmitOnline from "@/components/bumblebee/SubmitOnline";
import GreenSlider from "@/components/bumblebee/GreenSlider";
import Characters from "@/components/bumblebee/Characters";

export default function Home() {
  const { setFlag } = useBumblebeeStore();
  useEffect(() => {
    setFlag(true);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Slider />

      <div className="lg:hidden">
        <NewReleases />
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center">
        <NewReleases />
      </div>

      <Characters />

      <SubmitOnline />


      <GreenSlider />

      {/* <Features /> */}

      {/*    <div className="hidden lg:flex flex-col justify-center items-center">
        <EditorsPick />
      </div>

      <div className="lg:hidden">
        <SmEditorsPick />
      </div>

      <HashtagSection /> */}
    </div>
  );
}
