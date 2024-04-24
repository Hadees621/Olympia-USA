import Banner from "@/components/common/Banner";
import InputField from "@/components/request-review/InputField";
import SectionTitle from "@/components/request-review/SectionTitle";
import Optional from "@/components/submit-online/Optional";
import FileUploader from "@/components/submit-online/FileUploader";
import Button from "@/components/common/Button";

const page = () => {
  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto bg-[#FFFFFF]">
      <Banner title={"Submit online"} key={3} />

      <div className="text-[13px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] text-center space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-8 xl:leading-7 2xl:leading-9 md:font-droid-sans mx-7 md:text-[14px] md:max-w-[420px] md:mx-auto lg:max-w-[450px] xl:max-w-[550px] lg:text-center 2xl:max-w-[700px] lg:my-16">
        The fastest and easiest way to send us your submission. Please fill in
        and upload all relevant information in the form below. You will receive
        an email notification once your submission is received by our editorial
        team. Submissions review process can take up to 6 weeks.
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

          <div className="flex w-full gap-4 my-4">
            <div className="w-[60%]">
              <InputField
                label="City"
                isRequired={true}
                showRequiredText={false}
              />
            </div>
            <div className="w-[40%]">
              <InputField label="Country/ State" />
            </div>
          </div>

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

          <p
            className={`text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 text-[#E6E6E6]"
          }`}
          >
            We do not accept academic or foreign language submissions. These
            submissions will be automatically removed from our systems and you
            may not hear back from us.
          </p>

          <p
            className={`text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 text-[#E6E6E6]"
          }`}
          >
            At Olympia Publishers we offer two types of publishing contracts:
          </p>

          <div>
            <h2 className="font-bold text-[16px] font-open-sans">
              Hybrid publishing contract
            </h2>
            <p
              className={`text-[12px] leading-8 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 text-[#E6E6E6]"
          }`}
            >
              This offer is based on a contribution, to be paid by the author,
              to cover initial production and printing of the work.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[16px] font-open-sans">
              Traditional contract
            </h2>
            <p
              className={`text-[12px] leading-8 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 text-[#E6E6E6]"}`}
            >
              This is where no costs are incurred by the author and the whole
              cost for producing, publishing and marketing the work is covered
              by us.
            </p>
          </div>

          <div className="py-16 lg:hidden">
            <hr />
          </div>
        </div>

        <div className="md:border border-black md:p-8 xl:p-12 space-y-4 lg:space-y-6 lg:py-6">
          <SectionTitle
            number="02"
            title="ABOUT YOUR BOOK"
            SmallTitle="About your book"
          />
          <InputField label="Pen name" />
          <InputField label="Book title" />

          <div className="flex w-full gap-4 my-4">
            <div className="w-[50%] lg:w-[60%]">
              <InputField label="Genre" showRequiredText={false} />
            </div>
            <div className="w-[50%] lg:w-[40%]">
              <InputField
                label="Word count (numbers only)"
                showRequiredText={false}
              />
            </div>
          </div>

          <Optional label="Does your book have illustrations?" />

          <Optional
            label="Who will provide the illustrations?"
            yesLabel="Author"
            noLabel="Publisher"
          />

          <Optional label="Have you had any work published?" />

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
              className="text-gray-900 text-sm rounded-md p-10 w-full border border-black"
            />
          </div>

          <InputField label="Where did you hear about us?" isRequired={false} />

          <div className="py-16 md:hidden">
            <hr />
          </div>
        </div>

        <div className="md:border border-black md:p-8 xl:p-12 space-y-4 lg:space-y-6 lg:py-6">
          <SectionTitle
            number="01"
            title="UPLOAD FILES"
            SmallTitle="Upload files"
          />

          <p
            className={`text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 text-[#E6E6E6]"
          }`}
          >
            Upload synopsis (1 file only in PDF or Word format)*
          </p>

          <FileUploader id="uploader1" />

          <p
            className={`text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[12px] 2xl:text-[17px] xl:leading-7 2xl:leading-9 text-[#E6E6E6]"
          }`}
          >
            Upload synopsis (1 file only in PDF or Word format)*
          </p>

          <FileUploader id="uploader2" />

          <div className="py-16 lg:hidden">
            <hr />
          </div>
        </div>

        <div className="md:border border-black md:p-8 xl:p-12 space-y-4 lg:space-y-2 xl:space-y-4 lg:py-6">
          <SectionTitle
            number="04"
            title="TERMS & CONDITIONS"
            SmallTitle="Terms & Conditions"
          />

          <div class="flex items-center py-4 lg:pt-6">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-14 h-14 text-blue-600 bg-gray-100 rounded-none lg:hidden"
            />
            <label
              for="default-checkbox"
              class="y-4 text-[12px] lg:text-[13px] font-semibold px-8 lg:px-4 lg:hidden"
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
