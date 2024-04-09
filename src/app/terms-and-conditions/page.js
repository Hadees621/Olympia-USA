import Banner from "@/components/common/Banner";
import React from "react";

const page = () => {
  return (
    <div className="font-open-sans lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto">
      <Banner title={"Terms & Conditions"} />
      <div className="space-y-5 px-10 leading-8 font-medium py-10 lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px] mx-auto llg:mb-40">
        <p className="text-center lg:text-start">
          Your use of this website constitutes acceptance by you of the
          following Terms and Conditions. Please scroll down to view Olympia’s
          policies, if you have any further questions, or your query isn’t
          covered below, please let us know by contacting us on
          info@olympiapublishers.com
        </p>

        <h1 className="font-bold text-[15px] lg:text-[20px] lg:py-4 font-open-sans lg:hidden">
          {" "}
          TERMS & CONDITIONS{" "}
        </h1>
        <h1 className="font-bold text-[15px] lg:text-[20px] lg:py-4 font-open-sans hidden lg:block">
          {" "}
          Terms & Conditions{" "}
        </h1>
        <div>
          <p className="font-semibold text-[12px]">Copyright and Trademarks:</p>
          <div className="lg:space-y-4 text-[11px] lg:leading-7 lg:font-droid-sans">
            <p>
              This site is owned and operated by Olympia Publishers as part of
              Ashwell Publishing Limited. All information and material appearing
              on the Site are displayed for the sole use of Olympia Publishers.
              All software used on this Site and all content contained within
              the Site (site design, graphics, text, video, audio, copy) is
              property of Olympia Publishers Limited and is protected by
              international copyright laws.
            </p>
            <p>
              The advantage to yourself is that you will be able to obtain
              access to the material on this website, free of charge, and to do
              so you will not have to register any details about yourself which
              you can imagine is an advantage. However – should you wish to
              purchase or actually to order anything – we do require you to
              register so that you are enabled to receive from us the goods you
              want.
            </p>
            <p>
              We try to ensure that our content and information is as accurate
              as possible. However, we cannot guarantee that the books
              themselves, nor any of the content or other materials provided on
              our website are accurate, complete or guaranteed regarding
              warranties, conditions of satisfactory quality and appropriateness
              for certain purposes. We reserve the right to monitor the use of
              the site in accordance with any particular law so as to protect
              the rights of other users and maintain the website
            </p>
          </div>
        </div>

        <div>
          <p className="font-bold text-[11px]">OUR LIABILITY TO YOU:</p>
          <div className="lg:space-y-4 text-[11px] lg:leading-7 lg:font-droid-sans">
            <p>
              Should we, as a result of our negligence, by any chance do
              anything which causes death or personal injury, then we cannot
              exclude our liability to you.
            </p>
            <p>
              We provide the information on this website in good faith and
              without warranties, which are either expressed or implied,
              including but not limited to the implied warranties of fitness,
              satisfactory quality, or non-infringement. To enable you to find
              any restrictions, limitations etc. you should check your own local
              laws regarding the access to, browsing of, or download ing of any
              specific material, text, images, data, either video or audio from
              a website. The following is what we are not responsible for:
            </p>
            <p>
              We can neither be held responsible for any loss, claim, damage,
              both indirect or as a consequence of such loss, etc.
            </p>
          </div>
        </div>

        <h1 className="font-bold text-[15px] lg:text-[20px] lg:py-4 font-open-sans lg:hidden">
          {" "}
          POLICIES AND COOKIES
        </h1>
        <h1 className="font-bold text-[15px] lg:text-[20px] lg:py-4 font-open-sans hidden lg:block">
          {" "}
          Policies & Cookies{" "}
        </h1>

        <div>
          <p className="font-bold text-[12px] lg:text-[10px]">
            USER INFORMATION:
          </p>
          <p className="text-[11px] lg:leading-7 lg:font-droid-sans">
            Olympia collects information on what pages are accessed or visited
            by consumers, as well as information volunteered by the customer,
            such as survey information and/or site registrations. Olympia uses
            this information for internal confidential reviews, which take place
            in order to further improve the content of the Site and to notify
            customers about updates to the Site.
          </p>
        </div>

        <div>
          <p className="font-bold text-[12px] lg:text-[10px]">
            COOKIES – WE MAY USE COOKIES TO:
          </p>
          <p className="text-[11px] lg:leading-7 lg:font-droid-sans">
            Keep note of your return visits to our site deliver specific content
            regarding publishing save your password so you will not have the
            trouble to re-enter it each time you visit our sites.
          </p>
        </div>

        <div>
          <p className="font-bold text-[12px] lg:text-[10px] uppercase">
            E-mails:
          </p>
          <p className="text-[11px] lg:leading-7 lg:font-droid-sans">
            We do not retain emails sent to us after we have replied to them as
            appropriate We do not send unsolicited emails.
          </p>
        </div>

        <div>
          <p className="font-bold text-[12px] lg:text-[10px] uppercase">
            Our Aims:
          </p>
          <p className="text-[11px] lg:leading-7 lg:font-droid-sans">
            Our registration forms require submitters and customers to share
            some form of contact information – for example, a name and email
            address. We use the information provided to send updates about
            Olympia Publisher’s latest news and information. This includes a
            wide-range of publishing activity, such as press releases, marketing
            information and the like.
          </p>
          <p className="text-[11px] lg:leading-7 lg:font-droid-sans">
            We want you to have control of the personal details you provide so
            you can review, correct, change or remove your information at any
            time. If you ever have any issues with this please contact us on:
            info@olympiapublishers.com
          </p>
          <p className="text-[11px] lg:leading-7 lg:font-droid-sans">
            Our Cookies do not contain any personally identifiable information
            concerning you or individuals and we will not share, disclose,
            report, transfer or disseminate information to any person other than
            to you as an author, if you opt out of our cookies, your experience
            of our website will not be impaired.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
