const BookComponent = ({ src, title, author, bumblebee }) => {
  const backgroundColor = bumblebee
    ? "lg:hover:bg-[#FEEDB6]"
    : "lg:hover:bg-[#EFF4F7]";

  return (
    <div
      className={`flex flex-col lg:border border-black flex-grow p-4 xl:p-[30px] 2xl:p-[59px] ${backgroundColor}`}
    >
      <div className="bg-[#F6F6F6] lg:bg-transparent overflow-x-auto w-full">
        <div className="p-6 lg:p-[4px]">
          <img
            src={src}
            alt="book"
            className="w-[140px] h-[210px] lg:w-[135px] lg:h-[180px] xl:w-[137px] 2xl:w-[159px] 2xl:h-[245px]"
          />
        </div>
      </div>
      <div className="py-4 w-full">
        <p className="font-semibold font-driod-sans text-[15px]">{title}</p>
        <p className="text-[#616161] font-open-sans text-[14px]">{author}</p>
      </div>
    </div>
  );
};

export default BookComponent;
