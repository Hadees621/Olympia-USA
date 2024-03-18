import Image from "next/image";

const SmBumblebee = () => {
  return (
    <div>
      <div className="flex flex-col-reverse bg-[#F9F9F9] md:justify-center md:items-center">
        <div className="p-5">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Discover Bumblebee Books</h2>
            <p className="text-md font-courier-prime font-medium tracking-tight">
              The home of children’s literature
            </p>
          </div>
          <button className="my-3 text-[11px] px-5 py-[13px] font-bold font-droid-sans rounded border border-black shadow hover:bg-[#FEC40D] focus:border-none">
            View Bumblebee books
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/Home/Mobile/Asset 52.png"
            width={500}
            height={700}
            alt="About Section Image"
          />
        </div>
      </div>
    </div>
  );
};

export default SmBumblebee;
