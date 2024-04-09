import Banner from "@/components/common/Banner";
import BackButton from "@/components/feature/article/BackButton";
import LgScreenRecent from "@/components/genre/book/LgScreenRecent";
import RecommendedBooks from "@/components/genre/book/RecommendedBooks";
import SmScreenRecent from "@/components/genre/book/SmScreenRecent";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1300px]">
        <Link href="/genre">
          <BackButton />
        </Link>
        <div className="flex flex-col w-full justify-start md:justify-center font-open-sans space-y-5 p-3 lg:p-1 px-3">
          <Banner />

          <LgScreenRecent />

          <SmScreenRecent />

          <RecommendedBooks />
        </div>
      </div>
    </div>
  );
};

export default page;
