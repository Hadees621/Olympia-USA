import Image from "next/image";
import Facebook from "../../../../../public/imgs/Facebook.svg";
import Instagram from "../../../../../public/imgs/Instagram.svg";
import Piniest from "../../../../../public/imgs/Pintrest.svg";
import Twitter from "../../../../../public/imgs/Twitter.svg";
import Youtube from "../../../../../public/imgs/Youtube.svg";

const Socials = ({ h = 32 }) => {
  return (
    <div className="flex gap-6">
      <Image src={Instagram} alt="Instagram" height={h} />
      <Image src={Facebook} alt="Facebook" height={h} />
      <Image src={Youtube} alt="Youtube" height={h} />
      <Image src={Twitter} alt="Twitter" height={h} />
      <Image src={Piniest} alt="Piniest" height={h} />
    </div>
  );
};

export default Socials;
