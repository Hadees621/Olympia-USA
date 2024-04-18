import React from "react";

const AddressComponent = ({ data }) => {
  return (
    <div className="gap-10 my-20 hidden lg:flex">
      <div className="w-[35%] h-full">
        <img
          src="/assets/contact/Asset 1.png"
          alt={data.country}
          className="xl:h-[370px] 2xl:h-[470px]"
        />
      </div>

      <div className="w-[65%] flex justify-between">
        <div className="space-y-4 xl:space-y-8 2xl:space-y-12">
          <img src={data.imgSrc} alt={data.country} className="h-12 2xl:h-24" />
          <h1 className="font-bold text-[18px] xl:text-[24px] 2xl:text-[28px] underline font-open-sans">
            {data.country}
          </h1>
          <div className="space-y-6">
            <h1 className="font-bold text-[10px] xl:text-[14px] 2xl:text-[18px] uppercase">
              Find us
            </h1>
            <div>
              {data.addressLines.map((line, index) => (
                <p
                  key={index}
                  className="leading-6 xl:leading-8 font-open-sans text-[10px] xl:text-[12px] 2xl:text-[16px]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 xl:mt-40 2xl:mt-60 space-y-6">
          <h1 className="font-bold text-[10px] xl:text-[14px] 2xl:text-[18px] uppercase">
            Email us
          </h1>
          <div className="text-[10px] xl:text-[12px] 2xl:text-[16px] space-y-6">
            {data.emailSections.slice(0, 3).map((section, index) => (
              <div key={index}>
                <p>{section.label}</p>
                <p>{section.email}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-44 xl:mt-56 2xl:mt-72">
          <div className="text-[10px] xl:text-[12px] 2xl:text-[16px] space-y-6">
            {data.emailSections.slice(3).map((section, index) => (
              <div key={index}>
                <p>{section.label}</p>
                <p>{section.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComponent;

// import React from "react";

// const AddressComponent = ({ data }) => {
//   return (
//     <div className="gap-10 my-20 hidden lg:flex">
//       <div className="w-[35%] h-full">
//         <img
//           src="/assets/contact/Asset 1.png"
//           alt={data.country}
//           className="xl:h-[370px] 2xl:h-[470px]"
//         />
//       </div>

//       <div className="w-[65%] flex justify-between">
//         <div className="space-y-4 xl:space-y-8 2xl:space-y-12">
//           <img src={data.imgSrc} alt={data.country} className="h-12 2xl:h-24" />
//           <h1 className="font-bold text-[18px] xl:text-[24px] 2xl:text-[28px] underline font-open-sans">
//             {data.country}
//           </h1>
//           <div className="space-y-6">
//             <h1 className="font-bold text-[10px] xl:text-[14px] 2xl:text-[18px] uppercase">
//               Find us
//             </h1>
//             <div>
//               {data.addressLines.map((line, index) => (
//                 <p
//                   key={index}
//                   className="leading-6 xl:leading-8 font-open-sans text-[10px] xl:text-[12px] 2xl:text-[16px]"
//                 >
//                   {line}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-32 xl:mt-40 2xl:mt-60 space-y-6">
//           {data.emailSections.map((section, index) => (
//             <div
//               key={index}
//               className="text-[10px] xl:text-[12px] 2xl:text-[16px] space-y-6"
//             >
//               <p>{section.label}</p>
//               <p>{section.email}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressComponent;

// // import React from "react";

// // const USA = () => {
// //   return (
// //     <div className="gap-10 my-20 hidden lg:flex">
// //       <div className="w-[35%] h-full">
// //         <img
// //           src="/assets/contact/Asset 1.png"
// //           alt="USA"
// //           className="xl:h-[370px] 2xl:h-[470px]"
// //         />
// //       </div>

// //       <div className="w-[65%] flex justify-between">
// //         <div className="space-y-4 xl:space-y-8 2xl:space-y-12">
// //           <img
// //             src="/assets/Icons/USA.png"
// //             alt="USA"
// //             className="h-12 2xl:h-24"
// //           />
// //           <h1 className="font-bold text-[18px] xl:text-[24px] 2xl:text-[28px] underline font-open-sans">
// //             USA
// //           </h1>
// //           <div className="space-y-6">
// //             <h1 className="font-bold text-[10px] xl:text-[14px] 2xl:text-[18px] uppercase">
// //               Find us
// //             </h1>
// //             <div>
// //               {"Olympia Publishers USA, Oppenheimer Tower, 10880 Wilshire Blvd.  , Suite 1101, Los Angeles, California, 90024, USA"
// //                 .split(", ")
// //                 .map((line, index) => (
// //                   <p
// //                     key={index}
// //                     className="leading-6 xl:leading-8 font-open-sans text-[10px] xl:text-[12px] 2xl:text-[16px]"
// //                   >
// //                     {line}
// //                   </p>
// //                 ))}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mt-32 xl:mt-40 2xl:mt-60 space-y-6">
// //           <h1 className="font-bold text-[10px] xl:text-[14px] 2xl:text-[18px] uppercase">
// //             email us
// //           </h1>
// //           <div className="text-[10px] xl:text-[12px] 2xl:text-[16px] space-y-6">
// //             <div>
// //               <p> — GENERAL ENQUIRIES</p>
// //               <p> info@olympiapublishersusa.com</p>
// //             </div>
// //             <div>
// //               <p> — SUBMISSIONS</p>
// //               <p> submissions@olympiapublishers.com </p>
// //             </div>
// //             <div>
// //               <p> — GENERAL ENQUIRIES</p>
// //               <p> books@olympiapublishers.com</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mt-44 xl:mt-56 2xl:mt-72">
// //           <div className="text-[10px] xl:text-[12px] 2xl:text-[16px] space-y-6">
// //             <div>
// //               <p> — PRESS INFORMATION</p>
// //               <p> publicity@olympiapublishers.com</p>
// //             </div>
// //             <div>
// //               <p> — PR & MEDIA</p>
// //               <p> pr@olympiapublishers.com </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default USA;
