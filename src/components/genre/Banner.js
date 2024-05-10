import Image from "next/image";

const Banner = ({ title, img }) => {
  const titleStyles =
    title === "Bumblebee Books" ? "text-3xl top-6 left-6" : "text-4xl top-14";

  return (
    <div className="relative md:flex justify-center items-center w-full mt-28 lg:mt-0">
      <div className="md:w-[700px] border ">
        <Image
          src={img}
          height={250}
          width={500}
          alt="banner"
          layout="responsive"
        />
      </div>
      <div
        className={`absolute left-10 flex justify-center items-center md:px-8 ${titleStyles}`}
      >
        <p className="text-white font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Banner;
