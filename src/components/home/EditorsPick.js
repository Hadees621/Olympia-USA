import Button from "../common/Button";

const EditorsPick = () => {
  return (
    <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
      <p className="text-[21px] font-bold font-droid-sans text-start">
        Editors Picks
      </p>
      <div className="flex py-10">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="p-14 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]"
          >
            <img
              src="/assets/Books/Asset6.png"
              width={290}
              height={410}
              className="hover:shadow"
              alt="editors"
            />
            <div className="pt-10 flex w-full justify-center">
              <Button title="READ BOOK" width="w-[120px]" color="transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
