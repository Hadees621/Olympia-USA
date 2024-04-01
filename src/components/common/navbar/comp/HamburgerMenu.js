import React from "react";
import Button from "../../Button";
import MenuItem from "./MenuItem";
import BooksSubMenu from "./BooksSubMenu";
import Downward from "./Downward";
import Upwards from "./Upwards";
import { menuItems } from "@/utils/navbar/utils";
import { useSmNavbarStore } from "@/stores/States";
import { navItems } from "@/utils/home/Links";

const HamburgerMenu = () => {
  const { booksMenuOpen, toggleBooksMenu } = useSmNavbarStore();
  return (
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
          <div>{booksMenuOpen ? <Upwards /> : <Downward />}</div>
        </div>
      </div>

      {!booksMenuOpen && (
        <hr className="w-full border-b border-gray-100 mt-1" />
      )}

      {booksMenuOpen && <BooksSubMenu />}

      <div className="font-bold grid space-y-7 w-full">
        {navItems.map((item, index) => (
          <a key={index} href={item.url}>
            <MenuItem>{item.label}</MenuItem>
          </a>
        ))}
        <Button title={"Submit online"} width={"w-full px-5"} color={"red"} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
