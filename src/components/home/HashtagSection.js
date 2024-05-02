import Image from "next/image";
import React from "react";

const HashtagSection = () => {
  const renderImages = (count) => {
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(
        <img
          key={i}
          src={`/Home/Asset 12.png`}
          alt="hashtag"
          className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] p-2 border border-black"
        />
      );
    }
    return images;
  };

  return (
    <div className="flex flex-col pt-10 lg:pt-20">
      <p className="text-[26px] font-semibold font-droid-sans py-5 lg:py-10 lg:pl-60 text-center lg:text-start">
        #Olympiapublishersusa
      </p>

      <div className="overflow-hidden relative">
        <div className="flex justify-center">
          <div className="flex overflow-x-hidden">
            <div className="flex flex-col">
              <div className="w-full flex">{renderImages(12)}</div>
              <div className="w-full flex">{renderImages(12)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashtagSection;
