// components/csr/CharitiesAndInitiatives.jsx

import React from "react";

const CharitiesAndInitiatives = () => {
  return (
    <div className="lg:flex flex-row-reverse w-full">
      <img
        src="/assets/Corporate Social Responsibilities/Asset 1 (1).png"
        className="w-full lg:hidden"
        alt="Corporate Social Responsibilities"
      />
      <img
        src="/assets/Corporate Social Responsibilities/Charities.png"
        className="lg:w-[40%] hidden lg:block"
        alt="Corporate Social Responsibilities"
      />
      <div className="lg:w-[60%] py-6 lg:pr-16 xl:pr-28 2xl:pr-28 2xl:pl-0">
        <h1 className="font-bold text-[13px] lg:text-[20px] 2xl:text-[30px] lg:py-8 lg:hidden">
          {" "}
          CHARITIES AND INITIATIVES{" "}
        </h1>
        <h1 className="font-bold text-[13px] lg:text-[20px] 2xl:text-[30px] lg:py-8 hidden lg:block">
          {" "}
          Charities and Initiatives{" "}
        </h1>
        <div className="space-y-6 lg:space-y-4 leading-9 lg:leading-8 2xl:leading-10 mb-32 lg:mb-0 lg:text-[10px] 2xl:text-[14px]">
          <p>
            Olympia Publishers India collaborates with leading non-profit
            organizations to spread the joy of reading, support learning and
            bring smiles to children through book donations.
          </p>
          <p>
            We regularly donate books to schools, take part in sponsored charity
            days such as World Water day or Mental Health Awareness week, where
            we aim to use the book’s positive message to inspire people and aid
            personal development. Our books travel beyond India to help uplift
            other communities such as donating books to reading charities that
            help children in Africa in local schools, libraries and hospitals.
            We help them to see the world from many different perspectives. You
            can keep track of the charities we donate to and work with by
            following us on our social media.
          </p>
          <p>
            Additionally, we also take regular initiatives to help foster the
            creative potential of our publishing teams. We encourage regular
            breaks throughout the workday, walks around the area to stretch the
            legs and keep the eyes away from a computer screen for long length
            of time. We aim to create a relaxing, stress free environment where
            creativity can flow, and we do believe we are achieving this very
            well. We want Olympia Publishers to be a great place to be published
            and to work!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharitiesAndInitiatives;
