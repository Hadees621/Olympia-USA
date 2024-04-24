import Image from "next/image";
import Facebook from "../../../../../public/imgs/Facebook.svg";
import Instagram from "../../../../../public/imgs/Instagram.svg";
import Piniest from "../../../../../public/imgs/Pintrest.svg";
import Twitter from "../../../../../public/imgs/Twitter.svg";
import Youtube from "../../../../../public/imgs/Youtube.svg";

const Socials = ({ h = 32 }) => {
  return (
    <div className="flex gap-6">
      <a href="https://www.instagram.com/olympiapublishers">
        <Image src={Instagram} alt="Instagram" height={h} />
      </a>
      <a href="https://www.facebook.com/olympiapublishers/">
        <Image src={Facebook} alt="Facebook" height={h} />
      </a>
      <a href="https://www.youtube.com/channel/UCwZz7h-PRWOdjAr9RblcBMQ">
        <Image src={Youtube} alt="Youtube" height={h} />
      </a>
      <a href="https://twitter.com/olympiapub?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
        <Image src={Twitter} alt="Twitter" height={h} />
      </a>
      <a href="https://www.pinterest.com/olympiabooks/">
        <Image src={Piniest} alt="Piniest" height={h} />
      </a>
    </div>
  );
};

export default Socials;
