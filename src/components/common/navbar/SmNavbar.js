"use client";
import React from "react";
import Image from "next/image";
import Hamburger from "./comp/Hamburger";
import Cross from "./comp/Cross";
import Search from "./comp/Search";
import SearchBar from "./comp/SearchBar";
import SearchMenu from "./comp/SearchMenu";
import HamburgerMenu from "./comp/HamburgerMenu";
import useNavbarStore from "@/stores/useNavbarStore";

const SmNavbar = () => {
  const { menuOpen, searchOpen } = useNavbarStore();

  return (
    <>
      {searchOpen ? (
        <>
          <SearchBar />
        </>
      ) : (
        <>
          <div className="py-5 bg-white flex items-center justify-between px-4">
            {!menuOpen && <Hamburger />}
            <div className="w-full flex justify-center items-center">
              <Image
                src="/assests/Icons/logo-usa.png"
                width={100}
                height={75}
                alt="logo"
              />
            </div>
            {menuOpen && <Cross />}
            {!menuOpen && <Search />}
          </div>
        </>
      )}

      {searchOpen && <SearchMenu />}

      {menuOpen && <HamburgerMenu />}
    </>
  );
};

export default SmNavbar;
