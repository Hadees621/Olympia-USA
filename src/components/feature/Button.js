const Button = ({ title, width, color }) => {
  return (
    <button
      className={`text-[9px] py-3 px-6 font-bold font-open-sans shadow border border-black flex items-center justify-center ${color} ${width} my-7`}
    >
      {title}
    </button>
  );
};

export default Button;
