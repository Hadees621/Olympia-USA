import AboutSection from "@/components/home/AboutSection";
import NewReleases from "@/components/home/NewReleases";
import PoemsComponent from "@/components/home/PoemsComponent";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">

      {/* <NewReleases /> */}
      {/* <AboutSection
        heading="About Us"
        paragraph="Olympia Publishers USA is a leading independent book publisher. Publishing talented authors from across the world.We publish adult and children’s fiction and non - fiction books in various formats including paperback, hardback, ebook and audiobook.Make your dream a reality, become a published author. Start your publishing journey with us"
      /> */}
      
      <PoemsComponent />

    </div>
  )
}
