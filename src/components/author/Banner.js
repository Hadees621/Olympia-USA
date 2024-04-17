import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center lg:hidden">
      <Image
        src="/assets/author.png"
        width={330}
        height={150}
        className="hover:shadow"
        alt="features"
      />
    </div>
  );
};

export default Banner;
