"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import MenuItem from "./comp/MenuItem";
import { menuItems } from "@/utils/navbar/utils";
import Hamburger from "./comp/Hamburger";
import Cross from "./comp/Cross";
import Search from "./comp/Search";
import Downward from "./comp/Downward";
import Upwards from "./comp/Upwards";
import BooksSubMenu from "./comp/BooksSubMenu";

const SmNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booksMenuOpen, setBooksMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleBooksMenu = () => {
    setBooksMenuOpen(!booksMenuOpen);
  };

  const renderMenuIcon = () => {
    if (menuOpen) {
      return <Cross toggleMenu={toggleMenu} />;
    } else {
      return <Hamburger toggleMenu={toggleMenu} />;
    }
  };

  return (
    <>
      <div className="h-20 bg-white flex items-center justify-between px-4">
        {!menuOpen && <Hamburger toggleMenu={toggleMenu} />}

        <div className="w-full flex justify-center items-center">
          <Image
            src="/assests/Icons/logo-usa.png"
            width={100}
            height={75}
            alt="logo"
          />
        </div>

        {menuOpen && <Cross toggleMenu={toggleMenu} />}
        {!menuOpen && <Search />}
      </div>

      {menuOpen && (
        <div className="p-7 space-y-6">
          <div
            className="flex justify-between items-center"
            onClick={toggleBooksMenu}
            style={{ cursor: "pointer" }}
          >
            <div className="flex justify-between w-full">
              <div>
                <p
                  className={`font-bold mb-2 ml-5 cursor-pointer font-arial ${
                    booksMenuOpen ? "text-red-500" : "text-black"
                  }`}
                >
                  Books
                </p>
              </div>
              <div>
                {booksMenuOpen ? (
                  <Upwards toggleBooksMenu={toggleBooksMenu} />
                ) : (
                  <Downward toggleBooksMenu={toggleBooksMenu} />
                )}
              </div>
            </div>
          </div>
          {!booksMenuOpen && (
            <hr className="w-full border-b border-gray-100 mt-1" />
          )}
          {booksMenuOpen && <BooksSubMenu />}
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
