import React from "react";
import Button from "../common/Button";
import LocationCard from "./LocationCard";
import ImageSlider from "../submit-online/ImageSlider";
import YouTubeVideo from "./YoutubeVideo";
import SectionsData from "@/utils/about/SectionsData.json";
import { locations, sliderData } from "@/utils/about/utils";
const SmSections = () => {
  const {
    publications,
    bumblebeeBooks,
    authorSays,
    socialResponsibility,
    publishingJourneys,
    authorHub,
    hybrid,
    location,
  } = SectionsData;

  return (
    <div>
      <ImageSlider
        title={publications.title}
        images={sliderData}
        imageClass="w-[270px] max-h-[250px] px-14"
        flag={"true"}
      />

     

      <div className="bg-[#F5F3F2] p-5 grid items-center justify-center space-y-4 py-10 m-5 lg:hidden">
        <h2 className="font-bold text-[20px] text-center font-open-sans">
          {location.title}
        </h2>
        <p className="text-center text-[14px] font-open-sans">
          {location.para}
        </p>
        <div className="grid items-center justify-center w-full">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>

      <div className="mx-5 font-open-sans p-3 lg:hidden">
        <p className="font-bold text-[20px] mt-10">
          BUMBLEBEE <br />
          BOOKS
        </p>
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
          <p className="mt-5">{bumblebeeBooks.description}</p>
          <p>
            See some of our{" "}
            <a href={bumblebeeBooks.latestBooksLink} className="underline">
              latest Bumblebee Books.
            </a>
          </p>
        </div>
      </div>

      <YouTubeVideo />
      <div className="bg-[#F8F6F4] p-5 space-y-3 lg:hidden">
        <h3 className="text-[20px] font-open-sans font-extrabold">
          Discover Bumblebee Books
        </h3>
        <h2 className="font-courier-prime text-[20px] font-medium tracking-tighter">
          The home of children’s literature
        </h2>
        <Button
          title={"View Bumblebee books"}
          color={"transparent"}
          width={"w-[180px] text-[12px] font-bold"}
        />
      </div>

      <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
        <img
          src="/assests/about/Asset 1.png"
          alt="asset"
          className="w-full md:w-[60%] mx-auto"
        />
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
          <p className="font-bold text-[30px] mt-10">{authorSays.title}</p>
          <p className="mt-5">{authorSays.quote}</p>
          <Button
            title={authorSays.buttonText}
            color={"transparent"}
            width={"w-[210px] text-[15px] font-semibold"}
          />
        </div>
      </div>

      <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
          <img
            src="/assests/about/Asset 2.png"
            alt="asset"
            className="w-full md:w-[60%] mx-auto"
          />
          <p className="font-bold text-[30px] mt-10 leading-[30px]">
            {socialResponsibility.title}
          </p>
          <p className="mt-5">{socialResponsibility.description}</p>
          <Button
            title="Learn more"
            color="transparent"
            width="w-[110px] text-[14px] font-semibold"
            link={socialResponsibility.learnMoreLink}
          />
        </div>
      </div>

      <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
        <img
          src="/assests/about/Asset 3.png"
          alt="asset"
          className="w-full md:w-[60%] mx-auto"
        />
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
          <p className="font-bold text-[30px] mt-10 text-buttonred leading-[30px]">
            {publishingJourneys.title}
          </p>
          <p className="mt-5">{publishingJourneys.description}</p>
          <Button
            title="Submit online"
            color="red"
            width="w-[170px] text-[14px] font-semibold"
            link={publishingJourneys.submitLink}
          />
        </div>
      </div>

      <div className="lg:hidden">
        <img
          src="/assests/about/Asset 4.png"
          alt="asset"
          className="w-full md:w-[60%] mx-auto mt-28"
        />
        <div className="m-5 font-open-sans p-3">
          <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 mx-10">
            <img src="/assests/about/Asset 5.png" alt="asset" className="m-6" />
            <p className="mt-5">{authorHub.description}</p>
            <Button
              title="Explore"
              color="transparent"
              width="w-[110px] text-[14px] font-semibold"
              link={authorHub.exploreLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmSections;
