import React from "react";

const BookDropdown = () => {
  return (
    <div className="absolute top-full -left-8 xl:-left-12 bg-white rounded-md p-8 mt-1 z-20">
      <p className="py-3">Categories</p>
      <div
        className="flex gap-2 xl:gap-4 text-white 2xl:text-[13px]  overflow-x-auto"
        style={{ paddingRight: "20px" }}
      >
        <div
          className="text-center p-9 w-[100px] xl:p-11 xl:w-[155px] 2xl:p-14 2xl:w-[200px]"
          style={{
            backgroundImage: "url('/assests/Genre banner/Fiction.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1>Fiction</h1>
        </div>
        <div
          className="text-center p-9 w-[100px] xl:p-11 xl:w-[155px] 2xl:p-14 2xl:w-[200px]"
          style={{
            backgroundImage: "url('/assests/Genre banner/Non Fiction.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1>Non-Fiction</h1>
        </div>
        <div
          className="text-center p-9 w-[100px] xl:p-11 xl:w-[155px] 2xl:p-14 2xl:w-[200px]"
          style={{
            backgroundImage: "url('/assests/Genre banner/Bumblebee books.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1>Bumblebee Books</h1>
        </div>
        <div className="grid px-2">
          <div className="w-[100px] xl:w-[70px] 2xl:text-[15px] 2xl:w-[170px] space-y-2 text-black">
            <p className="">New releases</p>
            <p className="">Most popular</p>
            <p className="">Editors pick</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDropdown;
