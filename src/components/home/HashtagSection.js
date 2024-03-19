import Image from "next/image";
import React from "react";

const HashtagSection = () => {
  const renderImages = (count) => {
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(
        <div key={i} className="p-4 border border-black w-max">
          <Image
            src={`/Home/Asset 12.png`}
            width={250}
            height={250}
            alt="hashtag"
          />
        </div>
      );
    }
    return images;
  };

  return (
    <div className="flex flex-col pt-10 lg:pt-20">
      <p className="text-[26px] font-semibold font-droid-sans py-5 lg:py-10 lg:pl-80 text-center lg:text-start">
        #Olympiapublishersusa
      </p>

      <div className="grid lg:hidden">
        <div className="flex">
          <div className="border-black">
            <img
              src={`/Home/Mobile/Asset 38.png`}
              style={{ height: "250px" }}
              alt="hashtag"
            />
          </div>
          <div className="border-black">
            <img
              src={`/Home/Mobile/Asset 39.png`}
              style={{ height: "250px" }}
              alt="hashtag"
            />
          </div>
          <div className="border-black">
            <img
              src={`/Home/Mobile/Asset 42.png`}
              style={{ height: "250px" }}
              alt="hashtag"
            />
          </div>
        </div>
        <div className="flex">
          <div className="border-black">
            <img
              src={`/Home/Mobile/Asset 38.png`}
              style={{ height: "250px" }}
              alt="hashtag"
            />
          </div>
          <div className="border-black">
            <img
              src={`/Home/Mobile/Asset 39.png`}
              style={{ height: "250px" }}
              alt="hashtag"
            />
          </div>
          <div className="border-black">
            <img
              src={`/Home/Mobile/Asset 42.png`}
              style={{ height: "250px" }}
              alt="hashtag"
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="w-full flex">{renderImages(4)}</div>
        <div className="w-full flex">{renderImages(4)}</div>
      </div>
    </div>
  );
};

export default HashtagSection;
