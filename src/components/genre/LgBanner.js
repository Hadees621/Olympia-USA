import { fictionBannner, fictionLgBannner } from "@/utils/genre/utils";
import Image from "next/image";

const LgBanner = ({ params }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const capitalizedSlug = capitalizeFirstLetter(params.slug);
  return (
    <div className="relative md:flex justify-center items-center w-full">
      <div className="w-full">
        <Image
          src={fictionLgBannner}
          height={350}
          width={1500}
          alt={params.slug}
          layout="responsive"
        />
      </div>
      <div className="absolute top-30 left-28 2xl:top-[200px] 2xl:left-[400px] flex justify-center items-center md:px-8">
        <p className="text-white  text-[45px] xl:text-[55px] 2xl:text-[85px] font-bold">{capitalizedSlug}</p>
      </div>
    </div>
  );
};

export default LgBanner;