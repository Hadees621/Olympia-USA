import AboutAuthor from "@/components/author/AboutAuthor";
import Article from "@/components/author/Article";
import Banner from "@/components/author/Banner";
import Experience from "@/components/author/Experience";
import BooksSection from "@/components/common/BooksSection";
import Button from "@/components/common/Button";
import BackButton from "@/components/feature/article/BackButton";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1300px]">
        <BackButton />
        <div className="flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
          <Banner />
          <AboutAuthor />
          <BooksSection title={"BOOKS"} />
          <Experience />
          <Article />
        </div>
      </div>
    </div>
  );
};

export default page;
