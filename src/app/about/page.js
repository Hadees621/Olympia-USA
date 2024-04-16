import Banner from "@/components/common/Banner";
import YouTubeVideo from "@/components/about/YoutubeVideo";
import ImageSlider from "@/components/submit-online/ImageSlider";
import { locations, sliderData } from "@/utils/about/utils";
import Button from "@/components/common/Button";
import LocationCard from "@/components/about/LocationCard";
import Awards from "@/components/about/Awards";

const Page = () => {
  const tabsData = [
    {
      label: "Book Prize Finalist",
      label2: "A SMALL PRICE TO PAY SIR - DENNIS TALBOT",
      image: "/assests/about/Asset 1 (1).png",
    },
    {
      label: "Book Design Awards 2019 Finalist and Special mention",
      label2: "THE MAN WITH NO SHADOW - GÖKHAN YÜCEL",
      label3: "mention",
      image: "/assests/about/Asset 2 (1).png",
    },
    {
      label: "Rotal Dragonfly Book Awards (SM) 2020 Winner",
      label2: "SCOTTY AND THE SPACE STATION - KAELA C GREEN",
      image: "/assests/about/Asset 3 (1).png",
    },
    {
      label: "Award category",
      label2: "TITLE OF AWARD/WINNER NAME",
      image: "/assests/about/Asset 4 (1).png",
    },
  ];
  return (
    <>
      <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto bg-white">
        <Banner title={"About us"} />
        <div className="lg:flex gap-4 px-3 xl:px-8">
          <div className="lg:w-1/2">
            <img
              src="/assests/Banners/Who we are banner.png"
              alt="who-banner"
              className="hidden lg:block h-[420px] xl:h-[520px] 2xl:h-[620px] w-full"
            />
          </div>
          <div className="mx-5 font-open-sans p-5 lg:p-0 lg:w-1/2">
            <p className="font-bold text-[17px] lg:text-[13px] xl:text-[17px]  mt-10 lg:hidden">
              WHO WE ARE
            </p>
            <p className="font-bold text-[17px] lg:text-[13px] xl:text-[17px] 2xl:text-[20px]  mt-4 hidden lg:block">
              Who we are
            </p>
            <div className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 lg:space-y-2 xl:space-y-4 leading-9 lg:leading-6 xl:leading-7 2xl:leading-9 lg:font-droid-sans">
              <p className="mt-5">
                We are an independent publishing house, with offices in London,
                Los Angeles and Mumbai. We pride ourselves on our wide range of
                genres and giving ambitious authors a platform that is so rarely
                available in the publishing industry today. All of our books and
                authors are enormously special in their own way. We believe that
                a story can evoke a large range of emotions; they can make you
                laugh, cry and, most importantly, change a life.
              </p>
              <p>
                In the last ten years we have evolved with the industry,
                moulding our marketing and production strategies to suit the
                ever-changing market. Not only have we grown an impressive
                following on our social media platforms, but we have
                considerably expanded our reach and marketing potential through
                various different mediums and techniques. This includes creating
                various book trailers and videos, expanding our distribution
                networks, writing engaging content and connecting with our
                readers through our blog, setting up radio and news interviews,
                as well as book launches in various stores all around the world.
              </p>
              <p>
                We are completely dedicated to each of our authors and work
                closely from submission to marketing of the book. We publish in
                various formats including paperback, hardback, eBook and
                audiobooks. We are accepting submissions across various genres
                including literary fiction, non-fiction, children’s books,
                romance, thrillers, fantasy, memoirs, biography, self-help,
                mind, body and spirit, historical, politics, health and
                wellness, children’s literature and young adult fiction, just to
                name a few.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block py-12">
          <div className="flex justify-between my-10 px-5">
            <h2 className="font-semibold text-[18px] font-open-sans xl:text-[22px] 2xl:text-[25px]">
              Publishing process
            </h2>
            <button className="text-[8px] xl:text-[9px] py-[8px]  font-bold font-open-sans flex items-center justify-center w-[100px] xl:w-[120px] 2xl:w-[150px] 2xl:py-[11px] 2xl:text-[13px] border border-black">
              LEARN MORE
            </button>
          </div>
          <div className="grid grid-cols-5 gap-5 space-y-10 ">
            <img
              src="/assests/about/publishing/Asset 1.png"
              alt=""
              className="pt-10"
            />
            <img src="/assests/about/publishing/Asset 2.png" alt="" />
            <img src="/assests/about/publishing/Asset 3.png" alt="" />
            <img src="/assests/about/publishing/Asset 4.png" alt="" />
            <img src="/assests/about/publishing/Asset 5.png" alt="" />
            <img src="/assests/about/publishing/Asset 6.png" alt="" />
            <img src="/assests/about/publishing/Asset 7.png" alt="" />
            <img src="/assests/about/publishing/Asset 8.png" alt="" />
            <img src="/assests/about/publishing/Asset 9.png" alt="" />
            <img src="/assests/about/publishing/Asset 10.png" alt="" />
          </div>
        </div>

        <YouTubeVideo />

        <div className="mx-5 font-open-sans p-3 lg:max-w-[470px] xl:max-w-[600px] 2xl:max-w-[800px] lg:mx-auto">
          <p className="font-bold text-[20px] mt-10 lg:hidden">
            HYBRID <br className="lg:hidden" /> PUBLISHING{" "}
            <br className="lg:hidden" /> MODEL
          </p>
          <p className="font-bold text-[20px] xl:text-[23px] 2xl:text-[26px] mt-10">
            Hybrid publishing model
          </p>
          <div className="text-[13px] xl:text-[13px] 2xl:text-[17px] space-y-4 leading-9 lg:leading-7 xl:leading-9 2xl:leading-10 lg:font-droid-sans lg:space-y-4 ">
            <p className="mt-5">
              We work with hybrid model of publishing, where all initial work
              submitted to us is considered for a ‘traditional publishing
              contract’. This is where no costs are incurred by the author and
              the whole cost for producing, publishing and marketing the work is
              covered by Olympia Publishers.
              <br className="hidden lg:block" />
              <br className="hidden lg:block" />
              However, please bear in mind that not all work can be accepted
              under these terms. As we receive hundreds of submissions each
              month, we cannot guarantee which titles will be selected for
              publication. However, we do try to offer advice to authors if
              there is anything about the publishing process that confuses them
              or they are unsure of, even if we cannot publish your work.
              <br className="hidden lg:block" />
              <br className="hidden lg:block" />
              Should we be unable to offer a traditional contract, but we feel
              the work has potential an alternative offer may be made. This
              offer is known as a ‘partnership contract’ and is based on a
              contribution, to be paid by the author, to cover the initial
              production and printing cost of the book. For more information on
              the hybrid business model, please read this informative article{" "}
              <a className="lg:underline lg:font-semibold ">
                {" "}
                hybrid publishing model.{" "}
              </a>
            </p>
            <p className="lg:hidden">
              Please see our <a className="underline"> submissions page </a> for
              further information on how to submit your work to us.
            </p>
          </div>
          <div className="relative overflow-hidden w-full my-10 pt-[56.25%] ">
            {" "}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/vd7mnHBzaGU?si=pHQ3pcDQ7n3Xsync"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="lg:flex gap-4 px-3 xl:px-8 py-10">
          <div className="mx-5 font-open-sans p-5 lg:p-0 lg:w-1/2">
            <div className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[17px]  lg:font-droid-sans grid items-center h-full">
              <div className="space-y-3 xl:space-y-5">
                <h2 className="font-bold text-[15px] font-open-sans xl:text-[18px] 2xl:text-[25px]">
                  Publish with us
                </h2>
                <p className="text-[10px] xl:text-[12px] 2xl:text-[17px] pr-16 xl:pr-20 font-open-sans">
                  Please see our publish with us page with us page for further
                  information on how to submit your work to us.
                </p>
                <button className="text-[8px] xl:text-[9px] py-[7px] font-bold font-open-sans flex items-center justify-center w-[100px] xl:w-[120px] 2xl:w-[150px] 2xl:py-[10px] 2xl:text-[13px] border border-black uppercase">
                  Publish with us
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/assests/Banners/Publish with us Banner.png"
              alt="who-banner"
              className="hidden lg:block w-full"
            />
          </div>
        </div>

        {/* sm */}

        <ImageSlider
          title="OUR PUBLICATION PROCESS"
          images={sliderData}
          imageClass="w-[270px] max-h-[250px] px-14 lg:hidden"
          flag={"true"}
        />

        <div className="bg-[#F5F3F2] p-5 grid items-center justify-center space-y-4 py-10 m-5 lg:hidden">
          <h2 className="font-bold text-[20px] text-center font-open-sans">
            OLYMPIA LOCATIONS
          </h2>
          <p className="text-center text-[14px] font-open-sans">
            2018 marked the start of our global journey. Join our global family
            of authors and book lovers.
          </p>
          <div className="grid items-center justify-center w-full">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>

        <div className="mx-5 font-open-sans p-3 lg:hidden">
          <p className="font-bold text-[20px] mt-10">
            BUMBLEBEE <br />
            BOOKS
          </p>
          <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
            <p className="mt-5">
              Bumblebee Books is an imprint of Olympia Publishers. Children’s
              books are at the heart of Olympia Publishers. For over a decade we
              have been publishing exciting children’s books that are loved by
              our young readers from around the world. From adventure to
              fantasy, non-fiction to rhyme, you won’t Bee-lieve the range of
              books we have! Our aim is to help children discover a magical
              world through storytelling. Stories with beautiful illustrations
              that inspire, educate, and entertain young readers. From young
              minds to older children, there is a book for everyone.
            </p>
            <p>
              See some of our{" "}
              <a className="underline"> latest Bumblebee Books. </a>
            </p>
          </div>
        </div>

        <YouTubeVideo />

        <div className="bg-[#F8F6F4] p-5 space-y-3 lg:hidden">
          <h3 className="text-[20px] font-open-sans font-extrabold">
            Discover Bumblebee Books
          </h3>
          <h2 className="font-courier-prime text-[20px] font-medium tracking-tighter">
            The home of children’s literature
          </h2>
          <Button
            title={"View Bumblebee books"}
            color={"transparent"}
            width={"w-[180px] text-[12px] font-bold"}
          />
        </div>

        <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
          <img
            src="/assests/about/Asset 1.png"
            alt="asset"
            className="w-full md:w-[60%] mx-auto"
          />
          <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
            <p className="font-bold text-[30px] mt-10">
              SEE WHAT OUR AUTHORS ARE SAYING
            </p>
            <p className="mt-5">
              "Olympia Publishers provide tremendous opportunities for first
              time writers and help them develop their writing skills. It will
              not be surprising if Olympia Publishers becomes the most favoured
              publishing destination of writers in a few years."
            </p>
            <Button
              title={"View author experiences"}
              color={"transparent"}
              width={"w-[210px] text-[15px] font-semibold"}
            />
          </div>
        </div>

        <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
          <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
            <img
              src="/assests/about/Asset 2.png"
              alt="asset"
              className="w-full md:w-[60%] mx-auto"
            />
            <p className="font-bold text-[30px] mt-10 leading-[30px]">
              CORPORATE SOCIAL RESPONSIBILITIES
            </p>
            <p className="mt-5">
              We pride ourselves on being an independent publisher, working in a
              sustainable way and spreading the joy of reading with an
              environment-friendly approach.
            </p>
            <Button
              title={"Learn more"}
              color={"transparent"}
              width={"w-[110px] text-[14px] font-semibold"}
            />
          </div>
        </div>

        <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
          <img
            src="/assests/about/Asset 3.png"
            alt="asset"
            className="w-full md:w-[60%] mx-auto"
          />
          <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
            <p className="font-bold text-[30px] mt-10 text-buttonred leading-[30px]">
              START YOUR PUBLISHING JOURNEY WITH US
            </p>
            <p className="mt-5">
              Olympia Publishers are now accepting submissions across various
              genres. If you have written a story, submit your manuscript for us
              to review.
            </p>
            <Button
              title={"Submit online"}
              color={"red"}
              width={"w-[170px] text-[14px] font-semibold"}
            />
          </div>
        </div>

        <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
          <img
            src="/assests/about/Asset 4.png"
            alt="asset"
            className="w-full md:w-[60%] mx-auto"
          />
          <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 mx-10">
            <img src="/assests/about/Asset 5.png" alt="asset" className="m-6" />
            <p className="mt-5">
              Welcome to Olympia Author Hub, helping you to become a successful
              author. Dedicated to all the authors around the world.
            </p>
            <Button
              title={"Explore"}
              color={"transparent"}
              width={"w-[110px] text-[14px] font-semibold"}
            />
          </div>
        </div>
      </div>

      <div className="lg:flex gap-4 bg-[#FEF3CE] border-y border-black hidden">
        <div className="lg:w-1/2 w-full relative">
          <img
            src="/assests/about/Asset 9.png"
            alt="who-banner"
            className="w-full 2xl:h-[600px]"
          />
          <div className="absolute inset-0 left-10 xl:top-8 2xl:top-60 flex flex-col justify-center items-center">
            <div className="relative overflow-hidden w-full my-10 pt-[56.25%] ">
              {" "}
              <div className="absolute top-0 right-0">
                <iframe
                  className="w-[300px] h-[190px] xl:w-[440px] xl:h-[280px] 2xl:w-[650px] 2xl:h-[400px]"
                  src="https://www.youtube.com/embed/vd7mnHBzaGU?si=pHQ3pcDQ7n3Xsync"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <div className="w-[300px] xl:w-[440px] 2xl:w-[650px] p-5 space-y-3 border border-black flex items-center justify-between">
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[10px] xl:text-[13px] 2xl:text-[17px] font-open-sans font-extrabold uppercase">
                      Discover Bumblebee Books
                    </h3>
                    <h2 className="font-courier-prime text-[8px] xl:text-[11px]  2xl:text-[15px] font-medium tracking-tighter">
                      The home of children’s literature
                    </h2>
                  </div>
                  <Button
                    title={"View Bumblebee books"}
                    color={"transparent"}
                    width={
                      "w-[90px] text-[6px] xl:w-[120px] xl:text-[9px] py-[7px] font-bold"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 font-open-sans p-5 lg:p-0 lg:w-1/2 ">
          <div className="max-w-[300px] xl:max-w-[450px] 2xl:max-w-[550px] grid items-center h-full">
            <div className="space-y-4">
              <p className="font-bold text-[19px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-open-sans">
                Bumblebee Books
              </p>
              <p className="text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-[15px] space-y-4 leading-9 lg:leading-6 xl:leading-7 2xl:leading-9 font-open-sans">
                Bumblebee Books is an imprint of Olympia Publishers. Children’s
                books are at the heart of Olympia Publishers. For over a decade
                we have been publishing exciting children’s books that are loved
                by our young readers from around the world. From adventure to
                fantasy, non-fiction to rhyme, you won’t Bee-lieve the range of
                books we have!
              </p>
              <p className="text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-[15px] space-y-4 leading-9 lg:leading-6 xl:leading-7 2xl:leading-9 font-open-sans">
                Our aim is to help children discover a magical world through
                storytelling. Stories with beautiful illustrations that inspire,
                educate, and entertain young readers. From young minds to older
                children, there is a book for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Awards tabsData={tabsData} />
    </>
  );
};

export default Page;
