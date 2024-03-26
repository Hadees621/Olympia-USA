import { fictionBannner } from "@/utils/genre/utils";
import Image from "next/image";

const Banner = ({ params }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const capitalizedSlug = capitalizeFirstLetter(params.slug);
  return (
    <div className="relative">
      <Image src={fictionBannner} height={250} width={500} alt={params.slug} />
      <div className="absolute top-14 left-10 flex justify-center items-center">
        <p className="text-white text-4xl font-bold">{capitalizedSlug}</p>
      </div>
    </div>
  );
};

export default Banner;
