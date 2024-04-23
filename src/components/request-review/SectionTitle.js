const SectionTitle = ({ number, title }) => {
  return (
    <div>
      <h2 className="text-[#E6E6E6] text-[22px] font-bold">{number}</h2>
      <h1 className="text-[22px] font-bold">{title}</h1>
    </div>
  );
};

export default SectionTitle;