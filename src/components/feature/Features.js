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

      <div className="grid lg:grid-cols-3 md:justify-center gap-14 lg:gap-0 lg:flex-row py-10 mx-3 lg:hidden">
        {articlesData.map((article, index) => (
          <Article
            key={index}
            flag={false}
            buttonFlag={true}
            ButtonText={"Read article"}
            {...article}
          />
        ))}
      </div>

      <div className="lg:grid lg:grid-cols-3 md:justify-center gap-14 lg:gap-0 lg:flex-row py-10 mx-3 hidden">
        {articlesData.map((article, index) => (
          <Article
            key={index}
            flag={true}
            buttonFlag={false}
            ButtonText={"Read article"}
            {...article}
          />
        ))}
      </div>
    </>
  );
};

export default Features;
