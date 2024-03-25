import AboutSection from "@/components/home/AboutSection";
import Bumblebee from "@/components/home/Bumblebee";
import Categories from "@/components/home/Categories";
import EditorsPick from "@/components/home/EditorsPick";
import Features from "@/components/home/Features";
import HashtagSection from "@/components/home/HashtagSection";
import MostPopular from "@/components/home/MostPopular";
import NewReleases from "@/components/home/NewReleases";
import PoemsComponent from "@/components/home/PoemsComponent";
import PublishingJourney from "@/components/home/PublishingJourney";
import Slider from "@/components/home/Slider";
import SmScreenPopular from "@/components/home/SmScreenPopular";
import SmAboutSection from "@/components/home/SmAboutSection";
import FeaturedAuthor from "@/components/home/FeaturedAuthor";
import SmBumblebee from "@/components/home/SmBumblebee";
import Button from "@/components/common/Button";
import SmEditorsPick from "@/components/home/SmEditorsPick";
import SmCategories from "@/components/home/SmCategories";
import { AboutUsData, SmAboutUsData } from "@/utils/home/Home";

export default function Home() {
  const { heading, paragraph } = AboutUsData;
  const { headingS, paragraphS } = SmAboutUsData;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Slider />

      <div className="lg:hidden">
        <SmScreenPopular />
        <SmAboutSection heading={headingS} paragraph={paragraphS} />
        <PoemsComponent />
        <SmCategories />
        <NewReleases />
        <FeaturedAuthor />
        <SmBumblebee />
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center">
        <NewReleases />
        <AboutSection heading={heading} paragraph={paragraph} />
        <MostPopular />
        <Bumblebee />
        <Categories />
      </div>

      <Features />
      <PublishingJourney />

      <div className="hidden lg:flex flex-col justify-center items-center">
        <EditorsPick />
      </div>

      <div
        className="bg-cover bg-center md:hidden my-4"
        style={{ backgroundImage: "url('/Home/Mobile/Asset 30.png')" }}
      >
        <div className="bg-white flex flex-col justify-start items-start my-8 mx-4 gap-4 p-5 font-droid-sans">
          <p className="font-bold text-[18px]">MEET OUR AUTHORS</p>
          <p>
            Chances are you’re looking for one of our most popular writers, so
            here they are.
          </p>
          <Button
            title="View all authors"
            color="transparent"
            width="w-[130px]"
          />
        </div>
      </div>

      <div className="lg:hidden">
        <SmEditorsPick />
      </div>

      {/* <HashtagSection /> */}
    </div>
  );
}

// import AboutSection from "@/components/home/AboutSection";
// import Bumblebee from "@/components/home/Bumblebee";
// import Categories from "@/components/home/Categories";
// import EditorsPick from "@/components/home/EditorsPick";
// import Features from "@/components/home/Features";
// import HashtagSection from "@/components/home/HashtagSection";
// import MostPopular from "@/components/home/MostPopular";
// import NewReleases from "@/components/home/NewReleases";
// import PoemsComponent from "@/components/home/PoemsComponent";
// import PublishingJourney from "@/components/home/PublishingJourney";
// import Slider from "@/components/home/Slider";
// import SmScreenPopular from "@/components/home/SmScreenPopular";
// import SmAboutSection from "@/components/home/SmAboutSection";
// import FeaturedAuthor from "@/components/home/FeaturedAuthor";
// import SmBumblebee from "@/components/home/SmBumblebee";
// import Button from "@/components/common/Button";
// import SmEditorsPick from "@/components/home/SmEditorsPick";
// import SmCategories from "@/components/home/SmCategories";
// import { AboutUsData, SmAboutUsData } from "@/utils/home/Home";

// export default function Home() {
//   const { heading, paragraph } = AboutUsData;
//   const { headingS, paragraphS } = SmAboutUsData;

//   return (
//     <div className="w-full flex flex-col justify-center items-center ">
//       <Slider />

//       <div className="lg:hidden">
//         <SmScreenPopular />
//       </div>

//       <div className="lg:hidden">
//         <SmAboutSection heading={headingS} paragraph={paragraphS} />
//       </div>

//       <div className="hidden lg:block">
//         <NewReleases />
//         <AboutSection heading={heading} paragraph={paragraph} />
//       </div>

//       <PoemsComponent />

//       <div className="flex flex-col justify-center items-center lg:hidden">
//         <SmCategories />

//         <NewReleases />

//         <FeaturedAuthor />

//         <SmBumblebee />
//       </div>

//       <div className="hidden lg:flex flex-col justify-center items-center">
//         <MostPopular />

//         <Bumblebee />

//         <Categories />
//       </div>

//       <Features />

//       <PublishingJourney />

//       <div className="hidden lg:flex flex-col justify-center items-center">
//         <EditorsPick />
//       </div>

//       <div
//         className="bg-cover bg-center md:hidden my-4"
//         style={{ backgroundImage: "url('/Home/Mobile/Asset 30.png')" }}
//       >
//         <div className="bg-white flex flex-col justify-start items-start my-8 mx-4 gap-4 p-5 font-droid-sans">
//           <p className="font-bold text-[18px]">MEET OUR AUTHORS</p>
//           <p>
//             {" "}
//             Chancers are you’re looking for one of our most popular writers, so
//             here they are.
//           </p>
//           <Button
//             title={"View all authors"}
//             color={"transparent"}
//             width={"w-[130px]"}
//           />
//         </div>
//       </div>

//       <div className="lg:hidden">
//         <SmEditorsPick />
//       </div>

//       {/* <HashtagSection /> */}
//     </div>
//   );
// }
