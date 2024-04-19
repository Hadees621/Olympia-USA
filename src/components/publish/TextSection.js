import publish from "@/utils/publish-with-us/publish.json";

const TextSection = () => {
  const { title: contentTitle, paragraphs } = publish.submissions;
  const { title, paragraph, title2, paragraph2, title3, paragraph3 } =
    publish.contracts;
  return (
    <div>
      <div className="font-open-sans mx-8 sm:text-center sm:mx-32">
        <p
          className="font-bold text-[17px]  mt-10 lg:hidden"
          dangerouslySetInnerHTML={{ __html: contentTitle }}
        />
        <div className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-5">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="font-open-sans mx-8 sm:text-center sm:mx-32">
        <p
          className="font-bold text-[17px] mt-10 lg:hidden"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
          {paragraph}
        </div>
        <p
          className="font-semibold text-[12px] md:text-[13px] xl:text-[17px] mt-10 lg:hidden"
          dangerouslySetInnerHTML={{ __html: title2 }}
        />
        <div className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
          {paragraph2}
        </div>
        <p
          className="font-semibold text-[12px] md:text-[13px]  mt-10 lg:hidden"
          dangerouslySetInnerHTML={{ __html: title3 }}
        />
        <div className="text-[13px] md:text-[10px] xl:text-[13px] 2xl:text-[17px] space-y-4 md:space-y-2 xl:space-y-4 leading-9 md:leading-6 xl:leading-7 2xl:leading-9 md:font-droid-sans">
          {paragraph3}
        </div>
      </div>

      <div className="font-open-sans mx-8 sm:text-center sm:mx-32">
        <p className="font-bold text-[17px] mt-10 lg:hidden">REQUIREMENTS</p>
        <p className="font-semibold text-[13px] mt-10 lg:hidden">
          WRITTEN IN ENGLISH?
        </p>
        <p className="mt-3 text-[12px] md:text-[13px] xl:text-[17px] lg:hidden">
          We only accept submissions written in English language.
        </p>
        <p className="font-semibold text-[13px] mt-10 lg:hidden">
          INCOMPLETE MANUSCRIPT?
        </p>
        <p className="mt-3 text-[12px] md:text-[13px] xl:text-[17px] lg:hidden">
          If you haven’t yet finished the work but would like to know if it
          would be something we are interested in before completing then you are
          also welcome to send samples of the manuscript to us.
        </p>
        <p className="mt-8 text-[12px] md:text-[13px] xl:text-[17px] lg:hidden">
          We are only able to consider one submission at a time during the
          editorial process.
        </p>
        <p className="mt-8 text-[12px] md:text-[13px] xl:text-[17px] lg:hidden">
          <b> TIP: </b> Always use a font that is legible and easy to read.
          Garamond or Times New Roman are preferred, whereas fonts such as Comic
          Sans and Broadway are not encouraged.
        </p>

        <p className="font-semibold text-[13px] mt-10 lg:hidden">
          4 WEEKS REVIEW PROCESS
        </p>
        <p className="mt-3 text-[12px] md:text-[13px] xl:text-[17px] lg:hidden">
          Your submitted manuscript will be reviewed by our Submissions Editor
          who will get in touch with you with their feedback. This process can
          take up to 4 weeks. This timeframe can vary depending on the time of
          the year.
        </p>
        <p className="mt-8 text-[12px] md:text-[13px] xl:text-[17px] lg:hidden">
          At Olympia we pride ourselves on our responsive nature. We confirm the
          receipt of all submissions and inform you of our decision regarding
          them.
        </p>

        <p className="font-semibold text-[13px] mt-10 lg:hidden">
          SOME USEFUL TIPS
        </p>
        <p className="mt-3 text-[12px] md:text-[13px] xl:text-[17px] lg:hidden">
          There is no need to double space your work. Always use a font that is
          legible and easy to read. Garamond or Times New Roman are preferred,
          whereas fonts such as Comic Sans and Broadway are not encouraged.
        </p>
      </div>
    </div>
  );
};

export default TextSection;
