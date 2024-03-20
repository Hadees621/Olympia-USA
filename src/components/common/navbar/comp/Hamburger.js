import React from "react";

const Hamburger = ({ toggleMenu }) => {
  return (
    <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M7.95 11.95h32m-32 12h32m-32 12h32"
        />
      </svg>
    </div>
  );
};

export default Hamburger;
