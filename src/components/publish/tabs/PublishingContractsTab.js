import React from "react";

const PublishingContractsTab = ({ tabData }) => (
  <div>
    <p className="font-bold text-[20px] xl:text-[17px] 2xl:text-[19px]  mt-10 font-open-sans">
      {tabData.title}
    </p>

    <p className="text-[12px] md:text-[10px] xl:text-[12px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 mt-4 font-open-sans">
      At Olympia Publishers we work with the hybrid publishing model and offer
      two types of publishing contracts:
    </p>

    <div className="border border-black mt-10 p-5 xl:p-8 space-y-4">
      <img src="/assets/Submissions process/asset.png" alt="" />
      <h2 className="text-[14px] font-bold font-open-sans">
        Traditional contract{" "}
      </h2>
      <p className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
        This is where no costs are incurred by the author and the whole cost for
        producing, publishing and marketing the work is covered by us.
      </p>
    </div>

    <div className="border border-black mt-5 p-5 xl:p-8 space-y-4">
      <img src="/assets/Submissions process/asset2.png" alt="" />
      <h2 className="text-[14px] font-bold font-open-sans">
        Hybrid publishing contract
      </h2>
      <p className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
        This offer is based on a contribution, to be paid by the author, to
        cover initial production and printing of the work.
      </p>
    </div>
  </div>
);

export default PublishingContractsTab;
