import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <div
      className="flex items-center gap-5 pb-4 px-3 lg:py-6 md:px-6 lg:px-3 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        id="alt-arrow-left"
      >
        <path
          fill="#111"
          d="M8.16485 11.6296L14.7953 5.1999C15.2091 4.79869 16 5.04189 16 5.5703L16 18.4297C16 18.9581 15.2091 19.2013 14.7953 18.8001L8.16485 12.3704C7.94505 12.1573 7.94505 11.8427 8.16485 11.6296Z"
        ></path>
      </svg>
      <h1 className="font-semibold text-xl ">Back</h1>
    </div>
  );
};

export default BackButton;
