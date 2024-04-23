const SectionTitle = ({ number, title, SmallTitle }) => {
  return (
    <div className="lg:flex lg:gap-10 lg:py-4">
      <h2 className="text-[#E6E6E6] text-[22px] font-bold lg:text-[24px]">
        {number}
      </h2>
      <h1 className="text-[22px] font-bold lg:hidden ">{title}</h1>
      <h1 className="text-[22px] font-bold hidden lg:block ">{SmallTitle}</h1>
    </div>
  );
};

export default SectionTitle;
