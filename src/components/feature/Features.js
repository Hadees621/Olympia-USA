import { articlesData } from "@/utils/feature/utils";
import React from "react";
import Article from "./Article";
import Button from "./Button";

const Features = () => {
  return (
    <>
      <h1 className="font-semibold text-black text-[22px] py-6 mx-3">
        All features
      </h1>

      {/* Article section */}
      <div className="grid lg:grid-cols-3 md:justify-center gap-4 lg:gap-0 lg:flex-row py-10 mx-3">
        {articlesData.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </>
  );
};

export default Features;
