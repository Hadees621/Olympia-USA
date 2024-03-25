import Image from "next/image";
import Button from "./Button";

const Article = ({
  src,
  width,
  height,
  title,
  date,
  category,
  content,
  flag = true,
}) => {
  return (
    <div className="p-2 lg:p-3 xl:p-4 flex flex-col lg:border border-black flex-grow hover:bg-[#EFF4F7] md:border">
      <div className="">
        <Image
          src={src}
          width={width}
          height={height}
          className="hover:shadow"
          alt="features"
        />
      </div>
      <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5 p-3 lg:p-1">
        <div className="flex flex-col-reverse">
          <p className="font-bold text-[18px]">{title}</p>
          <p className="text-[12px]">
            {date} - {category}
          </p>
        </div>
        {flag && <p className="text-[12px]">{content}</p>}
        {flag && (
          <Button title="READ FEATURE" width="w-[120px]" color="transparent" />
        )}
      </div>
    </div>
  );
};

export default Article;
