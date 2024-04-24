import "@/app/globals.css";
import Image from "next/image";
import Text from "./comp/Text";
import TitleP from "./comp/TitleP";
import Socials from "./comp/Socials";
import { footerLinks } from "@/utils/footer/links";
const Footer = () => {
  return (
    <>
      <div className="bg-footergrey w-full p-8">
        <div className="flex justify-center lg:justify-between items-center lg:items-start flex-col lg:flex-row mx-auto lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:w-full 2xl:w-[80%]">
            {footerLinks.map((section, index) => (
              <div
                key={index}
                className="mt-9 lg:mt-0 space-y-6 space-x-2 xl:space-x-0"
              >
                <TitleP title={section.title} />
                <div className="grid space-y-4">
                  {section.links.map((link) => (
                    <a
                      href={link.url}
                      className="font-semibold text-[#4A4949] text-[11.5px] font-open-sans"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-14 lg:hidden w-full">
              <Text text="Bumblebee Books is an imprint of Olympia Publishers" />
              <Text text="© 2022 Ashwell Publishing Ltd | Registered in England No. 6431579" />
            </div>
          </div>
          <div className="space-y-8 xl:space-y-6 mt-6 lg:mt-0 w-full grid items-center lg:justify-end ">
            <TitleP title="Connect" />
            <Text text="Follow Olympia USA" />
            <Socials />
            <Text text="Follow Bumblebee USA" />
            <Socials />
            <div className="flex space-x-9 py-4 xl:py-9 w-full items-center justify-center md:justify-start">
              <Image
                src={"/assets/Icons/Bumblebee.png"}
                height={54}
                width={54}
                alt="socials"
              />
              <Image
                src={"/assets/Icons/AuthorHub.png"}
                height={42}
                width={42}
                alt="socials"
              />
            </div>
            <div className="w-full flex items-center justify-center lg:hidden">
              <Text text="Terms & Conditions | Privacy & Cookies Policy" />
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between items-center mx-auto lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1600px] hidden">
          <div className="grid w-full 2xl:w-[50%] space-y-3">
            <Text text="Bumblebee Books is an imprint of Olympia Publishers" />
            <Text text="© 2022 Ashwell Publishing Ltd | Registered in England No. 6431579" />
          </div>
          <div className="w-full flex justify-end">
            <Text
              text="Terms & Conditions | Privacy & Cookies Policy"
              link={"/terms-and-conditions"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
