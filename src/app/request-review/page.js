import Banner from "@/components/common/Banner";
import React from "react";

const page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
      <Banner title={"Request a review copy"} key={3} />
      <div className="text-[13px] text-center xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-8 xl:leading-7 2xl:leading-9 md:font-droid-sans mx-7 md:text-[14px] md:max-w-[400px] md:mx-auto lg:text-start lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] lg:my-16">
        We’re happy to offer review copies to magazines, newspapers, book
        bloggers and vloggers who are interested in reviewing our books. Simply
        fill the form below to request your copy.
      </div>


      
    </div>
  );
};

export default page;
