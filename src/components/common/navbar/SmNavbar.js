"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import MenuItem from "./comp/MenuItem";
import { menuItems } from "@/utils/navbar/utils";

const SmNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <div className="font-bold grid space-y-7 w-full">
            {menuItems.map((item, index) => (
              <MenuItem key={index}>{item}</MenuItem>
            ))}
          </div>
          <Button title={"Submit online"} width={"w-full"} color={"red"} />
        </div>
      )}
    </>
  );
};

export default SmNavbar;
