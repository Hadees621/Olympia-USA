import Image from "next/image";

const Article = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-2 lg:p-3 xl:p-6 lg:border lg:border-black hover:bg-[#EFF4F7] py-20 px-5">
      <Image
        src="/Home/Asset 4.png"
        width={450}
        height={190}
        className="hover:shadow"
        alt="features"
      />
      <div className="py-10 flex flex-col items-center w-full font-open-sans space-y-5">
        <p className="font-bold text-[18px]">ARTICLE TITLE</p>
        <p className="text-[12px]">July 01 2022 - Category</p>
      </div>
    </div>
  );
};

export default Article;
