import Banner from "@/components/common/Banner";
import SmScreenSections from "@/components/contact-us/SmScreenSections";
import ContactUsData from "@/utils/contact-us/ContactUsData";
import Tabs from "@/components/contact-us/Tabs";
import USA from "@/components/contact-us/USA";

const page = () => {
  const usaData = ContactUsData.addressInfo.find(
    (info) => info.country === "USA"
  );
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
      <Banner title={"Contact us"} />

      <SmScreenSections />

      <USA data={usaData} />

      <Tabs />
    </div>
  );
};

export default page;
