import React from "react";

const LoveForAll = () => {
  return (
    <div className="pt-44 lg:pt-0 lg:flex bg-[#F9F7F6] lg:bg-white">
      <img
        src="/assets/Corporate Social Responsibilities/Asset 2 (1).png"
        className="w-full lg:hidden"
        alt="Corporate Social Responsibilities"
      />
      <img
        src="/assets/Corporate Social Responsibilities/Love_1.png"
        className="lg:w-[60%] hidden lg:block bg-pink-100"
        alt="Corporate Social Responsibilities"
      />
      <div className="lg:w-[40%] p-8 xl:p-12">
        <h1 className="font-bold text-[13px] lg:text-[20px] 2xl:text-[30px] lg:py-8 lg:hidden">
          LOVE FOR ALL
        </h1>
        <h1 className="font-bold text-[13px] lg:text-[20px] 2xl:text-[30px] lg:py-8 hidden lg:block">
          Love for all
        </h1>
        <div className="space-y-6 lg:space-y-4 leading-9 lg:leading-8 2xl:leading-10 mb-32 lg:mb-0 lg:text-[10px] 2xl:text-[14px]">
          <p>
            Through books we are shaping future readers and representing the
            society that we live in. From our authors and illustrators to our
            publishing teams, we want to ensure the creators of our books truly
            represent the diversity in gender, age, sexuality and ethnicity and
            each member has their story which makes the Olympia family even more
            united and beautiful.
          </p>
          <p>
            Equality and diversity are at the core of our culture, and this is
            reflected in everything we do, every day. We are very proud and
            respectful of all our members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveForAll;
