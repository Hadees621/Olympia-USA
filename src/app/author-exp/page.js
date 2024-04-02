"use client";

import Experience from "@/components/author/Experience";
import Banner from "@/components/common/Banner";
import LgPagination from "@/components/feature/LgPagination";
import SmPagination from "@/components/genre/SmPagination";
import { useEffect, useState } from "react";

const authorExperiences = Array.from({ length: 5 }, (_, index) => ({
  Title: "AUTHOR NAME",
  text: "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat”.",
  placing: "text-start",
}));

const Authors = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full lg:flex lg:justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <Banner title={"Author Experience"} />

        <div className="grid gap-10 py-10 lg:hidden">
          {authorExperiences.map((experience, index) => (
            <Experience key={index} {...experience} />
          ))}
        </div>

        <div className="px-24">
          <div className="lg:grid grid-cols-2 hidden">
            {authorExperiences.map((experience, index) => (
              <div key={index} className="p-8 xl:p-12 border border-black">
                <div className="flex items-center gap-4">
                  {/* Small Circular Image */}
                  <img
                    src="https://picsum.photos/32" // Using a 32x32 image for the example
                    alt="Circular Image"
                    className="w-20 h-20 rounded-full object-cover" // Adjusted for a small circular image
                  />
                  <h1 className="text-[12px] font-bold text-start">
                    {experience.Title}
                  </h1>
                </div>
                <p className="text-[11px] leading-8 py-3">{experience.text}</p>
              </div>
            ))}
          </div>
          {isSmallScreen ? <SmPagination /> : <LgPagination />}
        </div>
      </div>
    </div>
  );
};

export default Authors;

// import Experience from "@/components/author/Experience";
// import Banner from "@/components/common/Banner";
// import LgPagination from "@/components/feature/LgPagination";
// import SmPagination from "@/components/genre/SmPagination";
// import { useEffect, useState } from "react";

// const authorExperiences = new Array(5).fill({
//   Title: "AUTHOR NAME",
//   text: "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat”.",
//   placing: "text-start",
// });

// const Authors = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsSmallScreen(window.innerWidth <= 767);
//     };
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return (
//     <div className="w-full lg:flex lg:justify-center">
//       <div className="lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
//         <Banner title={"Author Experience"} />

//         <div className="grid gap-10 py-10 lg:hidden">
//           {authorExperiences.map((experience, index) => (
//             <Experience key={index} {...experience} />
//           ))}
//         </div>
//         <div className="px-24">
//           <div className="lg:grid grid-cols-2 hidden">
//             <div className="p-8 xl:p-12 border border-black">
//               <div className="flex items-center gap-4">
//                 {/* Small Circular Image */}
//                 <img
//                   src="https://picsum.photos/32" // Using a 32x32 image for the example
//                   alt="Circular Image"
//                   className="w-20 h-20 rounded-full object-cover" // Adjusted for a small circular image
//                 />
//                 <h1 className="text-[12px] font-bold text-start">
//                   Author Name
//                 </h1>
//               </div>
//               <p className="text-[11px] leading-8 py-3">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                 diam nonummy nibh euismod tincidunt ut laoreet dolore magna
//                 aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
//                 nostrud exerci tation ullamcorper suscipit lobortis nisl ut
//                 aliquip ex ea commodo consequat”
//               </p>
//             </div>
//             <div className="p-8 xl:p-12 border border-black">
//               <div className="flex items-center gap-4">
//                 {/* Small Circular Image */}
//                 <img
//                   src="https://picsum.photos/32" // Using a 32x32 image for the example
//                   alt="Circular Image"
//                   className="w-20 h-20 rounded-full object-cover" // Adjusted for a small circular image
//                 />
//                 <h1 className="text-[12px] font-bold text-start">
//                   Author Name
//                 </h1>
//               </div>
//               <p className="text-[11px] leading-8 py-3">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                 diam nonummy nibh euismod tincidunt ut laoreet dolore magna
//                 aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
//                 nostrud exerci tation ullamcorper suscipit lobortis nisl ut
//                 aliquip ex ea commodo consequat”
//               </p>
//             </div>{" "}
//             <div className="p-8 xl:p-12 border border-black">
//               <div className="flex items-center gap-4">
//                 {/* Small Circular Image */}
//                 <img
//                   src="https://picsum.photos/32" // Using a 32x32 image for the example
//                   alt="Circular Image"
//                   className="w-20 h-20 rounded-full object-cover" // Adjusted for a small circular image
//                 />
//                 <h1 className="text-[12px] font-bold text-start">
//                   Author Name
//                 </h1>
//               </div>
//               <p className="text-[11px] leading-8 py-3">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                 diam nonummy nibh euismod tincidunt ut laoreet dolore magna
//                 aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
//                 nostrud exerci tation ullamcorper suscipit lobortis nisl ut
//                 aliquip ex ea commodo consequat”
//               </p>
//             </div>{" "}
//             <div className="p-8 xl:p-12 border border-black">
//               <div className="flex items-center gap-4">
//                 {/* Small Circular Image */}
//                 <img
//                   src="https://picsum.photos/32" // Using a 32x32 image for the example
//                   alt="Circular Image"
//                   className="w-20 h-20 rounded-full object-cover" // Adjusted for a small circular image
//                 />
//                 <h1 className="text-[12px] font-bold text-start">
//                   Author Name
//                 </h1>
//               </div>
//               <p className="text-[11px] leading-8 py-3">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                 diam nonummy nibh euismod tincidunt ut laoreet dolore magna
//                 aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
//                 nostrud exerci tation ullamcorper suscipit lobortis nisl ut
//                 aliquip ex ea commodo consequat”
//               </p>
//             </div>{" "}
//             <div className="p-8 xl:p-12 border border-black">
//               <div className="flex items-center gap-4">
//                 {/* Small Circular Image */}
//                 <img
//                   src="https://picsum.photos/32" // Using a 32x32 image for the example
//                   alt="Circular Image"
//                   className="w-20 h-20 rounded-full object-cover" // Adjusted for a small circular image
//                 />
//                 <h1 className="text-[12px] font-bold text-start">
//                   Author Name
//                 </h1>
//               </div>
//               <p className="text-[11px] leading-8 py-3">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                 diam nonummy nibh euismod tincidunt ut laoreet dolore magna
//                 aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
//                 nostrud exerci tation ullamcorper suscipit lobortis nisl ut
//                 aliquip ex ea commodo consequat”
//               </p>
//             </div>{" "}
//             <div className="p-8 xl:p-12 border border-black">
//               <div className="flex items-center gap-4">
//                 {/* Small Circular Image */}
//                 <img
//                   src="https://picsum.photos/32" // Using a 32x32 image for the example
//                   alt="Circular Image"
//                   className="w-20 h-20 rounded-full object-cover" // Adjusted for a small circular image
//                 />
//                 <h1 className="text-[12px] font-bold text-start">
//                   Author Name
//                 </h1>
//               </div>
//               <p className="text-[11px] leading-8 py-3">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                 diam nonummy nibh euismod tincidunt ut laoreet dolore magna
//                 aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
//                 nostrud exerci tation ullamcorper suscipit lobortis nisl ut
//                 aliquip ex ea commodo consequat”
//               </p>
//             </div>
//           </div>
//           {isSmallScreen ? <SmPagination /> : <LgPagination />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Authors;
