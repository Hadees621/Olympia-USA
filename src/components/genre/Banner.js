import Image from "next/image";

const Banner = ({ title, img }) => {
  return (
    <div className="relative md:flex justify-center items-center w-full">
      <div className="md:w-[700px] border ">
        <Image
          src={img}
          height={250}
          width={500}
          alt="banner"
          layout="responsive"
        />
      </div>
      <div className="absolute top-14 left-10 flex justify-center items-center md:px-8">
        <p className="text-white text-4xl font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Banner;
