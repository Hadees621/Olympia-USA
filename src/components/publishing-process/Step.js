import React from "react";

function Step({ step, index }) {
  const isOddStep = index % 2 !== 0;

  return (
    <div
      className={`font-open-sans ${isOddStep ? "m-8" : "p-8"} sm:${
        isOddStep ? "m-32" : "p-32"
      } ${isOddStep ? "bg-white" : "bg-[#F9F7F6]"}`}
    >
      <div className="flex justify-between">
        <img
          src={step.imageUrl}
          alt="Step Image"
          className="w-full p-10 sm:mx-48 sm:mb-8"
        />
      </div>
      <h2 className="font-bold text-[12px]">{step.mainTitle}</h2>
      <p className="text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[13px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
        {step.description}
      </p>
      <br />
      {step.description2 && (
        <div>
          <p className="text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[13px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
            {step.description2}
          </p>
          <br />
        </div>
      )}
      {step.description3 && (
        <div>
          <p className="text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[13px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
            {step.description3}
          </p>
          <br />
        </div>
      )}
      <h4 className="text-[12px] leading-8 text-[#6C686B]">Top tip</h4>
      <p className="text-[12px] leading-8 mt-1 text-[#6C686B]">
        {step.tipContent}
      </p>
    </div>
  );
}

export default Step;

// import React from "react";

// function Step({ step }) {
//   return (
//     <div className="font-open-sans m-8 sm:m-32">
//       <div className="flex justify-between">
//         <img
//           src={step.imageUrl}
//           alt="Step Image"
//           className="w-full p-10 sm:mx-48 sm:mb-8"
//         />
//       </div>
//       <h2 className="font-bold text-[12px]">{step.mainTitle}</h2>
//       <p className="text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[13px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
//         {step.description}
//       </p>
//       <br />
//       {step.description2 && (
//         <div>
//           <p className="text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[13px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
//             {step.description2}
//           </p>
//           <br />
//         </div>
//       )}
//       {step.description3 && (
//         <div>
//           <p className="text-[12px] leading-8 mt-2 xl:space-y-4 sm:text-[10px] xl:text-[13px] 2xl:text-[17px] xl:leading-7 2xl:leading-9">
//             {step.description3}
//           </p>
//           <br />
//         </div>
//       )}
//       <h4 className="text-[12px] leading-8 text-[#6C686B]">Top tip</h4>
//       <p className="text-[12px] leading-8 mt-1 text-[#6C686B]">
//         {step.tipContent}
//       </p>
//     </div>
//   );
// }

// export default Step;
