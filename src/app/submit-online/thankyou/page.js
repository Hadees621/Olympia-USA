import Button from "@/components/common/Button";
import ImageSlider from "@/components/submit-online/ImageSlider";
import { images } from "@/utils/submissions/utils";
import Image from "next/image";
import Link from "next/link";

const SubmissionPage = () => {
  const ThankYouSection = () => (
    <div>
      <div className="flex justify-center w-full">
        <img
          src="/assets/Icons/Thank you.png"
          alt="Thank you"
          className="w-[300px] md:w-[320px]"
        />
      </div>
      <h1 className="text-[20px] lg:text-[50px] font-bold text-center px-10 lg:px-28">
        Thank you for submitting online with us!
      </h1>
      <h1 className="text-[12px] lg:text-[12px] font-semibold text-center leading-8 lg:lower">
        YOUR RECORD HAS BEEN CREATED UNDER THE FOLLOWING DETAILS:
        <p>Name Surname </p>
        <p>emailaddress@outlook.com</p>
      </h1>
    </div>
  );

  const NextStepsSection = () => (
    <div className="bg-[#F9F7F6] p-8 space-y-3 lg:hidden">
      <h1 className="text-[14px] font-bold">WHAT HAPPENS NEXT?</h1>
      <h1 className="text-[12px] font-semibold leading-8">
        In order for us to review your submission please see below for next
        steps.
      </h1>
      <h1 className="text-[12px] font-semibold leading-8">
        PLEASE SEND THE FOLLOWING IN WORD OR PDF FORMAT:
        <ul className="font-medium list-disc mx-6">
          <li>A synopsis</li>
          <li>Complete manuscript</li>
        </ul>
      </h1>
      <h1>
        Send to : <b> submissions@olympiapublishers.com </b>
      </h1>
    </div>
  );

  const ProcessOverviewSection = () => (
    <div className="bg-[#F9F7F6] p-8 lg:p-5 space-y-3 lg:space-y-1 hidden lg:block lg:w-[65%] lg:mx-auto">
      <h1 className="text-[14px] lg:text-[12px] font-bold">
        What happens next?
      </h1>
      <h1 className="text-[12px] lg:text-[10px] font-semibold leading-8">
        Read our submissions process overview below.
      </h1>
    </div>
  );

  const AuthorExperiencesSection = () => (
    <div className="text-[30px] lg:text-[50px] font-bold px-4">
      <img
        src="/assets/about/Asset 1.png"
        alt="asset"
        className="w-full md:w-[60%] mx-auto"
      />
      <h1 className="py-4">SEE WHAT OUR AUTHORS ARE SAYING</h1>
      <p className="font-medium text-[13px] font-open-sans leading-8 pb-6">
        "Olympia Publishers provide tremendous opportunities for first time
        writers and help them develop their writing skills. It will not be
        surprising if Olympia Publishers becomes the most favoured publishing
        destination of writers in a few years."{" "}
      </p>
      <Link href="/author-exp">
        <Button title={"View author experiences"} width={"w-[170px]"} />
      </Link>
    </div>
  );

  const TellAFriendSection = () => (
    <div className="text-[12px] font-bold text-center px-6 py-16">
      <h1 className="">KNOW SOMEONE WHO WOULD ALSO LIKE TO SUBMIT A BOOK?</h1>
      <br />
      <br />
      <a className="underline">CLICK HERE TO TELL A FRIEND</a>
    </div>
  );

  return (
    <div className="p-6 font-open-sans space-y-5 lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto mt-28 lg:mt-0">
      <ThankYouSection />
      <NextStepsSection />
      <ProcessOverviewSection />
      <div className="flex flex-col justify-center w-full">
        <ImageSlider title={"SUBMISSIONS PROCESS"} images={images} />
      </div>
      <div className="hidden lg:block">
        <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px] flex lg:py-20 2xl:py-32">
          <div className="flex-1">
            <Image
              src="/assets/Banners/See what our authors are saying.png"
              width={700}
              height={200}
              alt="About Section Image"
              priority
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col h-full justify-center font-open-sans px-5 2xl:p-10 2xl:gap-10 m-4">
              <div className="flex flex-col gap-2 2xl:gap-4">
                <h2 className="text-xl 2xl:text-3xl font-bold">
                  See what out authors are saying
                </h2>
                <p className="my-4 text-[12px] 2xl:text-[19px] font-open-sans pr-10">
                  "Olympia Publishers provide tremendous opportunities for first
                  time writers and help them develop their writing skills. It
                  will not be surprising if Olympia Publishers becomes the most
                  favoured publishing destination of writers in a few years."
                </p>
              </div>
              <Link href="/author-exp">
                <button
                  className={`text-[10px] p-[8px] font-bold font-open-sans border border-black flex items-center justify-center w-[160px]`}
                >
                  VIEW AUTHOR EXPERIENCES
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center space-y-3">
          <p>Know someone who would also like to submit a book?</p>
          <a className="underline text-[10px] text-buttonred font-bold">
            Click here to tell a friend
          </a>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="bg-[#F9F7F6] px-20 py-10 font-bold text-center leading-7 space-y-3 lg:hidden">
          <h1>YOU HAVE SUBMIITED YOUR MANUSCRIPT TO US</h1>
        </div>
        <AuthorExperiencesSection />
        <TellAFriendSection />
      </div>
    </div>
  );
};

export default SubmissionPage;
