const AboutAuthor = () => {
  return (
    <div>
      <div className="">
        <div>
          {" "}
          <div className="lg:border border-black flex-grow mx-3 flex">
            <div className="flex-col lg:w-1/2 h-full bg-white border-b border-black hidden lg:flex">
              <div className="h-full p-28 xl:p- bg border-r border-black lg:flex justify-center ">
                <img
                  src="/assets/author.png"
                  style={{
                    height: "",
                    objectFit: "cover",
                  }}
                  className="hover:shadow h-[300px] w-full xl:h-[400px] 2xl:h-[600px]"
                  alt="features"
                />
              </div>
            </div>
            <div className="p-8 bg-[#EFEFEF] lg:bg-white mx-6 md:mx-20 lg:mx-0 w-full lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-[16px] font-bold lg:hidden">
                {" "}
                RUDI JENNINGS{" "}
              </h1>
              <h1 className="text-[16px] 2xl:text-[22px] font-bold hidden lg:block">
                {" "}
                Rudi Jennings{" "}
              </h1>

              <p className="text-[13px] lg:text-[11px] 2xl:text-[17px] 2xl:leading-10 lg:leading-7 leading-9 py-3">
                Rudi Michael Jennings spent the majority of his childhood
                growing up in the Norfolk countryside of fields and trees,
                really living amongst nature and possibly giving the basis of
                description in his book. Through travel, various professions and
                a keen interest in psychology and fantasy writings, he developed
                a style of his very own and is keen to share it with the fantasy
                adventure world. This plans to be the first instalment and
                adventure of many to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
