const Button = ({ title, width, color }) => {
  return (
    <button
      className={`text-[14px] p-3 font-semibold font-droid-sans hover:shadow flex items-center justify-center hover:border hover:border-red-300 w-max hover:text-[#C9444F] ${color} ${width} my-7`}
    >
      {title}
    </button>
  );
};

export default Button;
