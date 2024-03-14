import Image from "next/image";
import PoemInfo from "./PoemInfo";

const PoemsComponent = () => {
  return (
    <div className="flex flex-col max-w-[1200px] border my-20">
      <div className="flex bg-[#F9F9F9]">
        <PoemInfo
          author="Victoria Leigh Bennett"
          title="Poems From the Northeast"
        />
        <div className="flex-1">
          <Image
            src="/public/assests/poems.png"
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
      </div>
      <div className="flex bg-[#F9F9F9]">
        <div className="flex-1">
          <Image
            src="/public/assests/poems.png"
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
        <PoemInfo author="Kristen Mackenzie" title="To Heal the Hurt" />
      </div>
    </div>
  );
};

export default PoemsComponent;
