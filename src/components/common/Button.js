const Button = ({ title, width, color }) => {
  const widthClass = width;
  const red = "bg-buttonred text-white";
  const transparent = "border border-black hover:bg-buttonred hover:text-white";
  const yellow = "border border-black hover:border-none bg-[#FCC30B]";

  let colorClass;
  if (color === "red") {
    colorClass = red;
  } else if (color === "yellow") {
    colorClass = yellow;           0
  } else {
    colorClass = transparent;
  }

  return (
    <button
      className={`text-[12px] py-[12px] font-semibold font-open-sans shadow flex items-center justify-center ${
        width ? `${widthClass}` : ""
      } ${colorClass}`}
    >
      {title}
    </button>
  );
};

export default Button;

// const Button = ({ title, width, color, flag }) => {
//   const widthClass = width;
//   const red = "bg-buttonred text-white";
//   const transparent = "border border-black hover:bg-buttonred hover:text-white";

//   return (
//     <button
//       className={`text-[12px] py-[12px] font-semibold font-open-sans shadow flex items-center justify-center ${
//         color === "red" ? red : transparent
//       } ${width ? `${widthClass}` : ""} ${
//         flag && "hover:border-none border border-black hover:bg-[#FCC30B]"
//       }`}
//     >
//       {title}
//     </button>
//   );
// };

// export default Button;

// // const Button = ({ title, width, color, flag }) => {
// //   const widthClass = width;
// //   const red = "bg-buttonred text-white";
// //   const transparent = "border border-black hover:bg-buttonred hover:text-white";

// //   return (
// //     <button
// //       className={`text-[12px] py-[12px] font-semibold font-open-sans shadow flex items-center justify-center ${
// //         color === "red" ? red : transparent
// //       } ${width ? `${widthClass}` : ""}`}
// //     >
// //       {title}
// //     </button>
// //   );
// // };

// // export default Button;
