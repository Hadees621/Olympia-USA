import SectionsData from "@/utils/about/SectionsData.json";

const { PublishWith } = SectionsData;

const PublishWithUs = () => {
  return (
    <div className="lg:flex gap-4 px-3 xl:px-8 py-10">
      <div className="mx-5 font-open-sans p-5 lg:p-0 lg:w-1/2">
        <div className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[17px]  lg:font-droid-sans grid items-center h-full">
          <div className="space-y-3 xl:space-y-5">
            <h2 className="font-bold text-[15px] font-open-sans xl:text-[18px] 2xl:text-[25px]">
              {PublishWith.title}
            </h2>
            <p className="text-[10px] xl:text-[12px] 2xl:text-[17px] pr-16 xl:pr-20 font-open-sans">
              {PublishWith.para}
            </p>
            <button className="text-[8px] xl:text-[9px] py-[7px] font-bold font-open-sans flex items-center justify-center w-[100px] xl:w-[120px] 2xl:w-[150px] 2xl:py-[10px] 2xl:text-[13px] border border-black uppercase">
              {PublishWith.buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src={PublishWith.banner}
          alt="who-banner"
          className="hidden lg:block w-full"
        />
      </div>
    </div>
  );
};

export default PublishWithUs;
