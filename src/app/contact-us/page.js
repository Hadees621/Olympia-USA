import Banner from "@/components/common/Banner";
import CommonSection from "@/components/contact-us/CommonSection";
import CountrySelector from "@/components/contact-us/CountrySelector";
import LocationCard from "@/components/contact-us/LocationCard";
import Review from "@/components/contact-us/Review";
import { addressInfo } from "@/utils/contact-us/utils";

const page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto">
      <Banner title={"Contact us"} />

      <CountrySelector />

      {addressInfo.map((info, index) => (
        <LocationCard
          i={index}
          key={index}
          countryName={info.country}
          imgSrc={info.imgSrc}
          addressLines={info.addressLines}
          emailSections={info.emailSections}
          phoneNumber={info.phoneNumber}
        />
      ))}

      <Review />

      <CommonSection
        title="START YOUR PUBLISHING JOURNEY WITH US"
        content="Olympia Publishers are now accepting submissions across various genres. If you have written a story, submit your manuscript for us to review."
        buttonTitle="Read our submissions guidelines"
        buttonWidth="w-[240px] h-[44px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px] border border-white mt-6"
        bgColor="bg-[#C61E2B]"
      />
      <CommonSection
        title="FAQS"
        content="For anymore questions or queries, visit our frequently asked questions page. We are ready to answer all of your questions!"
        buttonTitle="View FAQs"
        buttonWidth="w-[100px] h-[44px] lg:w-[130px] lg:h-[38px] 2xl:w-[130px] 2xl:h-[45px] text-[13px] border border-white mt-6"
        bgColor="bg-black"
      />
    </div>
  );
};

export default page;
