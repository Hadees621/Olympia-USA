import Image from "next/image";
import PoemInfo from "./PoemInfo";

const PoemsComponent = () => {
  return (
    <div className="flex flex-col lg:max-w-[800px] 2xl:max-w-[1200px] lg:border my-20">
      <div className="flex flex-col-reverse lg:flex-row bg-[#F9F9F9]">
        <PoemInfo
          author="Victoria Leigh Bennett"
          title="Poems From the Northeast"
        />
        <div className="flex-1">
          <Image
            src="/assests/Home/poems.PNG"
            width={700}
            height={200}
            alt="About Section Image"
          />
        </div>
      </div>

      <div className="lg:flex bg-[#F9F9F9] hidden">
        <div className="flex-1">
          <Image
            src="/assests/Home/poems.PNG"
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
