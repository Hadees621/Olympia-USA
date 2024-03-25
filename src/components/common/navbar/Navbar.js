"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { useNavbarStore } from "@/stores/States";
import Downwards from "./navbarComps/Downwards";
import Upwards from "./navbarComps/Upwards";
import BookDropdown from "./navbarComps/BookDropdown";
import SearchBar from "./navbarComps/SearchBar";

const Navbar = () => {
  const { booksDropdownOpen, toggleBooksDropdown } = useNavbarStore();

  return (
    // border-b border-black
    <div className="flex justify-center items-center  relative">
      <div className="2xl:h-[80px] bg-white lg:max-w-[800px] xl:max-w-[1200px] 2xl:max-w-[1600px] flex justify-between items-center 2xl:py-[60px] relative z-10">
        <div>
          <Image
            src="/assests/Icons/logo-usa.png"
            width={150}
            height={80}
            alt="logo"
          />
        </div>
        <div className="w-[400px] xl:w-[500px] 2xl:w-[850px] mx-[60px] xl:mx-[100px] 2xl:mx-[240px] py-1 2xl:py-20 relative z-10">
          <SearchBar />
          <div className="flex font-bold gap-10 items-center justify-between text-[8px] xl:text-[10px] 2xl:text-[12px] relative z-10 py-5">
            <div
              className={`relative cursor-pointer`}
              onClick={toggleBooksDropdown}
            >
              <div
                className={`flex gap-7 items-center ${
                  booksDropdownOpen ? "text-red-500" : ""
                }`}
              >
                BOOKS{" "}
                <div>{booksDropdownOpen ? <Downwards /> : <Upwards />}</div>{" "}
              </div>
              {booksDropdownOpen && <BookDropdown />}
            </div>
            <p>AUTHORS</p>
            <p>FEATURES</p>
            <p>ABOUT US</p>
            <p>PUBLISH WITH US</p>
          </div>
        </div>
        <Button
          title="SUBMIT ONLINE"
          width="lg:w-[130px] 2xl:w-[15%]"
          color="red"
        />
      </div>
    </div>
  );
};

export default Navbar;
