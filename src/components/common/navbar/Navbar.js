"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { useNavbarStore } from "@/stores/States";
import Downwards from "./navbarComps/Downwards";
import Upwards from "./navbarComps/Upwards";

const Navbar = () => {
  const { booksDropdownOpen, toggleBooksDropdown } = useNavbarStore();

  return (
    <div className="flex justify-center items-center border-b border-black relative">
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
          <div className="flex items-center bg-gray-50 px-5 mt-3">
            <input
              type="search"
              className="block w-full p-4 text-sm text-gray-900 rounded-lg bg-gray-50"
              placeholder="Search books and authors..."
              required
            />
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
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
              {booksDropdownOpen && (
                <div className="absolute top-full -left-8 bg-white rounded-md p-8 mt-1 z-20">
                  <p className="py-3">Categories</p>
                  <div className="flex gap-4 text-white">
                    <div
                      className="p-11 text-center w-[140px]"
                      style={{
                        backgroundImage:
                          "url('/assests/Genre banner/Fiction.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h1>Fiction</h1>
                    </div>
                    <div
                      className="p-11 text-center w-[140px]"
                      style={{
                        backgroundImage:
                          "url('/assests/Genre banner/Non Fiction.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h1>Non-Fiction</h1>
                    </div>
                    <div
                      className="p-11 text-center w-[140px]"
                      style={{
                        backgroundImage:
                          "url('/assests/Genre banner/Bumblebee books.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h1>Bumblebee Books</h1>
                    </div>
                    <div className="grid">
                      <div className="w-[100px] space-y-2 text-black">
                        <p className="">New releases</p>
                        <p className="">Most popular</p>
                        <p className="">Editors pick</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
