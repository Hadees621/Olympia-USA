import Banner from "@/components/common/Banner";
import InputField from "@/components/request-review/InputField";
import SectionTitle from "@/components/request-review/SectionTitle";
import React from "react";

const page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto bg-[#FFFFFF]">
      <Banner title={"Request a review copy"} key={3} />

      <div className="text-[13px] text-center xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-8 xl:leading-7 2xl:leading-9 md:font-droid-sans mx-7 md:text-[14px] md:max-w-[400px] md:mx-auto lg:text-start lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] lg:my-16">
        We’re happy to offer review copies to magazines, newspapers, book
        bloggers and vloggers who are interested in reviewing our books. Simply
        fill the form below to request your copy.
      </div>

      <div className="font-open-sans mx-8 space-y-5 my-10">
        <>
          <SectionTitle number="01" title="ABOUT YOU" />
          <InputField label="Title" width="w-[70%]" />
          <InputField label="First Name" />
          <InputField label="Last Name" />
          <InputField label="Email address" />
          <InputField label="Address line 1" />
          <InputField label="Address line 2" />
          <InputField label="Address line 3" />
          <InputField label="City" />
          <InputField label="Country/ State" />
          <div className="flex w-full gap-4">
            <div className="w-[40%]">
              <InputField
                label="Postcode/Zip code"
                isRequired={true}
                showRequiredText={false}
              />
            </div>
            <div className="w-[60%]">
              <InputField label="Country" />
            </div>
          </div>
          <InputField label="Company/Blog/Magazine name" />
          <InputField label="Job title" isRequired={false} />
          <div className="py-16">
            <hr />
          </div>
        </>

        <>
          <SectionTitle number="02" title="REVIEW" />
          <InputField label="Book title" />
          <InputField label="Author name" />
          <div className="flex w-full gap-4">
            <div className="w-[40%]">
              <InputField
                label="ISBN"
                isRequired={true}
                showRequiredText={false}
              />
            </div>
            <div className="w-[60%]">
              <InputField label="Format" />
            </div>
          </div>
          <InputField
            label="Where will you publish this review?"
            isRequired={false}
          />
          <InputField label="Web link" isRequired={false} />
          <div className="flex w-full gap-4">
            <div className="w-[40%]">
              <InputField label="Date of review" isRequired={false} />
            </div>
            <div className="w-[60%]">
              <InputField label="Subscribers/ Circulation" isRequired={false} />
            </div>
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="text-[13px] font-medium text-gray-900"
            >
              Additional information
            </label>
          </div>
          <input
            type="text"
            id="first_name"
            className="text-gray-900 text-sm rounded-md p-14 w-full border border-black"
          />

          <div className="py-16">
            <hr />
          </div>
        </>

        <>
          <SectionTitle number="03" title="TERMS & CONDITIONS" />

          <p className="text-[13px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
            Review copies of our books are only provided to specific people,
            this is at the sole discretion of Olympia Publishers
          </p>

          <p className="text-[13px] font-semibold leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
            WHEN YOU REQUEST A REVIEW COPY YOU ARE AGREEING TO:
          </p>

          <p className="text-[13px] leading-8 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
            — Send us a copy of the said review prior to publishing.
          </p>

          <p className="text-[13px] leading-8 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
            — That we can use the information provided to follow up on review
            copies.
          </p>

          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-14 h-14 text-blue-600 bg-gray-100 rounded-none"
            />
            <label
              for="default-checkbox"
              class="text-[14px] font-semibold leading-8 px-8"
            >
              {" "}
              I HAVE READ AND AGREE TO THE TERMS & CONDITIONS
            </label>
          </div>

          <div className="pt-14 pb-28">
            <button
              className={`text-[12px] py-[10px] font-semibold font-open-sans shadow flex items-center justify-center bg-[#68AA6E] w-[160px] text-white rounded-[30px] mx-auto`}
            >
              Submit request
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default page;
