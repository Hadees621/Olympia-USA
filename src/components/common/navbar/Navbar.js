import Image from "next/image";
import React from "react";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center border border-black ">
      <div className="h-[80px] bg-white max-w-[1200px] flex justify-between items-center py-[60px]">
        <div>
          <Image
            src="/assests/Icons/logo-usa.png"
            width={200}
            height={100}
            alt="logo"
          />
        </div>
        <div class="w-[650px] mx-[140px] py-20">
          <div class="flex items-center bg-gray-50 px-5 mt-3">
            <input
              type="search"
              class="block w-full p-4 text-sm text-gray-900 rounded-lg bg-gray-50"
              placeholder="Search books and authors..."
              required
            />
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <div className="h-[50px] flex font-bold gap-10 items-center justify-between text-[12px]">
            <p>BOOKS</p>
            <p>AUTHORS</p>
            <p>FEATURES</p>
            <p>ABOUT US</p>
            <p>PUBLISH WITH US</p>
          </div>
        </div>
        <Button title="SUBMIT ONLINE" width="w-[15%]" color="red" />
      </div>
    </div>
  );
};

export default Navbar;
