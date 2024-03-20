"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import MenuItem from "./comp/MenuItem";
import { menuItems } from "@/utils/navbar/utils";

const SmNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booksMenuOpen, setBooksMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleBooksMenu = () => {
    setBooksMenuOpen(!booksMenuOpen);
  };

  return (
    <>
      <div className="h-20 bg-white flex items-center justify-between px-4">
        {/* Render hamburger button only if menu is closed */}
        {!menuOpen && (
          <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M7.95 11.95h32m-32 12h32m-32 12h32"
              />
            </svg>
          </div>
        )}

        <div className="w-full flex justify-center items-center">
          <Image
            src="/assests/Icons/logo-usa.png"
            width={100}
            height={75}
            alt="logo"
          />
        </div>

        {/* Render cross icon if menu is open */}
        {menuOpen && (
          <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                d="m6 6l12 12m0-12L6 18"
              />
            </svg>
          </div>
        )}
        {/* Render search icon if menu is closed */}
        {!menuOpen && (
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37"
              />
            </svg>
          </div>
        )}
      </div>
      {menuOpen && (
        <div className="p-7 space-y-6">
          {/* Dropdown item with toggleable arrow */}
          <div
            className="flex justify-between items-center"
            onClick={toggleBooksMenu}
            style={{ cursor: "pointer" }}
          >
            <div className="flex justify-between w-full">
              <div>
                {!booksMenuOpen && (
                  <p
                    className={`font-bold mb-2 ml-5 cursor-pointer font-arial text-black`}
                  >
                    Books
                  </p>
                )}
                {booksMenuOpen && (
                  <p
                    className={`font-bold mb-2 ml-5 cursor-pointer font-arial text-red-500`}
                  >
                    Books
                  </p>
                )}
              </div>
              <div>
                {/* Downward arrow when submenu is closed */}
                {!booksMenuOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                    onClick={toggleBooksMenu}
                  >
                    <path
                      fill="black"
                      d="M64 88.77c-.91 0-1.75-.46-2.25-1.23l-28.4-44.2c-.53-.83-.57-1.87-.1-2.72c.47-.85 1.37-1.39 2.34-1.39H92.4c.97 0 1.87.53 2.34 1.39c.47.85.43 1.9-.1 2.72l-28.4 44.2c-.49.77-1.33 1.23-2.24 1.23"
                    />
                  </svg>
                )}
                {/* Upward arrow when submenu is open */}
                {booksMenuOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                    onClick={toggleBooksMenu}
                  >
                    <path
                      fill="#db4437"
                      d="M92.41 88.77H35.59c-.97 0-1.88-.53-2.34-1.39c-.47-.86-.43-1.9.1-2.72l28.4-44.21c.49-.76 1.34-1.22 2.25-1.22c.91 0 1.75.47 2.25 1.22l28.4 44.21c.53.82.57 1.86.1 2.72c-.47.86-1.37 1.39-2.34 1.39"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {!booksMenuOpen && (
            <hr className="w-full border-b border-gray-100 mt-1" />
          )}
          {/* Submenu for "Books" */}
          {booksMenuOpen && (
            <div className="flex flex-col gap-4 items-center justify-center text-white text-lg mx-5 font-arial">
              <div className="bg-[#AEBED3] w-full p-6 flex justify-center items-center">
                Fiction
              </div>
              <div className="bg-[#9EE3C1] w-full p-6 flex justify-center items-center">
                Non-fiction
              </div>
              <div className="bg-[#FDCF4F] w-full p-6 flex justify-center items-center ">
                Bumblebee
              </div>
              <div className="text-black flex flex-col justify-start items-start w-full font-arial gap-5 font-medium py-2 cursor-pointer">
                <p>New releases</p>
                <p>Most popular</p>
                <p>Editors picks</p>
              </div>
              <hr className="w-full border-b border-gray-100 mt-1" />
            </div>
          )}

          <div className="font-bold grid space-y-7 w-full">
            {menuItems.map((item, index) => (
              <MenuItem key={index}>{item}</MenuItem>
            ))}
          </div>
          <Button title={"Submit online"} width={"w-full px-5"} color={"red"} />
        </div>
      )}
    </>
  );
};

export default SmNavbar;
