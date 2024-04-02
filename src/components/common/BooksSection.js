import BookComponent from "@/components/home/BookComponent";
import { Books } from "@/utils/home/Books";

const BooksSection = ({ title, lgTitle, className = "" }) => {
  return (
    <div
      className={`my-20 ${className} px-5 lg:p lg:max-w-[850px] xl:max-w-[1200px] 2xl:max-w-[1400px]`}
    >
      <div className="flex justify-center items-center lg:justify-between lg:bg-white pt-10">
        <p className="text-[26px] font-semibold font-droid-sans hidden lg:block">
          {lgTitle}
        </p>
        <p className="text-[20px] font-bold font-open-sans lg:hidden">
          {title}
        </p>
      </div>
      <div className="flex overflow-x-scroll lg:overflow-x-hidden py-8 lg:py-0 lg:border lg:border-black mb-14 lg:hidden">
        {Books.map((book, index) => (
          <div className="flex-none" key={index}>
            <BookComponent
              src={book.src}
              title={book.title}
              author={book.author}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex items-center justify-center pt-6 pb-20 hidden">
        {Books.map((book, index) => (
          <div className="flex-none" key={index}>
            <BookComponent
              src={book.src}
              title={book.title}
              author={book.author}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
