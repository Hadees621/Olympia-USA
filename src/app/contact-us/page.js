import Banner from "@/components/common/Banner";
import SmScreenSections from "@/components/contact-us/SmScreenSections";
import USA from "@/components/contact-us/USA";

const page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
      <Banner title={"Contact us"} />
      <SmScreenSections />

      <USA />
      
    </div>
  );
};

export default page;
