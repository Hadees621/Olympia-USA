import BookComponent from "@/components/home/BookComponent";
import { useBumblebeeStore } from "@/stores/States";
import { Books } from "@/utils/home/Books";

const RecommendedBooks = () => {
  const { flag } = useBumblebeeStore();

  return (
    <div className="my-20 lg:max-w-[850px] xl:max-w-[1050px] 2xl:max-w-[1300px] mx-auto">
      <div className="flex justify-center items-center lg:justify-between lg:bg-white pt-10">
        <p className="text-[26px] font-semibold font-droid-sans hidden lg:block">
          You may also like
        </p>
        <p className="text-[20px] font-bold font-open-sans lg:hidden">
          YOU MIGHT ALSO LIKE
        </p>
      </div>

      <div
        className="pt-8 mx-5 lg:hidden"
        style={{ overflowX: "auto", overflowY: "hidden", maxWidth: "90vw" }}
      >
        <div
          className="flex gap-6"
          style={{ minWidth: `${Books.length * 150}px` }}
        >
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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex items-center justify-center pt-6 pb-20 hidden gap-3 lg:gap-0">
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
