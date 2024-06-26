import React from "react";

const MenuItem = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <h1 className="font-semibold mb-5 ml-5 cursor-pointer font-arial">
        {children}
      </h1>
      <hr className="w-full border-b border-gray-100 mt-1" />
    </div>
  );
};

export default MenuItem;
