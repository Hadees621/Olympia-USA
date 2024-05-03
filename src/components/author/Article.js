import Image from "next/image";

const Article = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-2 lg:p-3 xl:p- lg:border lg:border-black hover:bg-[#EFF4F7] py-4 px-5 my-10  mx-6 md:mx-20">
      <h1 className={`text-[24px] font-bold text-center uppercase my-10`}>
        {" "}
        Article
      </h1>
      <Image
        src="/Home/Asset 4.png"
        width={450}
        height={190}
        className="hover:shadow"
        alt="features"
      />
      <div className="py-10 flex flex-col items-start md:items-center w-full font-open-sans space-y-2">
        <p className="text-[12px]">Category - July 01 2022 </p>
        <p className="font-bold text-[20px]">ARTICLE TITLE</p>
      </div>
    </div>
  );
};

export default Article;
