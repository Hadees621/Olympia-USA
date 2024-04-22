const Experience = ({ Title, text, placing }) => {
  return (
    <div className="p-8 bg-[#EFEFEF] mx-6 md:mx-20">
      <h1 className={`text-[16px] font-bold text-center ${placing}`}>
        {" "}
        {Title}{" "}
      </h1>
      <p className="text-[13px] leading-9 py-3">{text}</p>
    </div>
  );
};

export default Experience;
