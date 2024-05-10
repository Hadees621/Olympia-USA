import AboutAuthor from "@/components/author/AboutAuthor";
import Article from "@/components/author/Article";
import Banner from "@/components/author/Banner";
import Experience from "@/components/author/Experience";
import BooksSection from "@/components/common/BooksSection";
import BackButton from "@/components/feature/article/BackButton";
import Features from "@/components/home/Features";
import Link from "next/link";

const page = () => {
  return (
    <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1400px] mx-auto">
      <Link href={`/authors`}>
        <BackButton />
      </Link>
      <div className="flex flex-col w-full justify-center md:justify-center lg:justify-start font-open-sans space-y-5 p-3 lg:p-1 px-3">
        <Banner />
        <AboutAuthor />
        <BooksSection title={"BOOKS"} lgTitle={"Books by Rudi Jennings"} />
        <div className="lg:hidden">
          <Experience
            Title={"EXPERIENCE"}
            text={
              " “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat”. - Author name"
            }
          />
          <Article />
        </div>

        <div className="hidden lg:block mx-auto">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default page;
