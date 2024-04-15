import Banner from "@/components/common/Banner";
import YouTubeVideo from "@/components/about/YoutubeVideo";
import ImageSlider from "@/components/submit-online/ImageSlider";
import { locations, sliderData } from "@/utils/about/utils";
import Button from "@/components/common/Button";
import LocationCard from "@/components/about/LocationCard";
const Page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto bg-white">
      <Banner title={"About us"} />

      <div className="mx-5 font-open-sans p-5">
        <p className="font-bold text-[17px] mt-10">WHO WE ARE</p>
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
          <p className="mt-5">
            We are an independent publishing house, with offices in London, Los
            Angeles and Mumbai. We pride ourselves on our wide range of genres
            and giving ambitious authors a platform that is so rarely available
            in the publishing industry today. All of our books and authors are
            enormously special in their own way. We believe that a story can
            evoke a large range of emotions; they can make you laugh, cry and,
            most importantly, change a life.
          </p>
          <p>
            In the last ten years we have evolved with the industry, moulding
            our marketing and production strategies to suit the ever-changing
            market. Not only have we grown an impressive following on our social
            media platforms, but we have considerably expanded our reach and
            marketing potential through various different mediums and
            techniques. This includes creating various book trailers and videos,
            expanding our distribution networks, writing engaging content and
            connecting with our readers through our blog, setting up radio and
            news interviews, as well as book launches in various stores all
            around the world.
          </p>
          <p>
            We are completely dedicated to each of our authors and work closely
            from submission to marketing of the book. We publish in various
            formats including paperback, hardback, eBook and audiobooks. We are
            accepting submissions across various genres including literary
            fiction, non-fiction, children’s books, romance, thrillers, fantasy,
            memoirs, biography, self-help, mind, body and spirit, historical,
            politics, health and wellness, children’s literature and young adult
            fiction, just to name a few.
          </p>
        </div>
      </div>

      <YouTubeVideo />

      <ImageSlider
        title="OUR PUBLICATION PROCESS"
        images={sliderData}
        imageClass="w-[270px] max-h-[250px] px-14"
        flag={"true"}
      />

      <div className="mx-5 font-open-sans p-3">
        <p className="font-bold text-[20px] mt-10">
          HYBRID <br /> PUBLISHING <br /> MODEL
        </p>
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
          <p className="mt-5">
            We work with hybrid model of publishing, where all initial work
            submitted to us is considered for a ‘traditional publishing
            contract’. This is where no costs are incurred by the author and the
            whole cost for producing, publishing and marketing the work is
            covered by Olympia Publishers. However, please bear in mind that not
            all work can be accepted under these terms. As we receive hundreds
            of submissions each month, we cannot guarantee which titles will be
            selected for publication. However, we do try to offer advice to
            authors if there is anything about the publishing process that
            confuses them or they are unsure of, even if we cannot publish your
            work. Should we be unable to offer a traditional contract, but we
            feel the work has potential an alternative offer may be made. This
            offer is known as a ‘partnership contract’ and is based on a
            contribution, to be paid by the author, to cover the initial
            production and printing cost of the book. For more information on
            the hybrid business model, please read this informative article
            hybrid publishing model.
          </p>
          <p>
            Please see our <a className="underline"> submissions page </a> for
            further information on how to submit your work to us.
          </p>
        </div>
      </div>

      <div className="bg-[#F5F3F2] p-5 grid items-center justify-center space-y-4 py-10 m-5">
        <h2 className="font-bold text-[20px] text-center font-open-sans">
          OLYMPIA LOCATIONS
        </h2>
        <p className="text-center text-[14px] font-open-sans">
          2018 marked the start of our global journey. Join our global family of
          authors and book lovers.
        </p>
        <div className="grid items-center justify-center w-full">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>

      <div className="mx-5 font-open-sans p-3">
        <p className="font-bold text-[20px] mt-10">
          BUMBLEBEE <br />
          BOOKS
        </p>
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
          <p className="mt-5">
            Bumblebee Books is an imprint of Olympia Publishers. Children’s
            books are at the heart of Olympia Publishers. For over a decade we
            have been publishing exciting children’s books that are loved by our
            young readers from around the world. From adventure to fantasy,
            non-fiction to rhyme, you won’t Bee-lieve the range of books we
            have! Our aim is to help children discover a magical world through
            storytelling. Stories with beautiful illustrations that inspire,
            educate, and entertain young readers. From young minds to older
            children, there is a book for everyone.
          </p>
          <p>
            See some of our{" "}
            <a className="underline"> latest Bumblebee Books. </a>
          </p>
        </div>
      </div>

      <YouTubeVideo />
      <div className="bg-[#F8F6F4] p-5 space-y-3">
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

      <div className="m-5 mt-28 font-open-sans p-3">
        <img
          src="/assests/about/Asset 1.png"
          alt="asset"
          className="w-full md:w-[60%] mx-auto"
        />
        <p className="font-bold text-[30px] mt-10">
          SEE WHAT OUR AUTHORS ARE SAYING
        </p>
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
          <p className="mt-5">
            "Olympia Publishers provide tremendous opportunities for first time
            writers and help them develop their writing skills. It will not be
            surprising if Olympia Publishers becomes the most favoured
            publishing destination of writers in a few years."
          </p>
          <Button
            title={"View author experiences"}
            color={"transparent"}
            width={"w-[210px] text-[15px] font-semibold"}
          />
        </div>
      </div>

      <div className="m-5 mt-28 font-open-sans p-3">
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
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

      <div className="m-5 mt-28 font-open-sans p-3">
        <img
          src="/assests/about/Asset 3.png"
          alt="asset"
          className="w-full md:w-[60%] mx-auto"
        />
        <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
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
    </div>
  );
};

export default Page;
