const Button = ({ title, width, color }) => {
  return (
    <button
      className={`text-[10px] py-3 px-7 font-semibold font-open-sans shadow border border-black flex items-center justify-center ${color} ${width} my-7`}
    >
      {title}
    </button>
  );
};

export default Button;
