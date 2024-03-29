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
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <BackButton />
        <div className="flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
          <div className="flex justify-center items-center lg:hidden">
            <Image
              src="/assests/Books/Asset3.png"
              width={330}
              height={150}
              className="hover:shadow"
              alt="features"
            />
          </div>
          <div className="hidden lg:block">
            <>
              {/* recent post */}
              {flag && (
                <h1 className="font-semibold text-black text-[22px] py-6 hidden lg:block mx-3">
                  Recent post
                </h1>
              )}
              <div className="lg:border border-black flex-grow mx-3 hidden lg:flex">
                <div className="w-1/2 h-full">
                  <img
                    src="/assests/Books/Asset2.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className="hover:shadow"
                    alt="features"
                  />
                </div>
                <div className="pt-10 flex flex-col w-1/2 justify-center font-open-sans space-y-5 flex-1 p-8 bg-[#FAFAFA]">
                  <div className="space-y-3">
                    <p className="font-bold text-[18px]">
                      Article title Lorem ipsum dolor sit amet consecteuer
                    </p>
                    <p className="text-[12px]">July 01, 2022 - category</p>
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummyLorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, cing elit, sit
                  </p>
                  {flag ? (
                    <button
                      className={`text-[8px] py-2 px-6 font-semibold font-droid-sans shadow border border-black flex items-center justify-center w-max my-7`}
                    >
                      READ FEATURE
                    </button>
                  ) : (
                    <div className="flex gap-3">
                      <Image src={Facebook} alt="Facebook" height={32} />
                      <Image src={Twitter} alt="Twitter" height={32} />
                      <Image src={Instagram} alt="Instagram" height={32} />
                    </div>
                  )}
                </div>
              </div>
            </>
          </div>
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
              capture and slavery. In an everlasting winter world, Ackrehm, the
              last of his Myon kind, must fight for his life, sustaining
              multiple injuries along the way and still demonstrating he truly
              is a force to be reckoned with. Struggling with exhaustion, both
              mentally and physically, will he manage to overcome, or will he
              fight or flee? One thing is for certain, The Last Myon will keep
              you hooked until the very end, bonding with characters and
              excitedly reading on with an obsession to find out what happens
              next, promoting an ethos to take away of never give up, never
              surrender.
            </p>
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

            <div class="max-w-sm rounded overflow-hidden">
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
          <div className="px-7 space-y-5 pt-8">
            <h1 className="text-[19px] font-semibold">RUDI JENNINGS </h1>
            <p className="text-[13px] leading-9">
              The Last Myon is a story of fantasy adventure, revenge and an
              individual's total unwillingness to submit or to fail, battling
              against overwhelming natural elements and a group of hardened,
              sadistic creatures who will stop at nothing to succeed in his
              capture and slavery. In an everlasting winter world, Ackrehm, the
              last of his Myon kind, must fight for his life, sustaining
              multiple injuries along the way and still demonstrating he truly
              is a force to be reckoned with. Struggling with exhaustion, both
              mentally and physically, will he manage to overcome, or will he
              fight or flee? One thing is for certain, The Last Myon will keep
              you hooked until the very end, bonding with characters and
              excitedly reading on with an obsession to find out what happens
              next, promoting an ethos to take away of never give up, never
              surrender.
            </p>
          </div>
          {/* mentioned books */}
          <div className="flex justify-center items-center lg:justify-between lg:bg-white pt-10">
            <div>
              <p className="text-[26px] font-semibold font-droid-sans hidden lg:block">
                Books Mentioned
              </p>
              <p className="text-[20px] font-bold font-open-sans lg:hidden">
                YOU MIGHT ALSO LIKE
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
        </div>
      </div>
    </div>
  );
};

export default page;
