const Optional = ({ label, yesLabel = "Yes", noLabel = "No" }) => {
  return (
    <div className="flex flex-col gap-3">
      <p>{label}</p>
      <div className="flex gap-16">
        <div className="flex items-center me-4">
          <input
            type="radio"
            value="Yes"
            name="illustration-radio-group"
            className="w-6 h-6 bg-gray-100 border-gray-300"
          />
          <label className="ms-2 text-[13px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px] font-medium text-gray-900">
            {yesLabel}
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="No"
            name="illustration-radio-group"
            className="w-6 h-6 bg-gray-100 border-gray-300"
          />
          <label className="ms-2 text-[13px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px] font-medium text-gray-900">
            {noLabel}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Optional;
