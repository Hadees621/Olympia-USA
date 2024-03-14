import Image from "next/image";
import React from "react";

const HashtagSection = () => {
  const renderImages = (count) => {
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(
        <div key={i} className="p-4 border border-black w-max">
          <Image src={`/Home/Asset 12.png`} width={250} height={250} />
        </div>
      );
    }
    return images;
  };

  return (
    <div className="flex flex-col pt-20">
      <p className="text-[26px] font-semibold font-droid-sans py-10 pl-80">
        #Olympiapublishersusa
      </p>
      <div className="w-full flex">{renderImages(6)}</div>
      <div className="w-full flex">{renderImages(6)}</div>
    </div>
  );
};

export default HashtagSection;
