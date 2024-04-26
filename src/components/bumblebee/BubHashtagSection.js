import React from "react";

const BubHashtagSection = ({ character }) => {
  const renderImages = (count) => {
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(
        <img
          key={i}
          src={`/Home/Asset 12.png`}
          alt="hashtag"
          className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] p-2 border border-black"
        />
      );
    }
    return images;
  };

  return (
    <div
      className="relative w-full h-[650px] xl:h-[650px] 2xl:h-[750px]"
      style={{
        backgroundImage: "url('/assets/Bumblebee/Asset 1-45/Asset 53.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-0 w-full">
        {" "}
        <div className="flex flex-col pt-10 lg:pt-20">
          <p className="text-[26px] font-semibold font-droid-sans py-5 lg:py-10 lg:pl-60 text-center lg:text-start">
            #Booksbumblebee
          </p>

          <div className="overflow-hidden relative">
            <div className="flex justify-center">
              <div className="flex overflow-x-auto">
                {" "}
                <div className="flex flex-col">
                  <div className="w-full flex">{renderImages(12)}</div>
                  <div className="w-full flex">{renderImages(12)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubHashtagSection;

// import React from "react";

// const BubHashtagSection = ({ character }) => {
//   const renderImages = (count) => {
//     const images = [];
//     for (let i = 0; i < count; i++) {
//       images.push(
//         <img
//           key={i}
//           src={`/Home/Asset 12.png`}
//           alt="hashtag"
//           className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] p-2 border border-black"
//         />
//       );
//     }
//     return images;
//   };

//   return (
//     <div
//       className="relative w-full h-[600px] xl:h-[800px] 2xl:h-[900px]"
//       style={{
//         backgroundImage: "url('/assets/Bumblebee/Asset 1-45/Asset 53.png')",
//       }}
//     >
//       <div className="absolute bottom-0">
//         <div className="flex flex-col pt-10 lg:pt-20">
//           <p className="text-[26px] font-semibold font-droid-sans py-5 lg:py-10 lg:pl-60 text-center lg:text-start">
//             #Olympiapublishersusa
//           </p>

//           <div className="overflow-hidden relative">
//             <div className="flex justify-center">
//               <div className="flex overflow-x-hidden">
//                 <div className="flex flex-col">
//                   <div className="w-full flex">{renderImages(12)}</div>
//                   <div className="w-full flex">{renderImages(12)}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BubHashtagSection;

// // import Image from "next/image";
// // import React from "react";

// // const BubHashtagSection = () => {
// //   const renderImages = (count) => {
// //     const images = [];
// //     for (let i = 0; i < count; i++) {
// //       images.push(
// //         <img
// //           key={i}
// //           src={`/Home/Asset 12.png`}
// //           alt="hashtag"
// //           className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] p-2 border border-black"
// //         />
// //       );
// //     }
// //     return images;
// //   };

// //   return (
// //     <div
// //       className="relative bg-cover bg-center w-screen h-[700px] xl:h-[800px] 2xl:h-[900px] pb-[200px]"
// //       style={{
// //         backgroundImage: "url('/assets/Bumblebee/Asset 1-45/Asset 14.1.png')",
// //       }}
// //     >
// //     </div>
// //   );
// // };

// // export default BubHashtagSection;

// // {/* <div className="flex flex-col pt-10 lg:pt-20">
// //   <p className="text-[26px] font-semibold font-droid-sans py-5 lg:py-10 lg:pl-60 text-center lg:text-start">
// //     #Olympiapublishersusa
// //   </p>

// //   <div className="overflow-hidden relative">
// //     <div className="flex justify-center">
// //       <div className="flex overflow-x-hidden">
// //         <div className="flex flex-col">
// //           <div className="w-full flex">{renderImages(8)}</div>
// //           <div className="w-full flex">{renderImages(8)}</div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </div> */}
