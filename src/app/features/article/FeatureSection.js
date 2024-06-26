import Image from "next/image";
import Button from "@/components/feature/Button";

const FeaturesSection = ({ features }) => {
  return (
    <div className="grid md:justify-center gap-4 lg:gap-0 lg:flex-row py-10 mx-3 lg:mx-0 ">
      <div className="max-w-container">
        <p className="text-[22px] uppercase font-bold font-open-sans text-center lg:text-start">
          What to read next
        </p>
        <div className="flex flex-col lg:flex-row py-10 gap-10 lg:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-2 lg:p-6 xl:p-8 2xl:p-12 flex flex-col lg:border border-black flex-grow hover:bg-[#EFF4F7]"
            >
              <div>
                <Image
                  src={feature.imageSrc}
                  width={450}
                  height={190}
                  className="hover:shadow"
                  alt="features"
                />
              </div>
              <div className="pt-10 flex flex-col w-full justify-start font-open-sans space-y-5">
                <div className="flex flex-col-reverse">
                  <p className="font-bold text-[18px]">{feature.title}</p>
                  <p className="text-[12px]">{feature.date}</p>
                </div>
                <p className="text-[12px]">{feature.content}</p>
                <Button
                  title="READ FEATURE"
                  width="w-[120px]"
                  color="transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
