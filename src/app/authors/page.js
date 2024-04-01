import Banner from "@/components/common/Banner";
import NavigationButtons from "@/components/feature/NaviagationButtons";
import SmPagination from "@/components/feature/SmPagination";
import AuthorComponent from "@/components/search/AuthorComponent";
import { alphabetButtons } from "@/utils/author/utils";
import { buttonsData } from "@/utils/feature/utils";
import { Books } from "@/utils/home/Books";
import React from "react";

const Authors = () => {
  const renderAuthors = () => {
    return Books.map((book, index) => (
      <div key={index} className="w-full lg:w-1/4">
        <AuthorComponent
          src={book.src}
          title={book.title}
          author={book.author}
        />
      </div>
    ));
  };

  return (
    <div className="w-full lg:flex lg:justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1200px] 2xl:max-w-[1600px]">
        <Banner title={"About us"} />

        <NavigationButtons data={alphabetButtons} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-0 lg:flex items-center justify-center lg:border-black mx-5 lg:mx-0 my-8">
          {renderAuthors()}
        </div>

        <SmPagination />
      </div>
    </div>
  );
};

export default Authors;
