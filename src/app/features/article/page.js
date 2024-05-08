"use client";

import Image from "next/image";
import RecentPost from "@/components/feature/RecentPost";
import Facebook from "../../../../public/imgs/Facebook.svg";
import Twitter from "../../../../public/imgs/Twitter.svg";
import Instagram from "../../../../public/imgs/Instagram.svg";
import BackButton from "@/components/feature/article/BackButton";
import FeaturesSection from "./FeatureSection";
import { featuresData } from "@/utils/feature/utils";
import { useEffect, useState } from "react";
import booksData from "@/utils/books/utils.json";
import Slider from "./Slider";
import Mentioned from "./Mentioned";

const page = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col mx-auto lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1400px] mt-28 lg:mt-0">
        <BackButton />

        <div className="pt-10 flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p- lg:p-1 ">
          <div className="flex flex-col justify-center items-center lg:hidden">
            <Image
              src="/Home/Asset 6.png"
              width={450}
              height={300}
              className="hover:shadow"
              alt="features"
            />
            <div className="space-y-3 border-b py-5 text-start md:text-center  w-full px-5">
              <p className="text-[14px]">category - 00 Month 2022</p>
              <p className="font-bold text-[20px]">ARTICLE TITLE</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <RecentPost flag={false} />
          </div>

          <div className="flex gap-3 p-5 lg:hidden md:px-32">
            {[Facebook, Twitter, Instagram].map((icon, index) => (
              <Image key={index} src={icon} alt={icon} height={32} />
            ))}
          </div>

          {/* text */}
          <p className="text-[12px] 2xl:text-[14px] leading-6 font-open-sans md:px-[100px] lg:px-[200px] 2xl:px-[400px] pb-32 pt-5 px-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
        </div>
      </div>

      <Mentioned />

      <div className="pt-10 flex flex-col w-full items-center justify-center font-open-sans space-y-5 p- lg:p-1 lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto">
        <Slider />
        <FeaturesSection features={featuresData} />
      </div>
    </div>
  );
};

export default page;
