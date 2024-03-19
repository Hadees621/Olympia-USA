const Button = ({ title, width, color }) => {
  const widthClass = width;
  const red = "bg-buttonred text-white";
  const transparent = "border border-black hover:bg-buttonred hover:text-white";

  return (
    <button
      className={`text-[12px] py-[12px] font-semibold font-droid-sans shadow flex items-center justify-center ${
        color === "red" ? red : transparent
      } ${width ? `${widthClass}` : ""}`}
    >
      {title}
    </button>
  );
};

export default Button;
