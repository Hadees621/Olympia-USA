"use client";

import React from "react";
import Image from "next/image";
import Hamburger from "./comp/Hamburger";
import Cross from "./comp/Cross";
import Search from "./comp/Search";
import SearchBar from "./comp/SearchBar";
import SearchMenu from "./comp/SearchMenu";
import HamburgerMenu from "./comp/HamburgerMenu";
import { useSmNavbarStore } from "@/stores/States";
import Link from "next/link";

const SmNavbar = () => {
  const { menuOpen, searchOpen } = useSmNavbarStore();

  return (
    <div className="sticky top-0 z-50">
      {searchOpen ? (
        <>
          <SearchBar />
        </>
      ) : (
        <>
          <div className="py-5 bg-white flex items-center justify-between px-4">
            {!menuOpen && <Hamburger />}
            <div className="w-full flex justify-center items-center">
              <Link href="/">
                <Image
                  src="/assets/Icons/logo-usa.png"
                  width={100}
                  height={75}
                  alt="logo"
                />
              </Link>
            </div>
            {menuOpen && <Cross />}
            {!menuOpen && <Search />}
          </div>
        </>
      )}

      {searchOpen && <SearchMenu />}

      {menuOpen && <HamburgerMenu />}
    </div>
  );
};

export default SmNavbar;

// import React from "react";
// import Image from "next/image";
// import Hamburger from "./comp/Hamburger";
// import Cross from "./comp/Cross";
// import Search from "./comp/Search";
// import SearchBar from "./comp/SearchBar";
// import SearchMenu from "./comp/SearchMenu";
// import HamburgerMenu from "./comp/HamburgerMenu";
// import { useSmNavbarStore } from "@/stores/States";
// import Link from "next/link";

// const SmNavbar = () => {
//   const { menuOpen, searchOpen } = useSmNavbarStore();

//   return (
//     <div className="sticky top-0 z-50 ">
//       {searchOpen ? (
//         <>
//           <SearchBar />
//         </>
//       ) : (
//         <>
//           <div className="py-5 bg-white flex items-center justify-between px-4">
//             {!menuOpen && <Hamburger />}
//             <div className="w-full flex justify-center items-center">
//               <Link href="/">
//                 <Image
//                   src="/assets/Icons/logo-usa.png"
//                   width={100}
//                   height={75}
//                   alt="logo"
//                 />
//               </Link>
//             </div>
//             {menuOpen && <Cross />}
//             {!menuOpen && <Search />}
//           </div>
//         </>
//       )}

//       {searchOpen && <SearchMenu />}

//       {menuOpen && <HamburgerMenu />}
//     </div>
//   );
// };

// export default SmNavbar;
