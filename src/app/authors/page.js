"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/common/Banner";
import AuthorComponent from "@/components/search/AuthorComponent";
import { AuthorsData, alphabetButtons } from "@/utils/author/utils";
import NavigationButtons from "@/components/feature/NaviagationButtons";
import LgPagination from "@/components/feature/LgPagination";
import SmPagination from "@/components/genre/SmPagination";

const Authors = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full lg:flex lg:justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <Banner title={"Authors"} />

        <NavigationButtons flag={true} data={alphabetButtons} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center gap-5 lg:gap-0 lg:border-black mx-5 lg:mx-0 my-8">
          {AuthorsData.map((author, index) => (
            <div key={index} className="w-full flex">
              <AuthorComponent src={author.src} author={author.author} />
            </div>
          ))}
        </div>

        {isSmallScreen ? <SmPagination /> : <LgPagination />}
      </div>
    </div>
  );
};

export default Authors;
