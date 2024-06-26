import Image from "next/image";
import Link from "next/link";

const SmBumblebee = () => {
  return (
    <div className="">
      <div className="flex flex-col-reverse bg-[#F9F9F9] md:justify-center md:items-center">
        <div className="p-5">
          <div className="flex flex-col">
            <h2 className="text-[20px] font-bold">Discover Bumblebee Books</h2>
            <p className="text-[17px] font-courier-prime font-medium tracking-tighter">
              The home of children’s literature
            </p>
          </div>
          <Link href="/bumblebee-books">
            <button className="my-3 text-[12px] px-5 py-[10px] font-bold font-droid-sans border border-black shadow hover:bg-[#FEC40D] focus:border-none">
              View Bumblebee books
            </button>
          </Link>
        </div>
        <div className="w-full">
          <img src="/Home/Mobile/Asset 52.png" alt="About Section Image" />
        </div>
      </div>
    </div>
  );
};

export default SmBumblebee;
