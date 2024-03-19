import Image from "next/image";
import Button from "../common/Button";

const EditorsPick = () => {
  return (
    <div className="lg:max-w-[800px] 2xl:max-w-[1200px]">
      <p className="text-[26px] font-semibold font-droid-sans text-start">
        Editors Picks
      </p>
      <div className="flex py-10">
        <div className="p-14 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Books/Asset6.png"
              width={290}
              height={410}
              className="hover:shadow"
              alt="editors"
            />
          </div>
          <div className="pt-10 flex w-full justify-center">
            <Button title="READ BOOK" width="w-[120px]" color="transparent" />
          </div>
        </div>
        <div className="p-14 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Books/Asset6.png"
              width={290}
              height={410}
              className="hover:shadow"
              alt="editors"
            />
          </div>
          <div className="pt-10 flex w-full justify-center">
            <Button title="READ BOOK" width="w-[120px]" color="transparent" />
          </div>
        </div>
        <div className="p-14 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]">
          <div className="">
            <Image
              src="/assests/Books/Asset6.png"
              width={290}
              height={410}
              className="hover:shadow"
              alt="editors"
            />
          </div>
          <div className="pt-10 flex w-full justify-center">
            <Button title="READ BOOK" width="w-[120px]" color="transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
