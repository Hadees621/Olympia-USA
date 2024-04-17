import React from "react";

const EnvironmentAndSustainability = () => {
  return (
    <div className="lg:flex flex- w-full">
      <div className="lg:w-[60%] py-6 lg:pr-16 xl:pr-28 2xl:pr-28 2xl:pl-0">
        <h1 className="font-bold text-[13px] lg:text-[20px] 2xl:text-[30px] lg:py-8">
          {" "}
          Environment and sustainability{" "}
        </h1>
        <div className="space-y-6 lg:space-y-4 leading-9 lg:leading-8 2xl:leading-10 mb-32 lg:mb-0 lg:text-[10px] 2xl:text-[14px]">
          <p>
            Working in a sustainable way and reducing impact on our environment
            is a very important element here at Olympia Publishers.
          </p>
          <div>
            <p className="font-bold text-[11px] lg:text-[10px] 2xl:text-[14px]">
              100% SUSTAINABLE SOURCING
            </p>
            <p>
              All of the paper that we use to make books is sustainably sourced
              and is Forest Stewardship Council® (FSC®) certified. The FSC is
              one of the only wood certification schemes endorsed by green
              charities such as Greenpeace and the WWF. They also support
              biodiversity, safe guarding forests and local communities. As they
              say, “Forests for all, forever”. Our books are also printed with
              Carbon Captured Paper. Carbon Capture is a mechanism for
              offsetting the carbon produced in the production and distribution
              of paper through the purchase of 'credits'. These then translate
              into money which is given to the Woodland Trust, who use it to
              plant trees which absorb carbon from the atmosphere.
            </p>
          </div>

          <div>
            <p className="font-bold text-[11px] lg:text-[10px] 2xl:text-[14px]">
              DIGITAL MANUSCRIPTS{" "}
            </p>
            <p>
              We encourage writers submitting their work to send it via email or
              using our online submission form rather than sending a printed
              manuscript by post. We try to revise and read proofs
              electronically when-ever possible, and in general communicate by
              phone and email rather than sending physical letters. These small
              changes in our day-to-day lives do add up and help us to become a
              forward thinking, independent publishing house. Every day we learn
              something new; there is certainly room for improvement and we
              continue our efforts to ensure we reduce our environmental impact
              by making improvements through our entire supply chain and working
              with suppliers who are taking measures to manage their
              environmental impact.
            </p>
          </div>

          <div>
            <p className="font-bold text-[11px] lg:text-[10px] 2xl:text-[14px]">
              RECYCLING
            </p>
            <p>
              We recycle all cardboard, envelopes and packaging throughout our
              warehouse and distribution. Our office is encouraged to recycle
              everything possible. Carpooling, public transport and cycling are
              always encouraged in office and effective green ideas are
              rewarded. Every year we work as hard as we can to reduce our
              carbon footprint.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/Corporate Social Responsibilities/Asset 3 (1).png"
        className="w-full lg:hidden"
        alt="Corporate Social Responsibilities"
      />
      <img
        src="/assets/Corporate Social Responsibilities/Environment.png"
        className="w-[40%] bg-[#FAFAFA] hidden lg:block"
        alt="Corporate Social Responsibilities"
      />
    </div>
  );
};

export default EnvironmentAndSustainability;
