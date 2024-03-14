import Image from "next/image";
import React from "react";
import Button from "../common/Button";

const PublishingJourney = () => {
  return (
    <div className="flex flex-col max-w-[1200px] my-20">
      <div className="flex">
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center font-open-sans p-20 gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] font-semibold text-buttonred">
                Start your publishing journey with us
              </h2>
              <p className="mt-2 font-droid text-[12px] pr-10 text-black">
                Have you written a story and looking to get published? Olympia
                Publishers are now accepting submissions across various genres.
                Submit your manuscript for us to review.
              </p>
            </div>
            <Button title="SUBMIT ONLINE" width="w-[36%]" color="red" />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/assests/Banners/CSRBanner.png"
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Image
            src="/assests/Banners/CSRBanner.png"
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center font-open-sans p-20 gap-10">
            <div className="flex flex-col gap-4 text-black">
              <h2 className="text-[28px] font-semibold ">Meet our authors</h2>
              <p className="mt-2 font-droid text-[12px] pr-10">
                Chancers are you’re looking for one of our most popular writers,
                so here they are.
              </p>
            </div>
            <Button
              title="VIEW ALL AUTHORS"
              width="w-[35%]"
              color="transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingJourney;