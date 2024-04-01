import Image from "next/image";
import { Books } from "@/utils/home/Books";
import BookComponent from "@/components/home/BookComponent";
import Button from "@/components/feature/Button";
import BackButton from "@/components/feature/article/BackButton";
import BuyFromDropdown from "@/components/genre/book/BuyFromDropdown";

const page = () => {
  const flag = true;
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1600px]">
        <BackButton />
        <div className="flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
          <div className="flex justify-center items-center lg:hidden ">
            <Image
              src="/assests/Books/Asset3.png"
              width={330}
              height={150}
              className="hover:shadow"
              alt="features"
            />
          </div>

          {/* lg screen  */}
          <div className="hidden lg:block">
            {flag && (
              <h1 className="font-semibold text-black text-[22px] py-6 hidden lg:block mx-3">
                Recent post
              </h1>
            )}
            <div className="lg:border border-black flex-grow mx-3 hidden lg:flex">
              <div className="flex flex-col w-1/2 h-full bg-white border-b border-black">
                <div className="h-full p-28 xl:p- bg-[#F0F4F7] flex justify-center">
                  <img
                    src="/assests/Books/Asset5.png"
                    style={{
                      height: "",
                      objectFit: "cover",
                    }}
                    className="hover:shadow h-[410px] w-full xl:h-[490px]"
                    alt="features"
                  />
                </div>
                <div className="p-10 xl:p-12 space-y-4 border-t border-black">
                  <h1 className="text-[14px] xl:text-[21px] font-bold">
                    Rudi Jennings{" "}
                  </h1>
                  <p className="text-[10px] xl:text-[12px] leading-6 text-black">
                    Rudi Michael Jennings spent the majority of his childhood
                    growing up in the Norfolk countryside of fields and trees,
                    really living amongst nature and possibly giving the basis
                    of description in his book. Through travel, various
                    professions and a keen est in psychology...
                  </p>
                  <p className="text-[#817977] text-[9px] ">
                    + MORE ABOUT RUDI JENNINGS
                  </p>
                </div>
              </div>
              <div className="pt-10 flex flex-col w-1/2 justify-center xl:justify-start font-open-sans space-y-5 flex-1 p-8 xl:p-14 border border-black">
                <div className="space-y-1">
                  <h1 className="text-[18px] xl:text-[22px] font-semibold">
                    THE LAST MYON{" "}
                  </h1>
                  <h1 className="text-[10px] xl:text-[14px] font-semibold text-[#817977]">
                    Rudi Jennings{" "}
                  </h1>
                </div>
                <p className="text-[12px] xl:text-[14px] leading-7 xl:leading-9 font-open-sans">
                  The Last Myon is a story of fantasy adventure, revenge and an
                  individual's total unwillingness to submit or to fail,
                  battling against overwhelming natural elements and a group of
                  hardened, sadistic creatures who will stop at nothing to
                  succeed in his capture and slavery. In an everlasting winter
                  world, Ackrehm, the last of his Myon kind, must fight for his
                  life, sustaining multiple injuries along the way and still
                  demonstrating he truly is a force to be reckoned with.
                  Struggling with exhaustion, both mentally and physically, will
                  he manage to overcome, or will he fight or flee? One thing is
                  for certain, The Last Myon will keep you hooked until the very
                  end, bonding with characters and excitedly reading on with an
                  obsession to find out what happens next, promoting an ethos to
                  take away of never give up, never surrender.
                </p>

                <div className="grid items-center w-full bg-white">
                  <div className="md:w-[350px] lg:w-full">
                    <hr className="my-5" />
                    <div className="">
                      <div className="flex justify-between 2xl:justify-center 2xl:gap-14 gap-4 w-full pr-24 xl:pr-40">
                        <button className="text-[11px] xl:text-[14px]  2xl:text-[18px] p-3 px-5 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                          PAPERBACK
                        </button>
                        <button className="text-[11px] xl:text-[14px] 2xl:text-[18px] p-3 px-5 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                          HARDBACK
                        </button>
                        <button className="text-[11px] xl:text-[14px] 2xl:text-[18px] p-3 px-5 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-none w-max text-black hover:text-white hover:bg-blue-600">
                          EBOOK
                        </button>
                      </div>
                      <div className="grid items-center justify-start xl:justify-start w-full py-5">
                        <BuyFromDropdown />
                      </div>
                    </div>
                    <hr className="my-5" />
                    <div class="overflow-hidden pb-8 pt-4 text-[9px] xl:text-[14px]">
                      <p class="mb-2">
                        <span class="">ISBN:</span> 9781848979345
                      </p>
                      <p class="mb-2">
                        <span class="">Published:</span> 30/11/2017
                      </p>
                      <p class="mb-2">
                        <span class="font-">Pages:</span> 147
                      </p>
                      <p class="mb-2">
                        <span class="">Size:</span> 205x140mm
                      </p>
                      <p>
                        <span class="">Imprint:</span> Olympia Publishers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* sm screen */}
          <div className="lg:hidden">
            <div className="bg-[#EFEFEF] mx-8 p-7 space-y-7 font-open-sans">
              <div className="space-y-1">
                <h1 className="text-[18px] font-bold">THE LAST MYON </h1>
                <h1 className="text-[14px] font-bold">RUDI JENNINGS </h1>
              </div>
              <p className="text-[13px] leading-9">
                The Last Myon is a story of fantasy adventure, revenge and an
                individual's total unwillingness to submit or to fail, battling
                against overwhelming natural elements and a group of hardened,
                sadistic creatures who will stop at nothing to succeed in his
                capture and slavery. In an everlasting winter world, Ackrehm,
                the last of his Myon kind, must fight for his life, sustaining
                multiple injuries along the way and still demonstrating he truly
                is a force to be reckoned with. Struggling with exhaustion, both
                mentally and physically, will he manage to overcome, or will he
                fight or flee? One thing is for certain, The Last Myon will keep
                you hooked until the very end, bonding with characters and
                excitedly reading on with an obsession to find out what happens
                next, promoting an ethos to take away of never give up, never
                surrender.
              </p>
              <div className="w-full">
                <div className=" space-y-5 pt-8 md:w-[350px] lg:w-full">
                  <div className="flex justify-between 2xl:justify-center 2xl:gap-14 gap-4 w-full">
                    <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                      PAPERBACK
                    </button>
                    <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                      HARDBACK
                    </button>
                    <button className="text-[11px] 2xl:text-[18px] p-3 xl:p-1 2xl:p-3 font-semibold font-droid-sans flex items-center justify-center hover:border lg:hover:border-none hover:border-buttonred w-max hover:text-[#C9444F]">
                      EBOOK
                    </button>
                  </div>
                  <BuyFromDropdown />
                  <div class="overflow-hidden">
                    <p class="mb-2">
                      <span class="">ISBN:</span> 9781848979345
                    </p>
                    <p class="mb-2">
                      <span class="">Published:</span> 30/11/2017
                    </p>
                    <p class="mb-2">
                      <span class="font-">Pages:</span> 147
                    </p>
                    <p class="mb-2">
                      <span class="">Size:</span> 205x140mm
                    </p>
                    <p>
                      <span class="">Imprint:</span> Olympia Publishers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-[16px] font-bold"> RUDI JENNINGS </h1>
              <p className="text-[13px] leading-9 py-3">
                Rudi Michael Jennings spent the majority of his childhood
                growing up in the Norfolk countryside of fields and trees,
                really living amongst nature and possibly giving the basis of
                description in his book. Through travel, various professions and
                a keen interest in psychology and fantasy writings, he developed
                a style of his very own and is keen to share it with the fantasy
                adventure world. This plans to be the first instalment and
                adventure of many to come.
              </p>
            </div>
          </div>

          {/* books */}
          <div className="my-20">
            <div className="flex justify-center items-center lg:justify-between lg:bg-white pt-10">
              <div className="pt-10">
                <p className="text-[26px] font-semibold font-droid-sans hidden lg:block">
                  You may also like
                </p>
                <p className="text-[20px] font-bold font-open-sans lg:hidden">
                  YOU MIGHT ALSO LIKE
                </p>
              </div>
            </div>
            <div className="flex overflow-x-scroll lg:overflow-x-hidden py-8 lg:py-0 lg:border lg:border-black mb-14 lg:hidden">
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:flex items-center justify-center pt-6 pb-20 hidden">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
