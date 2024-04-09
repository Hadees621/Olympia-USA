import Image from "next/image";
import { Books } from "@/utils/home/Books";
import BookComponent from "@/components/home/BookComponent";
import Button from "@/components/feature/Button";
import AuthorComponent from "@/components/search/AuthorComponent";
import RecentPost from "@/components/feature/RecentPost";
import Facebook from "../../../../public/imgs/Facebook.svg";
import Twitter from "../../../../public/imgs/Twitter.svg";
import Instagram from "../../../../public/imgs/Instagram.svg";
import BackButton from "@/components/feature/article/BackButton";
import FeaturesSection from "./FeatureSection";
import { featuresData } from "@/utils/feature/utils";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <BackButton />

        <div className="pt-10 flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-5 ">
          <div className="flex flex-col justify-center items-center lg:hidden">
            <Image
              src="/Home/Asset 6.png"
              width={450}
              height={300}
              className="hover:shadow"
              alt="features"
            />
            <div className="space-y-3 border-b pb-5">
              <p className="text-[14px]">category - 00 Month 2022</p>
              <p className="font-bold text-[20px]">ARTICLE TITLE</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <RecentPost flag={false} />
          </div>

          <div className="flex gap-3 lg:hidden md:px-6">
            {[Facebook, Twitter, Instagram].map((icon, index) => (
              <Image key={index} src={icon} alt={icon} height={32} />
            ))}
          </div>

          {/* text */}
          <p className="text-[12px] leading-6 font-droid-sans md:px-[100px] lg:px-[200px] pb-32">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>

          {/* mentioned books */}
          <div className="flex justify-center items-center lg:justify-between lg:bg-white">
            <div>
              <p className="text-[26px] font-semibold font-droid-sans hidden lg:block">
                Books Mentioned
              </p>
              <p className="text-[23px] font-semibold font-open-sans lg:hidden">
                BOOKS MENTIONED
              </p>
            </div>
            <div className="hidden lg:block">
              <Button
                title="EXPLORE MORE"
                width="w-[150px]"
                color="transparent"
              />
            </div>
          </div>
          <div className="flex overflow-x-scroll lg:overflow-x-hidden py-8 lg:py-0 lg:border lg:border-black">
            {Books.map((book, index) => (
              <div className="flex-none" key={index}>
                <BookComponent
                  src={book.src}
                  title={book.title}
                  author={book.author}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:hidden">
            <Button
              title={"View all books"}
              width={"w-[150px]"}
              color={"transparent"}
              key={12}
            />
            <div className="flex flex-col justify-center lg:justify-between items-center">
              <div className="flex justify-center lg:justify-between items-center py-10 px-5 lg:px-0 lg:bg-white">
                <div>
                  <p className="text-[23px] font-bold font-open-sans">
                    BOOKS MENTIONED
                  </p>
                </div>
              </div>
              <div className="flex overflow-x-auto gap-5 lg:gap-0 lg:justify-center lg:border lg:border-black mx-3 lg:mx-0">
                <AuthorComponent
                  author={"Author name"}
                  title={"title"}
                  src={"/assests/author.png"}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:justify-between items-center">
            <div>
              <p className="text-[23px] font-bold font-open-sans py-8">
                Authors mentioned
              </p>
            </div>
            <div className="w-[400px] xl:w-[450px] 2xl:w-[550px]">
              <div className="py-8 px-10 border border-black font-open-sans">
                <h1 className="font-semibold">AUTHOR NAME</h1>
                <p className="text-[11px] py-4">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat...
                </p>
                <div className="flex justify-between text-[#C2C2C2] text-[11px]">
                  <p> + MORE ABOUT RUDI JENNINGS</p>
                  <p>1/2</p>
                </div>
              </div>
            </div>
          </div>

          <FeaturesSection features={featuresData} />
        </div>
      </div>
    </div>
  );
};

export default page;
