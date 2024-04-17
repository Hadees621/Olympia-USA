const PublishingProcess = ({ imagePaths }) => {
  return (
    <div className="hidden lg:block py-12">
      <div className="flex justify-between my-10 px-5">
        <h2 className="font-semibold text-[18px] font-open-sans xl:text-[22px] 2xl:text-[25px]">
          Publishing process
        </h2>
        <button className="text-[8px] xl:text-[9px] py-[8px] font-bold font-open-sans flex items-center justify-center w-[100px] xl:w-[120px] 2xl:w-[150px] 2xl:py-[11px] 2xl:text-[13px] border border-black">
          LEARN MORE
        </button>
      </div>
      <div className="grid grid-cols-5 gap-5 space-y-10">
        {imagePaths.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Asset ${index + 1}`}
            className={index === 0 ? "pt-10" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default PublishingProcess;
