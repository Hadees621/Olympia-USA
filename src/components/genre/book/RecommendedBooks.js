import BooksSubMenu from "@/components/common/navbar/comp/BooksSubMenu";
import BookComponent from "@/components/home/BookComponent";
import { useBumblebeeStore } from "@/stores/States";
import { Books } from "@/utils/home/Books";

const RecommendedBooks = () => {
  
  const { flag } = useBumblebeeStore();

  return (
    <div className="my-20">
      <div className="flex justify-center items-center lg:justify-between lg:bg-white pt-10">
        <p className="text-[26px] font-semibold font-droid-sans hidden lg:block">
          You may also like
        </p>
        <p className="text-[20px] font-bold font-open-sans lg:hidden">
          YOU MIGHT ALSO LIKE
        </p>
      </div>
      <div className="flex overflow-x-scroll lg:overflow-x-hidden py-8 lg:py-0 lg:border lg:border-black mb-14 lg:hidden">
        {Books.map((book, index) => (
          <div className="flex-none" key={index}>
            <BookComponent
              src={book.src}
              title={book.title}
              author={book.author}
              bumblebee={flag ? true : false}
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
              bumblebee={flag ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedBooks;
