import React, { useEffect } from "react";
import Button from "../../Button";
import MenuItem from "./MenuItem";
import BooksSubMenu from "./BooksSubMenu";
import Downward from "./Downward";
import Upwards from "./Upwards";
import { useSmNavbarStore } from "@/stores/States";
import { navItems } from "@/utils/home/Links";
import Link from "next/link";

const HamburgerMenu = () => {
  const { booksMenuOpen, toggleBooksMenu, toggleMenu } = useSmNavbarStore();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".hamburger-menu")) {
        toggleMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleMenu]);

  const handleLinkClick = () => {
    toggleMenu();
  };

  const handleSubmitOnlineClick = () => {
    toggleMenu();
  };

  return (
    <div className="hamburger-menu p-7 space-y-6">
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
          <div>{booksMenuOpen ? <Upwards /> : <Downward />}</div>
        </div>
      </div>

      {!booksMenuOpen && (
        <hr className="w-full border-b border-gray-100 mt-1" />
      )}

      {booksMenuOpen && <BooksSubMenu />}

      <div className="font-bold grid space-y-7 w-full">
        {navItems.map((item, index) => (
          <a key={index} href={item.url} onClick={handleLinkClick}>
            <MenuItem>{item.label}</MenuItem>
          </a>
        ))}
        <Link href="/submit-online" onClick={handleSubmitOnlineClick}>
          <Button title={"Submit online"} width={"w-full px-5"} color={"red"} />
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
