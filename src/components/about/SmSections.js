import React from "react";
import Button from "../common/Button";
import LocationCard from "./LocationCard";
import ImageSlider from "../submit-online/ImageSlider";
import YouTubeVideo from "./YoutubeVideo";
import SectionsData from "@/utils/about/SectionsData.json";
import { locations, sliderData } from "@/utils/about/utils";
const SmSections = () => {
  const {
    publications,
    bumblebeeBooks,
    authorSays,
    socialResponsibility,
    publishingJourneys,
    authorHub,
  } = SectionsData;

  return (
    <div>
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
            contract’. This is where no costs are incurred by the author and the
            whole cost for producing, publishing and marketing the work is
            covered by Olympia Publishers.
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            However, please bear in mind that not all work can be accepted under
            these terms. As we receive hundreds of submissions each month, we
            cannot guarantee which titles will be selected for publication.
            However, we do try to offer advice to authors if there is anything
            about the publishing process that confuses them or they are unsure
            of, even if we cannot publish your work.
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            Should we be unable to offer a traditional contract, but we feel the
            work has potential an alternative offer may be made. This offer is
            known as a ‘partnership contract’ and is based on a contribution, to
            be paid by the author, to cover the initial production and printing
            cost of the book. For more information on the hybrid business model,
            please read this informative article{" "}
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
      <div className="bg-[#F5F3F2] p-5 grid items-center justify-center space-y-4 py-10 m-5 lg:hidden">
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
          <p className="mt-5">{bumblebeeBooks.description}</p>
          <p>
            See some of our{" "}
            <a href={bumblebeeBooks.latestBooksLink} className="underline">
              latest Bumblebee Books.
            </a>
          </p>
        </div>
      </div>
      <YouTubeVideo />
      <ImageSlider
        title={publications.title}
        images={sliderData}
        imageClass="w-[270px] max-h-[250px] px-14"
        flag={"true"}
      />
      <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
        <p className="font-bold text-[30px] mt-10">{authorSays.title}</p>
        <p className="mt-5 font-open-sans">{authorSays.quote}</p>
        <Button
          title={authorSays.buttonText}
          color={"transparent"}
          width={"w-[210px] text-[15px] font-semibold"}
        />
      </div>
      <div className="bg-[#F8F6F4] p-5 space-y-3 lg:hidden">
        <h3 className="text-[20px] font-open-sans font-extrabold">
          {socialResponsibility.title}
        </h3>
        <p className="text-[14px] font-open-sans">
          {socialResponsibility.description}
        </p>
        <Button
          title="Learn more"
          color="transparent"
          width="w-[110px] text-[14px] font-semibold"
          link={socialResponsibility.learnMoreLink}
        />
      </div>

      <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
        <p className="font-bold text-[30px] mt-10">
          {publishingJourneys.title}
        </p>
        <p className="mt-5">{publishingJourneys.description}</p>
        <Button
          title="Submit online"
          color="red"
          width="w-[170px] text-[14px] font-semibold"
          link={publishingJourneys.submitLink}
        />
      </div>

      <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
        <p className="font-bold text-[30px] mt-10">{authorHub.title}</p>
        <p className="mt-5">{authorHub.description}</p>
        <Button
          title="Explore"
          color="transparent"
          width="w-[110px] text-[14px] font-semibold"
          link={authorHub.exploreLink}
        />
      </div>
    </div>
  );
};

export default SmSections;

// import React from "react";
// import Button from "../common/Button";
// import YouTubeVideo from "./YoutubeVideo";
// import LocationCard from "./LocationCard";
// import ImageSlider from "../submit-online/ImageSlider";
// import { locations, sliderData } from "@/utils/about/utils";

// const SmSections = () => {
//   return (
//     <div>
//       {" "}
//       <ImageSlider
//         title="OUR PUBLICATION PROCESS"
//         images={sliderData}
//         imageClass="w-[270px] max-h-[250px] px-14 lg:hidden"
//         flag={"true"}
//       />
//       <div className="bg-[#F5F3F2] p-5 grid items-center justify-center space-y-4 py-10 m-5 lg:hidden">
//         <h2 className="font-bold text-[20px] text-center font-open-sans">
//           OLYMPIA LOCATIONS
//         </h2>
//         <p className="text-center text-[14px] font-open-sans">
//           2018 marked the start of our global journey. Join our global family of
//           authors and book lovers.
//         </p>
//         <div className="grid items-center justify-center w-full">
//           {locations.map((location, index) => (
//             <LocationCard key={index} {...location} />
//           ))}
//         </div>
//       </div>
//       <div className="mx-5 font-open-sans p-3 lg:hidden">
//         <p className="font-bold text-[20px] mt-10">
//           BUMBLEBEE <br />
//           BOOKS
//         </p>
//         <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4">
//           <p className="mt-5">
//             Bumblebee Books is an imprint of Olympia Publishers. Children’s
//             books are at the heart of Olympia Publishers. For over a decade we
//             have been publishing exciting children’s books that are loved by our
//             young readers from around the world. From adventure to fantasy,
//             non-fiction to rhyme, you won’t Bee-lieve the range of books we
//             have! Our aim is to help children discover a magical world through
//             storytelling. Stories with beautiful illustrations that inspire,
//             educate, and entertain young readers. From young minds to older
//             children, there is a book for everyone.
//           </p>
//           <p>
//             See some of our{" "}
//             <a className="underline"> latest Bumblebee Books. </a>
//           </p>
//         </div>
//       </div>
//       <YouTubeVideo />
//       <div className="bg-[#F8F6F4] p-5 space-y-3 lg:hidden">
//         <h3 className="text-[20px] font-open-sans font-extrabold">
//           Discover Bumblebee Books
//         </h3>
//         <h2 className="font-courier-prime text-[20px] font-medium tracking-tighter">
//           The home of children’s literature
//         </h2>
//         <Button
//           title={"View Bumblebee books"}
//           color={"transparent"}
//           width={"w-[180px] text-[12px] font-bold"}
//         />
//       </div>
//       <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
//         <img
//           src="/assests/about/Asset 1.png"
//           alt="asset"
//           className="w-full md:w-[60%] mx-auto"
//         />
//         <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
//           <p className="font-bold text-[30px] mt-10">
//             SEE WHAT OUR AUTHORS ARE SAYING
//           </p>
//           <p className="mt-5">
//             "Olympia Publishers provide tremendous opportunities for first time
//             writers and help them develop their writing skills. It will not be
//             surprising if Olympia Publishers becomes the most favoured
//             publishing destination of writers in a few years."
//           </p>
//           <Button
//             title={"View author experiences"}
//             color={"transparent"}
//             width={"w-[210px] text-[15px] font-semibold"}
//           />
//         </div>
//       </div>
//       <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
//         <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
//           <img
//             src="/assests/about/Asset 2.png"
//             alt="asset"
//             className="w-full md:w-[60%] mx-auto"
//           />
//           <p className="font-bold text-[30px] mt-10 leading-[30px]">
//             CORPORATE SOCIAL RESPONSIBILITIES
//           </p>
//           <p className="mt-5">
//             We pride ourselves on being an independent publisher, working in a
//             sustainable way and spreading the joy of reading with an
//             environment-friendly approach.
//           </p>
//           <Button
//             title={"Learn more"}
//             color={"transparent"}
//             width={"w-[110px] text-[14px] font-semibold"}
//           />
//         </div>
//       </div>
//       <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
//         <img
//           src="/assests/about/Asset 3.png"
//           alt="asset"
//           className="w-full md:w-[60%] mx-auto"
//         />
//         <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 md:mx-32">
//           <p className="font-bold text-[30px] mt-10 text-buttonred leading-[30px]">
//             START YOUR PUBLISHING JOURNEY WITH US
//           </p>
//           <p className="mt-5">
//             Olympia Publishers are now accepting submissions across various
//             genres. If you have written a story, submit your manuscript for us
//             to review.
//           </p>
//           <Button
//             title={"Submit online"}
//             color={"red"}
//             width={"w-[170px] text-[14px] font-semibold"}
//           />
//         </div>
//       </div>
//       <div className="m-5 mt-28 font-open-sans p-3 lg:hidden">
//         <img
//           src="/assests/about/Asset 4.png"
//           alt="asset"
//           className="w-full md:w-[60%] mx-auto"
//         />
//         <div className="text-[13px] space-y-4 leading-9 lg:leading-7 lg:font-droid-sans lg:space-y-4 mx-10">
//           <img src="/assests/about/Asset 5.png" alt="asset" className="m-6" />
//           <p className="mt-5">
//             Welcome to Olympia Author Hub, helping you to become a successful
//             author. Dedicated to all the authors around the world.
//           </p>
//           <Button
//             title={"Explore"}
//             color={"transparent"}
//             width={"w-[110px] text-[14px] font-semibold"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmSections;
