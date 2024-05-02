import React from "react";

const RequirementsTab = ({ tabData }) => (
  <div>
    <p className="font-bold text-[20px] xl:text-[17px] mt-10 font-open-sans">
      {tabData.title}
    </p>
    <div className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
      <div className="space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
        <h2 className="font-semibold text-[11px] mt-8">Written in English?</h2>
        <p className="text-[11px]">
          We only accept submissions written in English language
        </p>
      </div>
      <div className="space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
        <h2 className="font-semibold text-[11px]">Incomplete manuscript?</h2>
        <p className="text-[11px]">
          If you haven’t yet finished the work but would like to know if it
          would be something we are interested in before completing then you are
          also welcome to send samples of the manuscript to us.
        </p>
      </div>
      <div className="space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
        <h2 className="font-semibold text-[11px]">
          We are only able to consider one submission at a time during the
          editorial process.
        </h2>
        <p className="text-[11px] mt-4">
          TIP: Always use a font that is legible and easy to read. Garamond or
          Times New Roman are preferred, whereas fonts such as Comic Sans and
          Broadway are not encouraged.
        </p>
      </div>
      <div className="space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
        <h2 className="font-semibold text-[11px]">4 weeks review process</h2>
        <p className="text-[11px]">
          Your submitted manuscript will be reviewed by our Submissions Editor
          who will get in touch with you with their feedback. This process can
          take up to 4 weeks. This timeframe can vary depending on the time of
          the year.
        </p>
        <p className="text-[11px] mt-5">
          At Olympia we pride ourselves on our responsive nature. We confirm the
          receipt of all submissions and inform you of our decision regarding
          them.
        </p>
      </div>
      <div className="space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
        <h2 className="font-semibold text-[11px]">Some useful tips</h2>
        <p className="text-[11px]">
          There is no need to double space your work. Always use a font that is
          legible and easy to read. Garamond or Times New Roman are preferred,
          whereas fonts such as Comic Sans and Broadway are not encouraged.
        </p>
      </div>
    </div>
  </div>
);

export default RequirementsTab;
