import Image from "next/image";
import { Books } from "@/utils/home/Books";
import { articlesData } from "@/utils/feature/utils";
import BookComponent from "@/components/home/BookComponent";
import Button from "@/components/feature/Button";
import AuthorComponent from "@/components/search/AuthorComponent";
import Article from "@/components/feature/Article";
import RecentPost from "@/components/feature/RecentPost";
import Facebook from "../../../../public/imgs/Facebook.svg";
import Twitter from "../../../../public/imgs/Twitter.svg";
import Instagram from "../../../../public/imgs/Instagram.svg";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <div className="flex items-center gap-5 pb-4 px-3 lg:py-6 md:px-[150px] lg:px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            id="alt-arrow-left"
          >
            <path
              fill="#111"
              d="M8.16485 11.6296L14.7953 5.1999C15.2091 4.79869 16 5.04189 16 5.5703L16 18.4297C16 18.9581 15.2091 19.2013 14.7953 18.8001L8.16485 12.3704C7.94505 12.1573 7.94505 11.8427 8.16485 11.6296Z"
            ></path>
          </svg>
          <h1 className="font-semibold text-xl ">Back</h1>
        </div>
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

          <div className="flex gap-3 lg:hidden md:px-[100px]">
            <Image src={Facebook} alt="Facebook" height={32} />
            <Image src={Twitter} alt="Twitter" height={32} />
            <Image src={Instagram} alt="Instagram" height={32} />
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

          <div className="grid md:justify-center gap-4 lg:gap-0 lg:flex-row py-10 mx-3">
            <div className="lg:max-w-[800px] 2xl:max-w-[1200px]">
              <p className="text-[26px] font-semibold font-droid-sans text-center lg:text-start">
                Features
              </p>
              <div className="flex flex-col lg:flex-row py-10">
                <div className="p-2 lg:p-3 xl:p-6 flex flex-col lg:border border-black flex-grow hover:bg-[#EFF4F7]">
                  <div className="">
                    <Image
                      src="/Home/Asset 4.png"
                      width={450}
                      height={190}
                      className="hover:shadow"
                      alt="features"
                    />
                  </div>
                  <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
                    <div className="flex flex-col-reverse">
                      <p className="font-bold text-[18px]">ARTICLE TITLE</p>
                      <p className="text-[12px]">July 01 2022 - Category</p>
                    </div>
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet, consectetuer
                      <br className="hidden xl:block" /> adipiscing elit, sed
                      diam nonummy...
                    </p>

                    <Button
                      title="READ FEATURE"
                      width="w-[120px]"
                      color="transparent"
                    />
                  </div>
                </div>
                <div className="p-2 lg:p-3 xl:p-6 flex flex-col lg:border border-black flex-grow hover:bg-[#EFF4F7]">
                  <div className="">
                    <Image
                      src="/Home/Asset 5.png"
                      width={450}
                      height={190}
                      className="hover:shadow"
                      alt="features"
                    />
                  </div>
                  <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
                    <div className="flex flex-col-reverse">
                      <p className="font-bold text-[18px]">ARTICLE TITLE</p>
                      <p className="text-[12px]">July 01 2022 - Category</p>
                    </div>
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet, consectetuer
                      <br className="hidden xl:block" /> adipiscing elit, sed
                      diam nonummy...
                    </p>

                    <Button
                      title="READ FEATURE"
                      width="w-[120px]"
                      color="transparent"
                    />
                  </div>
                </div>
                <div className="p-2 lg:p-3 xl:p-6 flex flex-col lg:border border-black flex-grow hover:bg-[#EFF4F7]">
                  <div className="">
                    <Image
                      src="/Home/Asset 6.png"
                      width={450}
                      height={190}
                      className="hover:shadow"
                      alt="features"
                    />
                  </div>
                  <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
                    <div className="flex flex-col-reverse">
                      <p className="font-bold text-[18px]">ARTICLE TITLE</p>
                      <p className="text-[12px]">July 01 2022 - Category</p>
                    </div>
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet, consectetuer
                      <br className="hidden xl:block" /> adipiscing elit, sed
                      diam nonummy...
                    </p>

                    <Button
                      title="READ FEATURE"
                      width="w-[120px]"
                      color="transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
