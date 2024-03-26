"use client";
import React from "react";
import Image from "next/image";
import { fictionBannner } from "@/utils/genre/utils";
import { useSortByStore } from "@/stores/States";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Page({ params }) {
  const {
    showSortOptions,
    showDropdown1,
    showDropdown2,
    showDropdown3,
    setShowSortOptions,
    toggleDropdown1,
    toggleDropdown2,
    toggleDropdown3,
  } = useSortByStore(); // Using Zustand hooks to access state and actions

  const capitalizedSlug = capitalizeFirstLetter(params.slug);

  return (
    <div className="px-4">
      <div className="relative">
        <Image
          src={fictionBannner}
          height={250}
          width={500}
          alt={params.slug}
        />
        <div className="absolute top-14 left-10 flex justify-center items-center">
          <p className="text-white text-4xl font-bold">{capitalizedSlug}</p>
        </div>
      </div>
      {!showSortOptions ? (
        <div className="flex items-center justify-between py-8 font-semibold">
          <h1>Filter by</h1>
          <div
            className="flex items-center gap-2"
            onClick={() => setShowSortOptions()}
          >
            <h1>Sort by</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              style={{ cursor: "pointer" }}
            >
              <path fill="currentColor" d="m7 10l5 5l5-5z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="py-8 font-semibold">
          <div className="flex justify-between items-center w-full border-b py-4">
            <h1>Filter by</h1>
            <div
              onClick={() => setShowSortOptions()}
              style={{ cursor: "pointer" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                style={{ cursor: "pointer" }}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  d="m6 6l12 12m0-12L6 18"
                />
              </svg>
            </div>
          </div>
          <div>
            <div
              className={`flex items-center justify-between ${
                showDropdown1 ? "py-4" : "border-b py-4"
              }`}
              onClick={() => toggleDropdown1()}
            >
              <h1>FICTION</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                style={{ cursor: "pointer" }}
              >
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </div>
            {showDropdown1 && (
              <div className="font-normal space-y-2 py-4 px-1">
                <p>Activity book</p>
                <p>Adult fiction</p>
                <p>Adventure</p>
                <p>Adventure & fantasy</p>
                <p>Animals</p>
                <p>Colouring books</p>
                <p>Crime</p>
                <p>General fiction</p>
                <p>Historical</p>
                <p>Horror</p>
                <p>Humour</p>
                <p>Middle grade fiction</p>
                <p>Mystery</p>
                <p>Poetry</p>
                <p>Romance</p>
                <p>Science-fiction</p>
                <p>Short stories</p>
                <p>Thriller</p>
                <p>War</p>
                <p>Young adult fiction</p>
              </div>
            )}
            <div
              className={`flex items-center justify-between ${
                showDropdown2 ? "py-4" : "border-b py-4"
              }`}
              onClick={() => toggleDropdown2()}
            >
              <h1>NON-FICTION</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                style={{ cursor: "pointer" }}
              >
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </div>
            {showDropdown2 && (
              <div>
                <h1>Option 1</h1>
                <h1>Option 2</h1>
                <h1>Option 3</h1>
              </div>
            )}
            <div
              className={`flex items-center justify-between ${
                showDropdown3 ? "py-4" : "border-b py-4"
              }`}
              onClick={() => toggleDropdown3()}
            >
              <h1>BUMBLEBEE BOOKS</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                style={{ cursor: "pointer" }}
              >
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </div>
            {showDropdown3 && (
              <div>
                <h1>Option 1</h1>
                <h1>Option 2</h1>
                <h1>Option 3</h1>
              </div>
            )}
            <div className="cursor-pointer space-y-3 mt-4">
              <h1>NEW RELEASES</h1>
              <h1>MOST POPULAR</h1>
              <h1>EDITOR PICKS</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import Image from "next/image";
// import { fictionBannner } from "@/utils/genre/utils";

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// export default function Page({ params }) {
//   const [showSortOptions, setShowSortOptions] = useState(false);
//   const [showDropdown1, setShowDropdown1] = useState(false);
//   const [showDropdown2, setShowDropdown2] = useState(false);
//   const [showDropdown3, setShowDropdown3] = useState(false);

//   const capitalizedSlug = capitalizeFirstLetter(params.slug);

//   return (
//     <div className="px-4">
//       <div className="relative">
//         <Image
//           src={fictionBannner}
//           height={250}
//           width={500}
//           alt={params.slug}
//         />
//         <div className="absolute top-14 left-10 flex justify-center items-center">
//           <p className="text-white text-4xl font-bold">{capitalizedSlug}</p>
//         </div>
//       </div>
//       {!showSortOptions ? (
//         <div className="flex items-center justify-between py-8 font-semibold">
//           <h1>Filter by</h1>
//           <div
//             className="flex items-center gap-2"
//             onClick={() => setShowSortOptions(true)}
//           >
//             <h1>Sort by</h1>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="2em"
//               height="2em"
//               viewBox="0 0 24 24"
//               style={{ cursor: "pointer" }}
//             >
//               <path fill="currentColor" d="m7 10l5 5l5-5z" />
//             </svg>
//           </div>
//         </div>
//       ) : (
//         <div className="py-8 font-semibold">
//           <div className="flex justify-between items-center w-full border-b py-4">
//             <h1>Filter by</h1>
//             <div
//               onClick={() => setShowSortOptions(false)}
//               style={{ cursor: "pointer" }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="2em"
//                 height="2em"
//                 viewBox="0 0 24 24"
//                 style={{ cursor: "pointer" }}
//               >
//                 <path
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   d="m6 6l12 12m0-12L6 18"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex items-center justify-between ${
//                 showDropdown1 ? "py-4" : "border-b py-4"
//               }`}
//               onClick={() => setShowDropdown1(!showDropdown1)}
//             >
//               <h1>FICTION</h1>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="2em"
//                 height="2em"
//                 viewBox="0 0 24 24"
//                 style={{ cursor: "pointer" }}
//               >
//                 <path fill="currentColor" d="m7 10l5 5l5-5z" />
//               </svg>
//             </div>
//             {showDropdown1 && (
// <div className="font-normal space-y-2 py-4 px-1">
//   <p>Activity book</p>
//   <p>Adult fiction</p>
//   <p>Adventure</p>
//   <p>Adventure & fantasy</p>
//   <p>Animals</p>
//   <p>Colouring books</p>
//   <p>Crime</p>
//   <p>General fiction</p>
//   <p>Historical</p>
//   <p>Horror</p>
//   <p>Humour</p>
//   <p>Middle grade fiction</p>
//   <p>Mystery</p>
//   <p>Poetry</p>
//   <p>Romance</p>
//   <p>Science-fiction</p>
//   <p>Short stories</p>
//   <p>Thriller</p>
//   <p>War</p>
//   <p>Young adult fiction</p>
// </div>
//             )}
//             <div
//               className={`flex items-center justify-between ${
//                 showDropdown2 ? "py-4" : "border-b py-4"
//               }`}
//               onClick={() => setShowDropdown2(!showDropdown2)}
//             >
//               <h1>NON-FICTION</h1>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="2em"
//                 height="2em"
//                 viewBox="0 0 24 24"
//                 style={{ cursor: "pointer" }}
//               >
//                 <path fill="currentColor" d="m7 10l5 5l5-5z" />
//               </svg>
//             </div>
//             {showDropdown2 && (
//               <div>
//                 <h1>Option 1</h1>
//                 <h1>Option 2</h1>
//                 <h1>Option 3</h1>
//               </div>
//             )}
//             <div
//               className={`flex items-center justify-between ${
//                 showDropdown3 ? "py-4" : "border-b py-4"
//               }`}
//               onClick={() => setShowDropdown3(!showDropdown3)}
//             >
//               <h1>BUMBLEBEE BOOKS</h1>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="2em"
//                 height="2em"
//                 viewBox="0 0 24 24"
//                 style={{ cursor: "pointer" }}
//               >
//                 <path fill="currentColor" d="m7 10l5 5l5-5z" />
//               </svg>
//             </div>
//             {showDropdown3 && (
//               <div>
//                 <h1>Option 1</h1>
//                 <h1>Option 2</h1>
//                 <h1>Option 3</h1>
//               </div>
//             )}
//             <div className="cursor-pointer space-y-3 mt-4">
//               <h1>NEW RELEASES</h1>
//               <h1>MOST POPULAR</h1>
//               <h1>EDITOR PICKS</h1>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
