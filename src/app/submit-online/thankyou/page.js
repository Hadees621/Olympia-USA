import Button from "@/components/common/Button";
import ImageSlider from "@/components/submit-online/ImageSlider";

const page = () => {
  const images = [
    "/assests/Submissions process/1.png",
    "/assests/Submissions process/2.png",
    "/assests/Submissions process/3.png",
    "/assests/Submissions process/4.png",
  ];
  return (
    <div className="p-6 font-open-sans space-y-5 lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto">
      <div className="flex justify-center w-full">
        <img
          src="/assests/Icons/Thank you.png"
          alt="sa"
          className="w-[300px] md:w-[320px]"
        />
      </div>
      <h1 className="text-[20px] lg:text-[50px] font-bold text-center px-10">
        Thank you for submitting online with us!
      </h1>
      <h1 className="text-[12px] lg:text-[12px] font-semibold text-center leading-8">
        YOUR RECORD HAS BEEN CREATED UNDER THE FOLLOWING DETAILS:
        <p>Name Surname </p>
        <p>emailaddress@outlook.com</p>
      </h1>
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
          {" "}
          Send to : <b> submissions@olympiapublishers.com </b>
        </h1>
      </div>
      <div className="bg-[#F9F7F6] p-8 space-y-3 hidden lg:block">
        <h1 className="text-[14px] font-bold">What happens next?</h1>
        <h1 className="text-[12px] font-semibold leading-8">
          Read our submissions process overview below.
        </h1>
      </div>
      <ImageSlider images={images} />

      <div className="bg-[#F9F7F6] px-20 py-10 font-bold text-center leading-7 space-y-3 lg:hidden">
        <h1>YOU HAVE SUBMIITED YOUR MANUSCRIPT TO US</h1>
      </div>

      <div className="text-[30px] lg:text-[50px] font-bold px-4">
        <h1 className="py-4">SEE WHAT OUR AUTHORS ARE SAYING</h1>
        <p className="font-medium text-[13px] font-open-sans leading-8 pb-6">
          "Olympia Publishers provide tremendous opportunities for first time
          writers and help them develop their writing skills. It will not be
          surprising if Olympia Publishers becomes the most favoured publishing
          destination of writers in a few years."{" "}
        </p>
        <Button title={"View author experiences"} width={"w-[170px]"} />
      </div>

      <div className="text-[12px] font-bold text-center px-6 py-16">
        <h1 className="">KNOW SOMEONE WHO WOULD ALSO LIKE TO SUBMIT A BOOK?</h1>
        <br />
        <br />
        <a className="underline">CLICK HERE TO TELL A FRIEND</a>
      </div>
    </div>
  );
};

export default page;
