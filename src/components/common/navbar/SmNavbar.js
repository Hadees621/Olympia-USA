"use client";
import React, { useState } from "react";
import Image from "next/image";
import Hamburger from "./comp/Hamburger";
import Cross from "./comp/Cross";
import Search from "./comp/Search";
import SearchBar from "./comp/SearchBar";
import SearchMenu from "./comp/SearchMenu";
import HamburgerMenu from "./comp/HamburgerMenu";

const SmNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booksMenuOpen, setBooksMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleBooksMenu = () => {
    setBooksMenuOpen(!booksMenuOpen);
  };

  const toggleSearchMenu = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      {searchOpen ? (
        <>
          <SearchBar />
        </>
      ) : (
        <>
          <div className="py-5 bg-white flex items-center justify-between px-4">
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
            {!menuOpen && (
              <Search
                SearchOpen={searchOpen}
                toggleSearchMenu={toggleSearchMenu}
              />
            )}
          </div>
        </>
      )}

      {searchOpen && <SearchMenu />}

      {menuOpen && (
        <HamburgerMenu
          toggleBooksMenu={toggleBooksMenu}
          booksMenuOpen={booksMenuOpen}
        />
      )}
    </>
  );
};

export default SmNavbar;
