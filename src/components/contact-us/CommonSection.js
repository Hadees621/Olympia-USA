import Button from "../common/Button";

const CommonSection = ({
  title,
  content,
  buttonTitle,
  buttonWidth,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-col justify-between items-start p-8 lg:flex-col lg:justify-start font-open-sans lg:px-10 gap-8 text-white py-14 my-14 ml-9 ${bgColor}`}
    >
      <h2 className="text-[24px] font-semibold pr-10 leading-[36px]">
        {title}
      </h2>
      <p className="text-[14px] font-open-sans leading-10">{content}</p>
      <Button title={buttonTitle} width={buttonWidth} color={"transparent"} />
    </div>
  );
};

export default CommonSection;
