import React from "react";

const Cross = ({ toggleMenu }) => {
  return (
    <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          d="m6 6l12 12m0-12L6 18"
        />
      </svg>
    </div>
  );
};

export default Cross;
