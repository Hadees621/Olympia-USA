"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { useNavbarStore } from "@/stores/States";
import Downwards from "./navbarComps/Downwards";
import Upwards from "./navbarComps/Upwards";
import BookDropdown from "./navbarComps/BookDropdown";
import SearchBar from "./navbarComps/SearchBar";
import { navItems } from "@/utils/home/Links";
import Link from "next/link";

const Navbar = () => {
  const { booksDropdownOpen, toggleBooksDropdown } = useNavbarStore();

  return (
    <div className="flex justify-center items-center relative z-50">
      <div className="2xl:h-[80px] bg-white lg:max-w-[800px] xl:max-w-[1200px] 2xl:max-w-[1600px] flex justify-between items-center 2xl:py-[60px] relative z-10">
        <div>
          <Link href="/">
            <Image
              src="/assets/Icons/logo-usa.png"
              width={150}
              height={80}
              alt="logo"
            />
          </Link>
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
                <div>{booksDropdownOpen ? <Upwards /> : <Downwards />}</div>{" "}
              </div>
              {booksDropdownOpen && <BookDropdown />}
            </div>
            {navItems.map((item, index) => (
              <a key={index} href={item.url}>
                <p className="cursor-pointer">{item.label}</p>
              </a>
            ))}
          </div>
        </div>
        <Link href="/submit-online">
          <Button
            title="SUBMIT ONLINE"
            width="lg:w-[130px] 2xl:w-[15%]"
            color="red"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
