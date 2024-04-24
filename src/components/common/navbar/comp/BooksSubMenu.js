import React from "react";

const BooksSubMenu = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-white text-lg mx-5 font-arial">
      <a
        href="/genre"
        className="bg-[#AEBED3] w-full p-6 flex justify-center items-center"
      >
        Fiction
      </a>
      <a
        href="/genre"
        className="bg-[#9EE3C1] w-full p-6 flex justify-center items-center"
      >
        Non-fiction
      </a>

      <a
        href="/bumblebee-books"
        className="bg-[#FDCF4F] w-full p-6 flex justify-center items-center"
      >
        Bumblebee
      </a>

      <div className="text-black flex flex-col justify-start items-start w-full font-arial gap-5 font-medium py-2 cursor-pointer">
        <p>New releases</p>
        <p>Most popular</p>
        <p>Editors picks</p>
      </div>
      <hr className="w-full border-b border-gray-100 mt-1" />
    </div>
  );
};

export default BooksSubMenu;
