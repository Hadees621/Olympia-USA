import Banner from "@/components/common/Banner";
import Button from "@/components/common/Button";
import InputField from "@/components/request-review/InputField";
import SectionTitle from "@/components/request-review/SectionTitle";
import React from "react";

const page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto bg-[#FFFFFF]">
      <Banner title={"Request a review copy"} key={3} />

      <div className="text-[13px] lg:text-[10px] xl:text-[14px] 2xl:text-[17px] text-center space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-8 xl:leading-7 2xl:leading-9 md:font-droid-sans mx-7 md:text-[14px] md:max-w-[420px] md:mx-auto lg:max-w-[450px] xl:max-w-[550px] lg:text-center 2xl:max-w-[700px] lg:my-16">
        We’re happy to offer review copies to magazines, newspapers, book
        bloggers and vloggers who are interested in reviewing our books. Simply
        fill the form below to request your copy.
      </div>

      <div className="font-open-sans mx-8 space-y-5 md:space-y-0 my-10 md:max-w-[420px] md:mx-auto lg:max-w-[440px] xl:max-w-[550px] 2xl:max-w-[750px] lg:mx-auto">
        <div className="md:border border-black md:p-8 xl:p-12 space-y-4 lg:space-y-6 lg:py-6">
          <SectionTitle number="01" title="ABOUT YOU" SmallTitle="About you" />
          <InputField label="Title" width="w-[70%]" showRequiredText={false} />
          <InputField label="First Name" />
          <InputField label="Last Name" />
          <InputField label="Email address" />
          <InputField label="Address line 1" />
          <InputField label="Address line 2" />
          <InputField label="Address line 3" />
          <InputField label="City" />
          <InputField label="Country/ State" />
          <div className="flex w-full gap-4 my-4">
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
          <div className="py-16 lg:hidden">
            <hr />
          </div>
        </div>

        <div className="md:border border-black md:p-8 xl:p-12 space-y-4 lg:space-y-6 lg:py-6">
          <SectionTitle number="02" title="REVIEW" SmallTitle="Review" />
          <InputField label="Book title" />
          <InputField label="Author name" />
          <div className="flex w-full gap-4 my-4">
            <div className="w-[40%]">
              <InputField
                label="ISBN"
                isRequired={true}
                showRequiredText={false}
              />
            </div>
            <div className="w-[60%]">
              <InputField label="Format" showRequiredText={false} />
            </div>
          </div>
          <InputField
            label="Where will you publish this review?"
            isRequired={false}
          />
          <InputField label="Web link" isRequired={false} />

          <div className="flex w-full gap-4 my-4">
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

            <input
              type="text"
              id="first_name"
              className="text-gray-900 text-sm rounded-md p-16 w-full border border-black"
            />
          </div>

          <div className="py-16 md:hidden">
            <hr />
          </div>
        </div>

        <div className="md:border border-black md:p-8 xl:p-12 space-y-4 lg:space-y-2 xl:space-y-4 lg:py-6">
          <SectionTitle
            number="03"
            title="TERMS & CONDITIONS"
            SmallTitle="Terms & Conditions"
          />

          <p className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:leading-7 2xl:leading-9">
            Review copies of our books are only provided to specific people,
            this is at the sole discretion of Olympia Publishers
          </p>

          <p className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:leading-7 2xl:leading-9 lg:hidden">
            WHEN YOU REQUEST A REVIEW COPY YOU ARE AGREEING TO:
          </p>

          <p className="text-[13px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px] leading-8 pt-6 xl:space-y-4 sm:text-[10px] xl:leading-7 2xl:leading-9 hidden lg:block font-semibold">
            When you request a review copy you are agreeing to:
          </p>

          <p className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] leading-8 xl:space-y-4 sm:text-[10px] xl:leading-7 2xl:leading-9">
            — Send us a copy of the said review prior to publishing.
          </p>

          <p className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:leading-7 2xl:leading-9">
            — That we can use the information provided to follow up on review
            copies.
          </p>

          <div class="flex items-center py-4 lg:pt-6">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-14 h-14 text-blue-600 bg-gray-100 rounded-none lg:hidden"
            />
            <label
              for="default-checkbox"
              class="y-4 text-[13px] lg:text-[13px] font-semibold px-8 lg:px-4 lg:hidden"
            >
              {" "}
              I HAVE READ AND AGREE TO THE{" "}
              <a href="/terms-and-conditions" className="underline">
                {" "}
                TERMS & CONDITIONS
              </a>
            </label>
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 hidden lg:block"
            />
            <label
              for="default-checkbox"
              class="text-[14px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] font-semibold px-8 lg:px-4 hidden lg:block"
            >
              {" "}
              I have read and agree to the{" "}
              <a href="/terms-and-conditions" className="underline">
                {" "}
                Terms & Conditions.{" "}
              </a>
            </label>
          </div>

          <div className="pt-14 pb-28 lg:py-10 lg:hidden">
            <button
              className={`text-[12px] py-[10px] font-semibold font-open-sans shadow flex items-center justify-center bg-[#68AA6E] w-[160px] text-white rounded-[30px] mx-auto`}
            >
              Submit request
            </button>
          </div>
          <div className="pt-14 pb-28 lg:py-10 hidden lg:block">
            <Button
              title={"SUBMIT REQUEST"}
              width={"w-[160px]"}
              color={"red"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
