const Button = ({ title, width, color }) => {
  return (
    <button
      className={`text-[14px] p-3 font-semibold font-droid-sans shadow border border-black flex items-center justify-center w-max ${color} ${width} my-7`}
    >
      {title}
    </button>
  );
};

export default Button;
