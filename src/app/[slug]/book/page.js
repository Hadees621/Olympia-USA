import BackButton from "@/components/feature/article/BackButton";
import RecommendedBooks from "@/components/genre/book/RecommendedBooks";
import SmScreenRecent from "@/components/genre/book/SmScreenRecent";
import LgScreenRecent from "@/components/genre/book/LgScreenRecent";
import Banner from "@/components/genre/book/Banner";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1300px]">
        <BackButton />
        <div className="flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
          <Banner />

          {/* lg screen  */}
          <LgScreenRecent />

          {/* sm screen */}
          <SmScreenRecent />

          {/* books */}
          <RecommendedBooks />
        </div>
      </div>
    </div>
  );
};

export default page;
